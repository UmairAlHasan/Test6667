// DOM Elements
const profileButton = document.getElementById("profile-button");
const dropdown = document.getElementById("dropdown");
const loggedOutMenu = document.getElementById("logged-out");
const loggedInMenu = document.getElementById("logged-in");
const loginBtn = document.getElementById("login-btn");
const logoutBtn = document.getElementById("logout-btn");

// Toggle dropdown visibility
profileButton.addEventListener("click", () => {
    dropdown.classList.toggle("hidden");
});

// Handle login
loginBtn.addEventListener("click", () => {
    // Simulating login and saving user data in localStorage
    const user = {
        name: "John Doe",
        email: "johndoe@example.com",
    };
    localStorage.setItem("user", JSON.stringify(user));

    // Update UI
    loggedOutMenu.classList.add("hidden");
    loggedInMenu.classList.remove("hidden");
});

// Handle logout
logoutBtn.addEventListener("click", () => {
    // Remove user data from localStorage
    localStorage.removeItem("user");

    // Update UI
    loggedOutMenu.classList.remove("hidden");
    loggedInMenu.classList.add("hidden");
});

// On page load, check login state
document.addEventListener("DOMContentLoaded", () => {
    const user = localStorage.getItem("user");
    if (user) {
        loggedOutMenu.classList.add("hidden");
        loggedInMenu.classList.remove("hidden");
    } else {
        loggedOutMenu.classList.remove("hidden");
        loggedInMenu.classList.add("hidden");
    }
});