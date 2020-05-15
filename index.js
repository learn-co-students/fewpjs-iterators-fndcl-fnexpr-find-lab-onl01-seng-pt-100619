
function superbowlWin(record) {
  let result = record.find( record => record.result === "W")
  return !!result ? result.year : undefined

}

// let roommates = ["jess", "winston", "winston", "nick"];
// roommates.find( function(s) { return s === "winston" })



