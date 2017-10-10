function Sudoku(array) {
  this.puzzle = [[1,2,3,4,5,6,7,8,9],
                [2,3,4,5,6,7,8,9,1],
                [3,4,5,6,7,8,9,1,2],
                [4,5,6,7,8,9,1,2,3],
                [5,6,7,8,9,1,2,3,4],
                [6,7,8,9,1,2,3,4,5],
                [7,8,9,1,2,3,4,5,6],
                [8,9,1,2,3,4,5,6,7],
                [9,1,2,3,4,5,6,7,8]];
}



Sudoku.prototype.checker = function() {
  var checker = [1,2,3,4,5,6,7,8,9];

  for(let i = 0; i < 9; i++){
    sorted = this.puzzle[i].sort()
    for(let j = 0; j < 9; j++){
      if(sorted[j] != checker[j]){
        return false;
      };
    };
  };
  return true;
};
