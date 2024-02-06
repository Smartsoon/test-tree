export interface TreeItemData {
    title: string,
    children?: TreeListData
    type: 'folder' | 'file'
}

export type UniqueId = string

export type TreeListData = Record<UniqueId, TreeItemData>

export interface ItemState {
    items: TreeListData;
}

export interface ItemActions {
    setItems: (items: TreeListData) => void;
}