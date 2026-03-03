import { defineComponent, h, type PropType } from 'vue';
import type { Property } from 'csstype';
import ripple, { rippleCut, rippleReverse } from '../../../util/ripple/index';
import { getColor } from '../../../util/index';
import { svColorProps } from '../../../mixins/component';

export default defineComponent({
  name: 'SvButton',
  props: {
    ...svColorProps,
    ripple: { type: String as PropType<'' | 'reverse' | 'cut'>, default: '' },
    activeDisabled: { type: Boolean, default: false },
    flat: { type: Boolean, default: false },
    border: { type: Boolean, default: false },
    gradient: { type: Boolean, default: false },
    relief: { type: Boolean, default: false },
    transparent: { type: Boolean, default: false },
    shadow: { type: Boolean, default: false },
    floating: { type: Boolean, default: false },
    icon: { type: Boolean, default: false },
    circle: { type: Boolean, default: false },
    square: { type: Boolean, default: false },
    size: { type: String as PropType<string | null>, default: null },
    loading: { type: Boolean, default: false },
    upload: { type: Boolean, default: false },
    block: { type: Boolean, default: false },
    animationType: { type: String as PropType<string>, default: '' },
    animateInactive: { type: Boolean, default: false },
    to: { type: String as PropType<string | null>, default: null },
    href: { type: String as PropType<string | null>, default: null },
    blank: { type: Boolean, default: false },
  },
  emits: ['click'],
  setup(props, { slots, attrs, emit }) {
    const onMousedown = (evt: MouseEvent) => {
      if (props.ripple === 'reverse') {
        rippleReverse(evt);
      } else if (props.ripple === 'cut') {
        rippleCut(evt);
      } else {
        if (props.flat) {
          ripple(
            evt,
            (props.color || 'primary') &&
              !props.active &&
              document.activeElement !== (evt.currentTarget as HTMLElement)
              ? 'inherit'
              : null,
            props.flat &&
              !props.active &&
              document.activeElement !== (evt.currentTarget as HTMLElement),
          );
        } else {
          ripple(evt, null, false);
        }
      }
    };

    const onClick = (evt: MouseEvent) => {
      if (props.to) {
        // router push if available on attrs
        const attrsRec = attrs as Record<string, unknown>;
        const router = (attrsRec.router || attrsRec.$router) as
          | { push: (to: string) => void }
          | undefined;
        if (router && typeof router.push === 'function') {
          router.push(props.to);
        }
      } else if (props.href) {
        window.open(props.href, props.blank ? '_blank' : '_self');
      }
      emit('click', evt);
    };

    return () => {
      const defaultSlot = slots.default ? slots.default() : null;
      const animateSlot = slots.animate ? slots.animate() : null;
      const loadingElement = h('div', { class: 'sv-button__loading' });

      const style: Record<string, string> = {
        ['--sv-color']: props.color ? getColor(props.color) : '',
      };

      const classes: (string | Record<string, boolean>)[] = [
        `sv-button--${(attrs as Record<string, unknown>).componentColor || ''}`,
        `sv-button--size-${props.size}`,
        { 'sv-button--fff': props.color === '#fff' },
        { 'sv-button--active': !!props.active },
        { 'sv-button--active-disabled': !!props.activeDisabled },
        { 'sv-button--icon': !!props.icon },
        { 'sv-button--circle': !!props.circle },
        { 'sv-button--square': !!props.square },
        { 'sv-button--loading': !!props.loading },
        { 'sv-button--upload': !!props.upload },
        { 'sv-button--block': !!props.block },
        { 'sv-button--animate': !!animateSlot },
        {
          [`sv-button--animate-${props.animationType}`]: !!props.animationType,
        },
        { 'sv-button--animate-inactive': !!props.animateInactive },
        {
          'sv-button--primary':
            !props.danger && !props.success && !props.warn && !props.dark && !props.color,
        },
        { 'sv-button--danger': !!props.danger },
        { 'sv-button--warn': !!props.warn },
        { 'sv-button--success': !!props.success },
        { 'sv-button--dark': !!props.dark },
        {
          'sv-button--default':
            !props.flat &&
            !props.border &&
            !props.gradient &&
            !props.relief &&
            !props.transparent &&
            !props.shadow &&
            !props.floating,
        },
        { 'sv-button--flat': !!props.flat },
        { 'sv-button--border': !!props.border },
        { 'sv-button--gradient': !!props.gradient },
        { 'sv-button--relief': !!props.relief },
        { 'sv-button--transparent': !!props.transparent },
        { 'sv-button--shadow': !!props.shadow },
        { 'sv-button--floating': !!props.floating },
      ];

      const children = [
        h('div', { class: 'sv-button__content' }, defaultSlot),
        animateSlot
          ? h(
              'div',
              {
                class: ['sv-button__animate', `sv-button__animate--${props.animationType}`],
              },
              animateSlot,
            )
          : null,
        props.loading ? loadingElement : null,
      ];

      // merge attrs so external listeners/props are preserved
      const vnodeProps: Record<string, unknown> = Object.assign({}, attrs, {
        class: ['sv-button', classes],
        style,
        onMousedown,
        onClick,
      });

      return h('button', vnodeProps, children);
    };
  },
});
