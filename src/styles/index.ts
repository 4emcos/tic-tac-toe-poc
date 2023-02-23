import styled from "styled-components";

const AppWrapper = styled.div`
  width: 100vw;
  height: 100vh;
  display: grid;
  place-items: center;

  grid-template-rows: 60px 1fr;
`;

const Main = styled.div`
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

  &:nth-child(-n + 3) {
    border-top: none;
  }
  &:nth-child(n + 7) {
    border-bottom: none;
  }
`;

const LineContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;

  @media screen and (max-height: 920px) {
    .horizontal-1 {
      top: 17% !important;
    }
    .horizontal-3 {
      top: 81% !important;
    }
  }
  @media screen and (max-height: 740px) {
    .diagonal-1 {
      rotate: 50deg !important;
    }
    .diagonal-2 {
      rotate: 130deg !important;
    }
  }
  @media screen and (max-height: 700px) {
    .diagonal-1 {
      rotate: 55deg !important;
    }
    .diagonal-2 {
      rotate: 125deg !important;
    }
  }
  @media screen and (max-width: 650px) {
    .diagonal-1 {
      rotate: 35deg !important;
    }
    .diagonal-2 {
      rotate: 145deg !important;
    }
  }
`;

const LineWrapper = styled.div`
  position: absolute;
  pointer-events: none;
  top: 53%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
  height: 100%;
  max-width: 50em;
  max-height: 50em;
`;

const Button = styled.button`
  background-color: #e0e1dd;
  font-size: 1.5rem;

  display: grid;
  text-align: center;
  align-items: center;

  color: black;

  cursor: pointer;

  &:hover {
    background-color: #778da9;
    color: white;
  }
`;

export { AppWrapper, Main, Item, LineContainer, LineWrapper, Button };
