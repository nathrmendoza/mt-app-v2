import styled, { css } from "styled-components";

export const GlobalWrapper = styled.div`
  position: relative;
  width: 100vw;
  min-height: 100vh;
  padding-bottom: 100px;
`;

export const InnerWrapper = styled.div`
  width: 100%;
  min-height: calc(100% - 112px);
  padding: 0 20px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const GridWrapper = styled.div`
  display: grid;
  height: 100%;
  grid-template-columns: repeat(12, minmax(0, 1fr));
  column-gap: 15px;

  ${(props) =>
    props.vertalign === "center" &&
    css`
      align-items: center;
    `}
`;
