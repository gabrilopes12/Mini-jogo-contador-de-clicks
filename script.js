document.addEventListener('DOMContentLoaded', function() {
    let clickCount = 0;
    let gameDuration = 40; // Duração do jogo em segundos
    let clicksToWin = 100; // Número de cliques para vencer
    let timeLeft = gameDuration;
    let gameActive = false;
    let timer = null;

    const clickButton = document.getElementById('clickButton');
    const clickCountDisplay = document.getElementById('clickCount');
    const timeLeftDisplay = document.getElementById('timeLeft');
    const messageDisplay = document.getElementById('messageDisplay');
    const restartButton = document.getElementById('restartButton'); // Atualização

    // Lógica para contar os cliques e iniciar o jogo
    clickButton.addEventListener('click', function() {
        if (!gameActive) {
            startGame(); // Iniciar o jogo no primeiro clique
        }

        if (gameActive) {
            clickCount++;
            clickCountDisplay.textContent = clickCount;

            if (clickCount >= clicksToWin) {
                endGame(true); // O jogador venceu
            }
        }
    });

    // Função para iniciar o jogo
    function startGame() {
        gameActive = true;
        clickCount = 0;
        timeLeft = gameDuration;
        clickCountDisplay.textContent = clickCount;
        timeLeftDisplay.textContent = timeLeft;
        messageDisplay.textContent = '';
        restartButton.style.display = 'none'; // Esconder o botão de reinício

        // Iniciar a contagem do tempo
        timer = setInterval(function() {
            if (timeLeft > 0) {
                timeLeft--;
                timeLeftDisplay.textContent = timeLeft;
            } else {
                endGame(false); // O jogador perdeu
            }
        }, 1000);
    }

    // Função para encerrar o jogo
    function endGame(hasWon) {
        gameActive = false;
        clearInterval(timer);

        if (hasWon) {
            messageDisplay.textContent = 'Parabéns! Você venceu o jogo!';
            messageDisplay.classList.remove('lose');
            messageDisplay.classList.add('win');
        } else {
            messageDisplay.textContent = 'Fim do tempo! Você perdeu o jogo.';
            messageDisplay.classList.remove('win');
            messageDisplay.classList.add('lose');
        }

        restartButton.style.display = 'block'; // Mostrar o botão de reinício
    }

    // Função para reiniciar o jogo
    restartButton.addEventListener('click', function() {
        resetGame();
    });

    // Função para resetar o estado do jogo
    function resetGame() {
        clickCount = 0;
        timeLeft = gameDuration;
        clickCountDisplay.textContent = clickCount;
        timeLeftDisplay.textContent = timeLeft;
        messageDisplay.textContent = '';
        restartButton.style.display = 'none'; // Esconder o botão de reinício
        gameActive = false; // O jogo só começa novamente no primeiro clique
    }
});