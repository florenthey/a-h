import React from "react";
import Link from "next/link";
import { types } from "../../services/Links";

import { StyledLink } from "./GlobalLink.style";

export default function GlobalLink({ typeLink }) {
  return types.map((type, i) => {
    if (typeLink === type.typeLinkValue) {
      return (
        <div key={i}>
          <Link href={type.path}>
            <StyledLink>{type.value}</StyledLink>
          </Link>
        </div>
      );
    }
  });
}
