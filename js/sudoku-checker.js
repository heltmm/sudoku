function Sudoku(array) {
  this.puzzle = array;
}


Sudoku.prototype.checker = function(array) {
  var checker = [1,2,3,4,5,6,7,8,9];

  for(var i = 0; i < 9; i++){
    sorted = array[i].sort()
    for(var j = 0; j < 9; j++){
      if(sorted[j] != checker[j]){
        return false;
      };
    };
  };
  return true;
};

Sudoku.prototype.createColumns = function(){
  var columns = [[],[],[],[],[],[],[],[],[]]
  for(var i = 0; i < 9; i++){
    for(var j = 0; j < 9; j++){
      columns[i].push(this.puzzle[i][j])
    }
  }
  return columns
}
Sudoku.prototype.checkQuad = function() {
  quads = [[],[],[],[],[],[],[],[],[]]
  for(var i = 0; i < 9; i ++) {
    for(var j = 0; j < 9; j++) {
      if (i < 3 && j < 3) {
        quads[0].push(this.puzzle[i][j])
      }else if (i < 6 && j < 3) {
        quads[1].push(this.puzzle[i][j])
      }else if (i < 9 && j < 3) {
        quads[2].push(this.puzzle[i][j])
      }else if (i < 3 && j < 6) {
        quads[3].push(this.puzzle[i][j])
      }else if (i < 6 && j < 6) {
        quads[4].push(this.puzzle[i][j])
      }else if (i < 9 && j < 6) {
        quads[5].push(this.puzzle[i][j])
      }else if (i < 3 && j < 9) {
        quads[6].push(this.puzzle[i][j])
      }else if (i < 6 && j < 9) {
        quads[7].push(this.puzzle[i][j])
      }else if (i < 9 && j < 9) {
        quads[8].push(this.puzzle[i][j])
      }
    }
  }
  return quads
}
//
// array2 = [[1,2,3,4,5,6,7,8,9],
//         [2,3,4,5,6,7,8,9,1],
//         [3,4,5,6,7,8,9,1,2],
//         [4,5,6,7,8,9,1,2,3],
//         [5,6,7,8,9,1,2,3,4],
//         [6,7,8,9,1,2,3,4,5],
//         [7,8,9,1,2,3,4,5,6],
//         [8,9,1,2,3,4,5,6,7],
//         [9,1,2,3,4,5,6,7,8]]
//


// JSfiddle testing params
array = [[3,9,1,2,8,6,5,7,4],
        [4,8,7,3,5,9,1,2,6],
        [6,5,2,7,1,4,8,3,9],
        [8,7,5,4,3,1,6,9,2],
        [2,1,3,9,6,7,4,8,5],
        [9,6,4,5,2,8,7,1,3],
        [1,4,9,6,7,3,2,5,8],
        [5,3,8,1,4,2,9,6,7],
        [7,2,6,8,9,5,3,4,1]]



test = new Sudoku(array)

test.checker(test.checkQuad())
test.checker(array)
test.checker(test.createColumns())
