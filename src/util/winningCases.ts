import { IWinningCase } from "../types";

const winningCases: IWinningCase[] = [
  {
    sequence: [0, 1, 2],
    line: "horizontal-1",
    style: {
      left: "12%",
      top: "15%",
      right: "6%",
      maxWidth: "37em",
      height: "2em",
    },
  },
  {
    sequence: [3, 4, 5],
    line: "horizontal-2",
    style: {
      left: "12%",
      top: "48%",
      right: "6%",
      maxWidth: "37em",
      height: "2em",
    },
  },
  {
    sequence: [6, 7, 8],
    line: "horizontal-3",
    style: {
      left: "12%",
      top: "82%",
      right: "6%",
      maxWidth: "37em",
      height: "2em",
    },
  },
  {
    sequence: [0, 3, 6],
    line: "vertical-1",
    style: {
      left: "15%",
      top: "12%",
      right: "0",
      width: "2em",
      height: "40em",
    },
  },
  {
    sequence: [1, 4, 7],
    line: "vertical-2",
    style: {
      left: "48%",
      top: "12%",
      right: "0",
      width: "2em",
      height: "40em",
    },
  },
  {
    sequence: [2, 5, 8],
    line: "vertical-3",
    style: {
      left: "82%",
      top: "12%",
      right: "0",
      width: "2em",
      height: "40em",
    },
  },
  {
    sequence: [0, 4, 8],
    line: "diagonal-1",
    style: {
      left: "48%",
      top: "1%",
      width: "2em",
      height: "100%",
      rotate: "45deg",
    },
  },
  {
    sequence: [2, 4, 6],
    line: "diagonal-2",
    style: {
      left: "48%",
      top: "1%",
      width: "2em",
      height: "100%",
      rotate: "135deg",
    },
  },
];

export { winningCases };
