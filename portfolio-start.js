document.addEventListener("DOMContentLoaded", () => {

    const portfolio = document.querySelector(".portfolio");

    if (!portfolio) return;

    const header = portfolio.querySelector(".portfolio__header");
    const cards = portfolio.querySelectorAll(".portfolio__card");

    let hasAnimated = false;

    const observer = new IntersectionObserver((entries) => {

        entries.forEach(entry => {

            if (!entry.isIntersecting) return;
            if (hasAnimated) return;

            hasAnimated = true;

            // =========================
            // HEADER först
            // =========================
            setTimeout(() => {
                header?.classList.add("in-view");
            }, 150);

            // =========================
            // CARDS stagger
            // =========================
            setTimeout(() => {

                cards.forEach((card, i) => {
                    setTimeout(() => {
                        card.classList.add("in-view");
                    }, i * 180);
                });

            }, 400);

        });

    }, {
        threshold: 0.15,
        rootMargin: "0px 0px -10% 0px"
    });

    observer.observe(portfolio);

});