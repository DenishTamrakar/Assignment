const videos = document.querySelectorAll('.video-player');
const playButtons = document.querySelectorAll('.play-btn');
const pauseButtons = document.querySelectorAll('.pause-btn');

function pauseAllVideos() {
    videos.forEach(video => video.pause()); 
    playButtons.forEach(playBtn => playBtn.style.display = 'block'); 
    pauseButtons.forEach(pauseBtn => pauseBtn.style.display = 'none'); 
}

videos.forEach((video, index) => {
    const playBtn = playButtons[index];
    const pauseBtn = pauseButtons[index];
    const videoContainer = playBtn.closest('.video-container');

    playBtn.addEventListener('click', () => {
        pauseAllVideos(); 
        video.play(); 
        playBtn.style.display = 'none'; 
        pauseBtn.style.display = 'block'; 
    });

    pauseBtn.addEventListener('click', () => {
        video.pause(); 
        playBtn.style.display = 'block'; 
        pauseBtn.style.display = 'none'; 
    });

    video.addEventListener('ended', () => {
        playBtn.style.display = 'block'; 
        pauseBtn.style.display = 'none'; 
    });

    videoContainer.addEventListener('mouseover', () => {
        if (!video.paused) {
            pauseBtn.style.display = 'block';
        }
    });

    videoContainer.addEventListener('mouseout', () => {
        if (!video.paused) {
            pauseBtn.style.display = 'none';
        }
    });
});
