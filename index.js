const testVar = {}

function testFunc() {
  return "hi"
}

let superbowlWin = (array) => {
  let result = array.find(s => 
    s.result === 'W')
  if (result) {
    return result.year
  }
  else  {
    return  undefined
  }
}