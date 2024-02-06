import {TreeListData} from "../stores/nodes";

export function deleteProperty(obj: TreeListData, propertyChain: string[]) {
    let currentObject = obj;
    for (let i = 0; i < propertyChain.length - 1; i++) {
        const property = propertyChain[i];
        if (!currentObject[property]) {
            return;
        }

        // @ts-ignore
        currentObject = currentObject[property];
    }
    delete currentObject[propertyChain[propertyChain.length - 1]];
}