export function sanitizeEditorialText(value: string) {
  return value
    .replace(/\s*[\u2013\u2014]\s*/g, ' - ')
    .replace(/(\s)--(\s)/g, '$1-$2');
}
