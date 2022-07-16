import styled from "styled-components";

export const WrapperCentring = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
`;

export const Inner = styled.div`
  max-width: ${(props) => props.theme.maxWidth};
  margin: 50px;
`;

export const Button = styled.button`
  background: none;
  color: inherit;
  border: none;
  padding: 0;
  font: inherit;
  cursor: pointer;
  outline: inherit;
`;
