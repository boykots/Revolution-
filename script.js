
const splash = document.getElementById("splash");
const formSection = document.getElementById("formSection");
const thankYouSection = document.getElementById("thankYouSection");
const form = document.getElementById("registerForm");

function showForm() {
  splash.classList.add("hidden");
  formSection.classList.remove("hidden");
}

form.addEventListener("submit", function(e) {
  e.preventDefault();
  const formData = new FormData(form);
  const name = formData.get("firstName");
  formSection.classList.add("hidden");
  thankYouSection.classList.remove("hidden");
  document.getElementById("thankText").innerText = `გმადლობთ, ${name}, რეგისტრაციისთვის! ერთად ევროპული მომავლისკენ 🇬🇪🇪🇺`;
});
