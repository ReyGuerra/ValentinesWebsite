document.addEventListener("DOMContentLoaded", function() {
    
    var typed = new Typed("#typed-output", {
        strings: [
            "Hey there!",
            "Guess what?",
            "I made you a website!",
            "Ready to check it out?",
            // "
        ],
        typeSpeed: 55,   // Typing speed in milliseconds
        backSpeed: 85,   // Backspacing speed
        startDelay: 700, // Delay before typing starts
        backDelay: 1750, // Delay before erasing
        loop: false,     // Set to true if you want it to repeat
        showCursor: true,
        cursorChar: "|",
        onComplete: function() {
            document.getElementById("Answer-button").style.display = "block"; // Show button
        }
    });
    
    // Button click event to go to another page
    document.getElementById("Answer-button").addEventListener("click", function() {
        window.location.href = "insta.html"; // Change this to your next page
    });

});