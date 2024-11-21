const video = document.getElementById('videoPlayer');
const playPauseBtn = document.getElementById('playPause');
const fullScreenBtn = document.getElementById('fullScreen');
const qualitySelector = document.getElementById('qualitySelector');
const audioSelector = document.getElementById('audioSelector');
const playbackSpeed = document.getElementById('playbackSpeed');
const volumeControl = document.getElementById('volumeControl');
const toggleSubtitlesBtn = document.getElementById('toggleSubtitles');

// Play/Pause functionality
playPauseBtn.addEventListener('click', () => {
    if (video.paused) {
        video.play();
        playPauseBtn.textContent = 'Pause';
    } else {
        video.pause();
        playPauseBtn.textContent = 'Play';
    }
});

// Fullscreen functionality
fullScreenBtn.addEventListener('click', () => {
    if (video.requestFullscreen) {
        video.requestFullscreen();
    } else if (video.webkitRequestFullscreen) { // For Safari
        video.webkitRequestFullscreen();
    }
});

// Quality switch functionality
qualitySelector.addEventListener('change', () => {
    const selectedOption = qualitySelector.options[qualitySelector.selectedIndex];
    const newSrc = selectedOption.getAttribute('data-src');
    const currentTime = video.currentTime;
    const isPlaying = !video.paused;

    video.src = newSrc;
    video.currentTime = currentTime;
    if (isPlaying) video.play();
});

// Audio switch functionality
audioSelector.addEventListener('change', () => {
    const selectedAudio = audioSelector.value;
    const audio = new Audio(selectedAudio);
    audio.currentTime = video.currentTime;

    video.addEventListener('play', () => audio.play());
    video.addEventListener('pause', () => audio.pause());
});

// Playback speed control
playbackSpeed.addEventListener('change', () => {
    video.playbackRate = playbackSpeed.value;
});

// Volume control
volumeControl.addEventListener('input', () => {
    video.volume = volumeControl.value;
});

// Toggle subtitles
toggleSubtitlesBtn.addEventListener('click', () => {
    const track = video.textTracks[0]; // Assuming the first track is subtitles
    track.mode = track.mode === 'hidden' ? 'showing' : 'hidden';
});