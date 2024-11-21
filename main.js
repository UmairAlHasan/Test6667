// Check if the user is logged in
document.addEventListener("DOMContentLoaded", () => {
    const profileLink = document.getElementById("profile-link");
    const user = localStorage.getItem("user");

    if (user) {
        // If logged in, show the profile
        profileLink.innerHTML = `<a href="#">${JSON.parse(user).name}</a>`;
    }
});

if (user) {
    const logoutBtn = document.getElementById("logout-btn");
    logoutBtn.style.display = "block";
    logoutBtn.addEventListener("click", () => {
        localStorage.removeItem("user");
        window.location.href = "login.html";
    });
}