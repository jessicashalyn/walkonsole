// Example: simple script for live chat toggle
document.addEventListener("DOMContentLoaded", () => {
  const chatIcon = document.createElement("div");
  chatIcon.innerHTML = '<i class="fas fa-comments"></i>';
  chatIcon.style.position = "fixed";
  chatIcon.style.bottom = "20px";
  chatIcon.style.right = "20px";
  chatIcon.style.fontSize = "2rem";
  chatIcon.style.cursor = "pointer";
  chatIcon.style.color = "#FF3B30";

  document.body.appendChild(chatIcon);

  chatIcon.addEventListener("click", () => {
    alert("Live Chat is available Mon–Fri | 10 AM – 5 PM");
  });
});
