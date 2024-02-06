import { create } from 'zustand';
import type { ItemState, ItemActions, TreeListData } from './types'

export const useTreeDataStore = create<ItemState & ItemActions>()((set) => ({
    items: {
        '1': {
            title: 'Title 1',
            type: 'folder'
        },
        '2': {
            title: 'Title 2',
            type: 'folder',
            children: {
                '4': {
                    title: 'Title 4',
                    type: 'folder'
                }
            }
        },
        '3': {
            title: 'Title 3',
            type: 'folder',
            children: {
                '5': {
                    title: 'Title 5',
                    type: 'folder',
                    children: {
                        '6': {
                            title: 'File',
                            type: 'file'
                        }
                    }
                }
            }
        },
    },
    setItems: (items: TreeListData) => set(() => ({ items })),
}));

