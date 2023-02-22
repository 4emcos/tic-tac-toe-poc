import { useEffect, useState } from "react";
import ReactCanvasConfetti from "react-canvas-confetti";
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

  cursor: pointer;

  &:hover {
    background-color: #778da9;
    color: white;
  }

  &:nth-child(3n) {
    border-right: none;
  }
  &:nth-child(3n + 1) {
    border-left: none;
  }
`;

const Bar = styled.span`
  background-color: red;

  position: absolute;
  top: 20%;
  left: 22%;
  bottom: 0;
  right: 0;
  width: 45em;
  height: 12px;
`;

const VerticalBar = styled.span`
  background-color: red;

  position: absolute;
  top: 5%;
  left: 30%;
  bottom: 0;
  right: 0;
  width: 12px;
  height: 35em;
`;

const winningCases = [
  {
    case: [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
    ],
    line: "horizontal",
  },
  {
    case: [
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
    ],
    line: "vertical",
  },
  {
    case: [
      [0, 4, 8],
      [2, 4, 6],
    ],
    line: "diagonal",
  },
  {
    case: [
      [8, 4, 0],
      [6, 4, 2],
    ],
    line: "reverse-diagonal",
  },
];

// [
//   // horizontal
//   [0, 1, 2],
//   [3, 4, 5],
//   [6, 7, 8],

//   // vertical
//   [0, 3, 6],
//   [1, 4, 7],
//   [2, 5, 8],

//   // diagonal
//   [0, 4, 8],
//   [2, 4, 6],

//   // reverse diagonal
//   [8, 4, 0],
//   [6, 4, 2],
// ];

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
    const haveWinner = winningCases.filter((item) => {
      return item.case.some((item) => {
        return (
          items[item[0]] === items[item[1]] &&
          items[item[1]] === items[item[2]] &&
          items[item[0]] !== 0
        );
      });
    });

    console.log(haveWinner);
    if (haveWinner.length === 0) return;

    console.log("winner", turn);
    setHaveWinner(true);
    alert(` ${turn === 1 ? "X" : "O"} is the winner!`);
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
    <>
      <ReactCanvasConfetti
        style={{
          position: "fixed",
          pointerEvents: "none",
          width: "100%",
          height: "100%",
          top: 0,
          left: 0,
        }}
        colors={[
          "#26ccff",
          "#a25afd",
          "#ff5e7e",
          "#88ff5a",
          "#fcff42",
          "#ffa62d",
          "#ff36ff",
        ]}
        decay={0.8}
        drift={0}
        gravity={1}
        origin={{
          x: 0.5,
          y: 0.5,
        }}
        particleCount={100}
        resize
        scalar={1}
        shapes={["circle", "square"]}
        spread={360}
        startVelocity={45}
        ticks={600}
        angle={1}
        zIndex={-1}
        fire={haveWinner}
      />
      <AppWrapper>
        <MainComponent>
          <Bar />
          <Bar
            style={{
              top: "50%",
            }}
          />
          <Bar
            style={{
              top: "80%",
            }}
          />

          <VerticalBar />

          <VerticalBar
            style={{
              left: "50%",
            }}
          />
          <VerticalBar
            style={{
              left: "70%",
            }}
          />
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
    </>
  );
}

export default App;
