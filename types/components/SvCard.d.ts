import type { DefineComponent } from 'vue';

export interface SvCardProps {
  /** Card layout type variant (1–4) */
  type?: string | number;
}

declare const SvCard: DefineComponent<SvCardProps>;
/** Horizontal scrollable card container with prev/next arrows */
declare const SvCardGroup: DefineComponent<Record<string, never>>;

export { SvCard, SvCardGroup };
export default SvCard;
