"use client";
import React from "react";

const Page = () => {
  const [kysymykset] = React.useState([
    "*Kysymys*",
    "*Kysymys*",
    "*Kysymys*",
    "*Kysymys*",
    "*Kysymys*",
  ]);
  const [vastaukset, setVastaukset] = React.useState(Array(5).fill(1));
  const [fiilisTeksti, setFiilisTeksti] = React.useState("");

  //päivittää vastaukset tilan muuttujaa
  const paivitaVastaus = (index, value) => {
    if (value >= 1 && value <= 5) {
      const paivitettyVastaukset = [...vastaukset];
      paivitettyVastaukset[index] = value;
      setVastaukset(paivitettyVastaukset);
    }
  };

  //päivittää fiilisTeksti-tilamuuttujaa
  const tekstiLaatikko = (event) => {
    setFiilisTeksti(event.target.value);
  };

  const currentDate = new Date();
  const options = { day: "numeric", month: "numeric" };
  const formattedDate = currentDate.toLocaleDateString("fi-FI", options);
  const hymiot = {
    surunaama: "/face.png",
    iloinenNaama: "/smile.png",
  };

  return (
    <div className="flex justify-center items-center bg-white p-8 h-screen">
      <div className="max-w-screen-lg flex justify-center">
        <div>
          <h2 className="text-xl font-semibold mb-6">
            Tänään, {formattedDate}
          </h2>

          {/*renderöi kysymykset */}
          {kysymykset.map((kysymys, index) => (
            <div className="mb-6" key={index}>
              <p className="text-lg mb-2 pl-10">{kysymys}</p>
              <div className="flex items-center space-x-4 justify-center">
                {hymiot.surunaama && (
                  <img
                    src={hymiot.surunaama}
                    alt="Surunaama"
                    style={{ maxWidth: "24px", maxHeight: "24px" }}
                  />
                )}
                {/*liukusäädin josta käytjjä voi valita arvon 1-5*/}
                <div className="flex flex-col items-center">
                  <input
                    type="range"
                    min="1"
                    max="5"
                    value={vastaukset[index]}
                    onChange={(e) =>
                      paivitaVastaus(index, parseInt(e.target.value))
                    }
                    className="h-3 relative"
                    style={{ outline: "none", width: "200px" }}
                  />
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      width: "100%",
                    }}
                  >
                    <span>1</span>
                    <span>2</span>
                    <span>3</span>
                    <span>4</span>
                    <span>5</span>
                  </div>
                </div>
                {hymiot.iloinenNaama && (
                  <img
                    src={hymiot.iloinenNaama}
                    alt="Iloinen naama"
                    style={{ maxWidth: "24px", maxHeight: "24px" }}
                  />
                )}
              </div>
            </div>
          ))}
        </div>

        {/*kenttä johon käyttäjä voi kuvailla fiiliksiään */}
        <div className="ml-8">
          <textarea
            className="w-80 h-96 px-4 py-2 border border-gray-300 rounded-md resize-none placeholder-gray-400 focus:outline-none focus:ring focus:ring-blue-200"
            placeholder="Millainen päiväsi oli? Kerro fiiliksistäsi"
            value={fiilisTeksti}
            onChange={tekstiLaatikko}
          ></textarea>
        </div>
      </div>
    </div>
  );
};

export default Page;
