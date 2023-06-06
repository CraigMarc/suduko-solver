'use strict';

const SudokuSolver = require('../controllers/sudoku-solver.js');

module.exports = function (app) {
  
  let solver = new SudokuSolver();

  app.route('/api/check')
    .post((req, res) => {
      console.log(req.body)
     let puzzleString = req.body.puzzle
    let result = solver.validate(puzzleString)
      
      if (result == "Invalid characters") {
        return res.json({ error: 'Invalid characters in puzzle' })
      }
if (result == "missing") {
  return res.json({ error: 'Required field missing' })
}

if (result == "not 81") {
  return res.json({ error: 'Expected puzzle to be 81 characters long' })
}
let valCoor = /[a-iA-I]/
if (valCoor.test(req.body.coordinate[0]) == false) {
  return res.json({ error: 'Invalid coordinate'})
}
let valNum = /[1-9]/
if (valNum.test(req.body.coordinate[1]) == false){
  return res.json({ error: 'Invalid coordinate'})
}
if (valNum.test(req.body.value) == false){
  return res.json({ error: 'Invalid value'})
}
      
    });
  
    
  app.route('/api/solve')
    .post((req, res) => {

let puzzleString = req.body.puzzle
    let result = solver.validate(puzzleString)
      
      if (result == "Invalid characters") {
        return res.json({ error: 'Invalid characters in puzzle' })
      }
if (result == "missing") {
  return res.json({ error: 'Required field missing' })
}

if (result == "not 81") {
  return res.json({ error: 'Expected puzzle to be 81 characters long' })
}




      
    });
};
