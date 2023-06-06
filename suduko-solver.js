class SudokuSolver {

  validate(puzzleString) {
let valid = /^[0-9|.]*$/

    if (!puzzleString) {
      let result = 'missing'
      return result
    }

    if (valid.test(puzzleString) == false) {
      let result = "Invalid characters"
       return result
    }

  if (puzzleString.length != 81) {
    let result = "not 81"
    return result
    
  }
  }

  checkRowPlacement(puzzleString, row, column, value) {

  }

  checkColPlacement(puzzleString, row, column, value) {

  }

  checkRegionPlacement(puzzleString, row, column, value) {

  }

  solve(puzzleString) {
let col1 = [1,10,19,28,37,46,55,64,73]
let col2 = [2,11,20,29,38,47,56,65,74]
let col3 = [3,12,21,30,39,48,57,66,75]
let col4 = [4,13,22,31,40,49,58,67,76]
let col5 = [5,14,23,32,41,50,59,68,77]
let col6 = [6,15,24,33,42,51,60,69,78]
let col7 = [7,16,25,34,43,52,61,70,79]
let col8 = [8,17,26,35,44,53,62,71,80]
let col9 = [9,18,27,36,45,54,63,72,81]
let row1 = [1,2,3,4,5,6,7,8,9]
let row2 = [10,11,12,13,14,15,16,17,18]
let row3 = [19,20,21,22,23,24,25,26,27]
let row4 = [28,29,30,31,32,33,34,35,36]
let row5 = [37,38,29,40,41,42,43,44,45]
let row6 = [46,47,48,49,50,51,52,53,54]
let row7 = [55,56,57,58,59,60,61,62,63]
let row8 = [64,65,66,67,68,69,70,71,72]
let row9 = [73,74,75,76,77,78,79,80,81]
let box1 = [1,2,3,10,11,12,19,20,21]
let box2 = [4,5,6,13,14,15,22,23,24]
let box3 = [7,8,9,16,17,18,25,26,27]
let box4 = [28,29,30,37,38,39,46,47,48]
let box5 = [31,32,33,40,41,42,49,50,51]
let box6 = [34,35,36,43,44,45,52,53,54]
let box7 = [55,56,57,64,65,66,73,74,75]
let box8 = [58,59,60,67,68,69,76,77,78]
let box9 = [61,62,63,70,71,72,79,80,81]
  
    
  }
}

module.exports = SudokuSolver;

