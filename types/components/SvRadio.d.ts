import type { DefineComponent } from 'vue';

export interface SvRadioProps {
  /** v-model — currently selected value */
  modelValue?: unknown;
  /** Value this radio represents */
  val?: unknown;
  name?: string | null;
  disabled?: boolean;
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

declare const SvRadio: DefineComponent<SvRadioProps>;
export { SvRadio };
export default SvRadio;
