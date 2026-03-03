import type { App } from 'vue';
import { SvAlert } from './components/SvAlert';

// ── Plugin ──────────────────────────────────────────────────────

export interface SaxVueColors {
  primary: string;
  success: string;
  danger: string;
  warn: string;
  dark: string;
  [key: string]: string;
}

export interface SaxVueOptions {
  colors?: SaxVueColors;
}

declare const SaxVue: {
  install: (app: App, options?: SaxVueOptions) => void;
};

export default SaxVue;

// ── $sv global functions ────────────────────────────────────────

export interface SvFunctions {
  /** Set a named color CSS custom-property on `<body>` */
  setColor(color: string, val: string): void;

  /** Show a full-screen loading overlay. Returns a handle with `.close()` */
  loading(options?: Record<string, unknown>): { close: () => void };

  /** Show a notification toast. Returns a handle with `.close()` */
  notification(options?: Record<string, unknown>): { close: () => void };

  /** Toggle between light / dark theme */
  toggleTheme(): void;

  /** Explicitly set the theme to 'light' or 'dark' */
  setTheme(theme: 'light' | 'dark'): void;

  /** Table helper – get current page rows */
  getPage<T>(data: T[], page: number, maxItems?: number): T[];

  /** Table helper – get filtered length */
  getLength(data: unknown[], maxItems?: number): number;

  /** Table helper – toggle check-all */
  checkAll(selected: unknown[], data: unknown[]): unknown[];

  /** Table helper – filter rows by search term */
  getSearch<T>(data: T[], search: string): T[];

  /** Table helper – sort data by a column */
  sortData(event: Event, data: unknown[], sortKey: string, type: string): unknown[];
}

// ── Component exports ───────────────────────────────────────────

export const svButton: typeof import('../src/components/svButton/Base/SvButton').default;
export const svButtonGroup: typeof import('../src/components/svButton/Group/SvButtonGroup').default;
export const svAlert: typeof import('../src/components/svAlert/Base/svAlert').default;
export const svInput: typeof import('../src/components/svInput/Base/svInput').default;
export const svCheckbox: typeof import('../src/components/svCheckbox/Base/svCheckbox').default;
export const svSwitch: typeof import('../src/components/svSwitch/Base/svSwitch').default;
export const svSelect: typeof import('../src/components/svSelect/Base/svSelect').default;
export const svOption: typeof import('../src/components/svSelect/Option/svSelectOption').default;
export const svOptionGroup: typeof import('../src/components/svSelect/OptionGroup/svOptionGroup').default;
export const svAvatar: typeof import('../src/components/svAvatar/Base/svAvatar').default;
export const svAvatarGroup: typeof import('../src/components/svAvatar/Group/svAvatarGroup').default;
export const svRadio: typeof import('../src/components/svRadio/Base/svRadio').default;
export const svTooltip: typeof import('../src/components/svTooltip/Base/svTooltip').default;
export const svDialog: typeof import('../src/components/svDialog/Base/svDialog').default;
export const svPagination: typeof import('../src/components/svPagination/Base/svPagination').default;
export const svTable: typeof import('../src/components/svTable/Base/svTable').default;
export const svTableTr: typeof import('../src/components/svTable/Tr/svTableTr').default;
export const svTableTh: typeof import('../src/components/svTable/Th/svTableTh').default;
export const svTableTd: typeof import('../src/components/svTable/Td/svTableTd').default;
export const svNavbar: typeof import('../src/components/svNavbar/Base/svNavbar').default;
export const svNavbarItem: typeof import('../src/components/svNavbar/Item/svNavbarItem').default;
export const svNavbarGroup: typeof import('../src/components/svNavbar/Group/svNavbarGroup').default;
export const svSidebar: typeof import('../src/components/svSidebar/Base/svSidebar').default;
export const svSidebarItem: typeof import('../src/components/svSidebar/Item/svSidebarItem').default;
export const svSidebarGroup: typeof import('../src/components/svSidebar/Group/svSidebarGroup').default;
export const svCard: typeof import('../src/components/svCard/Base/svCard').default;
export const svCardGroup: typeof import('../src/components/svCard/Group/svCardGroup').default;
export const svRow: typeof import('../src/layout/grid/SvRow').default;
export const svCol: typeof import('../src/layout/grid/SvCol').default;

/** Alert Component */
export class Alert extends SvAlert {}

// ── Vue augmentations ───────────────────────────────────────────

declare module 'vue' {
  interface ComponentCustomProperties {
    $sv: SvFunctions;
  }
}

declare module '*.svg' {
  const content: string;
  export default content;
}
