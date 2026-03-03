import { getColor } from '../util/index';
import { getCurrentInstance, reactive, computed, type ComponentInternalInstance } from 'vue';

/** Shape of the shared color props after Vue resolves them. */
export interface SvColorPropValues {
  color: string | null;
  danger: boolean;
  success: boolean;
  warn: boolean;
  dark: boolean;
  primary: boolean;
  active: boolean;
}

/**
 * Shared color prop definitions. Spread into any component's `props` object:
 *
 *   props: { ...svColorProps, myOtherProp: { ... } }
 */
export const svColorProps = {
  color: { type: String, default: null },
  danger: { type: Boolean, default: false },
  success: { type: Boolean, default: false },
  warn: { type: Boolean, default: false },
  dark: { type: Boolean, default: false },
  primary: { type: Boolean, default: false },
  active: { type: Boolean, default: false },
} as const;

/**
 * Composition API composable for color-aware components.
 * Call inside `setup()` after props are available.
 *
 * Returns: { componentColor, getColor, isColorDark, isColor }
 * Also patches `getColor` onto the instance proxy for backward compat.
 */
export function useSvComponent(props: SvColorPropValues) {
  const state = reactive({
    componentColor: null as string | null,
    getColor: null as string | undefined,
  });

  state.getColor = getColor(props && props.color ? props.color : null);

  const isColorDark = computed(
    () => props && (props.color === 'dark' || props.dark || state.componentColor === 'dark'),
  );
  const isColor = computed(
    () =>
      props &&
      (!!props.color ||
        !!props.primary ||
        !!props.success ||
        !!props.warn ||
        !!props.danger ||
        !!props.dark),
  );

  // make getColor available on the instance proxy for backward compatibility
  try {
    const inst = getCurrentInstance() as ComponentInternalInstance | null;
    if (inst && inst.proxy) {
      (inst.proxy as unknown as Record<string, unknown>).getColor = state.getColor;
    }
  } catch (e) {
    // ignore
  }

  return {
    ...state,
    isColorDark,
    isColor,
  };
}
