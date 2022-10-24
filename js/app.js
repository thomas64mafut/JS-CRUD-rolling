console.log('hola pa estoy andando');

const generateId = function () {
    return '_' + Math.random().toString(36).substr(2, 9);
}

const cancionesUser = [];
localStorage.setItem('songsUser', JSON.stringify(cancionesUser));
console.log('playlist de user creado');

const users = JSON.parse(localStorage.getItem('users')) || [{nombre:'admin', email:'admin@mail.com', contrasena:'admin', id: generateId(),}];

console.log(users);

localStorage.setItem('users', JSON.stringify(users));
console.log('admin creado');