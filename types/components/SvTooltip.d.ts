import type { DefineComponent } from 'vue';

export interface SvTooltipProps {
  /** v-model — controls tooltip visibility (controlled mode) */
  modelValue?: boolean;
  loading?: boolean;
  bottom?: boolean;
  left?: boolean;
  right?: boolean;
  notHover?: boolean;
  shadow?: boolean;
  interactivity?: boolean;
  notArrow?: boolean;
  square?: boolean;
  circle?: boolean;
  border?: boolean;
  borderThick?: boolean;
  delay?: string | number | null;
  // color props
  color?: string | null;
  primary?: boolean;
  danger?: boolean;
  success?: boolean;
  warn?: boolean;
  dark?: boolean;
  active?: boolean;
}

declare const SvTooltip: DefineComponent<SvTooltipProps>;
export { SvTooltip };
export default SvTooltip;
