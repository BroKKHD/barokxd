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

// Kelime kelime yazma fonksiyonu
function yazKelimeKelime(element, text, callback) {
    const kelimeler = text.split(" ");
    let index = 0;
    element.style.display = "block";
    element.textContent = "";

    const interval = setInterval(() => {
        if (index < kelimeler.length) {
            element.textContent += (index > 0 ? " " : "") + kelimeler[index];
            index++;
        } else {
            clearInterval(interval);
            if (callback) callback();
        }
    }, 300); // Her kelime 300ms arayla
}

// "Şeker İkramını Kabul Et" butonu animasyon
sabitButton.addEventListener("click", function() {
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
            yazKelimeKelime(mesaj1, "Buyrun, aralarında güzel bir tane buldum.", () => {
                // Yazı tamamlanırken kızın opaklığı artsın
                let opacity = 0;
                const opacityInterval = setInterval(() => {
                    opacity += 0.05;
                    kiz.style.opacity = opacity;
                    if (opacity >= 0.3) clearInterval(opacityInterval);
                }, 100);

                // Yazı tamamlandıktan 2 saniye sonra kaybolsun ve kız kaysın
                setTimeout(() => {
                    mesaj1.style.display = "none";
                    kiz.style.animation = "kizKay 2s ease forwards";

                    // Kız kaydıktan 1 saniye sonra ikinci mesaj
                    setTimeout(() => {
                        yazKelimeKelime(mesaj2, "Çilekli bir tane buldum, seversin.", () => {
                            // 1 saniye durup Afiyet Olsun butonu
                            setTimeout(() => {
                                mesaj2.style.display = "none";
                                mesaj3.style.display = "block";
                                // Otomatik tıklama kaldırıldı, senin tıklamanı bekleyecek
                            }, 1000);
                        });
                    }, 1000);
                }, 2000);
            });
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
