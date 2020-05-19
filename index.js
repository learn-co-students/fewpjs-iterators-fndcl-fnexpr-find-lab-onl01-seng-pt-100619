const testVar = {}

function testFunc() {
  return "hi"
}

function superbowlWin(objArray){
  const winning = objArray.find( function(year) {return year.result === "W" })
  if (winning != undefined) {
    return winning.year
  } else {
    return undefined
  }
}