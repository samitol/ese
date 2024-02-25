const tietopankkiKirjaus = [
  {
    tietopankkiKirjaus_id: 1,
    lisatty: new Date("2024-01-01"),
    muokattu: new Date("2024-01-01"),
    lisannyt: "65c8850cf2d4cbbc7bed2677",
    sisalto: {
      otsikko: "Tässä on uusi tietopankkikirjaus",
      leipateksti:
        "Tässä on esimerkkinä vähän tekstiä tietopankkikirjaukseen. Tähän pitäisi mahtua paljon tekstiä vaivatta.",
    },
    linkit: "esimerkki.linkki/testi",
  },
  {
    tietopankkiKirjaus_id: 2,
    lisatty: new Date("2024-02-02"),
    muokattu: new Date("2024-02-02"),
    lisannyt: "65c8850cf2d4cbbc7bed2677",
    sisalto: {
      otsikko: "Tässä on toinen tietopankkikirjaus",
      leipateksti:
        "Tässä on toisena esimerkkinä vähän tekstiä tietopankkikirjaukseen. Tähän pitäisi mahtua paljon tekstiä vaivatta.",
    },
    linkit: "esimerkki.linkki/testi",
  },
  {
    tietopankkiKirjaus_id: 3,
    lisatty: new Date("2024-01-05"),
    muokattu: new Date("2024-01-05"),
    lisannyt: "65c8850cf2d4cbbc7bed2677",
    sisalto: {
      otsikko: "Tässä on kolmas tietopankkikirjaus",
      leipateksti:
        "Tässä on kolmantena esimerkkinä vähän tekstiä tietopankkikirjaukseen. Tähän pitäisi mahtua paljon tekstiä vaivatta.",
    },
    linkit: "esimerkki.linkki/testi",
  },
  {
    tietopankkiKirjaus_id: 4,
    lisatty: new Date("2024-01-30"),
    muokattu: new Date("2024-01-30"),
    lisannyt: "65c8850cf2d4cbbc7bed2677",
    sisalto: {
      otsikko: "Tässä on neljäs otsikko",
      leipateksti:
        "Tässä on lisää vähän tekstiä tietopankkikirjaukseen. Tähän pitäisi mahtua paljon tekstiä vaivatta.",
    },
    linkit: "esimerkki.linkki/testi",
  },
  {
    tietopankkiKirjaus_id: 5,
    lisatty: new Date("2024-01-22"),
    muokattu: new Date("2024-01-22"),
    lisannyt: "65c8850cf2d4cbbc7bed2677",
    sisalto: {
      otsikko: "Tässä on viides otsikko",
      leipateksti:
        "Tässä on lisää vähän tekstiä tietopankkikirjaukseen. Tähän pitäisi mahtua paljon tekstiä vaivatta.",
    },
    linkit: "esimerkki.linkki/testi",
  },
  {
    tietopankkiKirjaus_id: 6,
    lisatty: new Date("2024-02-22"),
    muokattu: new Date("2024-02-22"),
    lisannyt: "65c8850cf2d4cbbc7bed2677",
    sisalto: {
      otsikko: "Tässä on kuudes otsikko",
      leipateksti:
        "Tässä on lisää vähän tekstiä tietopankkikirjaukseen. Tähän pitäisi mahtua paljon tekstiä vaivatta.",
    },
    linkit: "esimerkki.linkki/testi",
  },
  {
    tietopankkiKirjaus_id: 7,
    lisatty: new Date("2024-02-21"),
    muokattu: new Date("2024-02-21"),
    lisannyt: "65c8850cf2d4cbbc7bed2677",
    sisalto: {
      otsikko: "Tässä on seitsemäs otsikko",
      leipateksti:
        "Tässä on lisää vähän tekstiä tietopankkikirjaukseen. Tähän pitäisi mahtua paljon tekstiä vaivatta.",
    },
    linkit: "esimerkki.linkki/testi",
  },
  {
    tietopankkiKirjaus_id: 8,
    lisatty: new Date("2024-01-15"),
    muokattu: new Date("2024-01-15"),
    lisannyt: "65c8850cf2d4cbbc7bed2677",
    sisalto: {
      otsikko: "Tässä on kahdeksas otsikko",
      leipateksti:
        "Tässä on lisää vähän tekstiä tietopankkikirjaukseen. Tähän pitäisi mahtua paljon tekstiä vaivatta.",
    },
    linkit: "esimerkki.linkki/testi",
  },
];

const ajankohtaistaIkkunaData = [
  {
    type: "Uutinen",
    title: "Tärkeää tietoa avustajille",
  },
  { type: "Tapahtuma", title: "Tule kahville 20.4.2024" },
  { type: "Uutinen", title: "Verottaja ilmoittaa" },
  {
    type: "Uutinen",
    title: "Vinkkejä avustajan arkeen kertoo psykologi Minna Meikäläinen",
  },
  { type: "Tapahtuma", title: "Tule tapahtumaan 1.8.2024" },
];

module.exports = { tietopankkiKirjaus, ajankohtaistaIkkunaData };
