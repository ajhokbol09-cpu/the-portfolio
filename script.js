```javascript
/* =====================================================
   AJHOK PORTFOLIO
   MAIN JAVASCRIPT
===================================================== */


/* =====================================================
   1. CUSTOM CURSOR
===================================================== */

const cursor = document.querySelector(".cursor");

if (cursor) {

    document.addEventListener("mousemove", function (event) {

        cursor.style.left = event.clientX + "px";
        cursor.style.top = event.clientY + "px";

    });


    // Make cursor larger when hovering over
    // interactive elements

    const interactiveElements = document.querySelectorAll(
        "a, button, .star, .project-card"
    );

    interactiveElements.forEach(function (element) {

        element.addEventListener("mouseenter", function () {

            cursor.classList.add("cursor-active");

        });

        element.addEventListener("mouseleave", function () {

            cursor.classList.remove("cursor-active");

        });

    });

}


/* =====================================================
   2. NAVIGATION
===================================================== */

const navLinks = document.querySelectorAll("nav a");

navLinks.forEach(function (link) {

    link.addEventListener("click", function () {

        navLinks.forEach(function (item) {

            item.classList.remove("active");

        });

        link.classList.add("active");

    });

});


/* =====================================================
   3. RATING SYSTEM
===================================================== */

const stars = document.querySelectorAll(".star");

const ratingMessage =
    document.querySelector("#rating-message");

const ratingContainer =
    document.querySelector(".rating-stars");


// Store selected rating

let selectedRating = 0;


// Check if there is a saved rating

const savedRating =
    localStorage.getItem("portfolioRating");


if (savedRating) {

    selectedRating = Number(savedRating);

    updateStars(selectedRating);

    if (ratingMessage) {

        ratingMessage.textContent =
            `You rated this project ${selectedRating}/5`;

    }

}


// Function to update stars

function updateStars(rating) {

    stars.forEach(function (star) {

        const value =
            Number(star.dataset.value);

        if (value <= rating) {

            star.classList.add("selected");

        } else {

            star.classList.remove("selected");

        }

    });

}


// Hover over stars

stars.forEach(function (star) {

    star.addEventListener("mouseenter", function () {

        const rating =
            Number(star.dataset.value);


        stars.forEach(function (item) {

            const value =
                Number(item.dataset.value);


            if (value <= rating) {

                item.classList.add("hovered");

            } else {

                item.classList.remove("hovered");

            }

        });

    });


    // Click a star

    star.addEventListener("click", function () {

        selectedRating =
            Number(star.dataset.value);


        // Save rating

        localStorage.setItem(
            "portfolioRating",
            selectedRating
        );


        updateStars(selectedRating);


        if (ratingMessage) {

            ratingMessage.textContent =
                `You rated this project ${selectedRating}/5`;

        }

    });

});


// Remove hover effect

if (ratingContainer) {

    ratingContainer.addEventListener(
        "mouseleave",
        function () {

            stars.forEach(function (star) {

                star.classList.remove("hovered");

            });

        }
    );

}


/* =====================================================
   4. SCROLL REVEAL ANIMATION
===================================================== */

const revealElements =
    document.querySelectorAll(
        "header, .project-card, .rating-section, footer"
    );


const revealObserver =
    new IntersectionObserver(

        function (entries) {

            entries.forEach(function (entry) {

                if (entry.isIntersecting) {

                    entry.target.classList.add(
                        "reveal-visible"
                    );

                }

            });

        },

        {
            threshold: 0.15
        }

    );


revealElements.forEach(function (element) {

    element.classList.add("reveal");

    revealObserver.observe(element);

});


/* =====================================================
   5. MOUSE MOVEMENT HERO EFFECT
===================================================== */

const hero =
    document.querySelector("header");


if (hero) {

    hero.addEventListener(
        "mousemove",
        function (event) {

            const x =
                (event.clientX / window.innerWidth - 0.5);

            const y =
                (event.clientY / window.innerHeight - 0.5);


            hero.style.setProperty(
                "--mouse-x",
                `${x * 20}px`
            );


            hero.style.setProperty(
                "--mouse-y",
                `${y * 20}px`
            );

        }
    );

}


/* =====================================================
   6. BUTTON INTERACTION
===================================================== */

const buttons =
    document.querySelectorAll("button");


buttons.forEach(function (button) {

    button.addEventListener(
        "mouseenter",
        function () {

            button.classList.add(
                "button-hover"
            );

        }
    );


    button.addEventListener(
        "mouseleave",
        function () {

            button.classList.remove(
                "button-hover"
            );

        }
    );

});


/* =====================================================
   7. PROJECT CARD INTERACTION
===================================================== */

const projectCards =
    document.querySelectorAll(".project-card");


projectCards.forEach(function (card) {

    card.addEventListener(
        "mouseenter",
        function () {

            card.classList.add(
                "project-active"
            );

        }
    );


    card.addEventListener(
        "mouseleave",
        function () {

            card.classList.remove(
                "project-active"
            );

        }
    );

});


/* =====================================================
   8. CONTACT FORM VALIDATION
===================================================== */

const contactForm =
    document.querySelector("#contact-form");


if (contactForm) {

    contactForm.addEventListener(
        "submit",
        function (event) {

            event.preventDefault();


            const name =
                document.querySelector("#name");

            const email =
                document.querySelector("#email");

            const message =
                document.querySelector("#message");

            const formMessage =
                document.querySelector(
                    "#form-message"
                );


            // Check fields

            if (
                !name ||
                !email ||
                !message
            ) {

                return;

            }


            if (
                name.value.trim() === "" ||
                email.value.trim() === "" ||
                message.value.trim() === ""
            ) {

                if (formMessage) {

                    formMessage.textContent =
                        "Please complete all fields.";

                    formMessage.classList.add(
                        "error"
                    );

                }

                return;

            }


            // Basic email validation

            const emailPattern =
                /^[^\s@]+@[^\s@]+\.[^\s@]+$/;


            if (
                !emailPattern.test(
                    email.value.trim()
                )
            ) {

                if (formMessage) {

                    formMessage.textContent =
                        "Please enter a valid email address.";

                    formMessage.classList.add(
                        "error"
                    );

                }

                return;

            }


            // Successful validation

            if (formMessage) {

                formMessage.textContent =
                    "Message looks good!";

                formMessage.classList.remove(
                    "error"
                );

                formMessage.classList.add(
                    "success"
                );

            }


            // Clear form

            contactForm.reset();

        }
    );

}


/* =====================================================
   9. CURRENT YEAR
===================================================== */

const year =
    document.querySelector("#current-year");


if (year) {

    year.textContent =
        new Date().getFullYear();

}


/* =====================================================
   10. PAGE LOADED
===================================================== */

window.addEventListener(
    "load",
    function () {

        document.body.classList.add(
            "page-loaded"
        );

    }
);
```
