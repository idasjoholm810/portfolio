const aboutSection = document.querySelector('.about');

const aboutObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {

      setTimeout(() => {
        entry.target.classList.add('is-visible');
      }, 180);

      aboutObserver.unobserve(entry.target);
    }
  });
}, {
  threshold: 0.2,
  rootMargin: "0px 0px -15% 0px"
});

if (aboutSection) {
  aboutObserver.observe(aboutSection);
}