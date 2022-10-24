const registerForm = document.getElementById('registerForm');

const generateId = function () {
    return '_' + Math.random().toString(36).substr(2, 9);
}

registerForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const users = JSON.parse(localStorage.getItem('users'));
    const user = {
        nombre: e.target[0].value,
        email: e.target[1].value,
        contrasena: e.target[2].value,
        id: generateId(),
    }
    
    const alreadyExist = users.some((u) => u.email === user.email);
    if (!alreadyExist) {
        users.push(user);
        localStorage.setItem('users', JSON.stringify(users));
        window.location = './login.html';
    } else return alert('El usuario ya existe en la base de datos')
});

