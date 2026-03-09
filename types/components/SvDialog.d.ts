import type { DefineComponent } from 'vue';

export type SvDialogAnimation =
  | 'scale'
  | 'fade'
  | 'slide-up'
  | 'slide-down'
  | 'slide-left'
  | 'slide-right'
  | 'zoom'
  | 'door'
  | 'flip';

export interface SvDialogProps {
  /** v-model — controls dialog visibility */
  modelValue?: boolean;
  loading?: boolean;
  fullScreen?: boolean;
  notClose?: boolean;
  preventClose?: boolean;
  notPadding?: boolean;
  overflowHidden?: boolean;
  blur?: boolean;
  square?: boolean;
  autoWidth?: boolean;
  scroll?: boolean;
  notCenter?: boolean;
  width?: string | null;
  routerClose?: boolean;
  /**
   * Opening / closing animation style.
   * @default 'scale'
   */
  animation?: SvDialogAnimation;
  // color props
  color?: string | null;
  primary?: boolean;
  danger?: boolean;
  success?: boolean;
  warn?: boolean;
  dark?: boolean;
  active?: boolean;
}

declare const SvDialog: DefineComponent<SvDialogProps>;
export { SvDialog };
export default SvDialog;
