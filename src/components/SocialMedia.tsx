"use client";

interface SocialMediaProps {
  tailwind: string;
  isFooter: boolean
}

import Link from "next/link";
import {
  DevToLogo,
  FacebookLogo,
  GithubLogo,
  InstagramLogo,
  LinkedinLogo,
} from "@phosphor-icons/react";

export function SocialMedia({ tailwind, isFooter }: SocialMediaProps) {
  return (
    <aside>
      <ul className={tailwind}>
        <li>
          <Link href="" target="_blank">
            <LinkedinLogo size={32} weight="fill" />
          </Link>
        </li>
        <li className={isFooter ? "bg-white rounded-full" : "bg-black rounded-full"}>
          <Link href="" target="_blank">
            <GithubLogo
              size={32}
              weight="fill"
              className={ isFooter ? "relative top-[3.6px] flex text-black px-1 pt-1" : "relative top-[3.6px] flex text-white px-1 pt-1"}
            />
          </Link>
        </li>
        <li className="">
          <Link href="" target="_blank">
            <FacebookLogo size={32} weight="fill" className={isFooter ? "text-white" : "text-black"} />
          </Link>
        </li>
        <li className="">
          <Link href="" target="_blank">
            <InstagramLogo size={32} weight="fill" className={isFooter ? "text-white" : "text-black"} />
          </Link>
        </li>
        <li>
          <Link href="" target="_blank">
            <DevToLogo size={32} weight="fill" />
          </Link>
        </li>
      </ul>
    </aside>
  );
}
