import React from "react";
import { GlobeEuropeAfricaIcon } from "@heroicons/react/24/outline";

function Logo() {
  return (
    <div className="flex title-font justify-center lg:justify-start font-semibold items-center text-blue-800">
      <GlobeEuropeAfricaIcon className={"w-6 h-6"} />
      <p className="ml-3 text-xl">Avustaja-app</p>
    </div>
  );
}

export default Logo;
