import { useEffect, useState } from "react";
import { Backdrop } from "./components/backdrop";
import { WinnerLine } from "./components/winnerLine";
import {
  AppWrapper,
  Button,
  Item,
  LineContainer,
  LineWrapper,
  Main,
} from "./styles";
import { IWinningCase } from "./types";
import { winningCases } from "./util/winningCases";

function App() {
  const [items, setItems] = useState([0, 0, 0, 0, 0, 0, 0, 0, 0]);
  const [turn, setTurn] = useState(1); // 1 = X, 2 = O
  const [winner, setWinner] = useState({
    haveWinner: false,
    winner: 0,
  });
  const [winnerLine, setWinnerLine] = useState<IWinningCase>();
  const [showBackdrop, setShowBackdrop] = useState(false);

  const handleClickItem = (index: number) => {
    const newItems = [...items];

    if (newItems[index] !== 0) return;
    newItems[index] = turn;
    setItems(newItems);
  };

  const checkWinner = () => {
    const haveWinner = winningCases.filter((item) => {
      return item.sequence.every((index) => {
        return items[index] === turn;
      });
    });

    console.log(haveWinner);
    checkDraw();
    if (haveWinner.length === 0) return;

    console.log("winner", turn);
    setWinnerLine(haveWinner[0]);
    setWinner({
      haveWinner: true,
      winner: turn,
    });
    setShowBackdrop(true);
    // alert(` ${turn === 1 ? "X" : "O"} is the winner!`);
  };

  const checkDraw = () => {
    if (items.every((item) => item !== 0) && !winner.haveWinner) {
      console.log("draw");
      setWinner({
        haveWinner: false,
        winner: turn,
      });
      setShowBackdrop(true);
    }
  };

  const handleHideBackdrop = () => {
    setShowBackdrop(false);
  };

  const handleRestart = () => {
    setItems([0, 0, 0, 0, 0, 0, 0, 0, 0]);
    setTurn(1);
    setWinner({
      haveWinner: false,
      winner: 0,
    });
    setWinnerLine(undefined);
    setShowBackdrop(false);
  };

  useEffect(() => {
    checkWinner();
    setTurn((turn) => (turn === 1 ? 2 : 1));
  }, [items]);

  return (
    <>
      <AppWrapper>
        <div>
          <Button onClick={() => handleRestart()}>Restart</Button>
        </div>

        {winnerLine && (
          <LineWrapper>
            <LineContainer>
              <WinnerLine
                style={winnerLine.style}
                type={winnerLine.line}
                winnerLine={winnerLine.line}
              />
            </LineContainer>
          </LineWrapper>
        )}
        <Main>
          {items.map((item, index) => (
            <Item
              onClick={() => !winner.haveWinner && handleClickItem(index)}
              key={index}
            >
              {item === 1 ? "X" : item === 2 ? "O" : ""}
            </Item>
          ))}
        </Main>
      </AppWrapper>

      <Backdrop
        show={showBackdrop}
        onHide={() => handleHideBackdrop()}
        winner={winner.winner}
        haveWinner={winner.haveWinner}
      />
    </>
  );
}

export default App;
