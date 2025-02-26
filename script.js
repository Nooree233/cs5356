// Play Magic Sound When Bunny is Clicked
function playMagicSound() {
  let audio = document.getElementById("magicSound");
  audio.load();  // Reload to ensure it plays from the start
  audio.play()
    .catch(error => console.log("Audio play failed:", error));
}

// Bunny Fact API URL (Replace with a working API if needed)
const BUNNY_FACT_API = "https://bunnyapi.com/facts/random"; 

// Predefined Bunny Facts (Fallback)
const fallbackFacts = [
  "Bunnies can rotate their ears 180 degrees!",
  "A rabbit’s teeth never stop growing.",
  "Bunnies love to do a special jump called a 'binky' when they're happy!",
  "Rabbits purr when they are content, just like cats!",
  "A baby rabbit is called a kit, and a group of rabbits is called a fluffle!",
  "Bunnies have nearly 360-degree vision, but they have a blind spot in front of their nose.",
  "A rabbit’s diet should be 80% hay to keep their teeth and digestion healthy."
];

// Fetch a Random Bunny Fact
document.getElementById("bunnyFactBtn").addEventListener("click", async function() {
  try {
    const response = await fetch(BUNNY_FACT_API);
    const data = await response.json();

    // Assuming the API returns an object with a "fact" key
    let fact = data.fact || fallbackFacts[Math.floor(Math.random() * fallbackFacts.length)];

    document.getElementById("bunnyFact").textContent = `Fun Fact: ${fact}`;
  } catch (error) {
    console.error("API Fetch Error:", error);

    // Use a fallback fact if API fails
    let randomFallbackFact = fallbackFacts[Math.floor(Math.random() * fallbackFacts.length)];
    document.getElementById("bunnyFact").textContent = `Fun Fact: ${randomFallbackFact}`;
  }
});
