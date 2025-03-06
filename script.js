document.addEventListener('DOMContentLoaded', () => {
    const isDarkMode = localStorage.getItem('dark-mode') === 'true';
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
      const toggle = document.getElementById('dark-mode-toggle');
      if (toggle) toggle.checked = true;
    }

    const toggle = document.getElementById('dark-mode-toggle');
    if (toggle) {
      toggle.addEventListener('click', () => {
        document.documentElement.classList.toggle('dark');
        localStorage.setItem(
          'dark-mode', 
          document.documentElement.classList.contains('dark')
        );
      });
    }
  
    const home = document.getElementById('home');
    if (home) {
      home.addEventListener('click', () => {
        window.location.href = "index.html";
      });
    }
  });