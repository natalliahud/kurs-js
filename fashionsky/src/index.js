import { random, uniq } from "lodash";

import "./index.html";
import "./index.scss";

import { getSum } from "./modules/getSum";

console.log(getSum(2, 8));

const arr = [1, 2, 3, 2, 4, 5, 5, 6, 7, 7, 8, 9, 9, 9];
// let res = uniq(arr);
console.log(uniq(arr));
// console.log(random());
// console.log(random());
// let r = random(0, 255);
// let g = random(0, 255);
// let b = random(0, 255);

let res = `rgb(${random(0, 255)},${random(0, 255)},${random(0, 255)})`;
// let res2 = `rgb(${random(0, 255)},${random(0, 255)},${random(0, 255)})`;
console.log(res);
// console.log(res2);
