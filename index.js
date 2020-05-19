const record = [
  {year: "2018", result: "L"},
  {year: "2017", result: "W"},
  {year: "2016", result: "N/A"}
  //...
]

function superbowlWin(record) { 
  let performance = record.find(record => record.result === "W");
  return !!performance ? performance.year : undefined; 
}