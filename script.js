document.addEventListener("DOMContentLoaded", function() {
    const animatedTexts = document.querySelectorAll(".animate-text");
    animatedTexts.forEach(function(element) {
        element.style.animationDelay = `${Math.random() * 1}s`; // Rastgele gecikme ekler
        element.style.opacity = 1; // Animasyonu tetikler
    });
});


document.getElementById('about-button').addEventListener('click', function() {
    document.getElementById('about-section').style.marginTop = '0'; // Hakkımda bölümüne kaydırma
});
