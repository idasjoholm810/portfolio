const items = document.querySelectorAll(
  ".work__title, .work__text, .work__card, .work__info"
);

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("is-visible");
      observer.unobserve(entry.target);
    }
  });
}, {
  threshold: 0.2,
  rootMargin: "0px 0px -10% 0px"
});

items.forEach(item => observer.observe(item));