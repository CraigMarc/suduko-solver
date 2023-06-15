const chai = require('chai');
const assert = chai.assert;


const Solver = require('../controllers/sudoku-solver.js');
 let solver = new Solver();

suite('Unit Tests', () => {

/*test1*/
 test('Logic handles a valid puzzle string of 81 characters', function(done) {
    var input = '1.5..2.84..63.12.7.2..5.....9..1....8.2.3674.3.7.2..9.47...8..1..16....926914.37.'
    assert.equal(solver.solve(input), '135762984946381257728459613694517832812936745357824196473298561581673429269145378');
    done();
  });

/*test2*/
 test('Logic handles a puzzle string with invalid characters (not 1-9 or .)', function(done) {
    var input = '1.5..2.8A..63.12.7.2..5.....9..1....8.2.3674.3.7.2..9.47...8..1..16....926914.37.'
    assert.equal(solver.validate(input), 'Invalid characters');
    done();
  });
/*test3*/
 test('Logic handles a puzzle string that is not 81 characters in length', function(done) {
    var input = '1.5..2.8..63.12.7.2..5.....9..1....8.2.3674.3.7.2..9.47...8..1..16....926914.37.'
    assert.equal(solver.validate(input), 'not 81');
    done();
  });
/*test4*/
test('Logic handles a valid row placement', 
function(done) {
   
    assert.equal(solver.checkRowPlacement('1.5..2.84..63.12.7.2..5.....9..1....8.2.3674.3.7.2..9.47...8..1..16....926914.37.','a',2,3), 'false');
    done();
  });
/*test5*/
test('Logic handles a invalid row placement', 
function(done) {
   
    assert.equal(solver.checkRowPlacement('1.5..2.84..63.12.7.2..5.....9..1....8.2.3674.3.7.2..9.47...8..1..16....926914.37.','a',2,1), 'true');
    done();
  });
/*test6*/
test('Logic handles a valid column placement', 
function(done) {
   
    assert.equal(solver.checkColPlacement('1.5..2.84..63.12.7.2..5.....9..1....8.2.3674.3.7.2..9.47...8..1..16....926914.37.','a',2,3), 'false');
    done();
  });
/*test7*/
test('Logic handles an valid column placement', 
function(done) {
   
    assert.equal(solver.checkColPlacement('1.5..2.84..63.12.7.2..5.....9..1....8.2.3674.3.7.2..9.47...8..1..16....926914.37.','b',1,8), 'true');
    done();
  });
/*test8*/
 test('Logic handles a valid region placement', 
function(done) {
   
    assert.equal(solver.checkRegionPlacement('1.5..2.84..63.12.7.2..5.....9..1....8.2.3674.3.7.2..9.47...8..1..16....926914.37.','a',2,3), 'false');
    done();
  });
/*test9*/
 test('Logic handles an invalid region placement', 
function(done) {
   
    assert.equal(solver.checkRegionPlacement('1.5..2.84..63.12.7.2..5.....9..1....8.2.3674.3.7.2..9.47...8..1..16....926914.37.','a',2,1), 'true');
    done();
  });
/*test10*/
 test('Valid puzzle strings pass the solver', function(done) {
    var input = '1.5..2.84..63.12.7.2..5.....9..1....8.2.3674.3.7.2..9.47...8..1..16....926914.37.'
    assert.equal(solver.solve(input), '135762984946381257728459613694517832812936745357824196473298561581673429269145378');
    done();
  });
 /*test11*/
 test('Invalid puzzle strings fail the solver', function(done) {
    var input = '9.9..5.1.85.4....2432......1...69.83.9.....6.62.71...9......1945....4.37.4.3..6..'
    assert.equal(solver.solve(input), 'invalid');
    done();
  });
  
/*test12*/
 test('Solver returns the expected solution for an incomplete puzzle', function(done) {
    var input = '9.9..5.1.85.4....2432......1...69.83.9.....6.62.71...9......1945....4.37.4.3..6..'
    assert.equal(solver.solve(input), 'invalid');
    done();
  });
  



  
  
});
