const toggle = document.getElementById('dark-mode-toggle');
toggle.addEventListener('click', () => {
    document.documentElement.classList.toggle('dark');
});

const home = document.getElementById('home');
home.addEventListener('click',() => {
    window.location.href = "index.html";
})