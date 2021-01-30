const testVar = {}

function testFunc() {
  return "hi"
}



function superbowlWin(record){
let result = record.find( record => record.result === "W" )
//looking to see if any 
return !!result ? result.year : undefined
}