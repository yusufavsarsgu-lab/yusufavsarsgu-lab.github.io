// Ortak Menü Yapısı
const menuKodum = `
<ul>
    <li><a href='index.html' id='link-index'>Anasayfa</a></li>
    <li><a href='hakkimda.html' id='link-hakkimda'>Hakkımda</a></li>
    <li><a href='faaliyetler.html' id='link-faaliyetler'>Faaliyetler</a></li>
    <li><a href='urunler.html' id='link-urunler'>Ürünler</a></li>
    <li><a href='egitimler.html' id='link-egitimler'>Eğitimler</a></li>
    <li><a href='katkilar.html' id='link-katkilar'>Katkılar</a></li>
    <li><a href='iletisim.html' id='link-iletisim'>İletişim</a></li>
    <li><a href='hizmetler.html' id='link-hizmetler'>Hizmetler</a></li>
</ul>
`;

document.addEventListener("DOMContentLoaded", function() {
    const navElement = document.querySelector('header nav');

    if (navElement) {
        navElement.innerHTML = `
            <button class="nav-toggle" type="button" aria-label="Menüyü aç/kapat" aria-expanded="false">
                <span></span>
            </button>
            <div class="nav-menu-wrap">${menuKodum}</div>
        `;

        let path = window.location.pathname;
        let page = path.split("/").pop().replace(".html", "");

        if (page === "" || page === "index") {
            page = "index";
        }

        const activeLink = document.getElementById('link-' + page);
        if (activeLink) {
            activeLink.classList.add('active');
        }

        const toggleButton = navElement.querySelector('.nav-toggle');
        const menuLinks = navElement.querySelectorAll('a');

        if (toggleButton) {
            toggleButton.addEventListener('click', function() {
                const isOpen = navElement.classList.toggle('nav-open');
                toggleButton.setAttribute('aria-expanded', String(isOpen));
            });
        }

        menuLinks.forEach(function(link) {
            link.addEventListener('click', function() {
                navElement.classList.remove('nav-open');
                if (toggleButton) {
                    toggleButton.setAttribute('aria-expanded', 'false');
                }
            });
        });

        window.addEventListener('resize', function() {
            if (window.innerWidth > 768) {
                navElement.classList.remove('nav-open');
                if (toggleButton) {
                    toggleButton.setAttribute('aria-expanded', 'false');
                }
            }
        });
    }
});
