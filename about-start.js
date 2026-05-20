document.addEventListener("DOMContentLoaded", () => {

    const section = document.querySelector(".about-start");
    const content = document.querySelector(".about-start__content");
    const cards = document.querySelectorAll(".stat-card");

    if (!section) return;

    /* =========================
       1. IN VIEW ANIMATION
    ========================= */

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                section.classList.add("in-view");
                observer.unobserve(section);
            }
        });
    }, {
        threshold: 0.25,
        rootMargin: "0px 0px -80px 0px"
    });

    observer.observe(section);


    /* =========================
       2. PARALLAX (TEXT + CARDS)
    ========================= */

    window.addEventListener("scroll", () => {

        const rect = section.getBoundingClientRect();

        if (rect.top < window.innerHeight && rect.bottom > 0) {

            // TEXT (mjuk, låg rörelse)
            if (content) {
                const moveText = rect.top * 0.02;
                content.style.transform = `translateY(${moveText}px)`;
            }

            // CARDS (stagger depth)
            cards.forEach((card, i) => {

                const speed = 0.03 + i * 0.01;
                const move = rect.top * speed;

                card.style.transform = `translateY(${move}px)`;

            });

        }

    });


    /* =========================
       3. HOVER FIX (VIKTIG DEL)
    ========================= */

    cards.forEach(card => {

        card.addEventListener("mousemove", (e) => {

            const rect = card.getBoundingClientRect();

            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;

            const centerX = rect.width / 2;
            const centerY = rect.height / 2;

            const rotateX = ((y - centerY) / centerY) * -4;
            const rotateY = ((x - centerX) / centerX) * 4;

            card.style.transform = `
                translateY(0px)
                perspective(800px)
                rotateX(${rotateX}deg)
                rotateY(${rotateY}deg)
            `;

        });

        card.addEventListener("mouseleave", () => {
            card.style.transform = "";
        });

    });

});