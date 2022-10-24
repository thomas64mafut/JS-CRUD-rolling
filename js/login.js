const loginForm = document.getElementById('loginForm');

loginForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const users = JSON.parse(localStorage.getItem('users')) || [];
    const userFound = users.find((user) => user.email  === e.target[0].value && user.contrasena === e.target[1].value);

    if(userFound) {
        const cancionesUser = [];
        localStorage.setItem('user', JSON.stringify(cancionesUser));
        if (userFound.email === 'admin@mail.com' && userFound.contrasena === 'admin') {
            window.location = `../pages/admin.html#${userFound.id}`;
            return alert('Sesion iniciada como admin');
        } else {
            window.location = `./userPage.html#${userFound.id}`;
            return alert('Sesion iniciada como usuario');
        }
    } else return alert('Nombre o contrasena incorrectos.');
});

