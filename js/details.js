const songId = window.location.hash.substr(1);
console.log(songId);

const songsDetails = JSON.parse(localStorage.getItem("canciones"));
// const songPage  = songsDetails.find((song) => (song.id === songId));
const songPage = songsDetails[1];
console.log(songPage);

const titlePage = document.querySelector("#title-page");
const artistPage = document.querySelector("#artist-page");
const albumPage = document.querySelector("#album-page");
const durationPage = document.querySelector("#duration-page");
const coverPage = document.querySelector("#cover-page");
const audioPage = document.querySelector("#audio-page");

titlePage.textContent = `${songPage.nombre}`;
artistPage.textContent = `${songPage.artista}`;
albumPage.textContent = `${songPage.categoria}`;
coverPage.src = `../assets/img/${songPage.artista}.jpg`;
audioPage.src = `../assets/audio/hybrid-theory/${songPage.nombre}.mp3`;

$(function () {
    audioPage.onloadedmetadata = function () {        
        var minutes = Math.floor(audioPage.duration / 60);
        var seconds = Math.floor(audioPage.duration % 60);

        var finalTime = [minutes.toString().padStart(2,0), seconds.toString().padStart(2,0)].join(':')

        durationPage.textContent = `${finalTime}`
    };
});

