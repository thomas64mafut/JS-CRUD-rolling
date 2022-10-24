const welcomeMsg = document.querySelector('#welcome-user');
const adminBtn = document.querySelector('#admin-page-btn');
const loginBtn = document.querySelector('#login-page-btn');
const btnLogout = document.querySelector('#btnLogout')

const check = document.querySelector('#check');

const usuarios = JSON.parse(localStorage.getItem('users'));
const userId = JSON.parse(localStorage.getItem('userId'))

const filtroUsuario = usuarios.find((user) => (user.id === userId));

if (userId) {
    btnLogout.classList.remove('d-none')
    welcomeMsg.textContent = `${'Bienvenido, ' + filtroUsuario.nombre + '!'}`
    loginBtn.classList.add('d-none');
}

const logout = () => {
    localStorage.removeItem('userId');
    btnLogout.classList.add('d-none')
    window.location.replace('../index.html');
    return alert('Desconectado con exito');
};

check.addEventListener('change', (e) => {
    if(e.target.checked){
        $('.collapse').collapse('show');
        console.log('abrir');
    } else
        $('.collapse').collapse('hide');
        console.log('cerrar');

});


