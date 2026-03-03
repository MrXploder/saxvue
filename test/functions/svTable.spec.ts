import { getPage, getLength, checkAll, getSearch } from '../../src/functions/svTable/index';

describe('getPage', () => {
  const data = Array.from({ length: 20 }, (_, i) => ({ id: i + 1, name: `Item ${i + 1}` }));

  it('returns the first page with default maxItems (5)', () => {
    const page = getPage(data, 1);
    expect(page).toHaveLength(5);
    expect(page[0]).toEqual({ id: 1, name: 'Item 1' });
    expect(page[4]).toEqual({ id: 5, name: 'Item 5' });
  });

  it('returns the second page', () => {
    const page = getPage(data, 2);
    expect(page).toHaveLength(5);
    expect(page[0]).toEqual({ id: 6, name: 'Item 6' });
    expect(page[4]).toEqual({ id: 10, name: 'Item 10' });
  });

  it('respects custom maxItems', () => {
    const page = getPage(data, 1, 3);
    expect(page).toHaveLength(3);
    expect(page[0]).toEqual({ id: 1, name: 'Item 1' });
    expect(page[2]).toEqual({ id: 3, name: 'Item 3' });
  });

  it('returns partial page for the last page', () => {
    const page = getPage(data, 4, 7);
    // 20 items / 7 per page → page 3 has items 15–20 (6 items), but page 4 would be beyond
    // Actually page 3 covers index 14..20 → page 3 has items 15-20
    // Page 4 would be index 21..27 → empty
    expect(page).toHaveLength(0);
  });

  it('returns empty array for out-of-range page', () => {
    const page = getPage(data, 100);
    expect(page).toHaveLength(0);
  });

  it('works with empty data', () => {
    const page = getPage([], 1);
    expect(page).toHaveLength(0);
  });

  it('works with non-object arrays', () => {
    const nums = [10, 20, 30, 40, 50, 60];
    const page = getPage(nums, 2, 3);
    expect(page).toEqual([40, 50, 60]);
  });
});

describe('getLength', () => {
  it('returns correct number of pages with default maxItems', () => {
    const data = Array.from({ length: 23 }, (_, i) => i);
    expect(getLength(data)).toBe(5); // ceil(23/5)
  });

  it('returns 1 page for data smaller than maxItems', () => {
    expect(getLength([1, 2, 3])).toBe(1);
  });

  it('returns 0 for empty data', () => {
    expect(getLength([])).toBe(0);
  });

  it('respects custom maxItems', () => {
    const data = Array.from({ length: 10 }, (_, i) => i);
    expect(getLength(data, 3)).toBe(4); // ceil(10/3)
  });
});

describe('checkAll', () => {
  it('selects all items when not all are selected', () => {
    const data = [{ id: 1 }, { id: 2 }, { id: 3 }];
    const selected = [{ id: 1 }];
    const result = checkAll(selected, data);
    expect(result).toHaveLength(3);
    expect(result).toEqual(data);
  });

  it('deselects all items when all are already selected', () => {
    const data = [{ id: 1 }, { id: 2 }];
    const selected = [{ id: 1 }, { id: 2 }];
    const result = checkAll(selected, data);
    expect(result).toEqual([]);
  });

  it('handles empty data', () => {
    const result = checkAll([], []);
    expect(result).toEqual([]);
  });
});

describe('getSearch', () => {
  const data = [
    { name: 'Alice', role: 'Developer' },
    { name: 'Bob', role: 'Designer' },
    { name: 'Charlie', role: 'Developer' },
    { name: 'Diana', role: 'Manager' },
  ];

  it('returns all items when search is empty', () => {
    expect(getSearch(data, '')).toHaveLength(4);
  });

  it('filters by matching name', () => {
    const result = getSearch(data, 'alice');
    expect(result).toHaveLength(1);
    expect(result[0].name).toBe('Alice');
  });

  it('is case-insensitive', () => {
    expect(getSearch(data, 'BOB')).toHaveLength(1);
  });

  it('matches across any field value', () => {
    const result = getSearch(data, 'developer');
    expect(result).toHaveLength(2);
  });

  it('handles accent-insensitive search (normalized)', () => {
    const accented = [{ name: 'José', role: 'Devops' }];
    const result = getSearch(accented, 'jose');
    expect(result).toHaveLength(1);
  });

  it('returns empty array when nothing matches', () => {
    expect(getSearch(data, 'zzzzz')).toHaveLength(0);
  });

  it('searches nested objects', () => {
    const nested = [
      { name: 'Project A', details: { status: 'active', lead: 'Smith' } },
      { name: 'Project B', details: { status: 'archived', lead: 'Jones' } },
    ];
    const result = getSearch(nested, 'smith');
    expect(result).toHaveLength(1);
    expect(result[0].name).toBe('Project A');
  });
});
