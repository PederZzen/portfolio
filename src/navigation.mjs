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

const sections = document.querySelectorAll("section");
const height = window.innerHeight;
const sideBar = document.querySelector("#side_bar"); 

const reset = () => {
    for (let i = 0; i < sideBar.children.length; i++) {
        sideBar.children[i].classList.remove("side_bar__dot__selected");
    }
}

window.addEventListener("scroll", () => {
    const scrollTop = window.scrollY;
    sections.forEach((section, i) => {
        if (section.offsetTop < scrollTop + height / 2 && scrollTop < section.offsetTop + height / 2) {
            reset();
            sideBar.children[i].classList.add("side_bar__dot__selected");
        }
    })
})

document.querySelectorAll(".side_bar__dot").forEach((dot, i) => {
    dot.addEventListener("click", () => {
        window.scrollTo({ top: i * height })
    })
})