export function isEmptyO(obj: Record<PropertyKey, any> | null): boolean {
  if (obj === null) return false;
  return !!Object.keys(obj).length;
}
