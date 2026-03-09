import type { DefineComponent } from 'vue';

export interface SvAlertProps {
  /** v-model — controls visibility */
  modelValue?: boolean;
  solid?: boolean;
  border?: boolean;
  shadow?: boolean;
  gradient?: boolean;
  flat?: boolean;
  relief?: boolean;
  hiddenContent?: boolean | null;
  closable?: boolean;
  progress?: number | string;
  page?: number | string;
  // color props
  color?: string | null;
  primary?: boolean;
  danger?: boolean;
  success?: boolean;
  warn?: boolean;
  dark?: boolean;
  active?: boolean;
}

declare const SvAlert: DefineComponent<SvAlertProps>;
export { SvAlert };
export default SvAlert;
