import type { App, DefineComponent } from 'vue';

// ── Plugin ──────────────────────────────────────────────────────

export interface SaxVueColors {
  primary?: string;
  success?: string;
  danger?: string;
  warn?: string;
  dark?: string;
  [key: string]: string | undefined;
}

export interface SaxVueOptions {
  colors?: SaxVueColors;
}

declare const SaxVue: {
  install: (app: App, options?: SaxVueOptions) => void;
};

export default SaxVue;

// ── $sv global functions ────────────────────────────────────────

export interface SaxVueFunctions {
  /** Set a named color CSS custom-property on `<body>` */
  setColor(color: string, val: string): void;

  /** Show a full-screen loading overlay. Returns a handle with `.close()` */
  loading(options?: Record<string, unknown>): { close: () => void };

  /** Show a notification toast. Returns a handle with `.close()` */
  notification(options?: Record<string, unknown>): { close: () => void };

  /** Toggle between light / dark theme. Returns the new active theme. */
  toggleTheme(): 'light' | 'dark';

  /** Explicitly set the theme. Returns the applied theme. */
  setTheme(theme: 'light' | 'dark'): 'light' | 'dark';

  /** Table helper – get current page rows */
  getPage<T>(data: T[], page: number, maxItems?: number): T[];

  /** Table helper – get total page count */
  getLength(data: unknown[], maxItems?: number): number;

  /** Table helper – toggle check-all */
  checkAll(selected: unknown[], data: unknown[]): unknown[];

  /** Table helper – filter rows by search term */
  getSearch<T>(data: T[], search: string): T[];

  /** Table helper – sort data by a column */
  sortData(event: Event, data: unknown[], sortKey: string, type: string): unknown[];
}

// ── Component prop types ────────────────────────────────────────

export type { SvButtonProps } from './components/SvButton';
export type { SvAlertProps } from './components/SvAlert';
export type { SvInputProps } from './components/SvInput';
export type { SvCheckboxProps } from './components/SvCheckbox';
export type { SvSwitchProps } from './components/SvSwitch';
export type { SvRadioProps } from './components/SvRadio';
export type { SvSelectProps, SvOptionProps, SvOptionGroupProps } from './components/SvSelect';
export type { SvDialogProps } from './components/SvDialog';
export type { SvTooltipProps } from './components/SvTooltip';
export type { SvPaginationProps } from './components/SvPagination';
export type {
  SvTableProps,
  SvTableTrProps,
  SvTableThProps,
  SvTableTdProps,
} from './components/SvTable';
export type { SvNavbarProps, SvNavbarItemProps } from './components/SvNavbar';
export type {
  SvSidebarProps,
  SvSidebarItemProps,
  SvSidebarGroupProps,
} from './components/SvSidebar';
export type { SvAvatarProps, SvAvatarGroupProps } from './components/SvAvatar';
export type { SvCardProps } from './components/SvCard';

// ── Component exports ───────────────────────────────────────────

export declare const SvButton: DefineComponent;
export declare const SvButtonGroup: DefineComponent;
export declare const SvAlert: DefineComponent;
export declare const SvInput: DefineComponent;
export declare const SvCheckbox: DefineComponent;
export declare const SvSwitch: DefineComponent;
export declare const SvSelect: DefineComponent;
export declare const SvOption: DefineComponent;
export declare const SvOptionGroup: DefineComponent;
export declare const SvAvatar: DefineComponent;
export declare const SvAvatarGroup: DefineComponent;
export declare const SvRadio: DefineComponent;
export declare const SvTooltip: DefineComponent;
export declare const SvDialog: DefineComponent;
export declare const SvPagination: DefineComponent;
export declare const SvTable: DefineComponent;
export declare const SvTableTr: DefineComponent;
export declare const SvTableTh: DefineComponent;
export declare const SvTableTd: DefineComponent;
export declare const SvNavbar: DefineComponent;
export declare const SvNavbarItem: DefineComponent;
export declare const SvNavbarGroup: DefineComponent;
export declare const SvSidebar: DefineComponent;
export declare const SvSidebarItem: DefineComponent;
export declare const SvSidebarGroup: DefineComponent;
export declare const SvCard: DefineComponent;
export declare const SvCardGroup: DefineComponent;
export declare const SvRow: DefineComponent;
export declare const SvCol: DefineComponent;

// ── Vue augmentations ───────────────────────────────────────────

declare module 'vue' {
  interface ComponentCustomProperties {
    $sv: SaxVueFunctions;
  }
}

declare module '*.svg' {
  const content: string;
  export default content;
}
