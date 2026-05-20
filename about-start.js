document.addEventListener("DOMContentLoaded", () => {

    const section = document.querySelector(".about-start");
    const content = document.querySelector(".about-start__content");
    const cards = document.querySelectorAll(".stat-card");

    if (!section) return;

    // =========================
    // IN VIEW (SIMPLE & CLEAN)
    // =========================

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {

                section.classList.add("in-view");

                // stop observer (run once)
                observer.unobserve(section);
            }
        });
    }, {
        threshold: 0.25
    });

    observer.observe(section);

});