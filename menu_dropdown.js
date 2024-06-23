document.querySelector('#hamburger-card').addEventListener('click', function() {
    const menuPage = document.querySelector('#menu-page');
    if (menuPage.style.top === '0%') {
        menuPage.style.top = '-100%';
    } else {
        menuPage.style.top = '0%';
    }
});