document.addEventListener('DOMContentLoaded', function() {
    const pinataBroken =false;
    console.log('Document is fully loaded');

    // Example: Get references to the images
    const girlImage = document.getElementById('girl');
    const boyImage = document.getElementById('boy');
    console.log("got images");

    // You can add more functionality here
    girlImage.addEventListener('mouseenter', function(event) {
        if(!pinataBroken){
        girlImage.src = 'Images/girl-happy-gu.png';
        }
        else{
            girlImage.src = 'Images/girl-scared-gu.png';
        }
    });
    girlImage.addEventListener('mouseleave', function(event) {
        if(!pinataBroken){
            girlImage.src = 'Images/girl-happy.png';
        }
        else{
            girlImage.src = 'Images/girl-scared.png';
        }
    });

    boyImage.addEventListener('mouseenter', function(event) {
        if(!pinataBroken){
            boyImage.src = 'Images/boy-happy-gu.png';
        }
        else{
            boyImage.src = 'Images/boy-scared-gu.png';
        }
    });
    boyImage.addEventListener('mouseleave', function(event) {
        if(!pinataBroken){
            boyImage.src = 'Images/boy-happy.png';
        }
        else{
            boyImage.src = 'Images/boy-scared.png';
        }
    });
});
