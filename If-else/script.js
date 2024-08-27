var botao = document.getElementById('verificaButton');

        botao.onclick = function() {
            var anoNascimento = document.getElementById('anoNascimentoInput').value;
            var anoAtual = new Date().getFullYear();
            var idade = anoAtual - anoNascimento;

            var resultado = document.getElementById('resultado');

            if (idade >= 18) {
                resultado.textContent = "Você é maior de idade. Sua idade é " + idade + " anos.";
            } else {
                resultado.textContent = "Você é menor de idade. Sua idade é " + idade + " anos.";
            }
        }
