// Quando o usuário clicar no botão "Finalizar Quiz", executa a função
document.getElementById("finalizarQuiz").addEventListener("click", function () {

    // Variável que guarda os pontos do usuário
    let pontuacao = 0;

    // Variável que guarda o total de pontos possíveis
    let total = 0;

    // Seleciona todas as perguntas (cada uma dentro de uma .quiz-box)
    document.querySelectorAll(".quiz-box").forEach((box) => {

        // Cada questão vale 2 pontos
        total += 2;

        // Pega a alternativa correta (a única que tem data-correta="true")
        const correta = box.querySelector("input[data-correta='true']");

        // Pega a alternativa selecionada pelo usuário dentro desta pergunta
        const selecionada = box.querySelector("input[type='radio']:checked");

        // Procura se já existe uma mensagem de feedback na pergunta
        let feedback = box.querySelector(".feedback");

        // Se não existir, cria uma
        if (!feedback) {
            feedback = document.createElement("p");
            feedback.classList.add("feedback");
            feedback.style.fontWeight = "bold";
            feedback.style.marginTop = "10px";
            box.appendChild(feedback); // adiciona o feedback dentro da pergunta
        }

        // Verifica se o usuário marcou a alternativa correta
        if (selecionada === correta) {
            pontuacao += 2; // adiciona 2 pontos
            feedback.textContent = "Resposta correta!";
            feedback.style.color = "green";
        } else {
            feedback.textContent = "Resposta incorreta.";
            feedback.style.color = "red";
        }
    });

    // Mostra a pontuação final em um alerta
    alert("Sua pontuação final: " + pontuacao + "/" + total);
});
