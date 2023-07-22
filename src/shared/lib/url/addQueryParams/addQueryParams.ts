export function getQueryParams(params: OptionalRecord<string, string>): string {
  const searchParams = new URLSearchParams(window.location.search);
  Object.entries(params).forEach(([name, value]) => {
    if (value !== undefined) {
      searchParams.set(name, value);
    }
  });
  return `?${searchParams.toString()}`;
}

/**
 * Adds query parameters into URL.
 *
 * ATTENTION. It has  no effect without manual handling.
 *
 * @param params
 */
export function addQueryParams(params: OptionalRecord<string, string>): void {
  window.history.pushState(null, '', getQueryParams(params));
}
