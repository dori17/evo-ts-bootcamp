import {Item} from '../models';
import {State} from '../App';

const bubbleSort = async (arr: Item[], update: (upd: State) => void) => {
    for (let i = 0; i < arr.length; i++) {
        let hasChanges = false;
        for (let j = 0; j < arr.length - i - 1; j++) {
            if (arr[j].value > arr[j + 1].value) {
                const temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
                hasChanges = true;
                await (new Promise((res) => {
                    setTimeout(() => {
                        update({array: [...arr], status: 'In Progress'});
                        res(null);
                    }, 100);
                }))
            }
        }
        if (!hasChanges) {
            update({array: arr,status: 'Sorted'})
        }
    }
    return arr;
}

export default bubbleSort;