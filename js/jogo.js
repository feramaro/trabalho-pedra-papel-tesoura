// Declara os elementos do HTML
var btPedra = document.getElementById("btPedra")
var btPapel = document.getElementById("btPapel")
var btTesoura = document.getElementById("btTesoura")
var btJogar = document.getElementById("btJogar")
var imgPlayer = document.getElementById("imgPlayer")
var imgMaquina = document.getElementById("imgMaquina")
var placar = document.getElementById("placar")
var vencedor = document.getElementById("vencedor")
var nomeJogador = document.getElementById("nomeJogador")
var btJogarNovamente = document.getElementById("btJogarNovamente")

// Pega o nome do jogador e coloca no campo
var nome = prompt("Qual seu nome?")
nomeJogador.textContent = nome

var numJogador = 0 // Variável que armazena o que foi jogado pelo jogador
var jogadas = 3 // Número de vezes que o jogo vai acontecer

function jogar() {

    // Troca a imagem e determina o que o jogador jogou
    if (btPedra.checked) {
        imgPlayer.src = 'img/pedra_jogador.png'
        numJogador = 1
    } else if (btPapel.checked) {
        imgPlayer.src = 'img/papel_jogador.png'
        numJogador = 2
    } else {
        imgPlayer.src = 'img/tesoura_jogador.png'
        numJogador = 3
    }

}

function logicaJogo() {

/*
* Código do Computador
* 1 - Pedra
* 2 - Papel
* 3 - Tesoura
*/

    // Gera o número que determina o que o computador joga
    var numMaquina = Math.floor(Math.random() * 3 + 1) 
    var primeiraLetraJogador = nome.charAt(0) // Pega a primeira letra do nome do jogador
    // Verifica as jogadas do jogador e computador, e determina o vencedor
    if (numJogador == numMaquina) {
        vencedor.textContent = "* Empate!"
        placar.textContent += " *"
        if (numMaquina == 1) {
            imgMaquina.src = 'img/pedra_jogador.png'
        } else if (numMaquina == 2) {
            imgMaquina.src = 'img/papel_jogador.png'
        } else {
            imgMaquina.src = 'img/tesoura_jogador.png'
        }
    } else if (numJogador == 1 && numMaquina == 2) {
        imgMaquina.src = 'img/papel_jogador.png'
        vencedor.textContent = "Computador Venceu"
        placar.textContent += " #"
        jogadas--
    } else if (numJogador == 1 && numMaquina == 3) {
        imgMaquina.src = 'img/tesoura_jogador.png'
        vencedor.textContent = nome + " Venceu"
        placar.textContent += " " + primeiraLetraJogador
        jogadas--
    } else if (numJogador == 2 && numMaquina == 1) {
        imgMaquina.src = 'img/pedra_jogador.png'
        vencedor.textContent = nome + " Venceu"
        placar.textContent += " " + primeiraLetraJogador
        jogadas--
    } else if (numJogador == 2 && numMaquina == 3) {
        imgMaquina.src = 'img/tesoura_jogador.png'
        vencedor.textContent = "Computador Venceu"
        placar.textContent += " #"
        jogadas-- 
    } else if (numJogador == 3 && numMaquina == 1) {
        imgMaquina.src = 'img/pedra_jogador.png'
        vencedor.textContent = "Computador Venceu"
        placar.textContent += " #"
        jogadas--
    } else if (numJogador == 3 && numMaquina == 2) {
        imgMaquina.src = 'img/papel_jogador.png'
        vencedor.textContent = nome + " Venceu"
        placar.textContent += " " + primeiraLetraJogador
        jogadas--
    }
    if (jogadas == 0) { // Executado no fim da partida, desabilita os botões 
        btJogar.disabled = true
        alert("O Jogo acabou, verifique o placar!")
        vencedor.textContent = "O Jogo acabou.\nClique em Reiniciar Jogo\npara jogar novamente."
        btPedra.disabled = true
        btPapel.disabled = true
        btTesoura.disabled = true
    }
}
// Regarrega a página
function jogarNovamente() {
    location.reload()
}

// Registro de Listeners
btPedra.addEventListener('change', jogar)
btPapel.addEventListener('change', jogar)
btTesoura.addEventListener('change', jogar)
btJogarNovamente.addEventListener('click', jogarNovamente)
btJogar.addEventListener('click', logicaJogo)