import type React from 'react';

export interface SidebarItemType {
  path: string
  text: string
  icon: React.FunctionComponent<React.SVGAttributes<SVGElement>>
  isProtected?: boolean
}
