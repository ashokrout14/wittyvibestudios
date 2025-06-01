// script.js
const jokes = [
  "Why don't filmmakers get lost? Because they always follow the script! 🎬",
  "What’s a director’s favorite type of tea? Reality! ☕",
  "Why did the actor break up with the actress? Too much drama. 🎭",
  "Our camera once laughed so hard, it shot itself! 📸😂",
];

window.addEventListener('scroll', () => {
  document.querySelectorAll('.fade-in').forEach(el => {
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight - 100) {
      el.classList.add('visible');
    }
  });

  if (Math.random() < 0.01) { // 1% chance per scroll to show joke
   // showJoke();
  }
});

function showJoke() {
  const jokeText = document.getElementById('jokeText');
  const popup = document.getElementById('jokePopup');
  const joke = jokes[Math.floor(Math.random() * jokes.length)];
  jokeText.textContent = joke;
  popup.classList.add('visible');
  setTimeout(() => popup.classList.remove('visible'), 5000);
}
// Rotating funny jokes in header h1
const funnyJokes = [
  "We Make Funny Look Easy... But It's Not 😅🎬",
  "Lights. Camera. LOL! 🎥😂",
  "Our Scripts Are 90% Chaos, 10% Genius 📝🔥",
  "Warning: Extreme Laughter Ahead 🚧🤣",
  "WittyVibe Studios: Now 20% Funnier!™",
  "We Film the Fun. You Blame the Laugh Lines. 😆📸"
];

const title = document.getElementById('funny-title');
let index = 0;

setInterval(() => {
  title.classList.add('fade-out'); // start fade-out

  setTimeout(() => {
    index = (index + 1) % funnyJokes.length;
    title.textContent = funnyJokes[index];
    title.classList.remove('fade-out'); // fade back in
  }, 500); // fade out duration in ms
}, 4000); // change joke every 4 seconds

// Mascot click interaction
document.getElementById('mascot').addEventListener('click', () => {
  const mascot = document.getElementById('mascot');
  mascot.classList.add('clicked');

  setTimeout(() => {
    mascot.classList.remove('clicked');
  }, 500);
});
