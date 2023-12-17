// Parte1 do código
// Criará um id espacífico para cada nova tarefa criada.
// Usar o armazenamento local para guardar o valor do contador
let contador = localStorage.getItem("contador") || 0;
let entradaCodigo = document.querySelector('#code');
var nomePresenteado = document.getElementById('presenteado');
let btnAdd = document.getElementById('btn-add');
let main = document.getElementById('areaLista');
let botaoGeraCodigo = document.getElementById('geraCode');
function geraCodigo() {
    const caracteres = "abcdefghijklmnopqrstuvxywzABCDEFGHIJKLMNOPQRSTUVXYWZ0123456789";
    const length = 6;
    let password = "";
    for (let i = 0; i < length; i++) {
        password += caracteres.charAt(Math.floor(Math.random() * caracteres.length));
    }
    entradaCodigo.value = password;
    nomePresenteado.focus();
};
function capitalizarPrimeiraLetra(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}
function addTarefa() {
    let valorInput = nomePresenteado.value;
    let valorInput1 = entradaCodigo.value;
    if ((document.getElementById('presenteado').value == "") || (document.getElementById('code').value == "")) {
        alert('O campo não pode estar vazio!!!');
        return;
    }
    if ((valorInput !== "") && (valorInput1 !== "") && (valorInput !== null) && (valorInput1 !== null) && (valorInput !== undefined) && (valorInput1 !== undefined)) {
        // Incrementar o contador e salvar no armazenamento local
        contador++;
        localStorage.setItem("contador", contador);
        let valorInputCap = capitalizarPrimeiraLetra(valorInput);
        let novoItem = `<div id="${contador}" class="item">
        <div onclick="marcarTarefa(${contador})" class="item-icone">
            <i id="icone_${contador}" class="mdi mdi-circle-outline"></i>
        </div>
        <div onclick="marcarTarefa(${contador})" class="item-nome">
            <p id="nomePresenteado">${valorInputCap}</p>
        </div>
        <div onclick="marcarTarefa(${contador})" class="item-code">
            <p id="codigoPresente">${valorInput1}</p>
        </div>
        <div class="item-botao">
            <button class="editar" onclick="editarTarefa(${contador})"><span class="mdi mdi-pencil"></span></button>
        </div>
        <div class="item-botao ">
            <button class="deletar lixeira" onclick="deletar(${contador})"><span class="mdi mdi-delete-outline"></span></button>
        </div>
    </div>`
        main.innerHTML += novoItem;
        document.getElementById('code').value = "";
        document.getElementById('presenteado').value = "";
        salvarLista();
        // Verificar se o usuário já criou o primeiro item e solicitar a senha de acesso
        let primeiroItem = localStorage.getItem("primeiroItem") || false;
        if (!primeiroItem) {
            solicitarSenha();
            localStorage.setItem("primeiroItem", true);
        }
    }
}

// Criar uma função que solicita ao usuário que digite uma senha de acesso de 4 dígitos e valida se ela é válida
function solicitarSenha() {
    let senha = prompt("Digite uma senha de acesso de 4 dígitos:");
    if (senha == null || senha.length != 4 || isNaN(senha)) {
        alert("Senha inválida. Tente novamente.");
        solicitarSenha();
    } else {
        localStorage.setItem("senha", senha);
        alert("Senha criada com sucesso.");
    }
}

// Criar uma função que verifica se o usuário já tem uma senha de acesso salva no armazenamento local e, se tiver, solicita que ele digite a senha para acessar a página
function verificarSenha() {
    let senha = localStorage.getItem("senha");
    if (senha) {
        let tentativa = prompt("\uD83E\uDD14Digite a sua senha de acesso:");
        if (tentativa != senha) {
            alert("\uD83D\uDC94.; Senha incorreta. Tente novamente.");
            verificarSenha();
        } else {
            alert("\ud83c\udf85 Bem-vindo à página!");
        }
    }
}

// Usar o método document.addEventListener para executar a função verificarSenha quando o evento DOMContentLoaded ocorrer
document.addEventListener("DOMContentLoaded", verificarSenha);




//---------------------------------------------------------------
//Segunda parte do código

//Criando a função deletar
function deletar(id) {
    var tarefa = document.getElementById(id);
    tarefa.remove();
    //Salva a lista no local storage
    salvarLista();
}

//--------------------------------------------------------------------
//Função de marcar tarefa
function marcarTarefa(id) {
    var item = document.getElementById(id);
    var classe = item.getAttribute('class');
    //console.log(classe);

    //Aplicando a classe clicado e retirando-a quando clicado novamente sobre o item
    if (classe == "item") {
        item.classList.add('clicado');

        var icone = document.getElementById('icone_' + id);
        icone.classList.remove('mdi-circle-outline');
        icone.classList.add('mdi-check-circle');

        item.parentNode.appendChild(item);
    } else {
        item.classList.remove('clicado');

        var icone = document.getElementById('icone_' + id);
        icone.classList.remove('mdi-check-circle');
        icone.classList.add('mdi-circle-outline');
    }
    //Salva a lista no local storage
    salvarLista();
}

//----------------------------------------------------------------
//Criar a function editarTarefa()
function editarTarefa(id) {
    //Pegar o elemento da tarefa
    let tarefa = document.getElementById(id);

    //Pegar os elementos do nome e do código do presenteado
    let nome = tarefa.querySelector('#nomePresenteado');
    let codigo = tarefa.querySelector('#codigoPresente');

    //Pegar os valores atuais do nome e do código do presenteado
    let nomeAtual = nome.textContent;
    let codigoAtual = codigo.textContent;

    //Criar um prompt para o usuário digitar o novo nome do presenteado
    let novoNome = prompt('Digite o novo nome do presenteado:', nomeAtual);


    //Criar um prompt para o usuário digitar o novo código do presenteado
    let novoCodigo = prompt('Digite o novo código do presenteado:', codigoAtual);

    //nome e codigo recebem os novos valores para nome e codigo
    nome.textContent = novoNome;
    codigo.textContent = novoCodigo;


    //Salva a lista no local storage   

    salvarLista();
}

//----------------------------------------------------------------
//Criando o evento de dar enter associado ao evento de click no botao para inserir uma nova tarefa com enter também.
nomePresenteado.addEventListener("keyup", function (event) {
    if (event.keyCode === 13) {
        event.preventDefault();
        btnAdd.click();

        botaoGeraCodigo.focus();
    }
});

//--------------------------------------------------------------------
//Função de salvar a lista no local storage
function salvarLista() {
    //Converte a lista em uma string
    let listaString = main.innerHTML;
    //Salva a string no local storage
    localStorage.setItem("lista", listaString);
}

//--------------------------------------------------------------------
//Função de carregar a lista do local storage
function carregarLista() {
    //Recupera a string do local storage
    let listaString = localStorage.getItem("lista");
    //Converte a string em uma lista
    main.innerHTML = listaString;
}

//--------------------------------------------------------------------
//Chama a função de carregar a lista quando a página é carregada
window.onload = carregarLista;