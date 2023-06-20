"use client"

import { Text } from "../Text";
import { Avatar } from "./Avatar";
import { Menu } from "./Menu";
import { MenuExpanded } from "./MenuExpanded";

export function Navbar() {
  return (
    <nav className="bg-white">
      <div className="flex h-24 items-center justify-between pc:px-14 mob:px-5">
        <div className="flex gap-4 items-center">
          <Avatar />
          <Text size="md" className="font-bold uppercase">
            João Andrade
          </Text>
        </div>
        <Menu />
        <MenuExpanded/>
      </div>
    </nav>
  );
}
