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
                    <td class="text-center">${song.nombre}</td>
                    <td class="text-center">${song.artista}</td>
                    <td class="text-center">${song.categoria}</td>
                    <td class="text-center">${song.album}</td>
                    <td>   
                        <button class="noselect buttonDelete" onclick="borrarCancion('${song.id}')">
                            <span class="text">Eliminar</span>
                                <span class="icon">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                        <path d="M24 20.188l-8.315-8.209 8.2-8.282-3.697-3.697-8.212 8.318-8.31-8.203-3.666 3.666 8.321 8.24-8.206 8.313 3.666 3.666 8.237-8.318 8.285 8.203z"></path>
                                    </svg>
                            </span>
                        </button> 
                    </td>
                    <td>
                        <button class="learn-more buttonEdicion" onclick="editarCancion('${song.id}')">
                            <span class="circle" aria-hidden="true">
                                <span class="icon arrow"></span>
                            </span>
                            <span class="button-text">Editar</span>
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
    const cancionesObtenidas = JSON.parse(localStorage.getItem('user'));
    const canciones = JSON.parse(localStorage.getItem('canciones'));
    const cancionBuscada = canciones.find((song) => song.id === id);
    console.log(cancionBuscada);
    cancionesObtenidas.push(cancionBuscada)
    localStorage.setItem('user',JSON.stringify(cancionesObtenidas))
}

listarCanciones();
