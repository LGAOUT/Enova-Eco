// JavaScript pour ajouter des animations légères et de l'interactivité
document.addEventListener('DOMContentLoaded', function() {
    // Animation sur les éléments au survol
    const services = document.querySelectorAll('.service');
    services.forEach(service => {
        service.addEventListener('mouseenter', function() {
            service.style.transform = 'translateY(-10px)';
        });
        service.addEventListener('mouseleave', function() {
            service.style.transform = 'translateY(0)';
        });
    });

    // Soumission du formulaire de contact
    const contactForm = document.getElementById('contact-form');
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        alert('Merci pour votre message ! Nous vous répondrons bientôt.');
        contactForm.reset();
    });
});
