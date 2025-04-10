export function formatBytes(bytes: number, decimalPoint?: number): string {
  if (bytes < 0) return 'Invalid size';
  if (bytes == 0) return '0 Bytes';
  const k = 1000,
    dm = decimalPoint ?? 2,
    sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'],
    i = Math.floor(Math.log(bytes) / Math.log(k));
  return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + ' ' + sizes[i];
}
