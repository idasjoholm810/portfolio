<script>
document.getElementById("contactForm").addEventListener("submit", function(e) {
  e.preventDefault();

  const status = document.getElementById("formStatus");
  status.textContent = "Skickar...";

  setTimeout(() => {
    status.textContent = "Tack! Ditt meddelande är skickat.";
    this.reset();
  }, 1000);
});
</script>