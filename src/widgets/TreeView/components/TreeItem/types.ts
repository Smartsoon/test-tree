import {TreeItemData} from "../../stores/nodes";

export interface TreeItemProps extends TreeItemData{
    onDeleteClick: (id: string) => void
    offset?: number
    id: string,
}