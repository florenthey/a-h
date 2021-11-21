import React, { useState } from "react";
import Link from "next/link";
import { links } from "../../utils/links";
import HamburgerIcon from "../../icons/Hamburger";
import CrossIcon from "../../icons/Cross";
import useScreenSize from "@hooks/useScreenSize";
import { screensizeInt } from "@utils/mediaQueriesBreakpoints";

import { Wrapper, List } from "./navbar.style";

export default function Navbar() {
  const [isClicked, setIsClicked] = useState(false);
  const isNotDesktop = useScreenSize().width <= screensizeInt.tablet;
  const hamburger = (
    <HamburgerIcon
      width={25}
      height={25}
      fillColor="whiteSmoke"
      onClick={() => setIsClicked(true)}
    />
  );
  const cross = isNotDesktop && isClicked && (
    <CrossIcon
      width={18}
      height={18}
      strokeColor="whiteSmoke"
      fillColor="whiteSmoke"
      strokeWidth={2.5}
      onClick={() => {
        setIsClicked(false);
      }}
    />
  );
  const navbar = (
    <List
      onClick={() => {
        if (isNotDesktop) {
          setIsClicked(false);
        }
      }}
    >
      {links.map((link) => {
        const { value, path } = link;
        return (
          <li key={value}>
            <Link href={path}>
              <a>{value}</a>
            </Link>
          </li>
        );
      })}
    </List>
  );
  const displayer = () => {
    if (isNotDesktop && isClicked === false) {
      return hamburger;
    }
    return navbar;
  };

  return (
    <Wrapper>
      {cross}
      {displayer()}
    </Wrapper>
  );
}
