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


