import type { DefineComponent } from 'vue';

export interface SvPaginationProps {
  /** v-model — current page number */
  modelValue?: number;
  length?: number;
  max?: number;
  dottedNumber?: number;
  infinite?: boolean;
  progress?: boolean;
  notMargin?: boolean;
  buttonsDotted?: boolean;
  notArrows?: boolean;
  onlyArrows?: boolean;
  circle?: boolean;
  square?: boolean;
  disabled?: boolean;
  disabledItems?: number[];
  loadingItems?: number[];
  // color props
  color?: string | null;
  primary?: boolean;
  danger?: boolean;
  success?: boolean;
  warn?: boolean;
  dark?: boolean;
  active?: boolean;
}

declare const SvPagination: DefineComponent<SvPaginationProps>;
export { SvPagination };
export default SvPagination;
