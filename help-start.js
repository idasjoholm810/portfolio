document.addEventListener("DOMContentLoaded", () => {

    const helpSection = document.querySelector(".help");
    const cards = document.querySelectorAll(".help-card");

    if (!helpSection) return;

    /* 1. SECTION TRIGGER */
    const sectionObserver = new IntersectionObserver((entries) => {

        entries.forEach(entry => {
            if (!entry.isIntersecting) return;

            helpSection.classList.add("in-view");
        });

    }, {
        threshold: 0.15,
        rootMargin: "0px 0px -10% 0px"
    });

    sectionObserver.observe(helpSection);

    /* 2. CARD WATERFALL TRIGGER (DET VIKTIGA) */
    const cardObserver = new IntersectionObserver((entries, obs) => {

        entries.forEach(entry => {

            if (!entry.isIntersecting) return;

            entry.target.classList.add("in-view");
            obs.unobserve(entry.target);

        });

    }, {
        threshold: 0.25,
        rootMargin: "0px 0px -10% 0px"
    });

    cards.forEach(card => cardObserver.observe(card));

});