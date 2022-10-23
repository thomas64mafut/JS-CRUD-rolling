const welcomeMsg = document.querySelector('#welcome-user');
const adminBtn = document.querySelector('#admin-page-btn');
const loginBtn = document.querySelector('#login-page-btn');

localStorage.setItem('usuarios', JSON.stringify(
    [
        {
            nombre: 'thomas',
            email: 'thomas@mail.com',
            contrasena: '1234',
        },
        {
            nombre: 'admin',
            email: 'admin@mail.com',
            contrasena: 'admin',
        },
    ]
));

const usuarios = JSON.parse(localStorage.getItem('usuarios'));
const userId = usuarios[1] 
console.log(usuarios);
console.log(userId);

const filtroUsuario = usuarios.find((user) => (user.nombre === userId.nombre));

if (userId) {
    welcomeMsg.textContent = `${'Bienvenido, ' + userId.nombre + '!'}`
    loginBtn.classList.add('d-none');
    if (userId.email === 'admin@mail.com' && userId.contrasena === 'admin') {
        adminBtn.classList.remove('d-none');
    }
}



