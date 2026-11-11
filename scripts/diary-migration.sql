-- Run ONCE in the existing Supabase project's SQL Editor. Safe to rerun.
-- Diary records are separate from public portfolio_content and public Study APIs.
create table if not exists public.private_diary_entries (
 id uuid primary key default gen_random_uuid(),
 owner text not null default 'owner' check (owner = 'owner'),
 entry_date date not null,
 title text not null check (char_length(title) between 1 and 160),
 body text not null default '' check (char_length(body) <= 24000),
 mood text not null default '' check (char_length(mood) <= 32),
 image_paths text[] not null default '{}'::text[],
 created_at timestamptz not null default now(),
 updated_at timestamptz not null default now()
);
alter table public.private_diary_entries enable row level security;
grant all on public.private_diary_entries to service_role;
revoke all on public.private_diary_entries from public, anon, authenticated;
create index if not exists private_diary_owner_date_idx on public.private_diary_entries (owner,entry_date desc,created_at desc);
-- PRIVATE bucket: never make this public and never add anonymous SELECT policies.
insert into storage.buckets (id,name,public,file_size_limit,allowed_mime_types)
values ('private-diary','private-diary',false,2500000,array['image/jpeg','image/png','image/webp'])
on conflict (id) do update set public=false, file_size_limit=excluded.file_size_limit, allowed_mime_types=excluded.allowed_mime_types;
