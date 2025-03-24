button {
    width: 150px;
    height: 60px;
    font-size: 18px;
    border: none;
    cursor: pointer;
    border-radius: 10px;
    position: absolute;
    bottom: 20px;
    transition: transform 0.2s ease-in-out; /* Buton kayması */
    pointer-events: auto; /* Buton tıklanabilir */
}

button:hover {
    transform: translateX(20px); /* Mouse üzerine geldiğinde buton kayacak */
}

.strawberry {
    position: absolute;
    cursor: pointer;
    width: 80px;
    height: 80px;
    display: none;
    transition: 0.3s ease;
}

.strawberry-message {
    position: absolute;
    top: 90px;
    width: 300px;
    text-align: center;
    color: white;
    font-size: 18px;
    display: none;
}

.messages {
    position: absolute;
    top: 100px;
    width: 300px;
    text-align: center;
    color: white;
    font-size: 18px;
}
