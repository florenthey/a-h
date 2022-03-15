import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 1200px;
  top: 150px;
  max-height: 900px;
`;

export const Overlay = styled.div`
  position: fixed;
  width: ${(width) => width || "100%"};
  height: ${(height) => height || "100%"};
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 1);
  z-index: 1;
  overflow: hidden;
`;

export const Wrapper = styled.div`
  z-index: 2;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  margin-top: 30px;
  /* position: fixed; */
`;
