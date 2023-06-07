class SudokuSolver {

let col = { 1: [1,10,19,28,37,46,55,64,73],
2: [2,11,20,29,38,47,56,65,74],
3: [3,12,21,30,39,48,57,66,75],
4: [4,13,22,31,40,49,58,67,76],
5: [5,14,23,32,41,50,59,68,77],
6: [6,15,24,33,42,51,60,69,78],
7: [7,16,25,34,43,52,61,70,79],
8: [8,17,26,35,44,53,62,71,80],
9: [9,18,27,36,45,54,63,72,81]}

let rww = { a: [1,2,3,4,5,6,7,8,9],
b: [10,11,12,13,14,15,16,17,18],
c: [19,20,21,22,23,24,25,26,27],
d: [28,29,30,31,32,33,34,35,36],
e: [37,38,29,40,41,42,43,44,45],
f: [46,47,48,49,50,51,52,53,54],
g: [55,56,57,58,59,60,61,62,63],
h: [64,65,66,67,68,69,70,71,72],
i: [73,74,75,76,77,78,79,80,81]}

let box = {1: [1,2,3,10,11,12,19,20,21],
2: [4,5,6,13,14,15,22,23,24],
3: [7,8,9,16,17,18,25,26,27],
4: [28,29,30,37,38,39,46,47,48],
5: [31,32,33,40,41,42,49,50,51],
6: [34,35,36,43,44,45,52,53,54],
7: [55,56,57,64,65,66,73,74,75],
8: [58,59,60,67,68,69,76,77,78],
9: [61,62,63,70,71,72,79,80,81]}

  

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
let rowcheck = ""

for (let i = 0; i < 9; i++) {
 console.log(puzzle[(rww[row][i])-1])
  if (puzzle[(rww[row][i])-1] == value) {
   
    rowcheck = "true"
    break
  }
   rowcheck = "false" 
}
  }

  checkColPlacement(puzzleString, row, column, value) {
let colcheck = ""

for (let i = 0; i < 9; i++) {
 
  if (puzzle[col[column - 1][i]] == value) {
   
    colcheck = "true"
    
    break
  }
  colcheck = "false"  
}
  }

  checkRegionPlacement(puzzleString, row, column, value) {
let sect = ""

if (/[a-c]/.test(row) == true && /[1-3]/.test(column) == true) {
 sect = 1
}
if (/[a-c]/.test(row) == true && /[4-6]/.test(column) == true) {
 sect = 2
}
if (/[a-c]/.test(row) == true && /[7-9]/.test(column) == true) {
 sect = 3
}
if (/[d-f]/.test(row) == true && /[1-3]/.test(column) == true) {
 sect = 4
}
if (/[d-f]/.test(row) == true && /[4-6]/.test(column) == true) {
 sect = 5
}
if (/[d-f]/.test(row) == true && /[7-9]/.test(column) == true) {
 sect = 6
}
if (/[g-i]/.test(row) == true && /[1-3]/.test(column) == true) {
 sect = 7
}
if (/[g-i]/.test(row) == true && /[4-6]/.test(column) == true) {
 sect = 8
}
if (/[g-i]/.test(row) == true && /[7-9]/.test(column) == true) {
 sect = 9
}


let boxcheck = ""

for (let i = 0; i < 9; i++) {
 
  if (puzzle[box[sect][i] - 1] == value) {
   
    boxcheck = "true"
    break
  }
   boxcheck = "false" 
}
console.log(boxcheck)
  }

  solve(puzzleString) {


    
  }
}

module.exports = SudokuSolver;

