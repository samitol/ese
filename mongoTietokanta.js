const mongoose = require("mongoose");
require("dotenv").config();

const salasana = process.env.DB_PASSWORD;

const url = `mongodb+srv://AvustajaAppDev:${salasana}@avustajaappcluster.gbtovsa.mongodb.net/?retryWrites=true&w=majority`;

mongoose.set("strictQuery", true);
mongoose.connect(url);

//Käyttäjän päiväkirjakirjaus
const paivakirjaKirjausSkeema = new mongoose.Schema({
  kirjausId: mongoose.Schema.Types.ObjectId,
  kirjattu: Date,
  paivanFiilis: Number,
  sisalto: String,
});

const PaivakirjaKirjaus = mongoose.model(
  "PaivakirjaKirjaus",
  paivakirjaKirjausSkeema
);

//Käyttäjän fiilispäiväkirjaskeema
const fiilisPaivakirjaSkeema = new mongoose.Schema({
  paivakirjaId: mongoose.Schema.Types.ObjectId,
  kayttaja_id: mongoose.Schema.Types.ObjectId, //Käyttäjän id; muutetaan oikeaan muotoon, kun tiedetään, missä muodossa ovat
  edellisetFiilikset: [Number],
  kirjaukset: [mongoose.Schema.Types.ObjectId], //taulukko päiväkirjakirjausten id tunnuksia
});

const FiilisPaivakirja = mongoose.model(
  "FiilisPaivakirja",
  fiilisPaivakirjaSkeema
);

//Tietopankkiskeema
const tietopankkiKirjausSkeema = new mongoose.Schema({
  tietopankkiKirjausId: mongoose.Schema.Types.ObjectId,
  lisatty: Date,
  muokattu: Date,
  lisannyt: kayttaja_id, //HUOM! Tämä muuttunee
  sisalto: {
    otsikko: String,
    leipateksti: String,
  },
  linkit: String,
});

const TietopankkiKirjaus = mongoose.model(
  "TietopankkiKirjaus",
  tietopankkiKirjausSkeema
);
