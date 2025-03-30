const kaybolanButton = document.getElementById("kaybolan");
const sabitButton = document.getElementById("sabit");
const blackout = document.getElementById("blackout");
const sekerlik = document.getElementById("sekerlik");
const kiz = document.getElementById("kiz");
const mesaj1 = document.getElementById("mesaj1");
const mesaj2 = document.getElementById("mesaj2");
const mesaj3 = document.getElementById("mesaj3");
const bayramGif = document.getElementById("bayramGif");

let kacisSayisi = 0; // Kaçış sayısını takip etmek için

// "Şeker İkramı Al" butonu kaçma
kaybolanButton.addEventListener("mouseover", function() {
    kacisSayisi++;
    const x = Math.random() * (window.innerWidth - kaybolanButton.offsetWidth);
    const y = Math.random() * (window.innerHeight - kaybolanButton.offsetHeight);
    kaybolanButton.style.position = "absolute";
    kaybolanButton.style.left = `${x}px`;
    kaybolanButton.style.top = `${y}px`;

    // 4. kaçışta yazı değişsin ve diğer buton görünsün
    if (kacisSayisi === 4) {
        kaybolanButton.textContent = "Tamam Kovalama, Al Şekerin Diğer Butonda";
        kaybolanButton.removeEventListener("mouseover", arguments.callee); // Kaçmayı durdur
        sabitButton.style.display = "block"; // Şeker İkramını Kabul Et butonu görünür
    }
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
    }, 300);
}

// "Şeker İkramını Kabul Et" butonu animasyon
sabitButton.addEventListener("click", function() {
    document.querySelector(".container").style.display = "none";
    blackout.style.display = "block";

    setTimeout(() => {
        sekerlik.style.display = "block";
        sekerlik.style.animation = "yukari 2s ease forwards";
        kiz.style.display = "block";
        kiz.style.animation = "yukari 2s ease forwards";

        setTimeout(() => {
            yazKelimeKelime(mesaj1, "Buyrun, aralarında güzel bir tane buldum.", () => {
                let opacity = 0;
                const opacityInterval = setInterval(() => {
                    opacity += 0.05;
                    kiz.style.opacity = opacity;
                    if (opacity >= 0.3) clearInterval(opacityInterval);
                }, 100);

                setTimeout(() => {
                    mesaj1.style.display = "none";
                    kiz.style.animation = "kizKay 2s ease forwards";

                    setTimeout(() => {
                        yazKelimeKelime(mesaj2, "Çilekli bir tane buldum, seversin.", () => {
                            setTimeout(() => {
                                mesaj2.style.display = "none";
                                mesaj3.style.display = "block";
                            }, 1000);
                        });
                    }, 1000);
                }, 2000);
            });
        }, 1000);
    }, 5000);
});

// "AFİYET OLSUN" butonuna tıklayınca GIF
mesaj3.addEventListener("click", function() {
    sekerlik.style.display = "none";
    kiz.style.display = "none";
    mesaj3.style.display = "none";
    bayramGif.style.display = "block";
});

// GIF'e tıklayınca sekme kapanır
bayramGif.addEventListener("click", function() {
    window.close();
});
