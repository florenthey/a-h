import { device } from "@utils/mediaQueriesBreakpoints";
import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Links = styled.div`
  display: flex;
  justify-content: space-around;
  width: 100%;
  margin: 50px 0 100px 0;

  @media ${device.mobileL} {
    flex-direction: column;
    justify-content: center;
    width: unset;
    margin: 50px 0 70px 0;
    gap: 10px;
  }
`;
