import React from "react";
import { tietopankkiKirjaus } from "../testidataa";

function Tietopankkisivu() {
  var kirjaus = tietopankkiKirjaus[0];
  return (
    <div className="flex justify-center">
      <div className="sm:w-full lg:w-9/12 xl:w-7/12">
        <div>
          <h1 className="m-8 text-3xl font-bold">{kirjaus.sisalto.otsikko}</h1>
          <div className="bg-gray-50 rounded-md mx-4 py-2">
            {kirjaus.sisalto.leipateksti.map((kappale) => {
              return (
                <p key={kappale} className="my-3 mx-6">
                  {kappale}
                </p>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Tietopankkisivu;
