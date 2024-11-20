// Seleciona todos os passos e botões
const passos = document.querySelectorAll('.passo');
const botoes = document.querySelectorAll('.btn-proximo');

// Função para exibir o próximo passo
function mostrarProximoPasso(proximoId) {
    // Oculta todos os passos
    passos.forEach(passo => passo.classList.remove('ativo'));

    // Mostra o passo correspondente ao ID fornecido
    const proximoPasso = document.getElementById(`passo-${proximoId}`);
    if (proximoPasso) {
        proximoPasso.classList.add('ativo');
    }
}

// Adiciona eventos de clique aos botões
botoes.forEach(botao => {
    botao.addEventListener('click', () => {
        const proximoId = botao.getAttribute('data-proximo');
        mostrarProximoPasso(proximoId);
    });
});
