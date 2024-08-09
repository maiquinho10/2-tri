const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "É o primeiro dia de verão e você está planejando suas atividades. Qual é a sua prioridade?",
        alternativas: [
            {
                texto: "Organizar um piquenique no parque com amigos.",
                afirmacao: "Você adora socializar e aproveitar o tempo ao ar livre com pessoas queridas."
            },
            {
                texto: "Planejar uma viagem para a praia para relaxar e tomar sol.",
                afirmacao: "Você valoriza o descanso e deseja recarregar as energias em um lugar tranquilo."
            }
        ]
    },
    {
        enunciado: "Durante suas férias de verão, você decide praticar um novo esporte. O que você escolhe?",
        alternativas: [
            {
                texto: "Experimentar surfar nas ondas do mar.",
                afirmacao: "Você está animado com a adrenalina e desafiando-se a aprender algo novo."
            },
            {
                texto: "Jogar vôlei de praia com amigos.",
                afirmacao: "Você prefere um esporte social e divertido para se divertir com outras pessoas."
            }
        ]
    },
    {
        enunciado: "Você está planejando uma festa de verão. Como você a organiza?",
        alternativas: [
            {
                texto: "Organiza uma festa na piscina com decoração tropical e música animada.",
                afirmacao: "Você gosta de festas vibrantes e cheias de energia, onde todos podem se refrescar e se divertir."
            },
            {
                texto: "Faz um churrasco ao ar livre com uma fogueira para uma noite descontraída.",
                afirmacao: "Você prefere um ambiente mais íntimo e relaxante, onde todos possam conversar e aproveitar a companhia."
            }
        ]
    },
    {
        enunciado: "Você precisa lidar com uma onda de calor intensa. Qual é a sua estratégia para se manter fresco?",
        alternativas: [
            {
                texto: "Ficar em casa com o ar-condicionado ligado e beber muita água.",
                afirmacao: "Você valoriza estar confortável e se proteger do calor extremo dentro de casa."
            },
            {
                texto: "Ir à praia ou a um lago para nadar e se refrescar na água.",
                afirmacao: "Você prefere aproveitar a natureza e se refrescar ao ar livre, se mantendo ativo."
            }
        ]
    },
    {
        enunciado: "Você está voltando das férias de verão e precisa se readaptar à rotina. Como você faz isso?",
        alternativas: [
            {
                texto: "Reorganiza sua agenda e começa a se preparar para as atividades escolares ou de trabalho.",
                afirmacao: "Você gosta de se preparar com antecedência e garantir uma transição tranquila de volta às responsabilidades."
            },
            {
                texto: "Procura formas de manter o espírito de férias, como planejando pequenas escapadas nos fins de semana.",
                afirmacao: "Você deseja prolongar o prazer do verão e manter um pouco da diversão nas suas semanas."
            }
        ]
    }
];

let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
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
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "Resumo do Verão...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();
