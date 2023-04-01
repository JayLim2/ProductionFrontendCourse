// <Адрес страницы, позиция скролла>
export type ScrollSchema = Record<string, number>

export interface ScrollPositionSchema {
  scroll: ScrollSchema
}

export interface ScrollPositionAction {
  path: string
  position: number
}
