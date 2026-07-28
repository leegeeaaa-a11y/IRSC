/* ========================================
   IRISCODE Official Website
   main.js
======================================== */

/* ===========================
   Header Scroll Effect
=========================== */

const header = document.querySelector("header");

window.addEventListener("scroll", () => {

    if(window.scrollY > 40){

        header.style.background = "rgba(0,0,0,.85)";
        header.style.backdropFilter = "blur(20px)";
        header.style.borderBottom =
        "1px solid rgba(167,116,255,.35)";

    }else{

        header.style.background =
        "rgba(0,0,0,.55)";

        header.style.backdropFilter =
        "blur(14px)";

        header.style.borderBottom =
        "1px solid rgba(255,255,255,.08)";
    }

});


/* ===========================
   Smooth Hover Animation
=========================== */

const cards =
document.querySelectorAll(".game-card");

cards.forEach(card=>{

    card.addEventListener("mouseenter",()=>{

        card.style.transform =
        "translateY(-10px)";

    });

    card.addEventListener("mouseleave",()=>{

        card.style.transform =
        "translateY(0px)";

    });

});


/* ===========================
   Scroll Fade
=========================== */

const observer = new IntersectionObserver(

(entries)=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            entry.target.classList.add("show");

        }

    });

},

{
    threshold:0.2
}

);

document.querySelectorAll("section, footer").forEach(el=>{

    el.classList.add("hidden");

    observer.observe(el);

});


/* ===========================
   Footer Year
=========================== */

const year =
new Date().getFullYear();

const footer =
document.querySelector("footer p:last-child");

if(footer){

    footer.innerHTML =
    "© " + year + " IRISCODE. All Rights Reserved.";

}
