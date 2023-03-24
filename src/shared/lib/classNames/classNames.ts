export type Modifiers = Record<string, boolean | string | undefined>

export function classNames (
  rootClass: string,
  modifiers: Modifiers = {},
  additional: Array<string | undefined> = []
): string {
  return [
    rootClass,
    ...additional.filter(Boolean),
    ...Object.entries(modifiers)
      .filter(([_, value]) => Boolean(value))
      .map(([className, _]) => className)
  ].join(' ')
}
