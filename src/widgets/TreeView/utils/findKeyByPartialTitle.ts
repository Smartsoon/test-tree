import {TreeListData} from "../stores/nodes";

export function findKeysByPartialTitle(obj: TreeListData, searchValue: string, keys = []) {
    for (const key in obj) {
        if (obj.hasOwnProperty(key)) {
            const item = obj[key];
            if (item.title.includes(searchValue)) {

                // @ts-ignore
                keys.push(key);
            }
            if (item.children) {
                findKeysByPartialTitle(item.children, searchValue, keys);
            }
        }
    }
    return keys;
}