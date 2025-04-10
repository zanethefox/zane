export function formatDate(dateString: string) {
  const parts = dateString.split('-');
  const hasDay = parts.length > 2;

  return new Date(`${dateString}`).toLocaleDateString('en-GB', {
    day: hasDay ? 'numeric' : undefined,
    month: 'long',
    year: 'numeric',
    timeZone: 'UTC'
  });
}
