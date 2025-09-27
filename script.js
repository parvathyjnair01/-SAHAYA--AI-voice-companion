document.getElementById("profileForm").addEventListener("submit", function (e) {
  e.preventDefault();
  alert("✅ Profile created successfully! (In real app, this would save data.)");
  window.location.href = "./main.html";
});
