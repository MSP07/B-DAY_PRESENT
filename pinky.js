document.getElementById('login-button').addEventListener('click', function() {
    console.log('Login button clicked!');
    document.getElementById('login-container').style.display = 'none';
    document.getElementById('hand-interaction').style.display = 'block';

    const rightHand = document.getElementById('right-hand');
    const leftHand = document.getElementById('left-hand');
    const promiseMessage = document.getElementById('promise-message');
    const proceedMessage = document.createElement('p');

    proceedMessage.innerText = "Mouse click to go to next level";
    proceedMessage.style.color = 'pink';
    proceedMessage.style.fontSize = '18px';
    proceedMessage.style.display = 'none';
    document.getElementById('hand-interaction').appendChild(proceedMessage);

    console.log("Proceed message element created");

    document.addEventListener('mousemove', function(e) {
        console.log('Mouse moved:', e.pageX, e.pageY);
        rightHand.style.left = (e.pageX - rightHand.width/2) + 'px'; // Center the hand image
        rightHand.style.top = (e.pageY - rightHand.height/2) + 'px'; // Center the hand image

        const rightHandRect = rightHand.getBoundingClientRect();
        const leftHandRect = leftHand.getBoundingClientRect();

        if (Math.abs(rightHandRect.left + rightHandRect.width/2 - leftHandRect.left - leftHandRect.width/2) < 50 && // Center-to-center distance
            Math.abs(rightHandRect.top + rightHandRect.height/2 - leftHandRect.top - leftHandRect.height/2) < 50) {
            console.log("Promise message shown");
            promiseMessage.style.display = 'block';
        } else {
            promiseMessage.style.display = 'none';
        }
    });

    promiseMessage.addEventListener('click', function() {
        console.log("Promise message clicked");
        proceedMessage.style.display = 'block';
    });

    proceedMessage.addEventListener('click', function() {
        console.log("Proceed message clicked");
        window.location.href = "main.html";
    });
});


// Correct event listener for left hand click
document.getElementById('left-hand').addEventListener('click', () => {
    window.location.href = "main.html";
});