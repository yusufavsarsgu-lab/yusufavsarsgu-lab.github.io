const navbarHTML = `
<nav>
  <ul>
    <li><a href='index.html' id='nav-index'>Anasayfa</a></li>
    <li><a href='hakkimda.html' id='nav-hakkimda'>Hakkımda</a></li>
    <li><a href='faaliyetler.html' id='nav-faaliyetler'>Faaliyetler</a></li>
    <li><a href='urunler.html' id='nav-urunler'>Ürünler</a></li>
    <li><a href='egitimler.html' id='nav-egitimler'>Eğitimler</a></li>
    <li><a href='katkilar.html' id='nav-katkilar'>Katkılar</a></li>
    <li><a href='iletisim.html' id='nav-iletisim'>İletişim</a></li>
  </ul>
</nav>
`;

// Sayfa yüklendiğinde header etiketinin içine bu HTML'i basar
document.addEventListener("DOMContentLoaded", function() {
    const headerElement = document.querySelector('header');
    if (headerElement) {
        headerElement.innerHTML = navbarHTML;
    }

    // Bulunduğun sayfaya göre otomatik "active" class'ı ekleme
    const path = window.location.pathname.split("/").pop().replace(".html", "") || "index";
    const activeLink = document.getElementById('nav-' + path);
    if (activeLink) {
        activeLink.classList.add('active');
    }
});
