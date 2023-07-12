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
    type: "Booking site",
    recent: true,
    description:
      "This was a school assignment my last year at Noroff School of Technology and Design. The task was to create a site were users could sign up for an account, and rent out their homes or rent someone elses. The project is built using React.",
    media: holidazeMedia,
    url: "https://holidazenorway.netlify.app/",
    github: "https://github.com/PederZzen/projectexam2",
  },
  {
    name: "Yuuup!",
    type: "Auction site",
    recent: true,
    description:
      "This is an online auction site where users can sign up, browse and bid on various items, and list their own items for bidding. It offers a user-friendly interface, real-time bidding updates, personalized profiles, and secure authentication. It was built in vanilla JavaScript as an assignment during my stuies at Noroff. ",
    media: yuuupMedia,
    url: "https://yuup.netlify.app/",
    github: "https://github.com/PederZzen/Semester-project-2",
  },
  {
    name: "BuyStuff.no",
    type: "Online store",
    recent: true,
    description:
      "This online store was built using React. It offers the possibility to view a selection of items from an API, and add them to your shopping cart. It was the first big React assignment during my time at Noroff.",
    media: buyStuffMedia,
    url: "https://buystuffnorway.netlify.app/",
    github: "https://github.com/PederZzen/React_CA",
  },
  {
    name: "Telegrafen Drøbak",
    type: "Restaurant",
    recent: false,
    description:
      "Built with WordPress for a restaurant in Drøbak that offers a wide selection of foods from Indian cuisine to more modern dishes.",
    media: telegrafenMedia,
    url: "https://telegrafendrobak.no/",
  },
  {
    name: "Livsløpet",
    type: "Blog",
    recent: false,
    description:
      "Built with WordPress for a client that offers legal advice for the more day-to-day problems that you might face.",
    media: livsløpetMedia,
    url: "https://livsløpet.no/",
  },
  {
    name: "WG Plastsveis",
    type: "Plastic welder",
    recent: false,
    description:
      "WG Plastsveis provides services within plastic welding and special parts in all of Norway. This website was built using WordPress.",
    media: wgplastMedia,
    url: "https://wgplastsveis.no/",
  },
  {
    name: "Dånøts",
    type: "Donut shop",
    recent: false,
    description:
      "Dånøts is a friendly little café in Asker that serves you freshly baked donuts and newly brewed coffeé. Their website is built with WordPress.",
    media: donutsMedia,
    url: "https://www.danots.no/",
  },
];
