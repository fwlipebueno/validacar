import type { ChecklistItem } from '../types';

const checklistStorageKey = 'validacar-checklist';

export function loadChecklist(defaultItems: ChecklistItem[]) {
  const saved = window.localStorage.getItem(checklistStorageKey);

  if (!saved) {
    return defaultItems;
  }

  try {
    const parsed = JSON.parse(saved) as ChecklistItem[];
    const knownIds = new Set(defaultItems.map((item) => item.id));
    const validItems = parsed.filter((item) => knownIds.has(item.id));

    return validItems.length === defaultItems.length ? validItems : defaultItems;
  } catch {
    return defaultItems;
  }
}

export function saveChecklist(items: ChecklistItem[]) {
  window.localStorage.setItem(checklistStorageKey, JSON.stringify(items));
}
