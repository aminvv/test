const assert=require("assert")
const{add,divide,multiply,subtract,}=require('./calculator')


function testAdd(){
 console.time( "Add Test")
 assert.strictEqual(add(5,5) ,10 ,'5 + 5 should equal 10')
 assert.strictEqual(add(5,3) ,8 ,'5 + 5 should equal 10')
 assert.strictEqual(add(5,2) ,7 ,'5 + 5 should equal 10')
 console.log("\u2705 Passed	 All add tests passed")
 console.timeEnd( "Add Test")
 
}
function testSubtract(){
     console.time( "Subtract Test")
    assert.strictEqual(subtract(5,5) ,0 ,'5 - 5 should equal 0')
    assert.strictEqual(subtract(5,3) ,2 ,'5 - 5 should equal 2')
    assert.strictEqual(subtract(5,2) ,3 ,'5 - 5 should equal 3')
    console.log("\u2705 Passed	 All subtract tests passed")
    console.timeEnd( "Subtract Test")
}
function testMultiply(){
     console.time( "Multiply Test")
    assert.strictEqual(multiply(5,5) ,25 ,'5 * 5 should equal 25')
    assert.strictEqual(multiply(5,3) ,15 ,'5 * 5 should equal 15')
    assert.strictEqual(multiply(5,2) ,10 ,'5 * 5 should equal 10')
    console.log("\u2705 Passed	 All multiply tests passed")
    console.timeEnd( "Multiply Test")
 
}
function testDivide(){
     console.time( "Divide Test")
    assert.strictEqual(divide(5,5) ,1 ,'5 / 5 should equal 1')
    assert.strictEqual(divide(20,2) ,10 ,'20 / 2 should equal 10')
    assert.throws(()=>divide(5,0) ,' dividing by zero should throw an error')
    console.log("\u2705 Passed	 All divide tests passed")
    console.timeEnd( "Divide Test")
 
}

 



console.time("Complex Calculation Time")
console.log( "Calculation Test");
console.log( "------------------------------------------");
testAdd()
testSubtract()
testMultiply()
testDivide()

console.timeEnd("Complex Calculation Time")