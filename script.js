document.addEventListener('DOMContentLoaded', function() {
    // Esta função garante que o código só é executado depois que toda a página HTML está carregada.

    // 1. Encontra todos os botões de navegação usando a classe .btn-proximo
    const botoesProximo = document.querySelectorAll('.btn-proximo');

    // 2. Adiciona um "ouvinte de clique" a cada um desses botões
    botoesProximo.forEach(botao => {
        botao.addEventListener('click', function() {
            
            // Pega o valor do atributo data-proximo (ex: '1', '2', '7')
            const proximoPassoId = this.getAttribute('data-proximo');

            // --- LÓGICA DE TROCA DE TELA (O CORAÇÃO DO JOGO) ---

            // A. Encontra e DESATIVA o passo ATUAL (aquele que tem a classe 'ativo')
            const passoAtual = document.querySelector('.passo.ativo');
            if (passoAtual) {
                // Remove a classe 'ativo', fazendo com que o CSS o esconda
                passoAtual.classList.remove('ativo');
            }

            // B. Encontra e ATIVA o PRÓXIMO passo
            // O ID é construído como 'passo-X', onde X é o valor de data-proximo
            const proximoPasso = document.getElementById(`passo-${proximoPassoId}`);

            if (proximoPasso) {
                // Adiciona a classe 'ativo', fazendo com que o CSS o mostre
                proximoPasso.classList.add('ativo');
            }
        });
    });
});
