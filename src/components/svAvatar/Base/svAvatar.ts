import { defineComponent, h, ref, onMounted, computed, getCurrentInstance } from 'vue';
import { setColor } from '../../../util/index';
import { svColorProps, useSvComponent } from '../../../mixins/component';

export default defineComponent({
  name: 'SvAvatar',
  props: {
    ...svColorProps,
    badgePosition: { default: null },
    pointer: { type: Boolean, default: false },
    circle: { type: Boolean, default: false },
    square: { type: Boolean, default: false },
    history: { type: Boolean, default: false },
    loading: { type: Boolean, default: false },
    historyGradient: { type: Boolean, default: false },
    writing: { type: Boolean, default: false },
    badge: { type: Boolean, default: false },
    badgeColor: { type: String, default: '' },
    size: { type: [String, Number], default: '' },
  },
  setup(props, { slots, attrs }) {
    const root = ref<HTMLElement | null>(null);
    const textRef = ref<HTMLElement | null>(null);
    const index = ref<number | null>(null);
    const { getColor } = useSvComponent(props);

    const getParent = () => {
      const inst = getCurrentInstance();
      const parent =
        inst &&
        ((inst.proxy as unknown as Record<string, unknown>).$parent as
          | (Record<string, unknown> & { avatars?: unknown[] })
          | undefined);
      return parent && parent.svAvatarGroup ? parent : null;
    };

    const getText = computed(() => {
      const slotFn = slots.text;
      if (!slotFn) return [];
      const vnodes = slotFn();
      const node = vnodes && vnodes[0];
      let raw = '';
      if (!node) return [];
      if (typeof node.children === 'string') raw = node.children;
      else if (typeof (node as unknown as Record<string, unknown>).text === 'string')
        raw = (node as unknown as Record<string, unknown>).text as string;
      else if (Array.isArray(node.children))
        raw = node.children
          .map((c: unknown) =>
            typeof c === 'string' ? c : ((c as Record<string, unknown>).text as string) || '',
          )
          .join('');
      raw = raw.trim();
      let getLetters: string[] = [raw];
      if (raw.length > 5) {
        getLetters = raw.split(/\s/g).map((item: string) => item[0]);
      }
      return getLetters;
    });

    const computedTextLength = computed(() => {
      const letters = getText.value;
      if (letters.length === 0) return 0;
      if (letters.length > 1) return letters.length;
      return letters[0] ? letters[0].length : 0;
    });

    const isHidden = computed(() => {
      const parent = getParent();
      return parent && parent.max && index.value != null && index.value > Number(parent.max) - 1;
    });

    const isLatest = computed(() => {
      const parent = getParent();
      return parent && index.value == Number(parent.max) - 1;
    });

    const applyBadgeColor = () => {
      if (root.value) {
        setColor('badge', props.badgeColor, root.value);
        root.value.classList.add('vs-change-color-badge');
      }
    };

    onMounted(() => {
      applyBadgeColor();
      const parent = getParent();
      if (parent) {
        index.value = parent.avatars.length;
        parent.avatars.push(getCurrentInstance()?.proxy);
      }
    });

    return () => {
      const writingNode = h('div', { class: 'sv-avatar__points' }, [
        h('div', { class: 'sv-avatar__points__point' }),
        h('div', { class: 'sv-avatar__points__point' }),
        h('div', { class: 'sv-avatar__points__point' }),
      ]);

      const badgeNode = h(
        'div',
        {
          class: [
            'sv-avatar__badge',
            { isSlot: !!slots.badge, writing: props.writing },
            props.badgePosition,
          ],
        },
        [props.writing ? writingNode : slots.badge ? slots.badge() : null],
      );

      const avatar = h(
        'div',
        {
          class: {
            'sv-avatar': true,
            [`sv-avatar--letter--${computedTextLength.value}`]: computedTextLength.value > 2,
          },
        },
        [slots.text ? getText.value : null, slots.default ? slots.default() : null],
      );

      const loadingNode = h('div', { class: 'sv-avatar__loading' }, [
        h('div', { class: 'sv-avatar__loading__animate' }),
      ]);

      const parent = getParent();
      const latest =
        parent && index.value != null && parent.avatars.length - index.value - 1 !== 0
          ? h('div', { class: 'sv-avatar__latest' }, `+${parent.avatars.length - index.value - 1}`)
          : null;

      const icons = h('div', { class: 'sv-avatar__icons' }, [slots.icons ? slots.icons() : null]);

      const classes = [
        props.history ? 'history' : '',
        props.historyGradient ? 'history--gradient' : '',
        props.circle ? 'sv-avatar-content--circle' : '',
        props.square ? 'sv-avatar-content--square' : '',
        isHidden.value ? 'sv-avatar-content--hidden' : '',
        isLatest.value ? 'sv-avatar-content--latest' : '',
        slots.icons ? 'sv-avatar-content--hasIcons' : '',
        props.size ? 'sv-avatar-content--size' : '',
        props.primary ? 'sv-component--primary' : '',
        props.danger ? 'sv-component--danger' : '',
        props.warn ? 'sv-component--warn' : '',
        props.success ? 'sv-component--success' : '',
        props.dark ? 'sv-component--dark' : '',
        props.color ? 'sv-component--is-color' : '',
      ]
        .filter(Boolean)
        .join(' ');

      return h(
        'div',
        {
          ref: root,
          class: ['sv-avatar-content', classes],
          style: {
            width: `${props.size}px`,
            height: `${props.size}px`,
            cursor: props.pointer ? 'pointer' : undefined,
            ['--sv-color']: props.color ? getColor : '',
          },
          ...attrs,
        },
        [
          props.loading && loadingNode,
          avatar,
          slots.badge ? badgeNode : props.badge ? badgeNode : null,
          isLatest.value && latest,
          slots.icons ? icons : null,
        ],
      );
    };
  },
});
