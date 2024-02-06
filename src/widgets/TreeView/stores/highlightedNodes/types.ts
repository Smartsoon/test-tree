export interface HighlightedItemState {
    itemsHighlighted: string[];
    itemHighlightedValue: string
}

export interface HighlightedItemActions {
    setHighlightedItems: (value: string[]) => void;
    setHighlightedItemValue: (value: string) => void;
}