// Play Magic Sound When Bunny is Clicked
function playMagicSound() {
  let audio = document.getElementById("magicSound");
  audio.load();  // Ensures the file is ready before playing
  audio.play()
    .catch(error => console.log("Audio play failed:", error));
}

// Fetch a Bunny Fact
document.getElementById("bunnyFactBtn").addEventListener("click", async function() {
  try {
    const response = await fetch("https://api.bunnies.io/v2/loop/random/?media=gif");
    const data = await response.json();
    document.getElementById("bunnyFact").textContent = "Fun Fact: Bunnies are social animals and love to play!";
  } catch (error) {
    document.getElementById("bunnyFact").textContent = "Sorry, couldn't fetch a bunny fact!";
    console.error("API Fetch Error:", error);
  }
});
