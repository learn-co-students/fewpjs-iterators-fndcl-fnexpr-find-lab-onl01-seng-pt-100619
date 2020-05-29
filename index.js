const testVar = {}

function testFunc() {
  return "hi"
}

function superbowlWin(array) {
  var obj = array.find(element => element.result === 'W');

  if (obj) {
    return obj.year
  }

}

// function searchForWin(element) {
//   return element.result === 'W'
// }