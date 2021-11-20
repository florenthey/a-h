import React from "react";
import Link from "next/link";
import { List } from "./Navbar.style";
import { links } from "../../utils/links";
import Hamburger from "../../icons/Hamburger";

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
