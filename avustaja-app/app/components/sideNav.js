"use client";

import Link from "next/link";
import NavLinks from "./sideNavLinks";
import {
  ArrowLeftEndOnRectangleIcon,
  ChevronDoubleLeftIcon,
  PowerIcon,
} from "@heroicons/react/24/outline";
import Logo from "./logo";

import { useState } from "react";

import React from "react";

function SideNav() {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <nav className="flex h-full flex-col px-3 py-4 md:px-2">
      <div className="mb-2 flex justify-start gap-5 rounded-md bg-slate-50 p-4">
        {isOpen ? (
          <Logo className="flex title-font justify-center lg:justify-start font-semibold items-center text-blue-900" />
        ) : (
          <Logo className="flex title-font justify-center lg:justify-start font-semibold items-center text-blue-900 md:hidden" />
        )}

        <button
          onClick={() => setIsOpen((curr) => !curr)}
          className="hidden md:block p-1.5 rounded-lg bg-slate-50 hover:bg-slate-100 border"
        >
          {isOpen ? (
            <ChevronDoubleLeftIcon className="w-6 h-6" />
          ) : (
            <ChevronDoubleLeftIcon className="w-6 h-6 transform rotate-180" />
          )}
        </button>
      </div>

      <div className="flex grow flex-row justify-between space-x-2 md:flex-col md:space-x-0 md:space-y-2">
        <NavLinks showText={isOpen ? true : false} />
        <div className="hidden h-auto w-full grow rounded-md bg-gray-50 md:block"></div>
        <Link href="/">
          <button className="flex h-[48px] w-full grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-slate-300 md:flex-none md:justify-start md:p-2 md:px-6">
            <ArrowLeftEndOnRectangleIcon className="w-6" />
            {isOpen ? (
              <div className="hidden md:block">Kirjaudu ulos</div>
            ) : null}
          </button>
        </Link>
      </div>
    </nav>
  );
}

export default SideNav;
