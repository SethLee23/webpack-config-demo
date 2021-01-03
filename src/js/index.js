/*
 * @Author: your name
 * @Date: 2021-01-03 15:35:57
 * @LastEditTime: 2021-01-03 16:27:57
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \webpack-cli-demo\src\js\index.js
 */
console.log('hello webpack4')
const [a, b] = [1, 3]
console.log('a,b: ', a, b);
// const demo = { a: 1 }
import { demo } from './demo'
console.log('demo: ', demo);
document.write(demo)
// console.log('demo?.a: ', demo?.a);