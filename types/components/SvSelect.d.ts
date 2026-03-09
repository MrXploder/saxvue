import type { DefineComponent } from 'vue';

export interface SvSelectProps {
  /** v-model — selected value (string/number for single, array for multiple) */
  modelValue?: string | number | string[] | number[] | null;
  multiple?: boolean;
  filter?: boolean;
  placeholder?: string;
  labelPlaceholder?: string;
  label?: string;
  disabled?: boolean;
  collapseChips?: boolean;
  loading?: boolean;
  state?: string | null;
  block?: boolean;
  // color props
  color?: string | null;
  primary?: boolean;
  danger?: boolean;
  success?: boolean;
  warn?: boolean;
  dark?: boolean;
  active?: boolean;
}

export interface SvOptionProps {
  modelValue?: string | number | null;
  disabled?: boolean;
  label?: string | null;
}

export interface SvOptionGroupProps {
  label?: string;
}

declare const SvSelect: DefineComponent<SvSelectProps>;
declare const SvOption: DefineComponent<SvOptionProps>;
declare const SvOptionGroup: DefineComponent<SvOptionGroupProps>;

export { SvSelect, SvOption, SvOptionGroup };
export default SvSelect;
