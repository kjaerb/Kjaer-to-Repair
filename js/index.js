const sections = document.querySelectorAll("section");
const pointerUp = document.querySelector(".pointer-up");

/*
//Shows pointer up
const options = {
    threshold: 0.7
};

let observer = new IntersectionObserver(pointerUpCheck, options);

function pointerUpCheck(entries) {
    entries.forEach(entry => {
        const tl = new TimelineMax();
        const className = entry.target.className;
        console.log(className);
        if(className !== "section s1 fp-section fp-table active") {
            tl.fromTo(pointerUp, 0.5, {opacity: 0}, {opacity: 1});
        } else {
            tl.fromTo(pointerUp, 0.5, {opacity: 1}, {opacity: 0});
        }
    });
}


sections.forEach(section => {
    observer.observe(section);
});
*/

//Section changing
new fullpage('#fullpage', {
    autoScrolling: true,
    navigation: true,
    loopBottom: true,
    loopTop: true,
    onLeave: (origin, destination, direction) => {
        //Animates h1
        const section = destination.item;
        const title = section.querySelector("h1");
        const tl = new TimelineMax({delay: 0.5});
        if(title !== null && origin.isLast === false) {
            tl.fromTo(title, 0.5, { y: "50", opacity: 0}, { y: "0", opacity: 1})
        }
    }
    
});
