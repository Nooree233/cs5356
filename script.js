function playMagicSound() {
    let audio = document.getElementById("magicSound");
    audio.load(); 
    audio.play()
        .catch(error => console.log("Audio play failed:", error));
}

const BUNNY_IMAGE_API = "https://api.bunnies.io/v2/loop/random/?media=gif,png";

document.getElementById("bunnyGifBtn").addEventListener("click", async function() {
  try {
    
    const response = await fetch(BUNNY_IMAGE_API);
    const data = await response.json();

    let imageUrl = data.media.gif || data.media.poster || data.media.png;

    let imageContainer = document.getElementById("bunnyImageContainer");
    if (!imageContainer) {
      imageContainer = document.createElement("div");
      imageContainer.id = "bunnyImageContainer";
      document.getElementById("bunnyGifBtn").after(imageContainer); 
    }

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

document.getElementById("bunnyGifBtn").addEventListener("click", function(event) {
  let btn = event.target;
  if (btn.style.backgroundColor === "rgb(61, 143, 68)") { 
    btn.style.backgroundColor = "#8fd095";
  } else {
    btn.style.backgroundColor = "#3d8f44"; 
  }
});
