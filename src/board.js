class Board {
    constructor(n) {    
        // init board data.
        let board = []
        for (let i = 0; i <= n; i++) {
            board[i] = [];
            for (let j = 0; j <= n; j++) {
                board[i][j] = 0;
            }
        }
        this.data = [...board];
        // init counter
        let emptyCounter = [];
        for (let i = 0; i <= n; i++) {
           emptyCounter[i] = 0;
        }
      
        this.rowCounters = [...emptyCounter];
        this.colCounters = [...emptyCounter];
        this.diagCounters = [...emptyCounter];
        this.inverseDiagCounters = [...emptyCounter];
    }
}

export default Board;