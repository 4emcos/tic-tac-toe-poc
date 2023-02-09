import { useEffect, useState } from "react";
import styled from "styled-components";

const AppWrapper = styled.div`
  width: 100vw;
  height: 100vh;
  display: grid;
  place-items: center;
`;

const MainComponent = styled.div`
  width: 100%;
  height: 100%;

  max-width: 50em;
  max-height: 50em;

  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(3, 1fr);
`;

const Item = styled.button`
  background-color: #e0e1dd;
  font-size: 2rem;

  display: grid;
  text-align: center;
  align-items: center;

  color: black;

  border: 0.1em solid #0d1b2a;

  cursor: pointer;

  &:hover {
    background-color: #778da9;
    color: white;
  }
`;

const Bar = styled.span`
  background-color: #e0e1dd;
  font-size: 2rem;
  position: absolute;
  top: 0;
  left: 0;
  width: 1%;
  height: 10%;
`;

const winningCase = [
  // horizontal
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],

  // vertical
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],

  // diagonal
  [0, 4, 8],
  [2, 4, 6],

  // reverse diagonal
  [8, 4, 0],
  [6, 4, 2],
];

function App() {
  const [items, setItems] = useState([0, 0, 0, 0, 0, 0, 0, 0, 0]);
  const [turn, setTurn] = useState(1); // 1 = X, 2 = O
  const [haveWinner, setHaveWinner] = useState(false);

  const handleClickItem = (index: number) => {
    const newItems = [...items];

    if (newItems[index] !== 0) return;
    newItems[index] = turn;
    setItems(newItems);
  };

  const checkWinner = () => {
    winningCase.forEach((item) => {
      if (
        items[item[0]] === items[item[1]] &&
        items[item[1]] === items[item[2]] &&
        items[item[0]] !== 0
      ) {
        console.log("winner", turn);
        setHaveWinner(true);
        alert(` ${turn === 1 ? "X" : "O"} is the winner!`);
      }
    });
  };

  const checkDraw = () => {
    if (items.every((item) => item !== 0) && !haveWinner) {
      console.log("draw");
      alert("Draw!");
    }
  };
  useEffect(() => {
    checkWinner();
    setTurn((turn) => (turn === 1 ? 2 : 1));
    checkDraw();
  }, [items]);

  return (
    <AppWrapper>
      <MainComponent>
        <Bar />
        {items.map((item, index) => (
          <Item
            onClick={() => !haveWinner && handleClickItem(index)}
            key={index}
          >
            {item === 1 ? "X" : item === 2 ? "O" : ""}
          </Item>
        ))}
      </MainComponent>
    </AppWrapper>
  );
}

export default App;
