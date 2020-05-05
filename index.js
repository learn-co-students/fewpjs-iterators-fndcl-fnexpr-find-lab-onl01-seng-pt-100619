const record = [
  {year: "2018", result: "L"},
  {year: "2017", result: "W"},
  {year: "2016", result: "N/A"}]

function superbowlWin(record) {
  let result = record.find(result => result.result === 'W')
  return !!result ?  result.year : undefined
}




const testVar = {}

function testFunc() {
  return "hi"
}
