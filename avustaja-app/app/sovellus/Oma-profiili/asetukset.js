import { Cog6ToothIcon } from "@heroicons/react/24/outline";
import { useState } from "react";

//tarkista "laatikoiden" rajoitukset

export default function Asetukset({}) {
  return (
    <div className="grid grid-cols-1">
      <SovellusTeema />
      <VaihdaSalasana />
      <PoistaTili />
    </div>
  );
}

function SovellusTeema() {
  return (
    <div className="rounded shadow p-8 mb-4">
      <h2 className="text-bold text-lg mb-2">Sovellusteema</h2>
      <div className="flex items-center">
        <input
          type="radio"
          id="default"
          name="theme"
          className="appearance-none rounded-full w-4 h-4 border border-gray-300 bg-white checked:bg-blue-500 focus:ring-2 focus:ring-blue-400 focus:ring-opacity-50"
        />
        <label htmlFor="default" className="text-gray-700 ml-2">
          Järjestelmän oletustila
        </label>
      </div>
      <div className="flex items-center">
        <input
          type="radio"
          id="lightmode"
          name="theme"
          className="appearance-none rounded-full w-4 h-4 border border-gray-300 bg-white checked:bg-blue-500 focus:ring-2 focus:ring-blue-400 focus:ring-opacity-50"
        />
        <label htmlFor="lightmode" className="text-gray-700 ml-2">
          Vaalea tila
        </label>
      </div>
      <div className="flex items-center">
        <input
          type="radio"
          id="darkmode"
          name="theme"
          className="appearance-none rounded-full w-4 h-4 border border-gray-300 bg-white checked:bg-blue-500 focus:ring-2 focus:ring-blue-400 focus:ring-opacity-50"
        />
        <label htmlFor="darkmode" className="text-gray-700 ml-2">
          Tumma tila
        </label>
      </div>
    </div>
  );
}

function VaihdaSalasana() {
  return (
    <div className="rounded shadow p-8 mb-4">
      <h2 className="text-bold text-lg mb-4">Vaihda salasana</h2>
      <div className="flex flex-col p-4">
        <label htmlFor="currentPassword" className="text-gray-700 mb-1">
          Nykyinen salasana
        </label>
        <input
          type="password"
          id="currentPassword"
          className="border rounded-md p-2 w-full focus:ring-2 focus:ring-blue-400 focus:ring-opacity-50 mb-4"
        />
        <label htmlFor="newPassword" className="text-gray-700 mb-1">
          Uusi salasana
        </label>
        <input
          type="password"
          id="newPassword"
          className="border rounded-md p-2 w-full focus:ring-2 focus:ring-blue-400 focus:ring-opacity-50 mb-4"
        />
        <label htmlFor="confirmNewPassword" className="text-gray-700 mb-1">
          Vahvista uusi salasana
        </label>
        <input
          type="password"
          id="confirmNewPassword"
          className="border rounded-md p-2 w-full focus:ring-2 focus:ring-blue-400 focus:ring-opacity-50 mb-4"
        />
      </div>
      <div className="button-container flex justify-center items-center">
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-50">
          Vaihda salasana
        </button>
      </div>
    </div>
  );
}

function PoistaTili() {
  return (
    <div className="rounded shadow p-8 mb-4">
      <h2 className="text-bold text-lg mb-2">Tilin poistaminen</h2>
      <h2 className="mb-4">
        Poista tietosi ja kaikki tiliin liittyvät tiedot pysyvästi painamalla
        alla olevaa nappia.
      </h2>
      <div className="button-container flex justify-center items-center">
        <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-red-400 focus:ring-opacity-50">
          Poista tili
        </button>
      </div>
    </div>
  );
}
