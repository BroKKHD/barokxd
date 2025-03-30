const kaybolanButton = document.getElementById("kaybolan");
const sabitButton = document.getElementById("sabit");
const blackout = document.getElementById("blackout");
const sekerlik = document.getElementById("sekerlik");
const kiz = document.getElementById("kiz");
const mesaj1 = document.getElementById("mesaj1");
const mesaj2 = document.getElementById("mesaj2");
const mesaj3 = document.getElementById("mesaj3");
const bayramGif = document.getElementById("bayramGif");

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

    // 5 saniye sonra şekerlik gelsin
    setTimeout(() => {
        sekerlik.style.display = "block";
        sekerlik.style.animation = "sekerlikYukari 2s ease forwards";

        // Şekerlik yerleştikten sonra kızın fotoğrafı silik görünsün
        setTimeout(() => {
            kiz.style.display = "block";
            kiz.style.bottom = `${sekerlik.offsetTop + 50}px`; // Şekerlik ortası

            // 2 saniye sonra yazılar ve kızın çıkışı
            setTimeout(() => {
                mesaj1.style.display = "block"; // İlk mesaj

                setTimeout(() => {
                    kiz.style.animation = "kizCik 2s ease forwards"; // Kız üste çıksın ve belirginleşsin

                    setTimeout(() => {
                        mesaj2.style.display = "block"; // İkinci mesaj

                        setTimeout(() => {
                            mesaj3.style.display = "block"; // AFİYET OLSUN
                        }, 1000);
                    }, 1000);
                }, 1000);
            }, 2000);
        }, 1000);
    }, 5000); // 5 saniye siyah ekran
});

// "AFİYET OLSUN" tıklanınca GIF ve kapanış
mesaj3.addEventListener("click", function() {
    blackout.style.display = "none"; // Siyah ekranı gizle
    bayramGif.style.display = "block"; // GIF göster

    // GIF'e tıklayınca sekme kapansın
    bayramGif.addEventListener("click", function() {
        window.close(); // Sekmeyi kapat
    });
});
