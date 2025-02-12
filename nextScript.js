
document.addEventListener("DOMContentLoaded", function () {
    // startConfetti(); // Start confetti animation on page load
    changePicture();  // Initialize photo gallery
});
function startConfetti() {
    const duration = 15 * 1000,
    animationEnd = Date.now() + duration,
    defaults = { startVelocity: 20, spread: 360, ticks: 60, zIndex: 0, shapes: ["heart"],
    colors: ["FFC0CB", "FF69B4", "FF1493", "C71585"], scalar: 2.25};

    function randomInRange(min, max) {
    return Math.random() * (max - min) + min;
    }

    const interval = setInterval(function() {
    const timeLeft = animationEnd - Date.now();

    if (timeLeft <= 0) {
        return clearInterval(interval);
    }

    const particleCount = 50 * (timeLeft / duration);

    // since particles fall down, start a bit higher than random
    confetti(
        Object.assign({}, defaults, {
        particleCount,
        origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 },
        })
    );
    confetti(
        Object.assign({}, defaults, {
        particleCount,
        origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 },
        })
    );
    }, 250);
}

function changePicture() {
    const noReactionPics = [
        "./images/NoReactionPics/no1.jpg",
        "./images/NoReactionPics/no2.jpg",
        "./images/NoReactionPics/no3.jpg",
        "./images/NoReactionPics/no4.jpg",
        "./images/NoReactionPics/no5.jpg"
    ];

    const imageText = document.querySelector("#question");
    const yesButton = document.getElementById("yes-button");
    const noButton = document.getElementById("no-button");
    const image = document.getElementById("askImg"); 

    // imageContainer


    noButton.addEventListener("click", function () {
        imageText.textContent = "Are you sure about that??"
        // Choose a random image
        const randomIndex = Math.floor(Math.random() * noReactionPics.length);
        const randomImage = noReactionPics[randomIndex];

        // Check if an image already exists and replace it
        // let existingImage = imageContainer.querySelector("img");
        // if (!existingImage) {
        //     existingImage = document.createElement("img");
        //     imageContainer.appendChild(existingImage);
        // }

        // Set image source and styles
        image.src = randomImage;
        image.alt = "Are you sure about that?";
        image.classList.add("noReactionPic");
        // imageText.style.display = "block";
    });

    yesButton.addEventListener("click", function () {
        image.src = "./images/NoReactionPics/cheezin.jpg"
        image.classList.add("noReactionPic");
        imageText.textContent = "Yay, I knew you'd say yes!"
        startConfetti();
    });
}