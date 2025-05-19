// dark-mode.js
document.addEventListener('DOMContentLoaded', () => {
    const toggle = document.getElementById('modeToggle');
    const prefersDark = localStorage.getItem('darkMode') === 'true';
    if (prefersDark) document.body.classList.add('dark');
  
    if (toggle) {
      toggle.checked = prefersDark;
      toggle.addEventListener('change', () => {
        document.body.classList.toggle('dark');
        localStorage.setItem('darkMode', toggle.checked);
      });
    }
  });
  