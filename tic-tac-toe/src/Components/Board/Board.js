import React from "react";
import Square from "./Component/Square/Square";
class Board extends React.Component {
  renderSquare(i) {
    return <Square value={i} />;
  }
  render() {
    const status = "Next player: X";
    return (
      <div>
        <div>{status}</div>
        <div className="board-row">
          {this.renderSquare(0)}
          {this.renderSquare(0)}
          {this.renderSquare(0)}
          <div className="board-row">
            {this.renderSquare(0)}
            {this.renderSquare(0)}
            {this.renderSquare(0)}
          </div>
          <div className="board-row">
            {this.renderSquare(0)}
            {this.renderSquare(0)}
            {this.renderSquare(0)}
          </div>
        </div>
      </div>
    );
  }
}
export default Board;
