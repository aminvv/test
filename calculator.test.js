const calculator=require('./calculator');
const TestMethod = require('./util');

function testAdd(){
 const result=calculator.add(5,5)
 console.log("Test Add",result===10 ?"\u2705 Passed":"	\u274C Failed");
 
}
function testSubtract(){
 const result=calculator.subtract(5,5)
 console.log("Test subtract",result===0 ?"\u2705 Passed":"	\u274C Failed");
 
}
function testMultiply(){
 const result=calculator.multiply(5,5)
 console.log("Test multiply",result===25 ?"\u2705 Passed":"	\u274C Failed");
 
}
function testDivide(){
 const result=calculator.divide(6,2)
 console.log("Test divide",result===3 ?"\u2705 Passed":"	\u274C Failed");
 
}
function testDivideByZero(){
try {
    calculator.divide(5,0)
    console.log("testDivideByZero","\u274C Failed");
} catch (error) {
    console.log("testDivideByZero","\u2705 Passed")
}
 
}


console.time("Complex Calculation Time")
console.log( "Calculation Test");
console.log( "------------------------------------------");
TestMethod("test-Add",testAdd)
TestMethod("test-Add",testSubtract)
TestMethod("test-Add",testMultiply)
TestMethod("test-Add",testDivide)
TestMethod("test-Add",testDivideByZero)


console.timeEnd("Complex Calculation Time")