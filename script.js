const audio = document.getElementById('audio');
const playPauseButton = document.getElementById('play-pause');
const prevButton = document.getElementById('prev');
const nextButton = document.getElementById('next');
const playlist1Button = document.getElementById('playlist1-btn');
const playlist2Button = document.getElementById('playlist2-btn');
const playlist1 = document.getElementById('playlist1');
const playlist2 = document.getElementById('playlist2');
const currentSongTitle = document.getElementById('current-song-title');

let currentPlaylist = playlist1;
let currentSongIndex = 0;

const songs = {
    playlist1: [
        { title: 'Angaaron Ka...(Pushpa 2)', src: 'audio1.mp3' },
        { title: 'Tum hi ho...(Aashiqui 2)', src: 'audio2.mp3' },
        { title: 'Naacho Naacho...(RRR)', src: 'audio3.mp3' },
    ],
    playlist2: [
        { title: 'Sooseki Aggirava...(Pushpa 2)', src: 'audio4.mp3' },
        { title: 'Pranama...(Aashiqui 2)', src: 'audio5.mp3' },
        { title: 'Naatu Naatu...(RRR)', src: 'audio6.mp3' },
    ]
};

function loadSong(index) {
    const song = songs[currentPlaylist.id][index];
    audio.src = song.src;
    currentSongTitle.textContent = song.title;
}

function playSong() {
    audio.play();
    playPauseButton.textContent = 'Pause';
}

function pauseSong() {
    audio.pause();
    playPauseButton.textContent = 'Play';
}

function togglePlayPause() {
    if (audio.paused) {
        playSong();
    } else {
        pauseSong();
    }
}

function prevSong() {
    currentSongIndex = (currentSongIndex > 0) ? currentSongIndex - 1 : songs[currentPlaylist.id].length - 1;
    loadSong(currentSongIndex);
    playSong();
}

function nextSong() {
    currentSongIndex = (currentSongIndex < songs[currentPlaylist.id].length - 1) ? currentSongIndex + 1 : 0;
    loadSong(currentSongIndex);
    playSong();
}

function switchPlaylist(playlist) {
    currentPlaylist.classList.add('hidden');
    currentPlaylist = playlist;
    currentPlaylist.classList.remove('hidden');
    //currentSongIndex = 0;
    loadSong(currentSongIndex);
    playSong();
}

playPauseButton.addEventListener('click', togglePlayPause);
prevButton.addEventListener('click', prevSong);
nextButton.addEventListener('click', nextSong);

playlist1Button.addEventListener('click', () => switchPlaylist(playlist1));
playlist2Button.addEventListener('click', () => switchPlaylist(playlist2));

currentPlaylist.addEventListener('click', (e) => {
    if (e.target.tagName === 'LI') {
        currentSongIndex = Array.from(currentPlaylist.children).indexOf(e.target);
        loadSong(currentSongIndex);
        playSong();
    }
});

loadSong(currentSongIndex);
