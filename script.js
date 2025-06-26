
const introText = document.getElementById('intro-text');
const introScreen = document.getElementById('intro-screen');
const formSection = document.getElementById('form-section');
const thankYouScreen = document.getElementById('thank-you-screen');
const thankMessage = document.getElementById('thank-message');
const form = document.getElementById('registerForm');

introText.addEventListener('click', () => {
  introScreen.classList.add('hidden');
  formSection.classList.remove('hidden');
});

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const data = new FormData(form);
  const firstName = data.get("firstName");
  formSection.classList.add('hidden');
  thankYouScreen.classList.remove('hidden');
  thankMessage.innerText = `${firstName}, გმადლობთ ბოიკოტში მონაწილეობისათვის! 🇬🇪🇪🇺`;
});
