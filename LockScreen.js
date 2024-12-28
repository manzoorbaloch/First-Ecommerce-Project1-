
function login() {
    const enteredEmail = document.getElementById("email").value.trim();
    const enteredPassword = document.getElementById("password").value.trim();
    const error = document.getElementById("error");

    // Check if both fields are filled
    if (enteredEmail && enteredPassword) {
        error.style.display = "none";
        window.location.href = "index.html"; // Redirect to your next page
    } else {
        error.style.display = "block"; // Show error if fields are empty
    }
}