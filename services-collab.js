const collab = document.querySelector('.collaboration');

if (collab) {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                collab.classList.add('in-view');
            }
        });
    }, {
        threshold: 0.25,
        rootMargin: "0px 0px -100px 0px"
    });

    observer.observe(collab);
}