import styled from "styled-components";
import { device } from "@utils/mediaQueriesBreakpoints";

export const NavbarLinks = styled.ul`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-family: "Raleway", sans-serif;

  /* display: grid; */
  /* grid-template-columns: repeat(5, 1fr);
  grid-template-rows: 1fr; */
  @media ${device.tablet} {
    flex-direction: column;
    gap: 40px;
  }
`;

export const Wrapper = styled.div`
  /* background: orange; */
`;

export const CreationLink = styled.li`
  cursor: pointer;
`;

export const SubMenus = styled.ul`
  font-family: "Raleway", sans-serif;
`;

export const A = styled.a`
  color: black;
  text-decoration: none;
`;
