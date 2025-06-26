
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
  updateDisplay();
  form.reset();
});

function updateDisplay() {
  countSpan.textContent = users.length;
  const sorted = users.sort((a, b) => a.fullName.localeCompare(b.fullName));
  userListDiv.innerHTML = `<ul>${sorted.map(u => `<li>${u.fullName} (${u.phone})</li>`).join('')}</ul>`;
}
