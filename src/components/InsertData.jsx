import React, { createContext, useState } from "react";
import Board from "./Board";
export const AppContext = createContext();

const InsertData = ({ board, setBoard, boardF, setBoardF, clickHandler }) => {
  const [isSolve, setIsSolve] = useState(false);
  const handleSolve = () => {
    clickHandler();
    if (board.includes("")) return;
    if (boardF.includes("")) return;
    setIsSolve(true);
  };
  return (
    <div className="insert">
      <nav className="headS">
        <div className="names">
          <div className="col1">
            <h4 className="name">ريم حوري Reem_12334</h4>
            <h4 className="name">محمود الحسن mahmoud_112673</h4>
          </div>
          <div className="col2">
            <h4 className="name">ليليان ابراهيم Lilian_110309</h4>
            <h4 className="name">ماهر محمد Maher_108274</h4>
          </div>
        </div>
        <h1 className="headerS">Puzzle 8</h1>
      </nav>
      <AppContext.Provider value={{ board, setBoard, boardF, setBoardF }}>
        <div className="boards">
          <div className="start-board">
            <h2 className="start-h">Start Board</h2>
            <Board final={false} />
          </div>
          <div className="final-board">
            <h2 className="final-h">final Board</h2>
            <Board final={true} />
          </div>
        </div>
      </AppContext.Provider>
      <div className="solve-button">
        {isSolve ? (
          <h1 className="text-S">The solution is in progress.....</h1>
        ) : (
          <button className="button-76" onClick={handleSolve}>
            Solve
          </button>
        )}
      </div>
    </div>
  );
};

export default InsertData;
