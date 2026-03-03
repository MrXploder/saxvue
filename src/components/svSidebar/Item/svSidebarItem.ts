import { defineComponent, h, getCurrentInstance } from 'vue';
import SvIconsArrow from '../../../icons/arrow';

export default defineComponent({
  name: 'SvSidebarItem',
  props: {
    to: { type: String, default: undefined },
    href: { type: String, default: undefined },
    target: { type: String, default: '_blank' },
    value: { type: String, default: undefined },
    id: { type: String, default: undefined },
    arrow: { type: Boolean, default: false },
  },
  setup(props, { slots }) {
    const instance = getCurrentInstance();
    const parent =
      instance && instance.proxy
        ? ((instance.proxy as unknown as Record<string, unknown>).$parent as Record<
            string,
            unknown
          > | null)
        : null;
    const router =
      instance && instance.proxy
        ? ((instance.proxy as unknown as Record<string, unknown>).$router as
            | { push: (to: string) => void }
            | undefined)
        : null;

    // watch parent.reduce (best-effort)
    // If parent.reduce changes and is reactive, parent.reduce will be observed by Vue,
    // but we avoid setting up complex reactivity here; keep a noop to match previous behavior.

    const handleClick = () => {
      if (props.to && router) {
        router.push(props.to);
      } else if (props.href) {
        window.open(props.href, props.target);
      }
    };

    const handleClickItem = (id: string) => {
      if (parent && typeof parent.handleClickItem === 'function')
        (parent.handleClickItem as (id: string) => void)(id);
    };

    return () => {
      const icon = h('div', { class: 'sv-sidebar__item__icon' }, [
        slots.icon ? slots.icon() : null,
      ]);

      const textTooltip = h('div', { class: 'sv-sidebar__item__text-tooltip' }, [
        slots.default ? slots.default() : null,
      ]);

      const text = h('div', { class: 'sv-sidebar__item__text' }, [
        slots.default ? slots.default() : null,
      ]);

      const iconArrow = h(SvIconsArrow);

      const arrow = h('div', { class: 'sv-sidebar__item__arrow' }, [
        slots.arrow ? slots.arrow() : iconArrow,
      ]);

      return h(
        'button',
        {
          class: [
            'sv-sidebar__item',
            {
              active: parent && parent.getValue && props.id == parent.getValue,
              hasIcon: !!slots.icon,
            },
          ],
          onClick: () => {
            if (props.id && parent && typeof parent.handleClickItem === 'function') {
              (parent.handleClickItem as (id: string) => void)(props.id);
            }
            handleClick();
          },
        },
        [
          slots.icon ? icon : null,
          text,
          textTooltip,
          slots.arrow ? slots.arrow() : props.arrow ? arrow : null,
        ],
      );
    };
  },
});
