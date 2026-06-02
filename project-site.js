
const projects = document.querySelectorAll('.project');

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {

            setTimeout(() => {
                entry.target.classList.add('is-visible');
            }, 180);

            observer.unobserve(entry.target);
        }
    });
}, {
    threshold: 0.12,
    rootMargin: "0px 0px -20% 0px"
});

projects.forEach(p => observer.observe(p));