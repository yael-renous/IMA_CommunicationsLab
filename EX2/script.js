document.addEventListener('DOMContentLoaded', function () {
    let pinataBroken = false;
    let numOfPinataHits = 0;
    const numOfHitsToBreak = 3;

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
            kidSounds.src = 'Sounds/screaming.mp3';
            pinataImage.src = 'Images/pinata-broken.png';
            spiderBackground.style.backgroundImage = 'url(Images/spiders1.gif)';
            spiderBackground.style.opacity = 1;
            document.body.style.backgroundImage = 'url(Background/dark.png)';
            //change spider background to fill entire screen
            setTimeout(() => {
                console.log("Spider background changed");
                spiderBackground.style.transition = 'background-image 0.8s ease-in-out';
                spiderBackground.style.backgroundImage = 'url(Images/spidersloop.gif)';
                spiderBackground.style.backgroundSize = 'auto';
            }, 4000);
            pinataImage.style.cursor = 'default';
            pinataBroken = true;
            girlImage.src = 'Images/girl-scared.png';
            boyImage.src = 'Images/boy-scared.png';
            pinataImage.removeEventListener('click', handlePinataClick);
        }
    }

    // ---------- Kid Image Event Listeners ----------
    girlImage.addEventListener('mouseenter', function (event) {
        if (!pinataBroken) {
            girlImage.src = 'Images/girl-happy-gu.png';
        }
        else {
            girlImage.src = 'Images/girl-scared-gu.png';
        }
    });
    girlImage.addEventListener('mouseleave', function (event) {
        if (!pinataBroken) {
            girlImage.src = 'Images/girl-happy.png';
        }
        else {
            girlImage.src = 'Images/girl-scared.png';
        }
    });

    boyImage.addEventListener('mouseenter', function (event) {
        if (!pinataBroken) {
            boyImage.src = 'Images/boy-happy-gu.png';
        }
        else {
            boyImage.src = 'Images/boy-scared-gu.png';
        }
    });
    boyImage.addEventListener('mouseleave', function (event) {
        if (!pinataBroken) {
            boyImage.src = 'Images/boy-happy.png';
        }
        else {
            boyImage.src = 'Images/boy-scared.png';
        }
    });
});


