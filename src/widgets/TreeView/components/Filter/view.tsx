import React, {useEffect} from "react";
import type {FilterProps} from "./types";
import {TestField} from "../../../../ui/TextField";
import {useHighlightedNodeStore} from "../../stores/highlightedNodes";
import {useTreeDataStore} from "../../stores/nodes";
import {findKeysByPartialTitle} from "../../utils/findKeyByPartialTitle";

export const Filter: React.FC<FilterProps> = () => {
    const {setHighlightedItemValue, itemHighlightedValue, setHighlightedItems} = useHighlightedNodeStore()
    const {items} = useTreeDataStore()

    useEffect(() => {
        if (!itemHighlightedValue) {
            return setHighlightedItems([])
        }
        const values = findKeysByPartialTitle(items, itemHighlightedValue)
        setHighlightedItems(values)
    }, [itemHighlightedValue])

    return (
        <TestField name={'search'}
                   value={itemHighlightedValue}
                   onChange={(event) => setHighlightedItemValue(event.target.value)}
                   placeholder={'Search'}
        />
    )
}