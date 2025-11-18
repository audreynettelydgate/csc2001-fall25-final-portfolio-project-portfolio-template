// Pink Mode Toggle
document.getElementById('themeToggle')?.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
});

// Pink Mode Toggle
document.getElementById('themeToggle')?.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
});

// Local Quotes Array
const quotes = [
  "Hello Kitty is happiness in pink! — Sanrio",
  "Keep your heart light and your bows tight!",
  "Creativity is your superpower 🎀",
  "Spread love, sparkle, and bows 💖",
  "Every day is cuter with Hello Kitty by your side!"
];

(function loadQuote() {
  const el = document.getElementById('quote');
  if (!el) return;
  const random = quotes[Math.floor(Math.random() * quotes.length)];
  el.textContent = random;
})();
