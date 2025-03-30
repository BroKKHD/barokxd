const kaybolanButton = document.getElementById("kaybolan");
const sabitButton = document.getElementById("sabit");
const blackout = document.getElementById("blackout");
const sekerlik = document.getElementById("sekerlik");
const kiz = document.getElementById("kiz");
const mesaj = document.getElementById("mesaj");

// "Sen kimsin?" butonu kaybolma
kaybolanButton.addEventListener("mouseover", function() {
    const x = Math.random() * (window.innerWidth - kaybolanButton.offsetWidth);
    const y = Math.random() * (window.innerHeight - kaybolanButton.offsetHeight);
    kaybolanButton.style.position = "absolute";
    kaybolanButton.style.left = `${x}px`;
    kaybolanButton.style.top = `${y}px`;
});

// "Şeker İkramını Kabul Et" butonu animasyon
sabitButton.addEventListener("click", function() {
    // İlk içerik gizle, siyah ekran göster
    document.querySelector(".container").style.display = "none";
    blackout.style.display = "block";

    // 3 saniye sonra şekerlik animasyonu
    setTimeout(() => {
        sekerlik.style.display = "block";
        sekerlik.style.animation = "sekerlikYukari 2s ease forwards";

        // Şekerlik yerleştikten 1 saniye sonra kızın fotoğrafı çıksın
        setTimeout(() => {
            kiz.style.display = "block";
            kiz.style.bottom = `${sekerlik.offsetTop + 50}px`; // Şekerlik içinden başlasın
            kiz.style.animation = "kizCik 2s ease forwards";

            // Kız ayrıldıktan 1 saniye sonra mesaj görünsün
            setTimeout(() => {
                mesaj.style.display = "block";
            }, 2000);
        }, 1000);
    }, 3000);
});
