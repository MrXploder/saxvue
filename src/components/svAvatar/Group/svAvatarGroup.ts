import { defineComponent, h } from 'vue';

export default defineComponent({
  name: 'SvAvatarGroup',
  props: {
    max: { default: null },
    float: { type: Boolean, default: false },
  },
  setup(props, { slots }) {
    // avatars array and svAvatarGroup marker are internal implementation details from the
    // previous class-based component. If required later, we can reintroduce reactive state.
    return () =>
      h(
        'div',
        {
          class: ['sv-avatar__group', { float: props.float }],
        },
        [slots.default ? slots.default() : null],
      );
  },
});
