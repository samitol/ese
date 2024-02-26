import React from "react";
import { GlobeEuropeAfricaIcon } from "@heroicons/react/24/outline";

function Logo({ className, showText }) {
  return (
    <div className={className}>
      <GlobeEuropeAfricaIcon className={"w-6 h-6"} />
      {showText ? <p className="ml-3 text-xl">Avustaja-app</p> : null}
    </div>
  );
}

export default Logo;
