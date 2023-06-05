// Modal window skills
 document.getElementById('open_modal_skills').addEventListener("click", function () {
 
      document.getElementById('my_modal_skills').classList.add('open');
});

document.getElementById('close_modal_skills').addEventListener("click", function () {

      document.getElementById('my_modal_skills').classList.remove('open');
});

window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      document.getElementById('my_modal_skills').classList.remove('open');
    }
});

document.querySelector('#my_modal_skills .modal_box_skills').addEventListener('click', event => {
    event._isClickWithInModal = true;
});

document.getElementById('my_modal_skills').addEventListener('click', event => {
    if (event._isClickWithInModal) return;
    event.currentTarget.classList.remove('open');
});

// Modal window tg
document.getElementById('open_modal').addEventListener("click", function () {

      document.getElementById('my_modal').classList.add('open');
    
});

document.getElementById('open_modal1').addEventListener("click", function () {

      document.getElementById('my_modal').classList.add('open');
    
});

document.getElementById('close_modal').addEventListener("click", function () {

      document.getElementById('my_modal').classList.remove('open');
    
});

window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      document.getElementById('my_modal').classList.remove('open');
    }
});

document.querySelector('#my_modal .modal_box').addEventListener('click', event => {
    event._isClickWithInModal = true;
});

document.getElementById('my_modal').addEventListener('click', event => {
    if (event._isClickWithInModal) return;
    event.currentTarget.classList.remove('open');
});

// Dark mode btn
const btnDarkMode = document.querySelector('.dark_mode_btn');

// 1. Dark theme check at system settings level
if (window.matchMedia && window.matchMedia('(prefers-colors-scheme: dark)').matches) {
    btnDarkMode.classList.add('dark_mode_btn_active');
    document.body.classList.add('dark');
} 

// 2. Dark theme check in LocalStoroge
if (localStorage.getItem('darkMode') === 'dark') {
    btnDarkMode.classList.add('dark_mode_btn_active');
    document.body.classList.add('dark');
} else if (localStorage.getItem('darkMode') === 'light') {
    btnDarkMode.classList.remove('dark_mode_btn_active');
    document.body.classList.remove('dark');
}

// 3. If system settings cgange, change theme
window
    .matchMedia('(prefers-colors-scheme: dark)')
    .addEventListener('change', (event) => {
        const newColorScheme = event.matches ? 'dark' : 'light';

        if (newColorScheme === 'dark') {
            btnDarkMode.classList.add('dark_mode_btn_active');
            document.body.classList.add('dark');
            localStorage.setItem('darkMode', 'dark');
        } else {
            btnDarkMode.classList.remove('dark_mode_btn_active');
            document.body.classList.remove('dark');
            localStorage.setItem('darkMode', 'light');
        }
    });

//  On dark mode btn
btnDarkMode.onclick = function() {
    btnDarkMode.classList.toggle('dark_mode_btn_active');
    const isDark = document.body.classList.toggle('dark');

    if (isDark) {
        localStorage.setItem('darkMode', 'dark');
    } else {
        localStorage.setItem('darkMode', 'light');
        
    }
}