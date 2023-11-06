
// Function to validate the login form

function validateLoginForm() {
    // Get the email and password input elements
    const emailInput = document.getElementById("email");
    const passwordInput = document.getElementById("password");
    const errorMessages = document.getElementById("errorMessages");

    // Reset the error messages
    errorMessages.innerHTML = "";

    // Validate the email
    const emailValue = emailInput.value.trim();
    if (emailValue === "") {
        showError("Email is required");
        return false; // Prevent form submission
    }

    // Validate the password
    const passwordValue = passwordInput.value.trim();
    if (passwordValue === "") {
        showError("Password is required");
        return false; // Prevent form submission
    }

    return true;
}

// Function to display error messages
function showError(message) {
    const errorMessages = document.getElementById("errorMessages");
    errorMessages.innerHTML = message;
}

// Add event listeners to the form for validation
document.getElementById("loginForm").addEventListener("submit", function (event) {
    if (!validateLoginForm()) {
        event.preventDefault(); // Prevent form submission if validation fails
    }
});
