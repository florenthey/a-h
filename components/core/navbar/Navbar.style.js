import styled from "styled-components";
import { device } from "@utils/mediaQueriesBreakpoints";

export const List = styled.ul`
  list-style: none;
  display: flex;
  justify-content: space-between;
  /* display: grid; */
  /* grid-template-columns: repeat(5, 1fr);
  grid-template-rows: 1fr; */
  @media ${device.tablet} {
    flex-direction: column;
    gap: 40px;
  }
`;

export const Wrapper = styled.div`
  background: orange;
`;

export const Creation = styled.p`
  cursor: pointer;
`;
