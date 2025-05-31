document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    clearErrors();
    
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();
    
    let isValid = true;
    
    if (!name) {
        showError('name', 'Name is required');
        isValid = false;
    }
    
    if (!email) {
        showError('email', 'Email is required');
        isValid = false;
    } else if (!isValidEmail(email)) {
        showError('email', 'Please enter a valid email');
        isValid = false;
    }
    
    if (!message) {
        showError('message', 'Message is required');
        isValid = false;
    }
    
    if (isValid) {
        alert('Form submitted successfully!');
        this.reset();
    }
});

function showError(fieldId, message) {
    const field = document.getElementById(fieldId);
    const errorDiv = document.createElement('div');
    errorDiv.className = 'error';
    errorDiv.textContent = message;
    field.parentNode.appendChild(errorDiv);
    field.style.borderColor = 'red';
}

function clearErrors() {
    const errors = document.querySelectorAll('.error');
    errors.forEach(error => error.remove());
    
    const inputs = document.querySelectorAll('input, textarea');
    inputs.forEach(input => input.style.borderColor = '#ddd');
}

function isValidEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}