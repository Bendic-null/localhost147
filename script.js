function activate() {
    const msg = document.getElementById("message");

    msg.textContent = "System Activated. Welcome!";
    msg.style.opacity = "1";
    msg.style.transform = "scale(1.1)";

    setTimeout(() => {
        msg.style.transform = "scale(1)";
    }, 300);
}
