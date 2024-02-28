import React, { useState, useRef, useEffect } from "react";

export default function Profiili({}) {
  const [etunimi, setName] = useState("Etunimi");
  const [sukunimi, setSurName] = useState("Sukunimi");
  const [sähköposti, setEmail] = useState("etunimi.sukunimi@esimerkki.com");
  const [ikä, setAge] = useState("25");
  const [paikkakunta, setLocation] = useState("Helsinki");
  const [editMode, setEditMode] = useState(false);
  const [showInfoBox, setShowInfoBox] = useState(false);
  const infoBoxRef = useRef(null);

  const handleEditClick = () => {
    setEditMode(true);
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    switch (name) {
      case "sähköposti":
        setEmail(value);
        break;
      case "ikä":
        setAge(value);
        break;
      case "paikkakunta":
        setLocation(value);
        break;
      default:
        break;
    }
  };

  const handleSaveClick = async () => {
    setShowInfoBox(true);
    setEditMode(false);
  };

  const handleCancelClick = () => {
    setEditMode(false);
  };

  const handleClickOutside = (event) => {
    if (infoBoxRef.current && !infoBoxRef.current.contains(event.target)) {
      setShowInfoBox(false);
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, [showInfoBox]);

  return (
    <div className="rounded shadow p-8">
      <div onClick={handleClickOutside}>
        {showInfoBox && (
          <div
            className="info-box fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white shadow-md rounded-lg p-4 text-center"
            ref={infoBoxRef}
          >
            <h2>Tiedot on tallennettu</h2>
          </div>
        )}
        <div className="flex items-center">
          <h2 className="font-medium text-lg">{etunimi}</h2>
          <h2 className="font-medium text-lg ml-2">{sukunimi}</h2>
        </div>
        <h2 className="mt-4">Sähköposti:</h2>
        {editMode ? (
          <input
            type="email"
            value={sähköposti}
            onChange={handleInputChange}
            name="sähköposti"
            className="border border-gray-300 rounded p-2"
          />
        ) : (
          <h2
            className="mt-4"
            style={{
              backgroundColor: "#f5f5f5",
              padding: "0.5rem 1rem",
              borderRadius: "4px",
            }}
          >
            {sähköposti}
          </h2>
        )}
        <h2 className="mt-4">Ikä:</h2>
        {editMode ? (
          <input
            type="number"
            value={ikä}
            onChange={handleInputChange}
            name="ikä"
            className="border border-gray-300 rounded p-2"
          />
        ) : (
          <h2
            className="mt-4"
            style={{
              backgroundColor: "#f5f5f5",
              padding: "0.5rem 1rem",
              borderRadius: "4px",
            }}
          >
            {ikä}
          </h2>
        )}
        <h2 className="mt-4">Paikkakunta:</h2>
        {editMode ? (
          <input
            type="text"
            value={paikkakunta}
            onChange={handleInputChange}
            name="paikkakunta"
            className="border border-gray-300 rounded p-2"
          />
        ) : (
          <h2
            className="mt-4"
            style={{
              backgroundColor: "#f5f5f5",
              padding: "0.5rem 1rem",
              borderRadius: "4px",
            }}
          >
            {paikkakunta}
          </h2>
        )}
        <div>
          <div className="button-container flex justify-center items-center mt-8">
            {editMode ? (
              <>
                <button
                  className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-opacity-50 mr-2"
                  onClick={handleSaveClick}
                >
                  Tallenna
                </button>
                <button
                  className="bg-gray-400 hover:bg-gray-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-opacity-50"
                  onClick={handleCancelClick}
                >
                  Peruuta
                </button>
              </>
            ) : (
              <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-50"
                onClick={handleEditClick}
              >
                Muokkaa
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
