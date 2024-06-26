const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativa");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Quais são os dois principais tipos de aprendizado em inteligência artificial?",
        alterntivas: [
            "A-Supervisionado",
            "B-Não supervisionado"
        ]
    },
    {
        enunciado: "Qual tecnologia é central para a criação de chatbots e assistentes virtuais?",
        alterntivas: [
            "A-Processamento de linguagem natural ",
            "B-Realidade aumentada"
        ]
    },
    {
        enunciado: "Como os sistemas de recomendação utilizam inteligência artificial?",
        alterntivas: [
            "A-Analisando padrões de comportamento do usuário",
            "B-Realizando cálculos matemáticos simples"
        ]
    },
    {
        enunciado: "O que é deep learning?",
        alterntivas: [
            "A-Uma técnica de aprendizado de máquina baseada em redes neurais profundas",
            "B-Um método para aumentar a capacidade de processamento de computadores"
        ]
    },
    

];

let atual = 0;
let perguntaAtual;

function mostraPergunta() {
    perguntaAtual = perguntas[atual]
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    mostraAlternaitva();
}

function mostraAlternaitva(){
    for(const alternativa of perguntaAtual.alterntivas){
        const botaoAlternaitva = document.createElement("botton");
        botaoAlternaitva.textContent = alternativa;
        caixaAlternativas.appendChild(botaoAlternaitva);
    }
}

mostraPergunta();