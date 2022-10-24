const welcomeMsg = document.querySelector('#welcome-user');
const adminBtn = document.querySelector('#admin-page-btn');
const loginBtn = document.querySelector('#login-page-btn');

const check = document.querySelector('#check');

const usuarios = JSON.parse(localStorage.getItem('users'));
const userId = JSON.parse(localStorage.getItem('userId'))

const filtroUsuario = usuarios.find((user) => (user.id === userId));

if (filtroUsuario) {
    welcomeMsg.textContent = `${'Bienvenido, ' + filtroUsuario.nombre + '!'}`
    loginBtn.classList.add('d-none');
    if (filtroUsuario.email === 'admin@mail.com' && filtroUsuario.contrasena === 'admin') {
        adminBtn.classList.remove('d-none');
    }
}

check.addEventListener('change', (e) => {
    if(e.target.checked){
        $('.collapse').collapse('show');
        console.log('abrir');
    } else
        $('.collapse').collapse('hide');
        console.log('cerrar');
});





