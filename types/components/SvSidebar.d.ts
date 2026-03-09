import type { DefineComponent } from 'vue';

export interface SvSidebarProps {
  /** v-model — active item identifier */
  modelValue?: string | number | null;
  reduce?: boolean;
  hoverExpand?: boolean;
  open?: boolean;
  notLineActive?: boolean;
  square?: boolean;
  textWhite?: boolean;
  notShadow?: boolean;
  relative?: boolean;
  absolute?: boolean;
  right?: boolean;
  background?: string;
  // color props
  color?: string | null;
  primary?: boolean;
  danger?: boolean;
  success?: boolean;
  warn?: boolean;
  dark?: boolean;
  active?: boolean;
}

export interface SvSidebarItemProps {
  to?: string;
  href?: string;
  target?: string;
  /** Identifier emitted to the parent sidebar's v-model */
  value?: string;
  id?: string;
  arrow?: boolean;
}

export interface SvSidebarGroupProps {
  open?: boolean;
}

declare const SvSidebar: DefineComponent<SvSidebarProps>;
declare const SvSidebarItem: DefineComponent<SvSidebarItemProps>;
declare const SvSidebarGroup: DefineComponent<SvSidebarGroupProps>;

export { SvSidebar, SvSidebarItem, SvSidebarGroup };
export default SvSidebar;
