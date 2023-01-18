import { topMenu } from "./src/navigation.mjs";

import { scrollDown } from "./src/utils.mjs";
import { scrollUp } from "./src/utils.mjs";

const workCard = document.querySelectorAll(".work_card");

workCard.forEach((card) => {
    card.addEventListener("mouseover", () => {
        card.lastElementChild.style.opacity = 1
    })
    card.addEventListener("mouseleave", () => {
        card.lastElementChild.style.opacity = 0
    })
})