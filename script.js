const form = document.getElementById('registerForm');
const countSpan = document.getElementById('count');
const userListDiv = document.getElementById('userList');

let users = [];

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const data = Object.fromEntries(new FormData(form).entries());

  if (users.some(u => u.idNumber === data.idNumber)) {
    alert('ეს პირადი ნომერი უკვე რეგისტრირებულია!');
    return;
  }

  users.push(data);
  updateDisplay(data.firstName);
  form.reset();
});

function updateDisplay(name) {
  countSpan.textContent = users.length;
  userListDiv.innerHTML = `<p>მადლობა, ${name}! 💙 გისურვებთ ევროპულ საქართველოში ცხოვრებას!</p>`;
}
