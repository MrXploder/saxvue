import type { DefineComponent } from 'vue';

export interface SvNavbarProps {
  fixed?: boolean;
  shadow?: boolean;
  shadowScroll?: boolean;
  hideScroll?: boolean;
  textWhite?: boolean;
  square?: boolean;
  paddingScroll?: boolean;
  notLine?: boolean;
  leftCollapsed?: boolean;
  centerCollapsed?: boolean;
  rightCollapsed?: boolean;
  targetScroll?: string | null;
  // color props
  color?: string | null;
  primary?: boolean;
  danger?: boolean;
  success?: boolean;
  warn?: boolean;
  dark?: boolean;
  active?: boolean;
}

export interface SvNavbarItemProps {
  active?: boolean;
  to?: string;
  id?: string;
  href?: string;
  target?: string;
}

declare const SvNavbar: DefineComponent<SvNavbarProps>;
declare const SvNavbarItem: DefineComponent<SvNavbarItemProps>;
/** Container for grouping navbar items with a dropdown */
declare const SvNavbarGroup: DefineComponent<Record<string, never>>;

export { SvNavbar, SvNavbarItem, SvNavbarGroup };
export default SvNavbar;
