window.addEventListener('scroll', () => {
    let sticky = document.getElementById('sticky-navbar')
    if (window.scrollY > 950) {
        sticky.style.opacity = '0.8';
        sticky.style.transition = '1.1s'
    } else {
        sticky.style.opacity = '0';
        sticky.style.transition = '.8s'
    }
});