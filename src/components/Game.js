import React, { useState } from "react";
import Score from "./Score";
import Board from "./Board";
import Timer from "./Timer";
import "./styles.css";
import { ScoreProvider } from "../scoreContext";
import "./Game.css";
import GameOver from "./GameOver";

let numCards = 16;
export default function Game() {
  const [score, setScore] = useState(0);
  const [win, setWin] = useState(false);
  const [isGameInitialized, setIsGameInitialized] = useState(false);
  const [appKey, setAppKey] = useState(0);
  const [matchesArray, setMatchesArray] = useState([]);

  return (
    <div className="Game" key={appKey}>
      <Timer />
      <ScoreProvider
        value={{
          score: score,
          updateScore: () => {
            let updatedScore = score + 1;
            setScore(updatedScore);
            if (updatedScore === numCards / 2) {
              setWin(true);
            }
          },
          updateMatchesArray: (val) => {
            setMatchesArray((prevVal) => {
              return [...prevVal, val];
            });
          },
          win: win,
          resetGame: () => {
            setAppKey(appKey + 1);
            setWin(false);
            setScore(0);
            setMatchesArray([]);
          },
          matchesArray: matchesArray,
          isGameInitialized: isGameInitialized,
          setIsGameInitialized: setIsGameInitialized,
        }}
      >
        <Score />
        <Board />
      </ScoreProvider>
      <GameOver />
    </div>
  );
}