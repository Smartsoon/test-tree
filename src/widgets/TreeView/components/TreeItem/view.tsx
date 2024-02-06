import React from "react";
import type {TreeItemProps} from "./types";
import {joinId} from "../../utils/joinIds";
import {DeleteOutlined, MinusSquareOutlined, PlusSquareOutlined} from '@ant-design/icons'
import './index.css'
import {useOpenNodesStore} from "../../stores/openNodes";
import {Typography} from "antd";
import {useHighlightedNodeStore} from "../../stores/highlightedNodes";

export const TreeItem: React.FC<TreeItemProps> = ({
    title,
    id,
    children,
    type,
    onDeleteClick,
    offset= 0,
}) => {
    const {setItems, items} = useOpenNodesStore()
    const {itemsHighlighted, itemHighlightedValue} = useHighlightedNodeStore()

    const arrID = id.split('@')
    const actualId = arrID[arrID.length - 1]
    const isOpen = items.includes(actualId) || itemHighlightedValue.length
    const isHaveChildren = children && Object.keys(children).length
    const onOpenClick = (id: string, items: string[]) => {
        setItems([...items, id])
    }
    const onCloseClick = (id: string, items: string[]) => {
        const updatedItems = items.filter((item) => item.indexOf(id) === -1)
        setItems(updatedItems)
    }

    return (
        <div style={{paddingLeft: offset * 15}} className={'tree-item'}>
            <div className={'tree-item__content'}>
                <div className={'tree-item__content__icon'}>
                    {
                        isHaveChildren ? isOpen ?
                                <MinusSquareOutlined onClick={() => onCloseClick(actualId, items)}/> :
                                <PlusSquareOutlined onClick={() => onOpenClick(actualId, items)}/>
                            : <></>
                    }
                </div>
                <Typography.Title
                    type={itemsHighlighted.includes(actualId) ? "success" : undefined}
                    level={3}
                >
                    {title} ({type})
                </Typography.Title>
                <DeleteOutlined onClick={() => onDeleteClick(id)}/>
            </div>
            {isHaveChildren && isOpen ?
                Object.entries(children).map((item => {
                    return <TreeItem {...item[1]}
                                     onDeleteClick={onDeleteClick}
                                     id={joinId(id, item[0])}
                                     offset={offset + 1}
                                     key={item[0]}/>
                })) : <></>
            }
        </div>
    )
}