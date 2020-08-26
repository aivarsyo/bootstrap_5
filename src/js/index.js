// Bootstrap
import '../../node_modules/bootstrap';

// CSS
import "../scss/style.scss";

import gsap from "gsap";
import barba from '@barba/core';

// --- initialize ---

window.addEventListener("DOMContentLoaded", init);

function init(){

    menu();
    initTransition();
    
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

function pageTransition(){

  const tl = gsap.timeline();

  tl.to("ul.transition li", {
    duration: .3,
    scaleY: 1,
    transformOrigin: "bottom left",
    stagger: .1
  })

  tl.to("ul.transition li", {
    duration: .3,
    scaleY: 0,
    transformOrigin: "bottom left",
    stagger: .1,
    delay: .1
  })

}

function contentAnimation(){

  const tl = gsap.timeline();

  /* tl.from(".form-login", {
    duration: 1.5,
    translateY: 50,
    opacity: 0
  }) */

  /* tl.to(".form-login", {
    duration: 1.5,
    translateY: 50,
    opacity: 0
  }) */
}

  function delayy(n){
    n = n || 2000;
    return new Promise(done => {
      setTimeout(() => {
        done();
      }, n);
    })
  }

function initTransition(){

  barba.init({
    sync: true,

    transitions: [{

      async leave(data){

         const done = this.async();

         pageTransition();
         await delayy(1000);
         done();
      },

    async enter(data) {
      contentAnimation();
    },
    
    async once(data) {
      contentAnimation();
    }  

    }]
  })
}
