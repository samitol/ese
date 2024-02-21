import { BookOpenIcon } from "@heroicons/react/24/outline";

export default function Page() {
  return (
    <div className="p-10 mx-auto max-w-screen-xl">
      {/*Kaiken alku*/}
      <div>
        {/*Tämä kattaa Ajankohtaista ja näytä kaikki napin */}
        <h1 className="py-15 font-bold text-2xl">Ajankohtaista</h1>
        <div className="text-right">
          <button className="hover:text-blue-500">Näytä kaikki</button>
        </div>
      </div>
      <div className="flex justify between grid gap-10 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
        {/*Tämä kattaa ajankohtaista kortit */}
        <AjankohtaistaIkkuna
          type="Uutinen"
          title="Tärkeää tietoa avustajille"
        />
        <AjankohtaistaIkkuna type="Tapahtuma" title="Tapahtuma 1.5.2024" />
        <AjankohtaistaIkkuna type="Tapahtuma" title="Tule kahville 20.4.2024" />
        <AjankohtaistaIkkuna type="Uutinen" title="Verottaja ilmoittaa" />
        <AjankohtaistaIkkuna
          type="Uutinen"
          title="Vinkkejä avustajan arkeen kertoo psykologi Minna Meikäläinen"
        />
      </div>
      <div className="grid sm:grid-cols-1 md:grid-cols-2 py-8 gap-4">
        <PaivakirjaKooste />
        <UusimmatTietopankki />
      </div>
    </div>
  );
}

function AjankohtaistaIkkuna({ type, title }) {
  return (
    <div className="rounded-xl bg-gray-50 p-2 shadow-sm max-w-xs hover:bg-blue-500">
      <p className="truncate rounded-xl bg-gradient-to-tr from-white to-blue-500 px-4 py-8 text-center text-2xl ">
        {type}
      </p>
      <div className="flex p-4">
        <h3 className="truncate ml-2 text-sm font-medium">{title}</h3>
      </div>
    </div>
  );
}

function PaivakirjaKooste({}) {
  return (
    <div className="w-full">
      <h2 className="font-bold text-lg">Päiväkirjakooste</h2>
      <div className="rounded-xl bg-gray-50 p-4" style={{ height: "390px" }}>
        <div className="p-4 bg-white rounded-md h-full">Tähän kooste</div>
      </div>
    </div>
  );
}

function UusimmatTietopankki({}) {
  return (
    <div className="flex w-full flex-col">
      <h2 className="font-bold text-lg">Uusimmat tietopankista</h2>
      <div className="flex grow flex-col justify-between rounded-xl bg-gray-50 p-4">
        <ul className="list-none">
          <li>
            <UusimmatIkkuna otsikko="Otsikko 1 on lyhyt" />
          </li>
          <li>
            <UusimmatIkkuna otsikko="Otsikko 2 on pitkä. Mitenköhän tämä sen näyttää silloin, jos on pitkä otsikko." />
          </li>
          <li>
            <UusimmatIkkuna otsikko="Otsikko 3" />
          </li>
          <li>
            <UusimmatIkkuna otsikko="Otsikko 4" />
          </li>
          <li>
            <UusimmatIkkuna otsikko="Otsikko 1" />
          </li>
          <li>
            <UusimmatIkkuna otsikko="Otsikko 2" />
          </li>
          <li>
            <UusimmatIkkuna otsikko="Otsikko 3" />
          </li>
          <li>
            <UusimmatIkkuna otsikko="Otsikko 4" />
          </li>
        </ul>
      </div>
    </div>
  );
}

function UusimmatIkkuna({ otsikko }) {
  return (
    <div className="py-1">
      <div className="rounded-md bg-gradient-to-bl from-white to-gray-50 p-1 max-h-12 hover:to-blue-500">
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
