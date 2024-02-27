import React from "react";
import Link from "next/link";
import { tietopankkiKirjaus } from "./testidataa";
import { BookOpenIcon } from "@heroicons/react/24/outline";

function Tietopankki() {
  return (
    <div className="flex justify-center">
      <div className="sm:w-full lg:w-9/12 xl:w-7/12">
        <div>
          <h1 className="m-8 text-3xl font-bold">
            Mistä aiheesta haluat tietää lisää?
          </h1>
        </div>
        {tietopankkiKirjaus.map((kirjaus) => {
          return (
            <Link
              key={kirjaus.tietopankkiKirjaus_id}
              href={`/sovellus/tietopankki/${kirjaus.tietopankkiKirjaus_id}`}
            >
              <TietopankkiKirjausIkkuna otsikko={kirjaus.sisalto.otsikko} />
            </Link>
          );
        })}
      </div>
    </div>
  );
}

function TietopankkiKirjausIkkuna({ otsikko }) {
  return (
    <div className="py-1">
      <div className="rounded-md bg-gradient-to-bl from-white to-gray-50 p-1 max-h-12 hover:to-blue-100">
        <div className="grid grid-cols-6 truncate rounded-sm bg-white px-4 text-left text-xl ">
          <p className="col-span-1">
            <BookOpenIcon className="h-6 w-6 text-gray-500" />
          </p>
          <p className="col-span-5 truncate">{otsikko}</p>
        </div>
      </div>
    </div>
  );
}

export default Tietopankki;
