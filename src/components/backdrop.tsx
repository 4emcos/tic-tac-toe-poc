import { useEffect, useState } from "react";
import ReactCanvasConfetti from "react-canvas-confetti";
import styled from "styled-components";

const BackdropWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 100;
`;

const BackdropText = styled.div`
  font-size: 3rem;
  color: white;
`;

const Backdrop = (props: {
  winner: any;
  haveWinner: boolean;
  onHide: Function;
  show: boolean;
}) => {
  const { winner, haveWinner } = props;

  const [fire, setFire] = useState(false);
  const [backdropText, setBackdropText] = useState("");

  useEffect(() => {
    if (haveWinner) {
      setFire(true);
      setBackdropText(`Player ${winner === 1 ? "X" : "O"} wins!`);
    } else if (!haveWinner) {
      setBackdropText("Draw!");
    }
  }, [haveWinner]);

  console.log("🚀 ~ file: backdrop.tsx:24 ~ Backdrop ~ props:", props);

  return (
    <BackdropWrapper
      onClick={() => props.onHide()}
      style={{ display: props.show ? "flex" : "none" }}
    >
      <BackdropText> {backdropText}</BackdropText>
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
        fire={fire}
      />
    </BackdropWrapper>
  );
};

export { Backdrop };
