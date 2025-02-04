//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.

let participantes = [];

function adicionarAmigo() {
    const inputAmigo = document.getElementById('amigo');
    const nomeAmigo = inputAmigo.value.trim();

    if (nomeAmigo === '') {
        alert('Por favor, digite um nome.');
        return;
    }

    if (participantes.includes(nomeAmigo)) {
        alert('Este nome já foi adicionado.');
        return;
    }

    participantes.push(nomeAmigo);
    atualizarListaAmigos();

    inputAmigo.value = '';
}

function atualizarListaAmigos() {
    const listaAmigos = document.getElementById('listaAmigos');
    listaAmigos.innerHTML = ''; 

    participantes.forEach((nome) => {
        const itemLista = document.createElement('li');
        itemLista.textContent = nome;
        listaAmigos.appendChild(itemLista);
    });
}

//  sortear os amigos 
function sortearAmigo() {
    if (participantes.length < 2) {
        alert('Adicione pelo menos dois participantes para sortear.');
        return;
    }

    let participantesEmbaralhados = [...participantes];
    participantesEmbaralhados = shuffleArray(participantesEmbaralhados);

    for (let i = 0; i < participantes.length; i++) {
        if (participantes[i] === participantesEmbaralhados[i]) {

            const temp = participantesEmbaralhados[i];
            participantesEmbaralhados[i] = participantesEmbaralhados[(i + 1) % participantes.length];
            participantesEmbaralhados[(i + 1) % participantes.length] = temp;
        }
    }

    exibirResultado(participantes, participantesEmbaralhados);
}

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

function exibirResultado(original, embaralhado) {
    const resultadoLista = document.getElementById('resultado');
    resultadoLista.innerHTML = ''; // Limpa o resultado anterior

    for (let i = 0; i < original.length; i++) {
        const itemLista = document.createElement('li');
        itemLista.textContent = `${original[i]} tirou ${embaralhado[i]}`;
        resultadoLista.appendChild(itemLista);
    }
}