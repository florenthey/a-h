import React from "react";
import Link from "next/link";
import { navbarLinks } from "../utils/navbarLinks";

import { ButtonLink, StyledLink } from "./GlobalLink.style";

export default function GlobalLink({ typeLink }) {
  return navbarLinks.map((type, i) => {
    const { typeLinkValue, path, value } = type;
    if (typeLink === typeLinkValue) {
      return (
        <ButtonLink key={i}>
          <Link href={path}>
            <StyledLink>{value}</StyledLink>
          </Link>
        </ButtonLink>
      );
    }
  });
}
