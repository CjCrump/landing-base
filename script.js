const portfolioContactUrl =
  "https://yourusername.github.io/portfolio/#contact";

document.querySelectorAll(".contact-btn").forEach(button => {
  button.addEventListener("click", () => {
    window.location.href = portfolioContactUrl;
  });
});
