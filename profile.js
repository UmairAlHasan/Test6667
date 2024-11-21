document.addEventListener("DOMContentLoaded", () => {
    const nameInput = document.getElementById("name");
    const emailInput = document.getElementById("email");
    const bioInput = document.getElementById("bio");
    const saveButton = document.getElementById("save-button");
    const logoutButton = document.getElementById("logout-button");

    // Load user data from localStorage
    const user = JSON.parse(localStorage.getItem("user"));

    if (!user) {
        alert("You are not logged in!");
        window.location.href = "login.html"; // Redirect to login if user not logged in
    } else {
        // Populate form with user data
        nameInput.value = user.name || "";
        emailInput.value = user.email || "";
        bioInput.value = user.bio || "";
    }

    // Save updated data
    saveButton.addEventListener("click", () => {
        const updatedUser = {
            name: nameInput.value,
            email: emailInput.value,
            bio: bioInput.value,
        };

        // Update localStorage
        localStorage.setItem("user", JSON.stringify(updatedUser));
        alert("Profile updated successfully!");
    });

    // Handle logout
    logoutButton.addEventListener("click", () => {
        localStorage.removeItem("user");
        alert("Logged out successfully!");
        window.location.href = "login.html"; // Redirect to login
    });
});