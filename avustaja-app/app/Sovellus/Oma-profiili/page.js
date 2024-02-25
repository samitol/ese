import {
  UserCircleIcon,
  Cog6ToothIcon,
  EyeIcon,
  EyeSlashIcon,
} from "@heroicons/react/24/outline";

export default function Page() {
  return (
    <div className="flex justify-center">
      <div className="p-10 mx-auto max-w-lg sm:max-w-md md:max-w-2xl">
        <div>
          <h1 className="py-15 font-bold text-2xl">Profiili</h1>
        </div>
        <div className="grid sm:grid-cols-1 md:grid-cols-1 py-8 gap-4">
          <Profiili />
        </div>
        <div className="grid sm:grid-cols-1 md:grid-cols-1 py-8 gap-4">
          <Asetukset />
        </div>
      </div>
    </div>
  );
}

function Profiili({}) {
  return (
    <div className="flex items-start">
      <div className="flex flex-col mr-4">
        <UserCircleIcon className="h-20 w-20" color="#007bff" />
      </div>
      <div>
        <div className="flex items-center">
          <h2 className="font-bold text-lg">Etunimi</h2>
          <h2 className="font-bold text-lg ml-2">Sukunimi</h2>
        </div>
        <h2 className="mt-4">Sähköposti</h2>
        <div className="mt-2">
          <label htmlFor="Ikä" className="mr-2 text-gray-700">
            Ikä:
          </label>
          <input
            type="ikä"
            id="ikä"
            className="border rounded-md p-2 focus:ring-2 focus:ring-blue-400 focus:ring-opacity-50 mb-4 w-20"
          />
          <div className="">
            <label htmlFor="Paikkakunta" className="mr-2 text-gray-700">
              Paikkakunta:
            </label>
            <input
              type="paikkakunta"
              id="paikkakunta"
              className="border rounded-md p-2 focus:ring-2 focus:ring-blue-400 focus:ring-opacity-50 mb-4 w-48"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

function Asetukset({}) {
  return (
    <div className="flex flex-col">
      <div className="flex items-center">
        <Cog6ToothIcon className="h-10 w-10 mr-4" />
        <h1 className="py-15 font-bold text-2xl">Asetukset</h1>
      </div>
      <div className="grid grid-cols-1 mb-4 mt-4">
        <SovellusTeema className="border rounded-md p-4" />

        <VaihdaSalasana className="border rounded-md p-4" />

        <PoistaTili className="border rounded-md p-4" />
      </div>
    </div>
  );
}

function SovellusTeema() {
  return (
    <div className=" border rounded-md p-4 mb-4">
      <h2 className="text-bold text-lg mb-2">Sovellusteema</h2>
      <div className="flex items-center">
        <input
          type="radio"
          id="default"
          name="theme"
          className="appearance-none rounded-full w-4 h-4 border border-gray-300 bg-white checked:bg-blue-500 focus:ring-2 focus:ring-blue-400 focus:ring-opacity-50"
          /*checked */
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
    <div className=" border rounded-md p-4 mb-4">
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
    <div className="border rounded-md p-4 mb-4">
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
