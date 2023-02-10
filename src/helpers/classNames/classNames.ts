
type Modifiers = Record<string, boolean | string>;

export function classNames(rootClass: string,
                           modifiers: Modifiers,
                           additional: string[]): string {



    return [
        rootClass,
        ...additional,
        ...Object.entries(modifiers)
            .filter(([_, value]) => Boolean(value))
            .map(([className, _]) => className)
    ].join(" ");
}