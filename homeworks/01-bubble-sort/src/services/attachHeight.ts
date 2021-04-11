import {Item} from '../models';


const attachHeight = (arr: Item[]):Item[] => {
    const values:number[] = arr.map(i => i.value);
    const min:number = Math.min(...values);
    return arr.map(el => ({...el, height: el.value - min + 20}));
};

export default attachHeight;