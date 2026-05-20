const blocks = document.querySelectorAll('.service-block');

/* =========================
   1. ENTRANCE ANIMATION
========================= */

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('is-visible');
    }
  });
}, {
  threshold: 0.2
});

blocks.forEach(block => observer.observe(block));


/* =========================
   2. PARALLAX EFFECT
========================= */

window.addEventListener('scroll', () => {
  blocks.forEach(block => {
    const rect = block.getBoundingClientRect();

    const content = block.querySelector('.service-block__content');
    const card = block.querySelector('.service-card');

    if (!content || !card) return;

    // bara när blocket är i viewport
    if (rect.top < window.innerHeight && rect.bottom > 0) {

      const move = rect.top * 0.03;
      const moveCard = rect.top * 0.06;

      content.style.transform = `translateY(${move}px)`;
      card.style.transform = `translateY(${moveCard}px)`;
    }
  });
});