const cards = document.querySelectorAll(".experience-card");
const section = document.querySelector(".experience");

if (section && cards.length) {

  const observer = new IntersectionObserver(
    (entries) => {

      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
        }
      });

    },
    {
      threshold: 0.35,
      rootMargin: "0px 0px -10% 0px"
    }
  );

  cards.forEach(card => observer.observe(card));
}