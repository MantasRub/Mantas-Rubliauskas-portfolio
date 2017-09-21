var TicTacToe = function() {
      this.counter = 0;
      this.context = $('#tic-tac-toe');

      $(this.context).find('td').on('click', this.cellClicked.bind(this));
    };

    TicTacToe.prototype.putX = function(x, y) {
      var cell = $(this.context).find('[data-position-x="' + x + '"][data-position-y="' + y + '"]');
      if(cell.html().length === 0) {
        cell.html('X');
        this.counter++;

        var this2 = this;
        setTimeout(function() {
          this2.checkWinner();  
        }, 250);
      }
    };

    TicTacToe.prototype.putO = function(x, y) {
      var cell = $(this.context).find('[data-position-x="' + x + '"][data-position-y="' + y + '"]');
      if(cell.html().length === 0) {
        cell.html('O');
        this.counter++;

        var this2 = this;
        setTimeout(function() {
          this2.checkWinner();  
        }, 250);
      }
    };

    TicTacToe.prototype.checkWinner = function() {
      var cells = $(this.context).find('td');

      if(
        this.checkLine(cells[0], cells[1], cells[2]) ||
        this.checkLine(cells[3], cells[4], cells[5]) ||
        this.checkLine(cells[6], cells[7], cells[8]) ||
        this.checkLine(cells[0], cells[3], cells[6]) ||
        this.checkLine(cells[1], cells[4], cells[7]) ||
        this.checkLine(cells[2], cells[5], cells[8]) ||
        this.checkLine(cells[0], cells[4], cells[8]) ||
        this.checkLine(cells[2], cells[4], cells[6])
        ) {
        if(this.counter % 2 == 0) {
          alert("Laimejo O");
        } else {
          alert("Laimejo X");
        }

        this.counter = 0;
        $(cells).html('');

      } else if(this.counter == 9) {
        alert("Lygiosios");

        this.counter = 0;
        $(cells).html('');
      }
    };

    TicTacToe.prototype.checkLine = function(c1, c2, c3) {
      if(
        c1.innerHTML != '' && 
        c1.innerHTML == c2.innerHTML && 
        c2.innerHTML == c3.innerHTML
        ) {
        return true;
    } else {
      return false;
    }
  };

  TicTacToe.prototype.cellClicked = function(event) {
    var x = event.target.dataset.positionX;
    var y = event.target.dataset.positionY;

    if(this.counter % 2 == 0) {
      this.putX(x, y);
    } else {
      this.putO(x, y);
    }
  };

  var ticTacToe = new TicTacToe();