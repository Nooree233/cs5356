// Play Magic Sound When Bunny is Clicked
function playMagicSound() {
  let audio = document.getElementById("magicSound");
  audio.load();  // Ensures the file is ready before playing
  audio.play()
    .catch(error => console.log("Audio play failed:", error));
}

// Fetch a Random Bunny Fact
document.getElementById("bunnyFactBtn").addEventListener("click", async function() {
  try {
    const response = await fetch("https://bunnyapi.com/facts/random"); // Replace with a real bunny fact API if available
    const data = await response.json();

    // If the API returns an array of facts, get the first one
    const fact = data.fact || "Bunnies are amazing creatures!";

    document.getElementById("bunnyFact").textContent = `Fun Fact: ${fact}`;
  } catch (error) {
    document.getElementById("bunnyFact").textContent = "Sorry, couldn't fetch a bunny fact!";
    console.error("API Fetch Error:", error);
  }
});
