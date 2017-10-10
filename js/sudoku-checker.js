export class Sudoku {
  constructor() {
    this.board = [[],[],[],[],[],[],[],[],[]];
    for (let i = 0; i < 9; i++) {
      for (let j = 0; j < 9; i ++)
        this.board[i].push(j);
      }
    }
  }


  // Initializes every sudoku with a 9x9 matrix
  rowValidator(array) {
    checker = [1,2,3,4,5,6,7,8,9]
    
    console.log(this.board);
    for(let i = 0; i < 9; i++){

    }
    return true;
  }
};
