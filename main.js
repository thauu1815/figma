const botoes = document.querySelectorAll(".botao");
for(let i=0;i <botoes.length;i++){ botoes[i].onclick = function() {

    for(let j=0;j<botoes.length;j++) { botoes[j].classList.remove("ativo");
    }
    botoes[i].classList.add("ativo");
    }
    }
console.log(botoes)
const textos = document.querySelectorAll(".aba-conteudo");
textos[i].classList.add("ativo");
textos[j].classList.remove("ativo");
const contadores = document.querySelectorAll(".contador");
contadores[0]
const tempoObjetivo1 = new Date("2024-10-05");
contadores[0].textContent = tempoObjetivo1;