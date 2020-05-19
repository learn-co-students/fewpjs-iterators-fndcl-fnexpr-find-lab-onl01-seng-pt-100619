const testVar = {}

function testFunc() {
  return "hi"
}

function superbowlWin(record) {
  const winner =  record.find(r => {
    return r.result === "W";
  });
  if (winner) {
    return winner.year;
  } else {
    return undefined
  }
};