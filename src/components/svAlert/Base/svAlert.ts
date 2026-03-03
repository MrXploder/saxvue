import { defineComponent, h, ref, onMounted, watch, nextTick, computed } from 'vue';
import SvIconsClose from '../../../icons/close';
import SvIconsPlus from '../../../icons/plus';
import { getColor } from '../../../util/index';
import { svColorProps } from '../../../mixins/component';

export default defineComponent({
  name: 'SvAlert',
  props: {
    ...svColorProps,
    solid: { type: Boolean, default: false },
    border: { type: Boolean, default: false },
    shadow: { type: Boolean, default: false },
    gradient: { type: Boolean, default: false },
    flat: { type: Boolean, default: false },
    relief: { type: Boolean, default: false },
    value: { default: true },
    hiddenContent: { type: Boolean, default: null },
    closable: { type: Boolean, default: false },
    progress: { type: [Number, String], default: 0 },
    page: { type: [Number, String], default: 0 },
  },
  setup(props, { slots, emit }) {
    const root = ref<HTMLElement | null>(null);
    const content = ref<HTMLElement | null>(null);
    const text = ref<HTMLElement | null>(null);
    const iconRef = ref<HTMLElement | null>(null);

    const localGetColor = getColor(props.color);

    const getTotalPages = computed(
      () => Object.keys(slots).filter((k) => k.indexOf('page') !== -1).length,
    );

    const getPages = computed(() => {
      const keys = Object.keys(slots).filter((k) => k.indexOf('page') !== -1);
      const values: ReturnType<(typeof slots)[string]>[] = [];
      keys.forEach((key) => {
        const parts = key.split('-');
        const idx = parts[1];
        if (String(props.page) == String(idx)) {
          const fn = slots[key];
          if (typeof fn === 'function') values.push(fn());
        }
      });
      return values;
    });

    const beforeEnter = (el: Element) => {
      (el as HTMLElement).style.height = '0px';
    };
    const enter = (el: Element, done: () => void) => {
      const scrollH = (el as HTMLElement).scrollHeight;
      (el as HTMLElement).style.height = scrollH - 1 + 'px';
      done && done();
    };
    const leave = (el: Element, done: () => void) => {
      (el as HTMLElement).style.minHeight = '0px';
      (el as HTMLElement).style.height = '0px';
      done && done();
    };

    const handleClickClose = () => emit('input', !props.value);
    const handleClickHidden = () => emit('update:hiddenContent', !props.hiddenContent);
    const handleClickPrevPage = () => {
      if (Number(props.page) > 1) emit('update:page', Number(props.page) - 1);
    };
    const handleClickNextPage = () => {
      if (Number(props.page) < getTotalPages.value) emit('update:page', Number(props.page) + 1);
    };

    watch(
      () => props.page,
      () => {
        if (content.value) content.value.style.minHeight = `${content.value.scrollHeight}px`;
        nextTick(() => {
          if (root.value) root.value.style.height = `${root.value.scrollHeight - 1}px`;
        });
      },
    );

    watch(
      () => props.hiddenContent,
      (val) => {
        if (!props.value) return;
        if (!root.value || !content.value) return;
        if (!val) {
          root.value.style.height = 'auto';
          setTimeout(() => {
            if (root.value) root.value.style.height = `${root.value.scrollHeight - 1}px`;
          }, 250);
        } else {
          root.value.style.height = `${root.value.scrollHeight - content.value.scrollHeight}px`;
        }
      },
    );

    onMounted(() => {
      if (root.value && content.value) {
        root.value.style.height = `${root.value.scrollHeight - 1}px`;
        content.value.style.minHeight = `${content.value.scrollHeight}px`;
      }
    });

    return () => {
      const icon = slots.icon
        ? h('div', { class: 'sv-alert__icon', ref: iconRef }, slots.icon())
        : null;

      const contentText = h('div', { class: 'sv-alert__content__text', ref: text }, [
        slots.default ? slots.default() : null,
        ...(getPages.value || []),
      ]);

      const contentNode = h(
        'transition',
        { onBeforeEnter: beforeEnter, onEnter: enter, onLeave: leave },
        [
          !props.hiddenContent &&
            h('div', { class: 'sv-alert__content', ref: content }, [contentText]),
        ],
      );

      const title = h(
        'div',
        {
          class: {
            'sv-alert__title': true,
            'sv-alert__title--clickHidden': typeof props.hiddenContent === 'boolean',
          },
          onClick: handleClickHidden,
        },
        [
          slots.title ? slots.title() : null,
          !props.closable && typeof props.hiddenContent === 'boolean'
            ? h(SvIconsPlus, {
                less: !props.hiddenContent,
                onClick: handleClickHidden,
              } as Record<string, unknown>)
            : null,
        ],
      );

      const closeBtn = h('button', { class: 'sv-alert__close', onClick: handleClickClose }, [
        h(SvIconsClose, { hover: 'less' } as Record<string, unknown>),
      ]);

      const pagination = h('div', { class: 'sv-alert__pagination' }, [
        h('button', { onClick: handleClickPrevPage }, '<'),
        h('span', `${props.page} / ${getTotalPages.value}`),
        h('button', { onClick: handleClickNextPage }, '>'),
      ]);

      const footer = h('div', { class: 'sv-alert__footer' }, [
        slots.footer ? slots.footer() : null,
      ]);

      const progress = h('div', { class: 'sv-alert__progress' }, [
        h('div', {
          class: 'sv-alert__progress__bar',
          style: { width: `${props.progress}%` },
        }),
      ]);

      const classes = [
        props.solid ? 'sv-alert--solid' : '',
        props.border ? 'sv-alert--border' : '',
        props.shadow ? 'sv-alert--shadow' : '',
        props.gradient ? 'sv-alert--gradient' : '',
        props.flat ? 'sv-alert--flat' : '',
        props.relief ? 'sv-alert--relief' : '',
        getPages.value.length > 0 ? 'sv-alert--pages' : '',
        !props.danger && !props.success && !props.warn && !props.dark && !props.color
          ? 'sv-component--primary'
          : '',
        props.danger ? 'sv-component--danger' : '',
        props.warn ? 'sv-component--warn' : '',
        props.success ? 'sv-component--success' : '',
        props.dark ? 'sv-component--dark' : '',
      ]
        .filter(Boolean)
        .join(' ');

      const rootNode = h(
        'div',
        {
          ref: root,
          class: classes,
          style: { ['--sv-color']: props.color ? localGetColor : '' },
        },
        [
          icon,
          slots.title && title,
          contentNode,
          props.closable && closeBtn,
          slots.footer && footer,
          !!props.progress && progress,
          getTotalPages.value > 0 && pagination,
        ],
      );

      return h('transition', { onBeforeEnter: beforeEnter, onEnter: enter, onLeave: leave }, [
        props.value && rootNode,
      ]);
    };
  },
});
