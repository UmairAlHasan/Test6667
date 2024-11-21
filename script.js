document.getElementById('auth-form').addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Form submitted successfully!');
});

document.getElementById('auth-form').addEventListener('submit', function (e) {
    e.preventDefault();

    // Simulate a login (In real implementation, use backend API for login verification)
    const user = {
        name: "John Doe",
        email: "johndoe@example.com"
    };

    // Save user data in localStorage
    localStorage.setItem("user", JSON.stringify(user));

    // Redirect to main page
    window.location.href = "index.html";
});