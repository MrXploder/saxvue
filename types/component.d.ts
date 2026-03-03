/** ElementUI component common definition (Vue 3 migration-friendly)
 *
 * This provides a minimal base class so existing `.d.ts` files that extend
 * `SaxVueUIComponent` continue to type-check during incremental migration.
 */
export declare class SaxVueUIComponent {
  /** Install component into Vue */
  static install(vue: any): void;
}
