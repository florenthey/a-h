import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  top: 150px;
  /* max-height: 900px; */
  overflow: hidden;
  box-sizing: border-box;
`;

export const Overlay = styled.div`
  position: fixed;
  width: 100%;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 1);
  z-index: 1;
  overflow: hidden;
  box-sizing: border-box;
`;

export const Wrapper = styled.div`
  z-index: 2;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  margin-top: 30px;
  box-sizing: border-box;
`;
