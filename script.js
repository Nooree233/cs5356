// Play Magic Sound When Bunny is Clicked
function playMagicSound() {
    let audio = document.getElementById("magicSound");
    audio.load(); // Reload to ensure it plays from the start
    audio.play()
        .catch(error => console.log("Audio play failed:", error));
}

// Bunny Image API URL
const BUNNY_IMAGE_API = "https://api.bunnies.io/v2/loop/random/?media=gif,png";

// Button Click Event: Fetch & Display Bunny Image
document.getElementById("bunnyGifBtn").addEventListener("click", async function() {
    try {
        const response = await fetch(BUNNY_IMAGE_API);
        const data = await response.json();

        // Extract bunny image URL
        let imageUrl = data.media.gif || data.media.poster || data.media.png;

        // Get or create the image container
        let imageContainer = document.getElementById("bunnyImageContainer");
        if (!imageContainer) {
            imageContainer = document.createElement("div");
            imageContainer.id = "bunnyImageContainer";
            document.getElementById("bunnyGifBtn").after(imageContainer); // Insert after the button
        }

        // Update or create the bunny image element
        let bunnyImageElement = document.getElementById("bunnyImage");
        if (!bunnyImageElement) {
            bunnyImageElement = document.createElement("img");
            bunnyImageElement.id = "bunnyImage";
            bunnyImageElement.style.maxWidth = "300px";
            bunnyImageElement.style.marginTop = "15px";
            bunnyImageElement.style.borderRadius = "10px";
            imageContainer.appendChild(bunnyImageElement);
        }

        bunnyImageElement.src = imageUrl;
        bunnyImageElement.alt = "Cute Bunny";
    } catch (error) {
        console.error("API Fetch Error:", error);
        document.getElementById("bunnyGif").textContent = "Sorry, couldn't fetch a bunny image!";
    }
});

// Button Color Change on Click Using MouseEvent
document.getElementById("bunnyGifBtn").addEventListener("mousedown", function(event) {
    if (event instanceof MouseEvent) {
        this.style.backgroundColor = "#3d8f44"; // Change to darker green when clicked
    }
});

document.getElementById("bunnyGifBtn").addEventListener("mouseup", function(event) {
    if (event instanceof MouseEvent) {
        this.style.backgroundColor = "#8fd095"; // Revert to original green when released
    }
});
