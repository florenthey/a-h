import React, { useEffect, useState } from "react";
import Link from "next/link";
import { navbarLinks } from "../../utils/navbarLinks";
import { subMenusCreationLinks } from "../../utils/subMenusCreationLinks";
import HamburgerIcon from "../../icons/Hamburger";
import CrossIcon from "../../icons/Cross";
import useScreenSize from "@hooks/useScreenSize";
import { screensizeInt } from "@utils/mediaQueriesBreakpoints";

import { Wrapper, List, CreationLink, SubMenus } from "./navbar.style";

export default function Navbar() {
  const [isIconClicked, setisIconClicked] = useState(false);
  const [isCreationClicked, setIsCreationClicked] = useState(false);
  const isNotDesktop = useScreenSize().width <= screensizeInt.tablet;

  useEffect(() => {
    setisIconClicked(false);
    setIsCreationClicked(false);
  }, [isNotDesktop]);

  const hamburger = (
    <HamburgerIcon
      width={25}
      height={25}
      fillColor="black"
      onClick={() => setisIconClicked(true)}
    />
  );

  const cross = (
    <CrossIcon
      width={18}
      height={18}
      strokeColor="black"
      fillColor="black"
      strokeWidth={2.5}
      onClick={() => {
        setisIconClicked(false);
      }}
    />
  );

  const navbar = (
    <List>
      {navbarLinks.map((link) => {
        const { value, path } = link;
        return (
          <li key={value}>
            {value !== "CRÉATION" ? (
              <Link href={path}>
                <a
                  onClick={() => {
                    if (isNotDesktop) {
                      setisIconClicked(false);
                    }
                    setIsCreationClicked(false);
                  }}
                >
                  {value}
                </a>
              </Link>
            ) : (
              <CreationLink
                onClick={() => setIsCreationClicked(!isCreationClicked)}
              >
                {value}
              </CreationLink>
            )}
          </li>
        );
      })}
    </List>
  );

  const subMenusCreation = (
    <SubMenus>
      {subMenusCreationLinks?.map((section) => {
        const { value, path } = section;
        return (
          <li key={value}>
            <Link href={path}>
              <a onClick={() => setIsCreationClicked(false)}>{value}</a>
            </Link>
          </li>
        );
      })}
    </SubMenus>
  );

  const iconConditionalDisplay =
    isNotDesktop && (isIconClicked ? cross : hamburger);

  const navbarConditionalDisplay =
    ((isNotDesktop && isIconClicked) || !isNotDesktop) && navbar;

  const subMenusCreationConditionalDisplay =
    isCreationClicked && subMenusCreation;

  return (
    <Wrapper>
      {iconConditionalDisplay}
      {navbarConditionalDisplay}
      {subMenusCreationConditionalDisplay}
    </Wrapper>
  );
}
