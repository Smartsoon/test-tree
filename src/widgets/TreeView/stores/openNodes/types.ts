export interface OpenNodesState {
    items: string[];
}

export interface ItemActions {
    setItems: (items: string[]) => void;
}