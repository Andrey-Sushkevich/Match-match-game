import React from "react";
import { ScoreConsumer } from "../scoreContext";

const Score = () => {
  return (
    <ScoreConsumer>
      {(value) => {
        if (value.win === false) {
          return <h2>Matches: {value.score}</h2>;
        } else {
          return (
            <div className="win">
              <h2>Congratulations you win!</h2>
              <button className="restart" type="button" onClick={value.resetGame}>
                Reset
              </button>
            </div>
          );
        }
      }}
    </ScoreConsumer>
  );
};

export default Score;