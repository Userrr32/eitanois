document.getElementById('sim').addEventListener('click', function () {
    window.location.href = 'https://open.spotify.com/intl-pt/track/5WPLdp0Ti83spss11HvqkB?si=f7e96e9048a94118';
});

let clickCount = 0;

document.getElementById('nao').addEventListener('click', function () {
    clickCount++;
    const button = document.getElementById('nao');
    const mensagem = document.getElementById('mensagem');

    if (clickCount === 1) {
        mensagem.textContent = "Tem certeza?? :(";
        mensagem.classList.remove('hidden');
    }

    moveButton(button);
});

function moveButton(button) {
    const buttonWidth = button.offsetWidth;
    const buttonHeight = button.offsetHeight;
    const windowWidth = window.innerWidth;
    const windowHeight = window.innerHeight;

    const x = Math.random() * (windowWidth - buttonWidth);
    const y = Math.random() * (windowHeight - buttonHeight);

    button.style.position = 'absolute';
    button.style.left = x + 'px';
    button.style.top = y + 'px';
}
