/* =========================================================
   GEOSPATIAL COMMUTE FLOW DASHBOARD
   JavaScript
========================================================= */


document.addEventListener(
    "DOMContentLoaded",
    function () {


        /* =====================================================
           BACK TO TOP BUTTON
        ===================================================== */

        const backToTop =
            document.getElementById(
                "backToTop"
            );


        function checkScroll() {

            if (
                window.scrollY > 500
            ) {

                backToTop.classList.add(
                    "show"
                );

            } else {

                backToTop.classList.remove(
                    "show"
                );

            }

        }


        window.addEventListener(
            "scroll",
            checkScroll
        );


        backToTop.addEventListener(
            "click",
            function () {

                window.scrollTo({

                    top: 0,

                    behavior: "smooth"

                });

            }
        );


        /* =====================================================
           SMOOTH NAVIGATION
        ===================================================== */

        const navigationLinks =
            document.querySelectorAll(
                'a[href^="#"]'
            );


        navigationLinks.forEach(
            function (link) {

                link.addEventListener(
                    "click",
                    function (event) {

                        const targetID =
                            link.getAttribute(
                                "href"
                            );


                        const target =
                            document.querySelector(
                                targetID
                            );


                        if (target) {

                            event.preventDefault();


                            target.scrollIntoView({

                                behavior: "smooth",

                                block: "start"

                            });

                        }

                    }
                );

            }
        );


        /* =====================================================
           IFRAME LOADING EFFECT
        ===================================================== */

        const frames =
            document.querySelectorAll(
                "iframe"
            );


        frames.forEach(
            function (frame) {

                frame.addEventListener(
                    "load",
                    function () {

                        frame.classList.add(
                            "loaded"
                        );

                    }
                );

            }
        );


        /* =====================================================
           ACTIVE NAVIGATION
        ===================================================== */

        const sections =
            document.querySelectorAll(
                "section[id]"
            );


        const navLinks =
            document.querySelectorAll(
                ".navigation a"
            );


        function updateActiveNavigation() {

            let currentSection = "";


            sections.forEach(
                function (section) {

                    const sectionTop =
                        section.offsetTop - 150;


                    const sectionHeight =
                        section.offsetHeight;


                    if (
                        window.scrollY >=
                        sectionTop
                    ) {

                        currentSection =
                            section.getAttribute(
                                "id"
                            );

                    }

                }
            );


            navLinks.forEach(
                function (link) {

                    link.classList.remove(
                        "active"
                    );


                    const linkTarget =
                        link.getAttribute(
                            "href"
                        );


                    if (
                        linkTarget ===
                        "#" + currentSection
                    ) {

                        link.classList.add(
                            "active"
                        );

                    }

                }
            );

        }


        window.addEventListener(
            "scroll",
            updateActiveNavigation
        );


        /* =====================================================
           INITIAL STATE
        ===================================================== */

        checkScroll();

        updateActiveNavigation();

    }
);