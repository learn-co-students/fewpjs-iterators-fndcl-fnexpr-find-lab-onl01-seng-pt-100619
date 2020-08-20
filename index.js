function superbowlWin(record) {
   let rec = record.find(element => element.result === "W")
    if (rec) {
      return rec.year
    }
    else {
      return undefined
    }
}