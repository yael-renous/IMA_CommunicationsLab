document.addEventListener('DOMContentLoaded', function () {
    let pinataBroken = false;
    let numOfPinataHits = 0;
    const numOfHitsToBreak = 5;

    const girlImage = document.getElementById('girl');
    const boyImage = document.getElementById('boy');
    const pinataImage = document.getElementById('pinata');
    const spiderBackground = document.getElementById('spider-background');
    const kidSounds = document.getElementById('kid-sounds');

    document.addEventListener('click', function () {
        document.getElementById('kid-sounds').play();
    });

    // ---------- Pinata Event Listeners ----------
    pinataImage.addEventListener('click', handlePinataClick);

    function handlePinataClick() {
        console.log("Pinata clicked");
        numOfPinataHits++;
        //animation
        pinataImage.classList.add('hit');
        setTimeout(() => {
            pinataImage.classList.remove('hit');
        }, 2000);

        //check if pinata is broken
        if (numOfPinataHits >= numOfHitsToBreak) {

            pinataImage.src = 'Images/pinata-broken.png';
            spiderBackground.style.opacity = 1;
            spiderBackground.style.backgroundImage = 'url(Images/spidersStart.gif)';
            document.body.style.backgroundImage = 'url(Background/dark.png)';


            setTimeout(() => {
                kidSounds.src = 'Sounds/screaming.mp3';
                girlImage.src = 'Images/girl-scared.png';
                boyImage.src = 'Images/boy-scared.png';

            }, 1000);
            pinataBroken = true;

            //change spider background to fill entire screen
            setTimeout(() => {
                console.log("Spider background changed");
                spiderBackground.style.backgroundImage = 'url(Images/spidersloop.gif)';
                spiderBackground.style.backgroundSize = 'auto';
            }, 6000);
            pinataImage.style.cursor = 'default';

            pinataImage.removeEventListener('click', handlePinataClick);
        }
    }

    // ---------- Kid Image Event Listeners ----------
    function handleKidImageEvents(imageElement, happyImage, happyGuImage, scaredImage, scaredGuImage) {
        imageElement.addEventListener('mouseenter', function (event) {
            imageElement.src = pinataBroken ? scaredGuImage : happyGuImage;
            imageElement.style.transform = 'scale(2.7)';
        });

        imageElement.addEventListener('mouseleave', function (event) {
            imageElement.src = pinataBroken ? scaredImage : happyImage;
            imageElement.style.transform = 'scale(1)';
        });
    }

    handleKidImageEvents(
        girlImage,
        'Images/girl-happy.png',
        'Images/girl-happy-gu.png',
        'Images/girl-scared.png',
        'Images/girl-scared-gu.png'
    );

    handleKidImageEvents(
        boyImage,
        'Images/boy-happy.png',
        'Images/boy-happy-gu.png',
        'Images/boy-scared.png',
        'Images/boy-scared-gu.png'
    );
});


