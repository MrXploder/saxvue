import type { DefineComponent } from 'vue';

export interface SvTableProps {
  /** v-model — selected row value(s); pass an array for multi-select */
  modelValue?: unknown | unknown[];
  striped?: boolean;
  loading?: boolean;
}

export interface SvTableTrProps {
  data?: unknown;
  isSelected?: boolean;
  notClickSelected?: boolean;
  openExpandOnlyTd?: boolean;
}

export interface SvTableThProps {
  sort?: boolean;
}

export interface SvTableTdProps {
  checkbox?: boolean;
  edit?: boolean;
}

declare const SvTable: DefineComponent<SvTableProps>;
declare const SvTableTr: DefineComponent<SvTableTrProps>;
declare const SvTableTh: DefineComponent<SvTableThProps>;
declare const SvTableTd: DefineComponent<SvTableTdProps>;

export { SvTable, SvTableTr, SvTableTh, SvTableTd };
export default SvTable;
