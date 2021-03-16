function initVideoOnHover(videoContainer) {
    const video = videoContainer.querySelector("video");
    videoContainer.addEventListener("mouseover", () => {
        video.play();
        video.style.opacity = 1;
    });

    videoContainer.addEventListener("mouseout", () => {
        video.load();
        video.style.opacity = 0;
    });
}
export default initVideoOnHover;
/*  */
