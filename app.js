//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
let listaAmigos = [];

function adicionarAmigo() {
    const inputAmigo = document.getElementById('amigo');
    const nomeAmigo = inputAmigo.value.trim();
    if (nomeAmigo === '') {
        alert('Por favor, digite um nome.');
        return;
    }
    if (listaAmigos.includes(nomeAmigo)) {
        alert('Este nome já foi adicionado.');
        return;
    }
    listaAmigos.push(nomeAmigo);
    atualizarListaAmigos();

    inputAmigo.value = '';
} 

