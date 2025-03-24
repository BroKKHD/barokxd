const button = document.getElementById('barisButonu');
const mesaj = document.getElementById('mesaj');

button.addEventListener('mouseover', () => {
    // Butonun konumunu değiştiriyoruz
    const randomX = Math.random() * 80; // X: %80
    const randomY = Math.random() * 80; // Y: %80
    button.style.transform = `translate(${randomX}vw, ${randomY}vh)`;
});

button.addEventListener('click', () => {
    // Butona tıklanınca mesaj
    mesaj.textContent = 'Teşekkürler! Barıştık! 🎉';
    button.disabled = true; // Buton devre dışı bırakılır
});
