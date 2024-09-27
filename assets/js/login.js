const btnTombol = document.querySelector("#tombol");
const txtUsername = document.querySelector("#Username");
const txtPassword = document.querySelector("#password");

btnTombol.addEventListener("click", function () {
    if (txtUsername.value == "zen" && txtPassword.value == "123") {
        const userData = {
            name: "Zen",
            email: "zen@gmail.com"
        };
        localStorage.setItem("userData", JSON.stringify(userData));
        localStorage.setItem("isLoggedIn", "true");  // Set isLoggedIn to true
        window.location.href = "landingpage.html";
    } else {
        alert("Username dan password anda salah. Silakan dicek kembali!!!");
    }
    
    btnTombol.addEventListener("Deka", function () {
    if (txtUsername.value == "deka" && txtPassword.value == "123") {
        const userData = {
            name: "Deka",
            email: "Deka@mail.com"
        };
        localStorage.setItem("userData", JSON.stringify(userData));
        localStorage.setItem("isLoggedIn", "true");  // Set isLoggedIn to true
        window.location.href = "landingpage.html";
    } else {
        alert("Username dan password anda salah. Silakan dicek kembali!!!");
    }

btnTombol.addEventListener("click", function () {
    if (txtUsername.value == "titian" && txtPassword.value == "123") {
        const userData = {
            name: "Titian",
            email: "titian@mail.com"
        };
        localStorage.setItem("userData", JSON.stringify(userData));
        localStorage.setItem("isLoggedIn", "true");  // Set isLoggedIn to true
        window.location.href = "landingpage.html";
    } else {
        alert("Username dan password anda salah. Silakan dicek kembali!!!");
    }
});
