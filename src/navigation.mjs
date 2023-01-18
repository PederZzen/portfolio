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