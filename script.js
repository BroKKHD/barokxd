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

    // 5 saniye sonra şekerlik ve kız gelsin
    setTimeout(() => {
        sekerlik.style.display = "block";
        sekerlik.style.animation = "yukari 2s ease forwards";
        kiz.style.display = "block";
        kiz.style.animation = "yukari 2s ease forwards";

        // Şekerlik yerleştikten 1 saniye sonra ilk mesaj
        setTimeout(() => {
            mesaj1.style.display = "block";

            // 3 saniye sonra mesaj kaybolur, kız belirginleşir
            setTimeout(() => {
                mesaj1.style.display = "none";
                kiz.style.bottom = "70%";
                kiz.style.animation = "kizBelirgin 1s ease forwards";

                // Kız belirginleştikten 1 saniye sonra ikinci mesaj
                setTimeout(() => {
                    mesaj2.style.display = "block";

                    // 3 saniye sonra ikinci mesaj kaybolur, Afiyet Olsun gelir
                    setTimeout(() => {
                        mesaj2.style.display = "none";
                        mesaj3.style.display = "block";
                    }, 3000);
                }, 1000);
            }, 3000);
        }, 1000);
    }, 5000); // 5 saniye siyah ekran
});

// "AFİYET OLSUN" butonuna tıklayınca GIF
mesaj3.addEventListener("click", function() {
    sekerlik.style.display = "none";
    kiz.style.display = "none";
    mesaj3.style.display = "none";
    bayramGif.style.display = "block"; // GIF siyah arka planda
});

// GIF'e tıklayınca sekme kapanır
bayramGif.addEventListener("click", function() {
    window.close();
});
