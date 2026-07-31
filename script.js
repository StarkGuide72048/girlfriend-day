// =========================================================
// ELEMENTS
// =========================================================

const intro = document.getElementById("intro");
const website = document.getElementById("website");

const openWebsiteButton =
    document.getElementById("openWebsite");

const envelopeArea =
    document.getElementById("envelopeArea");

const letterModal =
    document.getElementById("letterModal");

const closeLetter =
    document.getElementById("closeLetter");

const floatingHearts =
    document.getElementById("floatingHearts");


// =========================================================
// OPEN WEBSITE
// =========================================================

openWebsiteButton.addEventListener("click", function () {

    intro.style.transition =
        "opacity 0.8s ease, transform 0.8s ease";

    intro.style.opacity = "0";

    intro.style.transform =
        "scale(1.03)";


    setTimeout(function () {

        intro.style.display = "none";

        website.classList.remove("hidden");

        window.scrollTo({
            top: 0,
            behavior: "instant"
        });

        checkReveal();

    }, 800);

});


// =========================================================
// SCROLL REVEAL
// =========================================================

const revealElements =
    document.querySelectorAll(".reveal");


function checkReveal() {

    const triggerPoint =
        window.innerHeight * 0.88;


    revealElements.forEach(function (element) {

        const elementTop =
            element.getBoundingClientRect().top;


        if (elementTop < triggerPoint) {

            element.classList.add("active");

        }

    });

}


window.addEventListener(
    "scroll",
    checkReveal
);


window.addEventListener(
    "resize",
    checkReveal
);


// =========================================================
// LOVE LETTER
// =========================================================

envelopeArea.addEventListener(
    "click",
    function () {

        letterModal.classList.add("open");

        document.body.style.overflow =
            "hidden";

    }
);


function closeLoveLetter() {

    letterModal.classList.remove("open");

    document.body.style.overflow =
        "auto";

}


closeLetter.addEventListener(
    "click",
    closeLoveLetter
);


// Click outside the paper

letterModal.addEventListener(
    "click",
    function (event) {

        if (event.target === letterModal) {

            closeLoveLetter();

        }

    }
);


// ESC key closes letter

document.addEventListener(
    "keydown",
    function (event) {

        if (
            event.key === "Escape" &&
            letterModal.classList.contains("open")
        ) {

            closeLoveLetter();

        }

    }
);


// =========================================================
// FLOATING BACKGROUND HEARTS
// =========================================================

function createFloatingHeart() {

    // Don't create them before website opens

    if (website.classList.contains("hidden")) {
        return;
    }


    const heart =
        document.createElement("span");


    heart.classList.add(
        "floating-heart"
    );


    const symbols = [
        "♡",
        "♥",
        "♡",
        "♡"
    ];


    const randomSymbol =
        symbols[
        Math.floor(
            Math.random() *
            symbols.length
        )
        ];


    heart.textContent =
        randomSymbol;


    // Random position

    heart.style.left =
        Math.random() * 100 + "vw";


    // Random size

    heart.style.fontSize =
        Math.random() * 16 + 8 + "px";


    // Random duration

    const duration =
        Math.random() * 6 + 8;


    heart.style.animationDuration =
        duration + "s";


    // Slight random horizontal movement

    heart.style.marginLeft =
        Math.random() * 50 - 25 + "px";


    floatingHearts.appendChild(
        heart
    );


    setTimeout(function () {

        heart.remove();

    }, duration * 1000);

}


setInterval(
    createFloatingHeart,
    1100
);


// =========================================================
// MOUSE GLOW
// =========================================================

const mouseGlow =
    document.createElement("div");


mouseGlow.style.position =
    "fixed";

mouseGlow.style.width =
    "350px";

mouseGlow.style.height =
    "350px";

mouseGlow.style.borderRadius =
    "50%";

mouseGlow.style.background =
    "rgba(120, 32, 55, 0.09)";

mouseGlow.style.filter =
    "blur(90px)";

mouseGlow.style.pointerEvents =
    "none";

mouseGlow.style.zIndex =
    "-1";

mouseGlow.style.transform =
    "translate(-50%, -50%)";

mouseGlow.style.transition =
    "left 0.15s ease, top 0.15s ease";


document.body.appendChild(
    mouseGlow
);


document.addEventListener(
    "mousemove",
    function (event) {

        mouseGlow.style.left =
            event.clientX + "px";

        mouseGlow.style.top =
            event.clientY + "px";

    }
);


// =========================================================
// LOVE CARD 3D EFFECT
// =========================================================

const loveCards =
    document.querySelectorAll(
        ".love-card"
    );


loveCards.forEach(function (card) {

    card.addEventListener(
        "mousemove",
        function (event) {

            // Disable effect on small screens

            if (window.innerWidth < 850) {
                return;
            }


            const rectangle =
                card.getBoundingClientRect();


            const x =
                event.clientX -
                rectangle.left;


            const y =
                event.clientY -
                rectangle.top;


            const centerX =
                rectangle.width / 2;


            const centerY =
                rectangle.height / 2;


            const rotateY =
                (x - centerX) / 30;


            const rotateX =
                (centerY - y) / 30;


            card.style.transform =
                `
        perspective(1000px)
        rotateX(${rotateX}deg)
        rotateY(${rotateY}deg)
        translateY(-8px)
        `;

        }
    );


    card.addEventListener(
        "mouseleave",
        function () {

            card.style.transform =
                `
        perspective(1000px)
        rotateX(0deg)
        rotateY(0deg)
        translateY(0)
        `;

        }
    );

});


// =========================================================
// BUTTON HEART BURST
// =========================================================

openWebsiteButton.addEventListener(
    "click",
    function (event) {

        createHeartBurst(
            event.clientX,
            event.clientY
        );

    }
);


function createHeartBurst(x, y) {

    for (let i = 0; i < 12; i++) {

        const heart =
            document.createElement("span");


        heart.textContent =
            i % 2 === 0
                ? "♥"
                : "♡";


        heart.style.position =
            "fixed";

        heart.style.left =
            x + "px";

        heart.style.top =
            y + "px";

        heart.style.color =
            "#c64d6b";

        heart.style.fontSize =
            Math.random() * 12 +
            10 +
            "px";

        heart.style.pointerEvents =
            "none";

        heart.style.zIndex =
            "999";


        const randomX =
            Math.random() * 200 - 100;


        const randomY =
            Math.random() * -150 - 30;


        heart.animate(

            [
                {
                    transform:
                        "translate(0, 0) scale(0.5)",

                    opacity: 1
                },

                {
                    transform:
                        `
            translate(
              ${randomX}px,
              ${randomY}px
            )
            scale(1.3)
            `,

                    opacity: 0
                }
            ],

            {
                duration:
                    Math.random() * 700 +
                    900,

                easing: "ease-out"
            }

        );


        document.body.appendChild(
            heart
        );


        setTimeout(function () {

            heart.remove();

        }, 1700);

    }

}