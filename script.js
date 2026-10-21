const form = document.getElementById("contactForm");

if (form) {
  form.addEventListener("submit", function(event) {
    event.preventDefault();

    const name = document.getElementById("name").value.trim();
    const status = document.getElementById("formStatus");

    status.textContent =
      "Thank you, " + name +
      "! Your message was entered successfully. " +
      "This demo does not send or save your information.";

    form.reset();
  });
}
