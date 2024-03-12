function comprar() {
    let tipo = document.getElementById('tipo-ingresso');
    let qtd = parseInt(document.getElementById('qtd').value);

    if(tipo.value == 'pista') {
        comprarPista(qtd);
    } else if(tipo.value == 'superior') {
        comprarSuperior(qtd);
    } else {
        comprarInferior(qtd);
    }
}

function comprarPista(qtd) {
    qtdPista = parseInt(document.getElementById('qtd-pista').textContent);

    if(qtd > qtdPista) {
        alert('Quantidade indisponível para Pista.');
    } else {
        qtdPista = qtdPista - qtd;
        document.getElementById('qtd-pista').textContent = qtdPista;
        alert('Compra realizada com sucesso!');
    }
}

function comprarSuperior(qtd) {
    qtdSuperior = parseInt(document.getElementById('qtd-superior').textContent);

    if(qtd > qtdSuperior) {
        alert('Quantidade indisponível para Cadeira Superior.');
    } else {
        qtdSuperior = qtdSuperior - qtd;
        document.getElementById('qtd-superior').textContent = qtdSuperior;
        alert('Compra realizada com sucesso!');
    }
    
}

function comprarInferior(qtd) {
    qtdInferior = parseInt(document.getElementById('qtd-inferior').textContent);

    if(qtd > qtdInferior) {
        alert('Quantidade indisponível para Cadeira Inferior.');
    } else {
        qtdInferior = qtdInferior - qtd;
        document.getElementById('qtd-inferior').textContent = qtdInferior;
        alert('Compra realizada com sucesso!');
    }
}