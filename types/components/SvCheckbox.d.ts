import type { DefineComponent } from 'vue';

export interface SvCheckboxProps {
  /** v-model — bound value (boolean, string, or array) */
  modelValue?: boolean | string | unknown[];
  val?: unknown;
  notValue?: unknown;
  indeterminate?: boolean;
  lineThrough?: boolean;
  checked?: boolean;
  checkedForce?: boolean;
  loading?: boolean;
  labelBefore?: boolean;
  // color props
  color?: string | null;
  primary?: boolean;
  danger?: boolean;
  success?: boolean;
  warn?: boolean;
  dark?: boolean;
  active?: boolean;
}

declare const SvCheckbox: DefineComponent<SvCheckboxProps>;
export { SvCheckbox };
export default SvCheckbox;
