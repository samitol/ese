import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";

import {
  HomeIcon,
  BookOpenIcon,
  UserGroupIcon,
  UserIcon,
} from "@heroicons/react/24/outline";

// Map of links to display in the side navigation.
// Depending on the size of the application, this would be stored in a database.
const links = [
  {
    name: "Aloitussivu",
    href: "/sovellus/aloitussivu",
    icon: HomeIcon,
  },
  {
    name: "Tietopankki",
    href: "/sovellus/tietopankki",
    icon: BookOpenIcon,
  },
  {
    name: "Oma profiili",
    href: "/sovellus/oma-profiili",
    icon: UserIcon,
  },
  {
    name: "Käyttäjät",
    href: "/sovellus/kayttajat",
    icon: UserGroupIcon,
  },
];

export default function NavLinks({ showText, setState }) {
  const pathname = usePathname();

  return (
    <>
      {links.map((link) => {
        const LinkIcon = link.icon;
        return (
          <Link
            key={link.name}
            href={link.href}
            className={clsx(
              "flex h-[48px] grow items-center justify-start gap-2 rounded-md bg-gray-50 p-4 text-sm font-medium hover:bg-slate-300 md:flex-none px-6",
              {
                "bg-slate-200": pathname === link.href,
              }
            )}
            onClick={() => setState(false)}
          >
            <LinkIcon className="w-6" />
            {showText ? <p>{link.name}</p> : null}
          </Link>
        );
      })}
    </>
  );
}
