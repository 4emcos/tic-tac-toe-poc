import styled from "styled-components";

const Line = styled.span<{}>`
  background-color: red;
  position: absolute;
  border-radius: 1rem;
`;

interface WinnerLineProps {
  winnerLine: string;
  type: string;
  style: React.CSSProperties;
}

const WinnerLine = ({ winnerLine, type, style }: WinnerLineProps) => {
  return (
    <Line
      className={winnerLine}
      style={{
        ...style,
      }}
    />
  );
};

export { WinnerLine };
