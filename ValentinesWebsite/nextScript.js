document.addEventListener("DOMContentLoaded", function() {
    const noReactionPics = [
        "./images/NoReactionPics/no1.jpg",
        "./images/NoReactionPics/no2.jpg",
        "./images/NoReactionPics/no3.jpg",
        "./images/NoReactionPics/no4.jpg",
        "./images/NoReactionPics/no5.jpg"
    ];

    const imageText = document.getElementById("image-text");
    const yesButton = document.getElementById("yes-button");
    const noButton = document.getElementById("no-button");
    const imageContainer = document.getElementById("image-container"); 


    noButton.addEventListener("click", function () {

        // Choose a random image
        const randomIndex = Math.floor(Math.random() * noReactionPics.length);
        const randomImage = noReactionPics[randomIndex];

        // Check if an image already exists and replace it
        let existingImage = imageContainer.querySelector("img");
        if (!existingImage) {
            existingImage = document.createElement("img");
            imageContainer.appendChild(existingImage);
        }

        // Set image source and styles
        existingImage.src = randomImage;
        existingImage.alt = "Are you sure about that?";
        existingImage.classList.add("noReactionPic");
        imageText.style.display = "block";
    });

    yesButton.addEventListener("click", function () {
        window.location.href = "yes-page.html";
    });
});