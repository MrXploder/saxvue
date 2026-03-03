import { isColor, setVar, setColor, getColor, insertBody, removeBody } from '../../src/util/index';

describe('isColor', () => {
  it('returns true for built-in named colors', () => {
    expect(isColor('primary')).toBe(true);
    expect(isColor('success')).toBe(true);
    expect(isColor('danger')).toBe(true);
    expect(isColor('warn')).toBe(true);
    expect(isColor('dark')).toBe(true);
    expect(isColor('light')).toBe(true);
    expect(isColor('warning')).toBe(true);
    expect(isColor('secondary')).toBe(true);
  });

  it('returns true for social media colors', () => {
    expect(isColor('facebook')).toBe(true);
    expect(isColor('twitter')).toBe(true);
    expect(isColor('youtube')).toBe(true);
    expect(isColor('discord')).toBe(true);
    expect(isColor('telegram')).toBe(true);
    expect(isColor('slack')).toBe(true);
  });

  it('returns false for non-named colors', () => {
    expect(isColor('#ff0000')).toBe(false);
    expect(isColor('rgb(255,0,0)')).toBe(false);
    expect(isColor('banana')).toBe(false);
    expect(isColor('')).toBe(false);
  });
});

describe('setVar', () => {
  it('sets CSS custom property on document.documentElement when el is null', () => {
    setVar('color', '255,0,0', null);
    expect(document.documentElement.style.getPropertyValue('--sv-color')).toBe('255,0,0');
  });

  it('sets CSS custom property on a given element', () => {
    const el = document.createElement('div');
    setVar('primary', '0,128,255', el);
    expect(el.style.getPropertyValue('--sv-primary')).toBe('0,128,255');
  });

  it('does not throw when el is a comment node', () => {
    // Comments have nodeName "#comment" — setVar should skip them silently
    const comment = document.createComment('test') as unknown as HTMLElement;
    expect(() => setVar('color', '0,0,0', comment)).not.toThrow();
  });
});

describe('setColor', () => {
  let el: HTMLElement;

  beforeEach(() => {
    el = document.createElement('div');
  });

  it('handles HEX colors — sets CSS var with RGB values', () => {
    setColor('color', '#ff0000', el);
    expect(el.style.getPropertyValue('--sv-color')).toBe('255,0,0');
  });

  it('handles shorthand HEX (#f00)', () => {
    setColor('color', '#f00', el);
    expect(el.style.getPropertyValue('--sv-color')).toBe('255,0,0');
  });

  it('handles RGB string — extracts r,g,b', () => {
    setColor('color', 'rgb(10,20,30)', el);
    expect(el.style.getPropertyValue('--sv-color')).toBe('10,20,30');
  });

  it('handles RGBA string', () => {
    setColor('color', 'rgba(10,20,30,0.5)', el);
    expect(el.style.getPropertyValue('--sv-color')).toBe('10,20,30');
  });

  it('handles raw RGB numbers (comma-separated)', () => {
    setColor('color', '100,200,50', el);
    expect(el.style.getPropertyValue('--sv-color')).toBe('100,200,50');
  });

  it('adds vs-change-color class when addClass is true', () => {
    setColor('color', '#0000ff', el, true);
    expect(el.classList.contains('vs-change-color')).toBe(true);
  });

  it("adds sv-component-dark class when color is 'dark'", () => {
    setColor('color', 'dark', el, true);
    expect(el.classList.contains('sv-component-dark')).toBe(true);
  });

  it('does not throw when el is null (uses document root)', () => {
    expect(() => setColor('color', '#ff0000', null)).not.toThrow();
    expect(document.documentElement.style.getPropertyValue('--sv-color')).toBe('255,0,0');
  });
});

describe('getColor', () => {
  it('converts HEX to RGB string', () => {
    expect(getColor('#ff0000')).toBe('255,0,0');
  });

  it('converts shorthand HEX to RGB string', () => {
    expect(getColor('#0f0')).toBe('0,255,0');
  });

  it('extracts r,g,b from RGB string', () => {
    expect(getColor('rgb(10,20,30)')).toBe('10,20,30');
  });

  it('extracts r,g,b from RGBA string', () => {
    expect(getColor('rgba(10,20,30,0.5)')).toBe('10,20,30');
  });

  it('passes through raw RGB numbers', () => {
    expect(getColor('100,200,50')).toBe('100,200,50');
  });

  it('returns undefined for unknown color names', () => {
    // "banana" is not a named color and not hex/rgb
    expect(getColor('banana')).toBeUndefined();
  });
});

describe('insertBody / removeBody', () => {
  it('inserts element into document.body when parent is null', () => {
    const el = document.createElement('div');
    el.id = 'test-insert';
    insertBody(el, null);
    expect(document.body.querySelector('#test-insert')).toBe(el);
    // clean up
    document.body.removeChild(el);
  });

  it('inserts element into a specific parent', () => {
    const parent = document.createElement('div');
    const child = document.createElement('span');
    parent.appendChild(document.createElement('p')); // existing child
    insertBody(child, parent);
    expect(parent.contains(child)).toBe(true);
  });

  it('removes element from document.body when parent is null', () => {
    const el = document.createElement('div');
    el.id = 'test-remove';
    document.body.appendChild(el);
    removeBody(el, null);
    expect(document.body.querySelector('#test-remove')).toBeNull();
  });

  it('removes element from a specific parent', () => {
    const parent = document.createElement('div');
    const child = document.createElement('span');
    parent.appendChild(child);
    removeBody(child, parent);
    expect(parent.contains(child)).toBe(false);
  });
});
