const loginForm = document.getElementById('loginForm');

loginForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const users = JSON.parse(localStorage.getItem('users')) || [];
    const userFound = users.find((user) => user.email  === e.target[0].value && user.contrasena === e.target[1].value);

    if (e.target[0].value === 'admin@mail.com' && e.target[1].value === 'admin'){
        window.location = './adminPage.html';
        return alert('Sesion iniciada como admin');
    } else if (!userFound) {
        localStorage.setItem('user', JSON.stringify(userFound));
        return alert('Nombre o contrasena incorrectos.');
    } else {
        window.location = './userPage.html';
        return alert('Sesion iniciada como usuario');
    }
});

