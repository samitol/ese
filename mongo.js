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
    console.error("Yhdistäminen ei onnistunut.", error);
  }
}

//funktio tietojen tallentamista varten
async function tallennaTieto(malli, tiedot) {
  try {
    await connectToDatabase();
    const uusiTieto = new malli(tiedot);
    await uusiTieto.save();
    console.log("Uusi tieto lisätty tietokantaan");
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
    päivitys_id: mongoose.Schema.Types.ObjectId,
    käyttäjä_id: mongoose.Schema.Types.ObjectId,
    lähetysaika: Date,
    kommentin_sisältö: String,
  }),
  "kommentit"
);

const Päivitys = mongoose.model(
  "Päivitys",
  new mongoose.Schema({
    kategoria_id: mongoose.Schema.Types.ObjectId,
    käyttäjä_id: mongoose.Schema.Types.ObjectId,
    luontiaika: Date,
    otsikko: String,
  }),
  "päivitykset"
);

const Käyttäjä = mongoose.model(
  "Käyttäjä",
  new mongoose.Schema({
    etunimi: String,
    sukunimi: String,
    salasana: String,
    sähköposti: String,
    kaupunki: String,
    käyttäjärooli: String,
    rekisteröintipäivä: Date,
  }),
  "käyttäjät"
);

const { ObjectId } = mongoose.Types;

//Funktiokutsut
async function run() {
  await tallennaTieto(Käyttäjä, {
    etunimi: "Aku",
    sukunimi: "Ankka",
    salasana: "654321",
    sähköposti: "akuankka@example.com",
    kaupunki: "Ankkalinna",
    käyttäjärooli: "avustaja",
    rekisteröintipäivä: new Date(),
  });

  await tallennaTieto(Kategoria, { kategoria_nimi: "Uusi kategoria" });

  await tallennaTieto(Kommentti, {
    kategoria_id: new ObjectId("65c7a6d8cfea37a52753e6e5"), // Muu tekeminen
    päivitys_id: new ObjectId("65c7a9ba9970ffc6ed4dd63f"), // Lenkkikaveria etsitään
    käyttäjä_id: new ObjectId("65c8850cf2d4cbbc7bed2677"), // Aku Ankka
    lähetysaika: new Date(),
    kommentin_sisältö: "Voisin lähteä lenkille kanssasi",
  });

  await tallennaTieto(Päivitys, {
    kategoria_id: new ObjectId("65c7bed1cb4910a614e9b72a"),
    käyttäjä_id: new ObjectId("65c7ae6909479b74a7a976c0"),
    luontiaika: new Date(),
    otsikko: "Uusi päivitys",
  });
}

run();
