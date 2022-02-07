import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  max-width: 1200px;
  max-height: 300px;
`;

export const Overlay = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 1);
  z-index: 1;
`;

export const Wrapper = styled.div`
  position: absolute;
  z-index: 2;
`;

export const Navigation = styled.div`
  display: flex;
  justify-content: center;
`;

export const ImageNumber = styled.p`
  color: whiteSmoke;
`;
