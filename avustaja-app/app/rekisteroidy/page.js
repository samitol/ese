import React from "react";
import Link from "next/link"

export default function Rekisteroidy() {
  return (
  <main> 
  <body>

      <div className="container-xlcontainer mx-auto flex flex-col space-y-4 border-2 border-slate-400 bg-neutral-100 bg-color-white">
     
      <div>
      <h1 className="text-5xl font-large text-black text-center">Luo tunnus</h1> 
      </div>
      <br></br>

      <div className="text-center label-center"> 
          <br></br>
          <label for ="sähköposti">Sähköposti:</label>
          <br></br>
          <input type= "sähköposti" placeholder="Sähköposti" name="sähköposti" id="sähköposti" className="border-2 border-slate-500"></input>
      </div>
      <br></br>
     
      <div className="text-center label-center">
          <label for ="etunimi">Etunimi:</label>
          <br></br>
          <input type ="etunimi" placeholder="Etunimi" name="etunimi" id="etunimi" className="border-2 border-slate-500"></input>
      </div>

      <div className="basis-1/4 text-center label-center">
          <label for ="Sukunimi">Sukunimi:</label>
          <br></br>
          <input type="sukunimi" placeholder="Sukunimi" name="sukunimi" id="sukunimi" className="border-2 border-slate-500"></input>
      </div>
      <br></br>

      <div className="text-center label-center">
          <label for ="salasana">Salasana:</label>
          <br></br>
          <input type="salasana" placeholder="Salasana" name="salasana" id="salasana" className="border-2 border-slate-500"></input>
      </div>
      <br></br>

      <div className="text-center label-center">
          <label for ="salasana">Salasana uudelleen:</label>
          <br></br>
          <input type="salasana" placeholder="Salasana uudelleen" name="salasana" id="salasana" className="border-2 border-slate-500"></input>
      </div>

      <div className="text-center">
      <input type="radio"id="Käyttöehdot" value="Olen lukenut käyttöehdot. Hyväksyn käyttöehdot" name="Käyttöehtojen hyväksyntä"></input>
      <label for="Käyttöehdot"> Olen lukenut käyttöehdot. Hyväksyn käyttöehdot</label>
      </div>

      <div className="text-center button-center">
      <li class= "button">
          <button type="submit" className="border-2 border-indigo-600 bg-indigo-600 text-white">Rekisteröi tunnukset</button>
      </li>
      </div>

      <div className="text-center">
      <Link href={"/Kirjaudu"} className="text-blue-500">Onko sinulla jo tunnukset? Kirjaudu tästä.</Link>
      </div>

      <div className="basis-1/2 text-slate-600 text-center">
      <p>Unohtuiko salasana?</p>
      </div>

  
  </div>
  </body>

</main>

/*Salasanan palautukseen tarvitaan linkki*/
)
}


