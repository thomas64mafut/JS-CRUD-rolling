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

const songs = [
    {
        title: '01. Papercut',
        artist: 'Linkin Park',
    },
    {
        title: '02. One Step Closer',
        artist: 'Linkin Park',
    },  
    {
        title: '03. Points of Authority',
        artist: 'Linkin Park',
    }, 
];

let songIndex = 0;

function loadSong(song) {
    title.innerText = song.title;
    artist.innerText = song.artist;
    audio.src = `../assets/audio/hybrid-theory/${song.title}.mp3`
    cover.src = `../assets/img/${song.title}.jpg`
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
