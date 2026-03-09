import type { DefineComponent } from 'vue';

export interface SvButtonProps {
  /** Ripple effect style */
  ripple?: '' | 'reverse' | 'cut';
  activeDisabled?: boolean;
  flat?: boolean;
  border?: boolean;
  gradient?: boolean;
  relief?: boolean;
  transparent?: boolean;
  shadow?: boolean;
  floating?: boolean;
  icon?: boolean;
  circle?: boolean;
  square?: boolean;
  size?: string | null;
  loading?: boolean;
  upload?: boolean;
  block?: boolean;
  animationType?: string;
  animateInactive?: boolean;
  /** Vue Router destination */
  to?: string | null;
  href?: string | null;
  blank?: boolean;
  // color props
  color?: string | null;
  primary?: boolean;
  danger?: boolean;
  success?: boolean;
  warn?: boolean;
  dark?: boolean;
  active?: boolean;
}

declare const SvButton: DefineComponent<SvButtonProps>;
export { SvButton };
export default SvButton;
