import { toArray } from './collectionUtilities';
import LinkedList from '../linkedLists/linkedList';

let list = new LinkedList<number>();
list.add(2);
list.add(6);
list.add(8);

let array = toArray(list);
console.log(array);
console.log("test"); 