require("dotenv").config();
const mongoose = require("mongoose");

//boolean-arvo, joka kertoo onko jo yhdistetty tietokantaan
let isConnected = false;

//yhdistetään tietokantaan
async function connectToDatabase() {
  try {
    if (!isConnected) {
      //yhdistämiseen tarvittava URI, tässä haetaan ympäristömuuttujasta
      const uri = process.env.MONGODB_URI;
      await mongoose.connect(uri, {});
      isConnected = true;
      console.log("Yhteys tietokantaan muodostettu");
    }
  } catch (error) {
    console.error("Yhdistaminen ei onnistunut.", error);
  }
}

//funktio tietojen tallentamista varten
async function tallennaTieto(malli, tiedot) {
  try {
    await connectToDatabase();
    const uusiTieto = new malli(tiedot);
    await uusiTieto.save();
    console.log("Uusi tieto lisatty tietokantaan");
  } catch (error) {
    console.error("Tallentaminen ei onnistunut", error);
  }
}

//Mongoose-mallit
const Kategoria = mongoose.model(
  "Kategoria",
  new mongoose.Schema({
    kategoria_nimi: String,
  }),
  "kategoria"
);

const Kommentti = mongoose.model(
  "Kommentti",
  new mongoose.Schema({
    kategoria_id: mongoose.Schema.Types.ObjectId,
    paivitys_id: mongoose.Schema.Types.ObjectId,
    kayttaja_id: mongoose.Schema.Types.ObjectId,
    lahetyaika: Date,
    kommentin_sisalto: String,
  }),
  "kommentit"
);

const Paivitys = mongoose.model(
  "Paivitys",
  new mongoose.Schema({
    kategoria_id: mongoose.Schema.Types.ObjectId,
    kayttaja_id: mongoose.Schema.Types.ObjectId,
    luontiaika: Date,
    otsikko: String,
  }),
  "paivitykset"
);

const Kayttaja = mongoose.model(
  "Kayttaja",
  new mongoose.Schema({
    etunimi: String,
    sukunimi: String,
    salasana: String,
    sahkoposti: String,
    kaupunki: String,
    kayttajarooli: String,
    rekisterointipaiva: Date,
  }),
  "kayttajat"
);

const { ObjectId } = mongoose.Types;

//Funktiokutsut
async function run() {
  await tallennaTieto(Kayttaja, {
    etunimi: "Aku",
    sukunimi: "Ankka",
    salasana: "654321",
    sahkoposti: "akuankka@example.com",
    kaupunki: "Ankkalinna",
    kayttajarooli: "avustaja",
    rekisterointipaiva: new Date(),
  });

  await tallennaTieto(Kategoria, { kategoria_nimi: "Uusi kategoria" });

  await tallennaTieto(Kommentti, {
    kategoria_id: new ObjectId("65c7a6d8cfea37a52753e6e5"), // Muu tekeminen
    paivitys_id: new ObjectId("65c7a9ba9970ffc6ed4dd63f"), // Lenkkikaveria etsitaan
    kayttaja_id: new ObjectId("65c8850cf2d4cbbc7bed2677"), // Aku Ankka
    lahetyaika: new Date(),
    kommentin_sisalto: "Voisin lahtea lenkille kanssasi",
  });

  await tallennaTieto(Paivitys, {
    kategoria_id: new ObjectId("65c7bed1cb4910a614e9b72a"),
    kayttaja_id: new ObjectId("65c7ae6909479b74a7a976c0"),
    luontiaika: new Date(),
    otsikko: "Uusi paivitys",
  });
}

run();
