let display = document.getElementById('display');
let botoes = document.querySelectorAll('button');

let valorAtual = '';
let operacaoAtual = '';
let valorAnterior = '';

botoes.forEach(botao => {
    botao.addEventListener('click', () => {
        let valorBotao = botao.textContent;

        if (valorBotao >= '0' && valorBotao <= '9' || valorBotao === '.') {
            valorAtual += valorBotao;
            display.value = valorAtual;
        } else if (valorBotao === '+' || valorBotao === '-' || valorBotao === '*' || valorBotao === '/') {
            operacaoAtual = valorBotao;
            valorAnterior = valorAtual;
            valorAtual = '';
        } else if (valorBotao === '=') {
            let resultado;

            switch (operacaoAtual) {
                case '+':
                    resultado = parseFloat(valorAnterior) + parseFloat(valorAtual);
                    break;
                case '-':
                    resultado = parseFloat(valorAnterior) - parseFloat(valorAtual);
                    break;
                case '*':
                    resultado = parseFloat(valorAnterior) * parseFloat(valorAtual);
                    break;
                case '/':
                    resultado = parseFloat(valorAnterior) / parseFloat(valorAtual);
                    break;
            }

            display.value = resultado.toString();
            valorAtual = resultado.toString();
            operacaoAtual = '';
            valorAnterior = '';
        } else if (valorBotao === 'C') {
            valorAtual = '';
            operacaoAtual = '';
            valorAnterior = '';
            display.value = '';
        }
    });
});

