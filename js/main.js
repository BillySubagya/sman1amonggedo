/* =========================================
   DOCUMENT READY
========================================= */

document.addEventListener("DOMContentLoaded", function () {


    /* =====================================
       MOBILE MENU
    ===================================== */

    const menuButton =
        document.querySelector("[data-menu]");

    const mobileMenu =
        document.querySelector("[data-mobile]");


    if (menuButton && mobileMenu) {

        menuButton.addEventListener("click", function () {

            mobileMenu.classList.toggle("open");

        });


        /* ================================
           CLOSE MENU AFTER CLICK
        ================================= */

        const mobileLinks =
            mobileMenu.querySelectorAll("a");


        mobileLinks.forEach(function (link) {

            link.addEventListener("click", function () {

                mobileMenu.classList.remove("open");

            });

        });

    }


    /* =====================================
       CURRENT YEAR
    ===================================== */

    const yearElements =
        document.querySelectorAll("[data-year]");


    yearElements.forEach(function (element) {

        element.textContent =
            new Date().getFullYear();

    });


});