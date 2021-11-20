import React from "react";
import Link from "next/link";
import { List } from "./Navbar.style";
import Hamburger from "../../icons/Hamburger";
import { links } from "../../utils/links";

export default function Navbar() {
  return (
    <div>
      <Hamburger />
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
    </div>
  );
}
