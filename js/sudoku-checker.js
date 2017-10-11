function Sudoku(array) {
  this.puzzle = array;
}


Sudoku.prototype.checker = function() {
  var checker = [1,2,3,4,5,6,7,8,9];

  for(var i = 0; i < 9; i++){
    sorted = this.puzzle[i].sort()
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

Sudoku.prototype.isCorrect = function() {
  if self.checker() === false {
    return false
  }
  new_sudoku = new Sudoku(self.createColumns())

  if new_sudoku.checker() === false {
    return false
  }
}
array = [[1,2,3,4,5,6,7,8,9],
        [2,3,4,5,6,7,8,9,1],
        [3,4,5,6,7,8,9,1,2],
        [4,5,6,7,8,9,1,2,3],
        [5,6,7,8,9,1,2,3,4],
        [6,7,8,9,1,2,3,4,5],
        [7,8,9,1,2,3,4,5,6],
        [8,9,1,2,3,4,5,6,7],
        [9,1,2,3,4,5,6,7,8]]
