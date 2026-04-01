document.addEventListener('DOMContentLoaded', () => {
    const skillFills = document.querySelectorAll('.skill-fill');
    skillFills.forEach(fill => {
        const width = fill.getAttribute('data-width');
        setTimeout(() => fill.style.width = width, 300);
    });
});
