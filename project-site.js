const projectCards = document.querySelectorAll(".project-card");

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target); // kör bara en gång
        }
    });
}, {
    threshold: 0.2,
    rootMargin: "0px 0px -10% 0px"
});

projectCards.forEach(card => observer.observe(card));