document.addEventListener("DOMContentLoaded", () => {
    // make it so it works with multiple sliders

    const slider = document.querySelector(".slider");
    const prevArrow = document.getElementById("prev-arrow");
    const nextArrow = document.getElementById("next-arrow");

    let currentIndex = 0;

    prevArrow.addEventListener("click", () => {
        if (currentIndex === 0) {
            // Loop back to the last image
            currentIndex = slider.children.length - 1;
        } else {
            currentIndex--;
        }
        updateSlider();
    });

    nextArrow.addEventListener("click", () => {
        if (currentIndex === slider.children.length - 1) {
            // Loop back to the first image
            currentIndex = 0;
        } else {
            currentIndex++;
        }
        updateSlider();
    });

    function updateSlider() {
        const slideWidth = slider.children[0].clientWidth;
        // Instantly move to the desired image without a transition
        slider.style.transform = `translateX(-${currentIndex * slideWidth}px)`;
        slider.style.transition = "none"; // Disable transitions
    }
});