import type { DefineComponent } from 'vue';

export interface SvSwitchProps {
  /** v-model — bound value (boolean, string, or array) */
  modelValue?: boolean | string | unknown[];
  val?: unknown;
  notValue?: unknown;
  loading?: boolean;
  square?: boolean;
  indeterminate?: boolean;
  icon?: boolean;
  // color props
  color?: string | null;
  primary?: boolean;
  danger?: boolean;
  success?: boolean;
  warn?: boolean;
  dark?: boolean;
  active?: boolean;
}

declare const SvSwitch: DefineComponent<SvSwitchProps>;
export { SvSwitch };
export default SvSwitch;
