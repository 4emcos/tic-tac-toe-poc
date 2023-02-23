interface WinnerLineProps {
  winnerLine: string;
  type: string;
  style: React.CSSProperties;
}

interface IWinningCase {
  sequence: number[];
  line: string;
  style: React.CSSProperties;
}

export type { WinnerLineProps, IWinningCase };
