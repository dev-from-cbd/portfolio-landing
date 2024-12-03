// TYPING
let typingText = new Typed("#text", {
    strings: ["Frontend Developer", "QA Tester", "Manager", "Marketer"],
    loop: true,
    typeSpeed: 100,
    backSpeed: 50,
    backDelay: 1000
})

// DARKMODE
let body = document.querySelector('body');
let darkmode = document.querySelector('.darkmode');

darkmode.onclick = function () {
    body.classList.toggle('night');
}