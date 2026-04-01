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
    // Tüm sayfalardaki <nav> etiketini bul ve içini bu yeni liste ile değiştir
    const navDegistir = document.querySelector('header nav');
    if (navDegistir) {
        navDegistir.innerHTML = menuKodum;
    }

    // Hangi sayfadaysak onu otomatik mavi (active) yap
    const sayfa = window.location.pathname.split("/").pop().replace(".html", "") || "index";
    const aktifLink = document.getElementById('link-' + sayfa);
    if (aktifLink) {
        aktifLink.classList.add('active');
    }
});
