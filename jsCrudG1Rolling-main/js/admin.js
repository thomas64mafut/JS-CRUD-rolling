const tableBody = document.getElementById('tableBody');
const formAgregarCancion = document.getElementById('formAgregarCancion')
const editarNombre = document.getElementById('editarNombre')
const editarArtista = document.getElementById('editarArtista')
const editarDuracion = document.getElementById('editarDuracion')
const formularioAgregar = document.getElementById('formularioAgregar')
const formularioEdicion = document.getElementById('formularioEdicion')
var editandoCancion = ''

/* let canciones = []; */

const generateId = function () {
    return '_' + Math.random().toString(36).substr(2, 9);
}

const limpiarFormulario = () =>{
    document.getElementById('limpiarFormulario').reset();
    }

formEditarCancion.addEventListener('submit',(e) => {
    e.preventDefault();
    const cancion = {
        nombre: e.target[0].value,
        artista: e.target[1].value,
        categoria: e.target[2].value,
        duracion: e.target[3].value,
        id: editandoCancion,
    }
    const cancionesAlmacenadas = JSON.parse(localStorage.getItem('canciones'))
        const nuevasCanciones = cancionesAlmacenadas.map((song) =>{
            if (song.id === editandoCancion) {
                return cancion;
            }
            return song;
        });
    canciones = nuevasCanciones;
    localStorage.setItem('canciones', JSON.stringify(nuevasCanciones))
    listarCanciones();
    $('#editar').modal('hide')
    formularioEdicion.reset();
    editandoCancion = '';
});

formAgregarCancion.addEventListener('submit', (e) => {
    e.preventDefault();
        const cancion = {
        nombre: e.target[0].value,
        artista: e.target[1].value,
        categoria: e.target[2].value,
        duracion: e.target[3].value,
        id: generateId(),
        }
    const cancionesAlmacenadas = JSON.parse(localStorage.getItem('canciones')) || [];
        cancionesAlmacenadas.push(cancion);
        localStorage.setItem('canciones', JSON.stringify(cancionesAlmacenadas))
        listarCanciones();
        formularioAgregar.reset();
}) 



const borrarCancion = (id) => {
    const canciones = JSON.parse(localStorage.getItem('canciones'));
        const nuevasCanciones = canciones.filter((song) => song.id !== id);
        localStorage.setItem('canciones', JSON.stringify(nuevasCanciones))
        listarCanciones();
    }

const editarCancion = (id) =>{
    editandoCancion = id;
    $('#formEditarCancion').modal('show')
    formularioEdicion.reset();
}


const listarCanciones = () => {
    const trs = [];
    const canciones = JSON.parse(localStorage.getItem('canciones'));
    for (const song of canciones) {
        const tr = `
            <tr>
                <td>${song.nombre}</td>
                <td>${song.artista}</td>
                <td>${song.categoria}</td>
                <td>${song.duracion}</td>
                <td> <button onclick="borrarCancion('${song.id}')"> Eliminar</button> </td>
                <td> <button onclick="editarCancion('${song.id}')"> Editar</button> </td>
            </tr>`
            trs.push(tr)
    }
    tableBody.innerHTML = trs.join(' ');
}

listarCanciones();
