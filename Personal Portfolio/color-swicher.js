// toggle style switcheer

const styleSwitcherToggle = document.querySelector(".style-switcher-toggler");
styleSwitcherToggle.addEventListener("click", () => {
    document.querySelector(".style-switcher").classList.toggle("open");
})

// hide on scroll

window.addEventListener("scroll", () => {
    if(document.querySelector(".style-switcher").classList.contains("open"))
    {
        document.querySelector(".style-switcher").classList.remove("open");
    }
})

// theme colors

const alterneteStyles = document.querySelectorAll(".alternate-style");
function setActiveStyle(color)
{
    alterneteStyles.forEach((style) => {
        if(color === style.getAttribute("title"))
        {
            style.removeAttribute("disabled");
        }
        else
        {
            style.setAttribute("disabled", "true");
        }
    })
}


// theme light and dark
const daylight = document.querySelector(".day-night");
daylight.addEventListener("click", () =>{
    daylight.querySelector("i").classList.toggle("fa-moon");
    daylight.querySelector("i").classList.toggle("fa-sun");
    document.body.classList.toggle("dark");
})

window.addEventListener("load", () => {
    if(document.body.classList.contains("dark"))
    {
        daylight.querySelector("i").classList.add("fa-moon");
    }
    else
    {
        daylight.querySelector("i").classList.add("fa-sun");
    }
})