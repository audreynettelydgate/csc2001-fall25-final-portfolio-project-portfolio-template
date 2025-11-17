// Pink Mode Toggle
document.getElementById('themeToggle')?.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
});

// Pink Quote API
(async () => {
  const el = document.getElementById('quote');
  if (!el) return;

  try {
    const res = await fetch('https://www.minimizemymess.com/random-quote-generator?srsltid=AfmBOop3Rq23oHVhko7B3E5YB0ODW82Sh0a5GtKZfU3ZC4GW0YQeZn3P');
    const data = await res.json();
    el.textContent = `“${data.content}” — ${data.author}`;
  } catch {
    el.textContent = 'Could not load quote 💔';
  }
})();
