document.getElementById("kaybolan").addEventListener("mouseover", function() {
    let button = this;
    let x = Math.random() * (window.innerWidth - button.offsetWidth);
    let y = Math.random() * (window.innerHeight - button.offsetHeight);
    
    button.style.position = "absolute";
    button.style.left = `${x}px`;
    button.style.top = `${y}px`;
});
