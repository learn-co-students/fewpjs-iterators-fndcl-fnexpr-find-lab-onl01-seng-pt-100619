const testVar = {}

function testFunc() {
  return "hi"
}


function superbowlWin(record){ // write the function with lowercase 'b'
  let win = record.find(function(games){return games.result === 'W'})
  // set the find array method into variable so we can return this variable as an object and acces the attributes of the object
  // win is assigned into an Javascript object
  // each object is a game - result
  // we can find by an attribute of an object with the .attribute technique
  // we can add a condition to see if there were any wins and access an existing object
  if (win !== undefined){
      // if win does was not found/does not exist, trying to access the object at return will create an error.
    return win.year
  }
};