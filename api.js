
const SudokuSolver = require('../controllers/sudoku-solver.js');

module.exports = function (app) {
  
  let solver = new SudokuSolver();

  app.route('/api/check')
    .post((req, res) => {
     
     let puzzleString = req.body.puzzle
    let value = req.body.value
      
if (!req.body.coordinate || !req.body.value || !req.body.puzzle){return res.json({ error: 'Required field(s) missing' })
  
}


      
    let row = req.body.coordinate[0].toLowerCase()
    let column = req.body.coordinate[1]


      
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
if (req.body.coordinate.length > 2) {
  return res.json({ error: 'Invalid coordinate'})
}
if (valNum.test(req.body.value) == false){
  return res.json({ error: 'Invalid value'})
}

if (req.body.value.length > 1){
  return res.json({ error: 'Invalid value'})
}
/*check placements*/

let rowcheck = solver.checkRowPlacement(puzzleString, row, column, value)
let colcheck = solver.checkColPlacement(puzzleString, row, column, value)
let regioncheck = solver.checkRegionPlacement(puzzleString, row, column, value)
let conflict = []
if (rowcheck == 'true') {
  conflict.push('row')
}
if (colcheck == 'true') {
  conflict.push('column')
}
if (regioncheck == 'true') {
  conflict.push('region')
}

      
if (rowcheck != 'true' && colcheck != 'true' && regioncheck != 'true') {
  return res.json( { "valid": true })
}
if (conflict.length == 3){
return res.json( { "valid": true })
}
else {
  return res.json( { "valid": false, "conflict":  conflict  })
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

let solution = solver.solve(puzzleString)
if (solution.indexOf('.') != -1) {
  return res.json({ error: 'Puzzle cannot be solved' })
}
else {
   return res.json({ solution: solution })
}
})
      
   
};
