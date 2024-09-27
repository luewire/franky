const btnTombol = document.querySelector("#tombol");
const txtUsername = document.querySelector("#Username");
const txtPassword = document.querySelector("#password");

// List of users
const users = [
    {
        username: "User01",
        password: "123",
        name: "Zen",
        email: "zen@gmail.com"
    },
    {
        username: "User02",
        password: "abc",
        name: "Deka",
        email: "deka@gmail.com"
    },
    {
        username: "User03",
        password: "456",
        name: "Titian",
        email: "titian@gmail.com"
    }
];

// Add event listener for the login button
btnTombol.addEventListener("click", function () {
    const inputUsername = txtUsername.value;
    const inputPassword = txtPassword.value;

    // Find the user with the matching username and password
    const user = users.find(user => user.username === inputUsername && user.password === inputPassword);

    if (user) {
        // Store the user data in localStorage and set isLoggedIn to true
        const userData = {
            name: user.name,
            email: user.email
        };
        localStorage.setItem("userData", JSON.stringify(userData));
        localStorage.setItem("isLoggedIn", "true");

        // Redirect to the landing page
        window.location.href = "landingpage.html";
    } else {
        // Show an alert if username or password is incorrect
        alert("Username dan password anda salah. Silakan dicek kembali!!!");
    }
});
