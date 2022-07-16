import styled from "styled-components";
import { device } from "@utils/mediaQueriesBreakpoints";

export const NavbarLinks = styled.ul`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-family: "Raleway", sans-serif;
  font-size: 1.2rem;
  margin: 0;
  padding: 0;

  /* grid-template-columns: repeat(5, 1fr);
  grid-template-rows: 1fr; */
  @media ${device.tablet} {
    flex-direction: column;
    gap: 40px;
    border-bottom: none;
    padding-bottom: 25px;
  }
`;

export const Wrapper = styled.div`
  border-bottom: 1px solid #e5e5e5;
  padding: 20px;
`;

export const CreationLink = styled.li`
  cursor: pointer;
`;

export const SubMenus = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 5px;
  font-family: "Raleway", sans-serif;
  position: absolute;
  right: 18.5%;
  top: 4%;
`;

export const A = styled.a`
  color: black;
  text-decoration: none;
`;
