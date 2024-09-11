document.addEventListener('DOMContentLoaded', function() {
    const potatoAnimation = document.getElementById('potato-animation');
    const potatoContainer = document.getElementsByClassName('potato-container')[0];
    const mainSection = document.querySelector('.main-section'); 
    const introSection = document.querySelector('.intro-section'); 

    const frameCount = 680;

    let imagesLoaded = 0;
    const images = []; 

    function preloadImages() {
        for (let i = 0; i < frameCount; i++) {
            const img = new Image();
            img.onload = function() {
                imagesLoaded++;
                if (imagesLoaded === frameCount) {
                }
            };
            img.src = `png_sequence/potato${i.toString()}.png`;
            images.push(img); 
        }
    }

    function chooseFortune() {
        const fortuneOutputs = [
            'fortune_outputs/crisps.jpg',
            'fortune_outputs/french.jpg',
        ];

        function selectRandomFortune() {
            if (fortuneOutputs.length > 0) {
                const randomIndex = Math.floor(Math.random() * fortuneOutputs.length);
                const fortuneImg = document.getElementById('fortune-img');
                fortuneImg.src = fortuneOutputs[randomIndex];
                const fortuneText = document.getElementById('fortune-text');
                fortuneText.textContent = fortuneOutputs[randomIndex].split('/').pop().split('.')[0] + " potato!";
            } else {
                console.error('No fortune images found');
            }
        }

        selectRandomFortune();
    }

    function updateAnimation() {
        const mainSectionRect = mainSection.getBoundingClientRect();
        const introSectionRect = introSection.getBoundingClientRect();
        const offset = 400;

        let scrollFraction = window.scrollY / ((mainSectionRect.height+introSectionRect.height+offset)  - window.innerHeight);

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

    chooseFortune(); 
    preloadImages();
    window.addEventListener('scroll', updateAnimation);
    updateAnimation(); 
});
