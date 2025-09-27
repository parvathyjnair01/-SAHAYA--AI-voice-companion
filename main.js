// Show today's date automatically
const today = new Date();
document.getElementById("today-date").textContent =
  today.toLocaleDateString("en-US", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric"
  });
