import holidazeMedia from "./media/holidaze.png";
import buyStuffMedia from "./media/buystuff.png";
import yuuupMedia from "./media/yuuup.png";
import donutsMedia from "./media/donuts.png";
import livsløpetMedia from "./media/livsløpet.png";
import wgplastMedia from "./media/wgplastsveis.png";
import telegrafenMedia from "./media/telegrafen.png";

export const projects = [
  {
    name: "Holidaze",
    type: "Bookinger",
    recent: true,
    description:
      "Denne siden er bygget med React, der Styled Components og biblioteket Ant Design er brukt for styling. Siden er en slags AirBnb-klone, med alt det innebærer.",
    media: holidazeMedia,
    url: "https://holidazenorway.netlify.app/",
    github: "https://github.com/PederZzen/projectexam2",
  },
  {
    name: "Yuuup!",
    type: "Auksjoner",
    recent: true,
    description:
      "En nettbasert auksjonsside der brukere kan registrere seg, bla gjennom og by på ulike varer, samt legge ut egne varer for auksjon. Den tilbyr et brukervennlig grensesnitt, oppdateringer i sanntid for budgivning, personlige profiler og sikker autentisering. Den ble bygget med vanilla JavaScript.",
    media: yuuupMedia,
    url: "https://yuup.netlify.app/",
    github: "https://github.com/PederZzen/Semester-project-2",
  },
  {
    name: "BuyStuff.no",
    type: "Nettbutikk",
    recent: true,
    description:
      "En nettbutikk for kjøp og salg av ulike gjenstander. Her har man handlekurv, checkout og det man forventer av en slik side.",
    media: buyStuffMedia,
    url: "https://buystuffnorway.netlify.app/",
    github: "https://github.com/PederZzen/React_CA",
  },
  {
    name: "Telegrafen Drøbak",
    type: "Restaurant",
    recent: false,
    description:
      "Telegrafen Drøbak er en restaurant som tilbyr en rekke indiske tradisjonsretter og noen moderne klassikere.",
    media: telegrafenMedia,
    url: "https://telegrafendrobak.no/",
  },
  {
    name: "Livsløpet",
    type: "Juridisk Rådgivning",
    recent: false,
    description:
      "Livsløpet er bloggen for deg som har ulike juridiske spørsmål, og kanskje trenger noen gode råd.",
    media: livsløpetMedia,
    url: "https://livsløpet.no/",
  },
  {
    name: "WG Plastsveis",
    type: "Plastikksveising",
    recent: false,
    description:
      "WG Plastsveis har lang fartstid og tilbyr tjenester innen plastsveising. De holder til i Holmestrand og har en kundebase som inkluderer hele Norge.",
    media: wgplastMedia,
    url: "https://wgplastsveis.no/",
  },
  {
    name: "Dånøts",
    type: "Donut shop",
    recent: false,
    description:
      "Dånøts er en koselig liten kafé i Asker som serverer deilige og spesiallagde donuts.",
    media: donutsMedia,
    url: "https://www.danots.no/",
  },
];
