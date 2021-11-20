import React from "react";
import Link from "next/link";
import { links } from "../../utils/links";
import HamburgerIcon from "../../icons/Hamburger";
import CrossIcon from "../../icons/Cross";
import useScreenSize from "@hooks/useScreenSize";
import { screensizeInt } from "@utils/mediaQueriesBreakpoints";

import { Wrapper, List } from "./navbar.style";

export default function Navbar() {
  // NAVBAR RESPONSIVE EN COURS
  const isNotDesktop = useScreenSize().width <= screensizeInt.tablet;
  const hamburger = <HamburgerIcon onClick={() => {}} />;
  const cross = <CrossIcon />;
  const navbar = (
    <List>
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

  return <Wrapper>{isNotDesktop ? hamburger : navbar}</Wrapper>;
}
