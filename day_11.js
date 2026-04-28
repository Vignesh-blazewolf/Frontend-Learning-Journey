const form = document.getElementById("form");

form.addEventListener("submit", function (e) {
    e.preventDefault();

    let isValid = true;

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value.trim();

    // Name validation
    if (name === "") {
        document.getElementById("nameError").textContent = "Name is required";
        isValid = false;
    } else {
        document.getElementById("nameError").textContent = "";
    }

    // Email validation
    if (!email.includes("@")) {
        document.getElementById("emailError").textContent = "Enter valid email";
        isValid = false;
    } else {
        document.getElementById("emailError").textContent = "";
    }

    // Password validation
    if (password.length < 6) {
        document.getElementById("passwordError").textContent = "Minimum 6 characters required";
        isValid = false;
    } else {
        document.getElementById("passwordError").textContent = "";
    }

    if (isValid) {
        alert("Form submitted successfully!");
    }
});