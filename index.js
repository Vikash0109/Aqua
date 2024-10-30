
document.addEventListener('DOMContentLoaded', function() {
    const links = document.querySelectorAll('.nav-link');
    const loaderWrapper = document.getElementById('loader-wrapper');
    
    links.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault();  
            loaderWrapper.style.display = 'flex';  
            
            
            setTimeout(() => {
                window.location.href = link.href;
            }, 1000);
        });
    });
});

window.addEventListener('load', function() {
    const loaderWrapper = document.getElementById('loader-wrapper');
    loaderWrapper.style.display = 'none';  
});

window.addEventListener('scroll', () => {
    const droplet = document.querySelector('.droplet');
    const scrollTop = window.scrollY;
    droplet.style.top = `${scrollTop + 10}px`;
});
