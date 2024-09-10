document.addEventListener('DOMContentLoaded', function() {
    const potatoAnimation = document.getElementById('potato-animation');
    const potatoContainer = document.getElementsByClassName('potato-container')[0];
    const mainSection = document.querySelector('.main-section'); // Add this line
    const frameCount = 340;
    let imagesLoaded = 0;
    const images = []; // Array to hold our loaded images

    // Preload images
    function preloadImages() {
        for (let i = 0; i < frameCount; i++) {
            const img = new Image();
            img.onload = function() {
                imagesLoaded++;
                if (imagesLoaded === frameCount) {
                }
            };
            img.src = `png_sequence/potato${i.toString()}.png`;
            images.push(img); // Store reference to the image
        }
    }

    // Start preloading
    preloadImages();

    function updateAnimation() {
        const mainSectionRect = mainSection.getBoundingClientRect();
        const mainSectionTop = mainSectionRect.top;
        const mainSectionBottom = mainSectionRect.bottom;
        const viewportHeight = window.innerHeight;

        let scrollFraction;

        // if (mainSectionTop > 0) {
        //     // Main section hasn't reached the top of the viewport yet
        //     scrollFraction = 0;
        // } else 
        if (mainSectionBottom < viewportHeight) {
            // Main section has scrolled past the bottom of the viewport
            scrollFraction = 1;
        } else {
            // Main section is partially in view
            scrollFraction = Math.abs(mainSectionTop) / (mainSectionRect.height - viewportHeight);
        }

        const frameIndex = Math.min(
            frameCount - 1,
            Math.floor(scrollFraction * frameCount)
        );
        potatoAnimation.style.backgroundImage = `url('${images[frameIndex].src}')`;

        if (frameIndex === frameCount - 1) {
            potatoContainer.classList.add('final');
        }
        else {
            potatoContainer.classList.remove('final');
        }
    }

    window.addEventListener('scroll', updateAnimation);
    updateAnimation(); 
});
