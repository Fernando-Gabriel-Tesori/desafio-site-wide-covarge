window.addEventListener('resize', function() {
    const button = document.querySelector('.button-header');
    if (window.innerWidth <= 900) {
        button.textContent = '☰';
    } else {
        button.textContent = 'Sign up';
    }
});

// Initial check
if (window.innerWidth <= 900) {
    document.querySelector('.button-header').textContent = '☰';
}
