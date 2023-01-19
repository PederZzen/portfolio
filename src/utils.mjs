const scrollDownIcon = document.getElementById("scroll_down");
const anchor = document.getElementById("anchor");
const logo = document.querySelector("#logo");

export const scrollDown = () => {
    anchor.scrollIntoView();    
}

scrollDownIcon.addEventListener("click", scrollDown)

export const scrollUp = () => {
    scrollTo({ top: 0 })
}

logo.addEventListener("click", scrollUp)


