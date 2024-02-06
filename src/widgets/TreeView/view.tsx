import React from "react";
import type { TreeViewProps } from "./types";
import {TreeItem} from "./components/TreeItem";
import {useTreeDataStore} from "./stores/nodes";
import {deleteProperty} from "./utils/deleteTreeItemProperty";
import {getPathArray} from "./utils/getPathArray";
import './index.css'
import {Filter} from "./components/Filter";
import {useHighlightedNodeStore} from "./stores/highlightedNodes";

export const TreeView: React.FC<TreeViewProps> = () => {
    const {items, setItems} = useTreeDataStore()
    const {setHighlightedItemValue} = useHighlightedNodeStore()

    const onDeleteClick = (id: string) => {
        setHighlightedItemValue('')
        const itemsClone = JSON.parse(JSON.stringify(items))
        const splittedId = getPathArray(id)
        if (splittedId.length) {
            deleteProperty(itemsClone, splittedId)
            setItems(itemsClone)
        }
    }

    return (
        <div className={'tree-view-container'}>
            <div className={'tree-view'}>
                <div className={'tree-view__filter'}>
                    <Filter />
                </div>
                {Object.entries(items).map(item => {
                    return <TreeItem {...item[1]}
                                     id={item[0]}
                                     onDeleteClick={onDeleteClick}
                                     key={item[0]}
                    />
                })}
            </div>
        </div>
    )
}