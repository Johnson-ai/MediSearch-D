// A YYYY-MM value is a calendar month, not a timestamp; avoid timezone shifts.
export function validMonth(value) { return typeof value === 'string' && /^(19\d\d|20\d\d|21\d\d)-(0[1-9]|1[0-2])$/.test(value); }
export function monthName(value) {
  if (!validMonth(value)) return 'Date not specified';
  const [year, month] = value.split('-').map(Number);
  return `${new Intl.DateTimeFormat('en', { month: 'long', timeZone: 'UTC' }).format(new Date(Date.UTC(2000, month - 1, 1)))} ${year}`;
}
export function orderedUpdates(entries = []) {
  return [...entries].filter(e => e.title?.trim() && validMonth(e.month))
    .sort((a,b) => b.month.localeCompare(a.month) || a.title.localeCompare(b.title));
}
export function groupUpdates(entries = []) {
  return Object.entries(orderedUpdates(entries).reduce((months, entry) => {
    (months[entry.month] ??= []).push(entry); return months;
  }, {}));
}
