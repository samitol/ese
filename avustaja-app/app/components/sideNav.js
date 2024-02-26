"use client";

import Link from "next/link";
import NavLinks from "./sideNavLinks";
import {
  ArrowLeftEndOnRectangleIcon,
  Bars3Icon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import Logo from "./logo";

import { useState } from "react";

import React from "react";

function SideNav() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav
      className="flex h-full flex-col px-2"
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      <div className="mb-2 flex justify-start gap-5 rounded-md bg-slate-50 p-4 justify-between">
        {/**Ei mobiililaitteilla näkyvä logo */}
        {isOpen ? (
          <Logo
            className="hidden md:flex title-font justify-center lg:justify-start font-semibold items-center text-blue-900 px-2"
            showText={isOpen}
          />
        ) : null}

        {/** Mobiililaitteella näkyvä logo */}
        <Logo
          className="flex title-font justify-center lg:justify-start font-semibold items-center text-blue-900 md:hidden"
          showText={true}
        />
        {isOpen ? (
          <button onClick={() => setIsOpen(false)}>
            <XMarkIcon className="w-6 h-6" />
          </button>
        ) : (
          <button className="mx-auto" onClick={() => setIsOpen(true)}>
            <Bars3Icon className="w-6 h-6" />
          </button>
        )}
      </div>

      {/*Mobiililaitteilla näkyvä navigointivalikko */}
      {isOpen ? (
        <div className="md:hidden">
          <div className="flex grow flex-col justify-between space-x-2 space-x-0 space-y-2">
            <NavLinks showText={true} />
            <div className="hidden h-auto w-full grow rounded-md bg-gray-50 md:block"></div>
            <Link href="/">
              <button className="flex h-[48px] w-full grow items-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-slate-300 md:flex-none md:justify-start md:p-2 px-6">
                <ArrowLeftEndOnRectangleIcon className="w-6" />
                <p>Kirjaudu ulos</p>
              </button>
            </Link>
          </div>
        </div>
      ) : null}

      {/*Pöytäkoneilla näkyvä navigointivalikko */}
      <div className="hidden md:contents">
        <div className="flex grow flex-col justify-between space-x-2 space-x-0 space-y-2">
          <NavLinks showText={isOpen ? true : false} setState={setIsOpen} />
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
      </div>
    </nav>
  );
}

export default SideNav;
