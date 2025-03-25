// Toggle class active
const navbarNav = document.querySelector ('.navbar-nav');
// ketika hamburger-menu di klik
document.querySelector('#hamburger-menu').onclick = () => {
    navbarNav.classList.toggle('active');
};

// klik diluar side bar untuk menghilangkan nav

const hamburger = document.querySelector('#hamburger-menu');
document.addEventListener('click', function (e){
    if (!hamburger.contains(e.target) && !navbarNav.contains(e.target)) {
        navbarNav.classList.remove('active');
    }
});

// untuk our client


document.addEventListener("DOMContentLoaded", function() {
    let sliders = document.querySelectorAll(".client-slider");

    sliders.forEach(slider => {
        let images = slider.children;
        let cloneFirst = images[0].cloneNode(true);
        slider.appendChild(cloneFirst);
    });
});

document.querySelector(".hamburger").addEventListener("click", function () {
    document.querySelector(".nav-links").classList.toggle("active");
});
