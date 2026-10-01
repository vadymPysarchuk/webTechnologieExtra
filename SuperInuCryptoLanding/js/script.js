const button = document.getElementById("copyButton");
const message = document.getElementById("message");

button.addEventListener("click", () => {
  navigator.clipboard.writeText(button.textContent);

  message.style.display = "block";
  setTimeout(() => {
    message.style.display = "none";
  }, 1500);
});
