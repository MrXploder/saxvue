interface TableRow {
  [key: string]: unknown;
}

const getPage = <T>(data: T[], page: number, maxItems: number = 5): T[] => {
  const max = Math.ceil(page * maxItems);
  const min = max - maxItems;

  const items: T[] = [];
  data.forEach((item: T, index: number) => {
    if (index >= min && index < max) {
      items.push(item);
    }
  });
  return items;
};

const getLength = <T>(data: T[], maxItems: number = 5): number => {
  const length = Math.ceil(data.length / maxItems);
  return length;
};

const checkAll = <T>(selected: T[], data: T[]): T[] => {
  if (selected.length !== data.length) {
    selected = [];
    data.forEach((item: T) => {
      selected.push(item);
    });
    return selected;
  }
  return [];
};

const getSearch = (data: TableRow[], search: string = ''): TableRow[] => {
  function flattenDeep(val: unknown): (string | number)[] {
    return Object.values((val as Record<string, unknown>) || []).reduce<(string | number)[]>(
      (acc: (string | number)[], v: unknown) =>
        typeof v === 'object' && v !== null
          ? acc.concat(flattenDeep(v))
          : acc.concat(v as string | number),
      [],
    );
  }

  function getValues(obj: TableRow) {
    return flattenDeep(obj).filter(function (item: string | number) {
      return typeof item === 'string' || typeof item === 'number';
    });
  }

  function normalize(text: string) {
    return text
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '')
      .toLowerCase();
  }

  const searchNormalize = normalize(search);

  return data.filter((item: TableRow) => {
    return normalize(getValues(item).toString()).indexOf(searchNormalize) != -1;
  });
};

const sortData = (evt: MouseEvent, data: TableRow[], sortKey: string, type: string) => {
  data = [...data].sort(returnOriginalIndex);
  let sortType: string | null = type || 'desc';
  const el = evt.target as HTMLElement;

  if (el.dataset[`sortType${sortKey}`] == 'desc') {
    sortType = 'asc';
  } else if (el.dataset[`sortType${sortKey}`] == 'asc') {
    sortType = null;
  }

  if (sortType == 'desc') {
    data.map((item: TableRow, i: number) => {
      item[`vsOriginalIndex${sortKey}`] = i;
    });
  }

  el.dataset[`sortType${sortKey}`] = sortType || '';
  el.dataset['sortType'] = sortType || '';
  el.dataset['sortKey'] = `sortType${sortKey}`;

  const parent = el.closest('.sv-table__tr');
  const ths = parent ? parent.querySelectorAll('th.sort') : [];
  ths.forEach((th: Element) => {
    const thEl = th as HTMLElement;
    if (thEl != el) {
      thEl.dataset.sortType = '';
      thEl.dataset[thEl.dataset['sortKey'] || ''] = '';
    }
  });

  function compare(a: TableRow, b: TableRow) {
    if ((a[sortKey] as string | number) < (b[sortKey] as string | number)) {
      return sortType !== 'desc' ? 1 : -1;
    }
    if ((a[sortKey] as string | number) > (b[sortKey] as string | number)) {
      return sortType !== 'desc' ? -1 : 1;
    }
    return 0;
  }

  function returnOriginalIndex(a: TableRow, b: TableRow) {
    return (a[`vsOriginalIndex${sortKey}`] as number) - (b[`vsOriginalIndex${sortKey}`] as number);
  }

  return sortType !== null ? [...data].sort(compare) : [...data].sort(returnOriginalIndex);
};

export { getPage, getLength, checkAll, getSearch, sortData };
