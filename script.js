
function showForm() {
    document.getElementById('landing').style.display = 'none';
    document.getElementById('form-section').style.display = 'block';
}

function handleSubmit(event) {
    event.preventDefault();
    document.getElementById('form-section').style.display = 'none';
    document.getElementById('thank-you').style.display = 'flex';
}
