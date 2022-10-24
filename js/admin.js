const tableBody = document.getElementById('tableBody');
const formAgregarCancion = document.getElementById('formAgregarCancion')
const editarNombre = document.getElementById('editarNombre')
const editarArtista = document.getElementById('editarArtista')
const editaralbum = document.getElementById('editaralbum')
const formularioAgregar = document.getElementById('formularioAgregar')
const formularioEdicion = document.getElementById('formularioEdicion')
const btnAgregarPlaylist = document.querySelector('#btnAgregarPlaylist')
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
        album: e.target[2].value,
        genero: e.target[3].value,
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
        album: e.target[3].value,
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
                    <td class="text-center">
                        ${song.nombre}
                    </td>
                    <td class="text-center">
                        ${song.artista}
                    </td>
                    <td class="text-center">
                        ${song.categoria}
                    </td>
                    <td class="text-center">
                        ${song.album}
                    </td>
                    <td>   
                        <button type="button" class="btn btn-dark" onclick="borrarCancion('${song.id}')">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash-fill" viewBox="0 0 16 16">
                            <path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0z"/>
                            </svg>
                            <span class="d-none d-sm-block">Eliminar</span>
                        </button> 
                    </td>
                    <td>
                        <button type="button" class="btn btn-light" onclick="editarCancion('${song.id}')">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pencil-fill" viewBox="0 0 16 16">
                            <path d="M12.854.146a.5.5 0 0 0-.707 0L10.5 1.793 14.207 5.5l1.647-1.646a.5.5 0 0 0 0-.708l-3-3zm.646 6.061L9.793 2.5 3.293 9H3.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.207l6.5-6.5zm-7.468 7.468A.5.5 0 0 1 6 13.5V13h-.5a.5.5 0 0 1-.5-.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.5-.5V10h-.5a.499.499 0 0 1-.175-.032l-.179.178a.5.5 0 0 0-.11.168l-2 5a.5.5 0 0 0 .65.65l5-2a.5.5 0 0 0 .168-.11l.178-.178z"/>
                            </svg>
                            <span class="d-none d-sm-block">Editar</span>
                        </button>
                    </td>
                    <td>
                        <button class="btn btn-primary" id="btnAgregarPlaylist" onclick="agregarCancionPlaylist('${song.id}')">+</button>
                    </td>
            </tr>`
            trs.push(tr)
    }
    tableBody.innerHTML = trs.join(' ');
}

const agregarCancionPlaylist = (id) => {
    const cancionesObtenidas = JSON.parse(localStorage.getItem('songsUser'));
    const canciones = JSON.parse(localStorage.getItem('canciones'));
    const cancionBuscada = canciones.find((song) => song.id === id);
    cancionesObtenidas.push(cancionBuscada)
    localStorage.setItem('songsUser',JSON.stringify(cancionesObtenidas));
}

listarCanciones();
