const testVar = {}

function testFunc() {
  return "hi"
}

function superbowlWin(arr) {
  let result = arr.find(game => game.result === "W" )
  return !!result ? result.year : undefined
}