import type { DefineComponent } from 'vue';

export interface SvAvatarProps {
  badgePosition?: string | null;
  pointer?: boolean;
  circle?: boolean;
  square?: boolean;
  history?: boolean;
  loading?: boolean;
  historyGradient?: boolean;
  writing?: boolean;
  badge?: boolean;
  badgeColor?: string;
  size?: string | number;
  // color props
  color?: string | null;
  primary?: boolean;
  danger?: boolean;
  success?: boolean;
  warn?: boolean;
  dark?: boolean;
  active?: boolean;
}

export interface SvAvatarGroupProps {
  max?: number | null;
  float?: boolean;
}

declare const SvAvatar: DefineComponent<SvAvatarProps>;
declare const SvAvatarGroup: DefineComponent<SvAvatarGroupProps>;

export { SvAvatar, SvAvatarGroup };
export default SvAvatar;
