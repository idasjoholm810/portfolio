const serviceBlocks = document.querySelectorAll('.service-block');

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {

      // mjuk start → gör att det inte känns direkt “trigger”
      setTimeout(() => {
        entry.target.classList.add('is-visible');
      }, 200);

      observer.unobserve(entry.target);
    }
  });
}, {
  threshold: 0.12,
  rootMargin: "0px 0px -20% 0px"
});

serviceBlocks.forEach(block => observer.observe(block));