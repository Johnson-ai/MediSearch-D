-- Run in the Supabase SQL editor. Keep the service_role key server-side ONLY.
create table if not exists public.portfolio_content (
  key text primary key,
  content jsonb not null,
  updated_at timestamptz not null default now()
);
alter table public.portfolio_content enable row level security;
revoke all on public.portfolio_content from anon, authenticated;

create table if not exists public.request_limits (
  key text primary key,
  count integer not null,
  reset_at timestamptz not null
);
alter table public.request_limits enable row level security;
revoke all on public.request_limits from anon, authenticated;

create or replace function public.consume_rate_limit(p_key text, p_limit int, p_window_seconds int)
returns boolean
language plpgsql security definer set search_path = ''
as $$
declare used integer;
begin
  if length(p_key) <> 64 or p_limit < 1 or p_limit > 100 or p_window_seconds < 10 or p_window_seconds > 86400 then
    return false;
  end if;
  insert into public.request_limits as rl (key, count, reset_at)
  values (p_key, 1, now() + make_interval(secs => p_window_seconds))
  on conflict (key) do update set
    count = case when rl.reset_at < now() then 1 else rl.count + 1 end,
    reset_at = case when rl.reset_at < now() then now() + make_interval(secs => p_window_seconds) else rl.reset_at end
  returning count into used;
  return used <= p_limit;
end;
$$;
revoke all on function public.consume_rate_limit(text,int,int) from public, anon, authenticated;
grant execute on function public.consume_rate_limit(text,int,int) to service_role;

-- Create a PUBLIC bucket named portfolio-assets using Storage dashboard.
-- Keep bucket access policies read-only for the public and uploads server-side only.

-- Private study progress for the authenticated owner (not exposed to public visitors).
create table if not exists public.study_progress (
  owner text primary key,
  history jsonb not null default '[]'::jsonb,
  updated_at timestamptz not null default now()
);
alter table public.study_progress enable row level security;
revoke all on public.study_progress from anon, authenticated;

create table if not exists public.study_attempts (
  id uuid primary key default gen_random_uuid(),
  owner text not null,
  type text not null,
  topic text not null,
  correct integer not null,
  total integer not null,
  created_at timestamptz not null default now()
);
alter table public.study_attempts enable row level security;
revoke all on public.study_attempts from anon, authenticated;
create index if not exists study_attempts_owner_date on public.study_attempts(owner,created_at desc);
