const themeToggle = document.querySelector('[data-theme-toggle]');
const systemTheme = window.matchMedia('(prefers-color-scheme: dark)');

const updateThemeToggle = () => {
  if (!themeToggle) return;
  const dark = document.documentElement.dataset.theme === 'dark';
  const label = dark ? 'Switch to light mode' : 'Switch to dark mode';
  themeToggle.setAttribute('aria-label', label);
  themeToggle.setAttribute('aria-pressed', String(dark));
  themeToggle.querySelector('[data-theme-icon]').textContent = dark ? '☀' : '☾';
  themeToggle.querySelector('[data-theme-label]').textContent = label;
};

updateThemeToggle();
themeToggle?.addEventListener('click', () => {
  const dark = document.documentElement.dataset.theme !== 'dark';
  if (dark) document.documentElement.dataset.theme = 'dark';
  else delete document.documentElement.dataset.theme;
  try { localStorage.setItem('theme', dark ? 'dark' : 'light'); } catch (_) { /* System preference remains available. */ }
  updateThemeToggle();
});

systemTheme.addEventListener?.('change', (event) => {
  let savedTheme = null;
  try { savedTheme = localStorage.getItem('theme'); } catch (_) { /* Use the system preference. */ }
  if (savedTheme) return;
  if (event.matches) document.documentElement.dataset.theme = 'dark';
  else delete document.documentElement.dataset.theme;
  updateThemeToggle();
});

document.querySelectorAll('[data-year]').forEach((element) => {
  element.textContent = new Date().getFullYear();
});
