// Validar usuario y contraseña (se puede reemplazar por lógica de backend)
const validUser = {
    username: "admin",
    password: "Dartwig78"
};

document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault();
    
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    const errorElement = document.getElementById("error");

    // Validar datos
    if (username === validUser.username && password === validUser.password) {
        localStorage.setItem("isAuthenticated", "true"); // Guardar estado de autenticación
        window.location.href = "home.html"; // Redirecciona a otra página
    } else {
        errorElement.textContent = "Usuario o contraseña incorrectos";
    }
});
