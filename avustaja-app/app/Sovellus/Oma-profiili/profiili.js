export default function Profiili({}) {
  return (
    <div>
      <div className="flex items-center">
        <h2 className="font-bold text-lg">Etunimi</h2>
        <h2 className="font-bold text-lg ml-2">Sukunimi</h2>
      </div>
      <h2 className="mt-4">Sähköposti</h2>
      <h2 className="mt-4">Ikä</h2>
      <h2 className="mt-4">Paikkakunta</h2>
    </div>
  );
}

/* <div className="mt-2">
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
      </div> */
