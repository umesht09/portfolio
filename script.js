document.addEventListener("DOMContentLoaded", function() {

    const revealElements = document.querySelectorAll('.reveal');

    const revealObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, {
        root: null,
        threshold: 0.1, 
        rootMargin: '0px 0px -50px 0px' 
    });

    revealElements.forEach(element => {
        revealObserver.observe(element);
    });

});