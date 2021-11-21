import React, { useEffect, useState } from "react";
import Link from "next/link";
import { navbarLinks } from "../../utils/navbarLinks";
import { creationSectionsLinks } from "../../utils/creationSectionsLinks";
import HamburgerIcon from "../../icons/Hamburger";
import CrossIcon from "../../icons/Cross";
import useScreenSize from "@hooks/useScreenSize";
import { screensizeInt } from "@utils/mediaQueriesBreakpoints";

import { Wrapper, List, Creation } from "./navbar.style";

export default function Navbar() {
  const [isIconClicked, setisIconClicked] = useState(false);
  const [isCreationClicked, setIsCreationClicked] = useState(false);
  const isNotDesktop = useScreenSize().width <= screensizeInt.tablet;

  useEffect(() => {
    if (isNotDesktop) {
      setisIconClicked(false);
    }
  }, [isNotDesktop]);

  const hamburger = (
    <HamburgerIcon
      width={25}
      height={25}
      fillColor="whiteSmoke"
      onClick={() => setisIconClicked(true)}
    />
  );

  const cross = (
    <CrossIcon
      width={18}
      height={18}
      strokeColor="whiteSmoke"
      fillColor="whiteSmoke"
      strokeWidth={2.5}
      onClick={() => {
        setisIconClicked(false);
      }}
    />
  );

  const subMenusCreation = (
    <ul>
      {creationSectionsLinks?.map((section) => {
        const { value, path } = section;
        return (
          <li key={value}>
            <Link href={path}>
              <a>{value}</a>
            </Link>
          </li>
        );
      })}
    </ul>
  );

  const navbar = (
    <List
    // onClick={() => {
    //   if (isNotDesktop) {
    //     setisIconClicked(false);
    //   }
    // }}
    >
      {navbarLinks.map((link) => {
        const { value, path } = link;
        return (
          <li key={value}>
            <Link href={path}>
              {value !== "CRÉATION" ? (
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
              ) : (
                <Creation
                  onClick={() => setIsCreationClicked(!isCreationClicked)}
                >
                  {value}
                </Creation>
              )}
            </Link>
          </li>
        );
      })}
    </List>
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
