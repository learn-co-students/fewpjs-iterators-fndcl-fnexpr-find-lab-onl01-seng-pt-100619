const testVar = {}

function testFunc() {
  return "hi"
}

function superbowlWin(recordArr) {
  let result = recordArr.find(function(years) {return years.result === "W"})
  if (result != undefined) {
    return result.year
  }
}
