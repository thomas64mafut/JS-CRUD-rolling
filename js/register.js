const registerForm = document.getElementById('registerForm');

registerForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const users = JSON.parse(localStorage.getItem('users')) || [admin = {nombre:'admin', email:'admin@mail.com', contrasena:'admin'}];
    const user = {
        nombre: e.target[0].value,
        email: e.target[1].value,
        contrasena: e.target[2].value,
    }
    
    const alreadyExist = users.some((u) => u.email === user.email);
    if (!alreadyExist) {
        users.push(user);
        localStorage.setItem('users', JSON.stringify(users));
        window.location = './login.html';
    } else return alert('El usuario ya existe en la base de datos')
});

