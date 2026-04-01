document.addEventListener('DOMContentLoaded', () => {
    // Tüm doluluk barlarını seç
    const skillFills = document.querySelectorAll('.skill-fill');

    // Her bir bar için animasyonu başlat
    skillFills.forEach(fill => {
        // data-width özniteliğinden (örn: %85) değeri al
        const targetWidth = fill.getAttribute('data-width');
        
        if (targetWidth) {
            // Küçük bir gecikme ile (sayfa render edildikten sonra) animasyonu tetikle
            setTimeout(() => {
                fill.style.width = targetWidth;
                fill.style.transition = "width 1.2s cubic-bezier(0.1, 0.5, 0.2, 1)";
            }, 300);
        }
    });
});
