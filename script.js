
const form = document.getElementById('registerForm');
const countSpan = document.getElementById('count');
const userListDiv = document.getElementById('userList');
const confirmationMessage = document.getElementById('confirmationMessage');

let users = [];

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(form).entries());
    const fullName = data.firstName + ' ' + data.lastName;

    if (users.some(u => u.idNumber === data.idNumber)) {
        alert('ეს პირადი ნომერი უკვე რეგისტრირებულია!');
        return;
    }

    users.push({ ...data, fullName });
    updateDisplay();
    form.reset();
    confirmationMessage.textContent = `გმადლობთ, ${data.firstName}! გისურვებთ ევროპულ საქართველოში ცხოვრებას! 🇬🇪🇪🇺`;
});

function updateDisplay() {
    countSpan.textContent = users.length;
    const sorted = users.sort((a, b) => a.lastName.localeCompare(b.lastName));
    userListDiv.innerHTML = '<ul>' + sorted.map(u => `<li>${u.fullName} (${u.phone})</li>`).join('') + '</ul>';
}
