const musicPlayer = document.querySelector('.music-player');

const playBtn = document.querySelector('#play');
const prevBtn = document.querySelector('#prev');
const nextBtn = document.querySelector('#next');

const audio = document.querySelector('#audio');

const progress = document.querySelector('.progress');
const progressBar = document.querySelector('.progress-bar');

const title = document.querySelector('#title');
const artist = document.querySelector('#artist');
const cover = document.querySelector('#cover');

const songs = JSON.parse(localStorage.getItem('canciones'));

let songIndex = 0;

function loadSong(song) {
    title.innerText = song.nombre;
    artist.innerText = song.artista;
    audio.src = `../assets/audio/${song.nombre}.mp3`
    cover.src = `../assets/img/${song.artista}.jpg`
}

function pauseSong() {
    musicPlayer.classList.remove('play'); 
    playBtn.querySelector('i.fa').classList.add('fa-play');
    playBtn.querySelector('i.fa').classList.remove('fa-pause');
    progress.style.width = `0%` ;

    audio.pause();
}

function playSong() {
    musicPlayer.classList.add('play');
    playBtn.querySelector('i.fa').classList.remove('fa-play')
    playBtn.querySelector('i.fa').classList.add('fa-pause')

    audio.play();
}

function prevSong() {
    songIndex--;

    if (songIndex < 0) songIndex = songs.length - 1;

    loadSong(songs[songIndex]);
    playSong();
}

function nextSong() {
    songIndex++;

    if (songIndex > songs.length - 1) songIndex = 0;
    
    loadSong(songs[songIndex]);
    playSong();
}

function updateProgress(e) {
    const {duration, currentTime} = e.srcElement;

    const progressPercent = (currentTime / duration) * 100;
    progress.style.width = `${progressPercent}%`;
}

function setProgress(e) {
    const width = this.clientWidth;
    const clickX = e.offsetX;
    const duration = audio.duration

    audio.currentTime = (clickX / width) * duration;
}

playBtn.addEventListener('click', () => {
    const isPlaying = musicPlayer.classList.contains('play');

    if (isPlaying) {
        pauseSong();
    } else
        playSong();
});

prevBtn.addEventListener('click', prevSong);
nextBtn.addEventListener('click', nextSong);

audio.addEventListener('timeupdate', updateProgress);
progressBar.addEventListener('click', setProgress);
audio.addEventListener('ended', nextSong);
loadSong(songs[songIndex]);
