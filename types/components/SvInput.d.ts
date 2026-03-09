import type { DefineComponent } from 'vue';

export interface SvInputProps {
  /** v-model — current input value */
  modelValue?: string | number;
  labelPlaceholder?: string;
  label?: string;
  block?: boolean;
  iconAfter?: boolean;
  visiblePassword?: boolean;
  loading?: boolean;
  color?: string | null;
  state?: string | null;
  progress?: number;
  border?: boolean;
  shadow?: boolean;
  transparent?: boolean;
  textWhite?: boolean;
  square?: boolean;
}

declare const SvInput: DefineComponent<SvInputProps>;
export { SvInput };
export default SvInput;
