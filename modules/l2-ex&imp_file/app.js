/*
how to access variables / func from other js. simply export variable from that other file
*/

const add = require("./utils");

const i = add(1, 2);
console.log(i);
