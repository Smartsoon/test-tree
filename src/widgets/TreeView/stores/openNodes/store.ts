import { create } from 'zustand';
import type { OpenNodesState, ItemActions } from './types'

export const useOpenNodesStore = create<OpenNodesState & ItemActions>()((set) => ({
    items: [],
    setItems: (items) => set(() => ({ items })),
}));

