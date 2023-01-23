/**
 * Show and hide the elements of the navbar when clicking on the menu icon
 */

const menuIcon = document.getElementById("menu_icon");
const getInTouch = document.getElementById("get_in_touch").classList;

export const topMenu = () => {
    if (getInTouch.contains("show_menu")) {
        getInTouch.remove("show_menu");
        getInTouch.add("hide_menu");
    } else {
        getInTouch.add("show_menu"); 
        getInTouch.remove("hide_menu"); 
    }
}

menuIcon.addEventListener("click", topMenu);

/**
 * Handles the navigation/ "progress bar" on the left side of the screen (for screen size 750px and up)
 */

const sections = document.querySelectorAll("section");
const sideBar = document.querySelector("#side_bar"); 

const unselect = () => {
    for (let i = 0; i < sideBar.children.length; i++) {
        sideBar.children[i].classList.remove("side_bar__dot__selected");
    }
}

window.addEventListener("scroll", () => {
    sections.forEach((section, i) => {
        if (section.getBoundingClientRect().top < window.innerHeight / 2 && section.getBoundingClientRect().bottom > window.innerHeight / 2) {
            unselect();
            sideBar.children[i].classList.add("side_bar__dot__selected");
        }
    });
});

document.querySelectorAll(".side_bar__dot").forEach((dot, i) => {
    dot.addEventListener("click", () => {
        window.scrollTo({ top: sections[i].offsetTop });
    });
});
