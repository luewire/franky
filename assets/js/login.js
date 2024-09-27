const btnTombol = document.querySelector("#tombol");
const txtUsername = document.querySelector("#Username");
const txtPassword = document.querySelector("#password");

// Create a list of users with their credentials
const users = [
    {
        name: "Zen",
        email: "zen@gmail.com",
        username: "zen",
        password: "123"
    },
    {
        name: "Deka",
        email: "Deka@mail.com",
        username: "deka",
        password: "123"
    },
    {
        name: "Titian",
        email: "titian@mail.com",
        username: "titian",
        password: "123"
    }
];

// Add event listener for the login button
btnTombol.addEventListener("click", function () {
    const inputUsername = txtUsername.value;
    const inputPassword = txtPassword.value;

    // Check if the username and password match any user in the list
    const user = users.find(user => user.username === inputUsername && user.password === inputPassword);

    if (user) {
        // Store the user data in localStorage and set isLoggedIn to true
        localStorage.setItem("userData", JSON.stringify({ name: user.name, email: user.email }));
        localStorage.setItem("isLoggedIn", "true");

        // Redirect to the landing page
        window.location.href = "landingpage.html";
    } else {
        // Alert if the username or password is incorrect
        alert("Username dan password anda salah. Silakan dicek kembali!!!");
    }
});
