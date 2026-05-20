const headers = document.querySelectorAll(".accordion-header");

headers.forEach(header => {
  header.addEventListener("click", () => {
    const content = header.nextElementSibling;

    // stäng andra
    document.querySelectorAll(".accordion-content").forEach(c => {
      if (c !== content) c.style.maxHeight = null;
    });

    // toggle
    if (content.style.maxHeight) {
      content.style.maxHeight = null;
      header.querySelector("span").textContent = "+";
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
      header.querySelector("span").textContent = "−";
    }
  });
});