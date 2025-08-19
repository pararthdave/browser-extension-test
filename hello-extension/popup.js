class TicTacToe {
  constructor() {
    this.board = Array(9).fill('');
    this.currentPlayer = 'X';
    this.gameActive = true;
    this.statusElement = document.getElementById('status');
    this.cells = document.querySelectorAll('.cell');
    this.resetBtn = document.getElementById('resetBtn');
    this.themeToggle = document.getElementById('themeToggle');
    this.currentTheme = 'light';
    
    this.winningConditions = [
      [0, 1, 2], [3, 4, 5], [6, 7, 8],
      [0, 3, 6], [1, 4, 7], [2, 5, 8],
      [0, 4, 8], [2, 4, 6]
    ];
    
    this.init();
  }
  
  init() {
    this.cells.forEach((cell, index) => {
      cell.addEventListener('click', () => this.handleCellClick(index));
    });
    
    this.resetBtn.addEventListener('click', () => this.resetGame());
    this.themeToggle.addEventListener('click', () => this.toggleTheme());
    
    this.loadTheme();
    this.updateStatus();
  }
  
  handleCellClick(index) {
    if (this.board[index] !== '' || !this.gameActive) {
      return;
    }
    
    this.makeMove(index);
    this.checkGameResult();
  }
  
  makeMove(index) {
    this.board[index] = this.currentPlayer;
    const cell = this.cells[index];
    cell.textContent = this.currentPlayer;
    cell.classList.add(this.currentPlayer.toLowerCase());
    cell.style.pointerEvents = 'none';
  }
  
  checkGameResult() {
    let roundWon = false;
    
    for (let condition of this.winningConditions) {
      const [a, b, c] = condition;
      if (this.board[a] && this.board[a] === this.board[b] && this.board[a] === this.board[c]) {
        roundWon = true;
        this.highlightWinningCells(condition);
        break;
      }
    }
    
    if (roundWon) {
      this.statusElement.textContent = `Player ${this.currentPlayer} Wins!`;
      this.gameActive = false;
      return;
    }
    
    if (!this.board.includes('')) {
      this.statusElement.textContent = `It's a Tie!`;
      this.gameActive = false;
      return;
    }
    
    this.switchPlayer();
  }
  
  highlightWinningCells(condition) {
    condition.forEach(index => {
      this.cells[index].style.backgroundColor = '#2ecc71';
      this.cells[index].style.color = 'white';
    });
  }
  
  switchPlayer() {
    this.currentPlayer = this.currentPlayer === 'X' ? 'O' : 'X';
    this.updateStatus();
  }
  
  updateStatus() {
    if (this.gameActive) {
      this.statusElement.textContent = `Player ${this.currentPlayer}'s Turn`;
    }
  }
  
  resetGame() {
    this.board = Array(9).fill('');
    this.currentPlayer = 'X';
    this.gameActive = true;
    
    this.cells.forEach(cell => {
      cell.textContent = '';
      cell.className = 'cell';
      cell.style.backgroundColor = '';
      cell.style.color = '';
      cell.style.pointerEvents = 'auto';
    });
    
    this.updateStatus();
  }
  
  toggleTheme() {
    this.currentTheme = this.currentTheme === 'light' ? 'dark' : 'light';
    this.applyTheme();
    this.saveTheme();
  }
  
  applyTheme() {
    const body = document.body;
    if (this.currentTheme === 'dark') {
      body.setAttribute('data-theme', 'dark');
      this.themeToggle.textContent = 'Light';
    } else {
      body.removeAttribute('data-theme');
      this.themeToggle.textContent = 'Dark';
    }
  }
  
  loadTheme() {
    chrome.storage.sync.get(['theme'], (result) => {
      if (result.theme) {
        this.currentTheme = result.theme;
      }
      this.applyTheme();
    });
  }
  
  saveTheme() {
    chrome.storage.sync.set({ theme: this.currentTheme });
  }
}

document.addEventListener('DOMContentLoaded', () => {
  new TicTacToe();
});
