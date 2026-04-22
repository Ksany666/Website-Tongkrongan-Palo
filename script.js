alert("Selamat datang di Tongkrongan Palo 🎮");

const discordBtn = document.querySelector(".discord-btn");

discordBtn.addEventListener("click", function() {
    alert("Siap mabar bro 😎");
});

const cards = document.querySelectorAll(".card");

cards.forEach(card => {
    card.addEventListener("mouseenter", () => {
        console.log("Liat game:", card.querySelector("h3").innerText);
    });
});

document.querySelectorAll("nav a").forEach(link => {
    link.addEventListener("click", function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute("href"));
        target.scrollIntoView({
            behavior: "smooth"
        });
    });
});