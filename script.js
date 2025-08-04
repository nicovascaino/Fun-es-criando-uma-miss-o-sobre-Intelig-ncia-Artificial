const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Assim que saiu da escola você se depara com uma nova tecnologia: um chat que consegue responder todas as dúvidas que uma pessoa pode ter. Qual o primeiro pensamento?",
        alternativas: [
            {
                texto: "Isso é assustador!",
                proxima: "medo"
            },
            {
                texto: "Isso é maravilhoso!",
                proxima: "curiosidade"
            }
        ]
    },
    {
        enunciado: "Diante do medo do que a IA pode fazer, você decide...",
        alternativas: [
            {
                texto: "Estudar mais sobre ética e segurança da IA para entender os riscos e como controlá-los.",
                proxima: "etica"
            },
            {
                texto: "Ignorar a tecnologia e torcer para que ela não mude o mundo.",
                proxima: "ignorancia"
            }
        ]
    },
    {
        enunciado: "Sua curiosidade leva você a explorar as capacidades da IA. Você decide...",
        alternativas: [
            {
                texto: "Aprender a programar e criar suas próprias aplicações de IA.",
                proxima: "criacao"
            },
            {
                texto: "Utilizar a IA em todas as tarefas do dia a dia, desde a escola até hobbies.",
                proxima: "dependencia"
            }
        ]
    },
    {
        enunciado: "Após estudar, você se torna um especialista em ética de IA. Como você usa seu conhecimento?",
        alternativas: [
            {
                texto: "Trabalha para uma grande empresa, garantindo que a IA seja desenvolvida de forma segura e responsável.",
                proxima: "finalFeliz"
            },
            {
                texto: "Torna-se um ativista, lutando por leis que controlem rigorosamente o uso da IA.",
                proxima: "finalAtivista"
            }
        ]
    },
    {
        enunciado: "Sua dependência da IA te faz perder habilidades básicas e você se sente perdido. Qual o seu próximo passo?",
        alternativas: [
            {
                texto: "Buscar ajuda e começar a reequilibrar a sua vida, usando a IA como ferramenta, não como muleta.",
                proxima: "finalEquilibrio"
            },
            {
                texto: "Continuar a depender totalmente da IA, assumindo o risco de perder sua autonomia.",
                proxima: "finalDependente"
            }
        ]
    }
];

const afirmacoes = {
    finalFeliz: "Sua dedicação à ética e segurança da IA garantiu que a tecnologia se tornasse uma força positiva no mundo, respeitando os direitos humanos e impulsionando a sociedade para um futuro melhor.",
    finalAtivista: "Sua luta incansável por regulamentação resultou em leis rigorosas que impediram o avanço descontrolado da IA, mas também limitaram seu potencial para o bem. A sociedade vive em um estado de cautela tecnológica.",
    finalEquilibrio: "Você conseguiu reverter a dependência e passou a usar a IA de forma consciente, como um parceiro de trabalho, recuperando a autonomia e ensinando a outros como encontrar o mesmo equilíbrio.",
    finalDependente: "A dependência total da IA levou a um futuro onde sua criatividade e capacidade de resolver problemas desapareceram. Você se tornou apenas um receptor passivo de informações.",
    ignorancia: "Ao ignorar a IA, você permitiu que outros tomassem decisões importantes sobre o seu futuro, levando a um mundo que você não entende mais, governado por tecnologias que você rejeitou.",
    criacao: "Você se tornou um dos criadores da nova era, desenvolvendo ferramentas que ajudam a humanidade, mas enfrenta o desafio de garantir que suas invenções sejam usadas para o bem, e não para o mal."
};

let atual = 0;
let perguntaAtual;

function mostraPergunta() {
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    const proxima = opcaoSelecionada.proxima;
    
    // Encontrar a próxima pergunta ou o resultado final
    const proximaPergunta = perguntas.find(p => p.alternativas.some(a => a.proxima === proxima));
    
    if (proximaPergunta) {
        // Se a próxima opção for uma pergunta, encontrar o índice dela
        const proximaIndex = perguntas.indexOf(proximaPergunta);
        atual = proximaIndex;
        mostraPergunta();
    } else {
        // Se for um resultado final, mostrar a conclusão
        mostraResultado(proxima);
    }
}

function mostraResultado(final) {
    caixaPerguntas.textContent = "Fim da história...";
    textoResultado.textContent = afirmacoes[final];
    caixaAlternativas.textContent = "";
}

mostraPergunta();
