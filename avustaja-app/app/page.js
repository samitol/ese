import Link from "next/link";
import Image from "next/image";
import { ArrowRightIcon } from "@heroicons/react/24/outline";
import Logo from "./components/logo";

export default function Page() {
  return (
    <main className="flex min-h-screen flex-col p-6 bg-white">
      <div className="flex grow justify-center items-center">
        <div className="container relative isolate overflow-hidden bg-slate-100 px-6 pt-8 shadow-lg rounded-2xl sm:px-16 md:pt-24 lg:flex lg:gap-x-20 lg:px-24 lg:pt-0">
          <div className="mx-auto max-w-md text-center lg:mx-0 lg:flex-auto lg:py-32 lg:text-left">
            <Logo />
            <h1 className="mt-8 text-3xl font-bold tracking-tight sm:text-4xl">
              Aloita käyttämään appia. Verkostoidu muiden avustajien kanssa
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-800">
              Avustaja appi on tehty parantamaan avustajien arkea.
              Avustajapankissa on tietopankki, sekä mahdollisuus verkostoitua
              muiden avustajien kanssa.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6 lg:justify-start">
              <Link
                href="/kirjaudu"
                className="rounded-md bg-blue-700 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-blue-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              >
                Kirjaudu sisään
              </Link>
              <Link
                href="/rekisteroidy"
                className="text-sm font-semibold leading-6 flex gap-2"
              >
                Rekisteröidy
                <ArrowRightIcon className="w-4 h-4 self-center" />
              </Link>
            </div>
          </div>
          <div className="relative mt-16 h-80 lg:mt-8">
            <Image
              className="absolute left-0 top-0 w-[57rem] max-w-none rounded-md bg-white/5 ring-1 ring-white/10"
              src={"/hero-example.png"}
              alt="App screenshot"
              width={1824}
              height={1080}
            />
          </div>
        </div>
      </div>
    </main>
  );
}
