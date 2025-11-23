document.getElementById("registerForm").addEventListener("submit", e => {
    e.preventDefault();

    const name = nameField.value.trim();
    const email = emailField.value.trim();
    const password = passwordField.value.trim();

    if (!name || !email || !password) {
        alert("Preencha todos os campos!");
        return;
    }

    const users = JSON.parse(localStorage.getItem("users")) || [];

    if (users.some(u => u.email === email)) {
        alert("Já existe uma conta com esse email!");
        return;
    }

    users.push({ name, email, password });

    localStorage.setItem("users", JSON.stringify(users));

    alert("Conta criada!");
    window.location.href = "login.html";
});

const nameField = document.getElementById("name");
const emailField = document.getElementById("email");
const passwordField = document.getElementById("password");
