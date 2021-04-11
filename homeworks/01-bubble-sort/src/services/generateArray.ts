import { nanoid } from 'nanoid'
import getRandomNumber from './getRandomNumber';
import {Item} from '../models';

const generateArray = ():Item[] => {
    const length:number = getRandomNumber(10, 50);
    const arr:Item[] = [];
    for(let i = 0; i< length-1; i++){
        arr[i] = {
            id: nanoid(),
            value: getRandomNumber(-99, 99),
        }
    }
    return arr;
}

export default generateArray;