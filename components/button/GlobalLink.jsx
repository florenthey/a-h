import React from "react";
import Link from "next/link";
import { links } from "../utils/links";

import { ButtonLink, StyledLink } from "./GlobalLink.style";

export default function GlobalLink({ typeLink }) {
  return links.map((type, i) => {
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
