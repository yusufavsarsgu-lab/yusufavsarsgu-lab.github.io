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
</ul>
`;

document.addEventListener("DOMContentLoaded", function() {
    // Tüm sayfalardaki <nav> etiketini bul
    const navElement = document.querySelector('header nav');
    
    if (navElement) {
        // İçeriği güncelle
        navElement.innerHTML = menuKodum;

        // Mevcut dosya adını al (Örn: hakkimda.html -> hakkimda)
        let path = window.location.pathname;
        let page = path.split("/").pop().replace(".html", "");
        
        // Eğer ana dizindeyse veya boşsa 'index' kabul et
        if (page === "" || page === "index") {
            page = "index";
        }

        // Aktif linki bul ve class ekle
        const activeLink = document.getElementById('link-' + page);
        if (activeLink) {
            activeLink.classList.add('active');
        }
    }
});
