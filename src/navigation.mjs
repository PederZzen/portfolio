const menuIcon = document.getElementById("menu_icon");
const getInTouch = document.getElementById("get_in_touch");

export function topMenu () {
    if (getInTouch.classList.contains("showMenu")) {
        getInTouch.classList.remove("showMenu");
        getInTouch.classList.add("hideMenu");
    } else {
        getInTouch.classList.add("showMenu"); 
        getInTouch.classList.remove("hideMenu"); 
    }
}

menuIcon.addEventListener("click", topMenu);