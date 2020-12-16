import React from "react";
import Link from "next/link";
import { types } from "../../services/Links";

import { ButtonLink, StyledLink } from "./GlobalLink.style";

export default function GlobalLink({ typeLink }) {
  return types.map((type, i) => {
    if (typeLink === type.typeLinkValue) {
      const { path, value } = type;
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
