function TestMethod(title,func) {
    console.time(title)
    func()
    console.timeEnd(title)
    console.log(" - - - - - - - - - - - - - - - - -");
}

module.exports=TestMethod