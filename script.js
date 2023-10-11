const playButton = document.getElementById("playButton");
const audio = document.getElementById("audio");
const playlist = document.getElementById("playlist");

// Lista de músicas
const musicas = [
    "songs/believer.mp3",
    "songs/smokeonthewater.mp3"
    // Adicione caminhos para mais músicas
];

let musicasRestantes = [...musicas]; // Crie uma cópia da lista de músicas para acompanhar as músicas restantes
let musicaAtual;

function initPlayer() {
    if (musicasRestantes.length === 0) {
        musicasRestantes = [...musicas]; // Se todas as músicas foram tocadas, reinicie a lista
    }
    musicaAtual = getRandomMusic();
    audio.src = musicas[musicaAtual];
}

playButton.addEventListener("click", () => {
    if (audio.paused) {
        initPlayer();
        audio.play();
        playButton.textContent = "Pausar";
    } else {
        audio.pause();
        playButton.textContent = "Tocar";
    }
});

audio.addEventListener("ended", () => {
    musicasRestantes.splice(musicasRestantes.indexOf(musicas[musicaAtual]), 1); // Remova a música que acabou de ser tocada
    if (musicasRestantes.length === 0) {
        audio.pause();
        playButton.textContent = "Tocar";
    } else {
        initPlayer();
        audio.play();
    }
});

function getRandomMusic() {
    const index = Math.floor(Math.random() * musicasRestantes.length);
    return musicas.indexOf(musicasRestantes[index]);
}

// Inicie o reprodutor com uma música aleatória
initPlayer();
