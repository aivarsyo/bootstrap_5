// Bootstrap
import '../../node_modules/bootstrap';

// CSS
import "../scss/style.scss";

// --- initialize ---

window.addEventListener("DOMContentLoaded", init);

function init(){
    menu();
}

// --- *********** ---

function menu(){

    const nav = document.querySelector(".sidenav");
    const span = document.querySelector(".closeNav");

span.addEventListener("click", function(){

    nav.classList.toggle("sidenav__move");

    if(nav.classList.contains("sidenav__move")){
        span.innerHTML = "&#10005;"
    } else{
        span.innerHTML = "&#9776"
    }
})
}

