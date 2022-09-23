// Method 1

// const add = require('../PRACTICAL_1/Method_1/add.js')
// const sub = require('../PRACTICAL_1/Method_1/sub.js')
// const mul = require('../PRACTICAL_1/Method_1/mult.js')
// const div = require('../PRACTICAL_1/Method_1/div.js')

// const log = console.log;
// // log((process.argv)) 

// let a = Number(process.argv[2]) , b = Number(process.argv[3]);
// log(add(a,b))
// log(sub(a,b))
// log(mul(a,b))
// log(div(a,b))


// Method -- 2

import {add , sub , mul ,div} from "./Method_2/Calc.js" ;

const log = console.log;
log((process.argv) + "------------------------") 

let a = Number(process.argv[2]) , b = Number(process.argv[3]);
log(add(a,b))
log(sub(a,b))
log(mul(a,b))
log(div(a,b))

