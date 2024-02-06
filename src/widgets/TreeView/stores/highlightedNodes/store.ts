import { create } from 'zustand';
import type { HighlightedItemState, HighlightedItemActions } from './types'

export const useHighlightedNodeStore = create<HighlightedItemState & HighlightedItemActions>()((set) => ({
    itemsHighlighted: [],
    itemHighlightedValue: '',
    setHighlightedItems: (itemsHighlighted: string[]) => set(() => ({itemsHighlighted})),
    setHighlightedItemValue: (value: string) => set(() => ({itemHighlightedValue: value})),
}));

