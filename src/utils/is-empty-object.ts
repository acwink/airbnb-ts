export function isEmptyO(obj: Record<PropertyKey, string>): boolean {
  return !!Object.keys(obj).length;
}
