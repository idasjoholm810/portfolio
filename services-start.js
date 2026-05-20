document.addEventListener("DOMContentLoaded", () => {

    const section = document.querySelector(".services");
    if (!section) return;

    const cards = document.querySelectorAll(".services .card");

    const observer = new IntersectionObserver((entries, obs) => {

        entries.forEach(entry => {

            if (!entry.isIntersecting) return;

            // lite fördröjning så det känns “intentional”
            setTimeout(() => {

                cards.forEach((card, i) => {

                    setTimeout(() => {
                        card.classList.add("in-view");
                    }, i * 180); // 👈 lugn waterfall (ökad från 150)

                });

            }, 250); // 👈 mjuk start, inte instant

            obs.unobserve(section);
        });

    }, {
        threshold: 0.15, // 👈 triggar tidigare (viktigt!)
        rootMargin: "0px 0px -120px 0px" // 👈 startar lite innan de syns helt
    });

    observer.observe(section);
});