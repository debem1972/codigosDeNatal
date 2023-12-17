//Inteligência da animação da abertura

// Declara uma variável global para controlar se a função anônima já foi executada ou não
var audioAnimacaoExecutado = false;

/*Evento de click no body para invocar a function dos efeitos  audiovisuais*/
document.body.addEventListener("click", function () {

    // Verifica se a função anônima ainda não foi executada
    if (!audioAnimacaoExecutado) {
        //Toca o audio ao clicar na tela
        var audioElement = document.getElementById("sinos");
        audioElement.play();

        //Aplica a animação ao clicar na tela
        startCSSAnimation(); // Chama a função aqui

        // Muda o valor da variável para true, indicando que a função anônima já foi executada
        audioAnimacaoExecutado = true;

        //Salva o audio e a animação no localStorage
        salvarLocalStorage();
    }
});


/*Efeitos de animação do background, da imagem e dos textos*/
function startCSSAnimation() {

    //Animação do #fundo
    var fundoEfect = document.querySelector('#fundo');
    var classeA = "fundo";
    var classeB = "efeitoFundo";
    //Utilizando o operador toggle para mudanças entre as classes
    fundoEfect.classList.toggle(classeA);
    fundoEfect.classList.toggle(classeB);


    //Capturando o content
    var oConteudo = document.querySelector('#miolo');
    var classeC = "envelope";
    var classeD = "conteudo";


    //Animação da imagem
    var imgNoel = document.querySelector('#splash');
    var classeE = "imagemNoel";
    var classeF = "splash";
    imgNoel.classList.toggle(classeE);
    imgNoel.classList.toggle(classeF);

    //Animação do texto1
    var firstText = document.querySelector('#text1');
    var classeG = "palavras";
    var classeH = "textEfect";
    firstText.classList.toggle(classeG);
    firstText.classList.toggle(classeH);


    //Animação do texto2
    var secondText = document.querySelector('#text2');
    var classeI = "palavras2";
    var classeJ = "textEfect2";
    secondText.classList.toggle(classeI);
    secondText.classList.toggle(classeJ);



    // Configura um temporizador para remover a classe aplicada e retornar para a original
    setTimeout(function () {
        fundoEfect.classList.remove('efeitoFundo');
        fundoEfect.classList.add('fundo');
        fundoEfect.style.display = 'none';
        oConteudo.classList.toggle(classeC);
        oConteudo.classList.toggle(classeD);
        imgNoel.classList.toggle(classeF);
        imgNoel.classList.toggle(classeE);
        firstText.classList.toggle(classeH);
        firstText.classList.toggle(classeG);
        secondText.classList.toggle(classeJ);
        secondText.classList.toggle(classeI);

    }, 19000);
}


// Cria uma função que será executada quando o DOM estiver carregado
function iniciar() {
    console.log("DOM completamente carregado e analisado");
    // Recupera o audio e a animação do localStorage
    recuperarLocalStorage();
}


// Adiciona um event listener ao documento para chamar a função quando o evento DOMContentLoaded for disparado
document.addEventListener("DOMContentLoaded", iniciar);



// Cria uma função para salvar o audio e a animação no localStorage
function salvarLocalStorage() {
    // Converte o elemento de áudio em uma string usando o método toString
    var audioString = audioElement.toString();
    // Salva o áudio no localStorage com a chave "audioSinos"
    localStorage.setItem("audioSinos", audioString);

    // Converte os elementos HTML das animações em strings usando o método outerHTML
    var fundoString = fundoEfect.outerHTML;
    var conteudoString = oConteudo.outerHTML;
    var imgNoelString = imgNoel.outerHTML;
    var firstTextString = firstText.outerHTML;
    var secondTextString = secondText.outerHTML;
    // Salva as animações no localStorage com as respectivas chaves
    localStorage.setItem("fundoEfect", fundoString);
    localStorage.setItem("oConteudo", conteudoString);
    localStorage.setItem("imgNoel", imgNoelString);
    localStorage.setItem("firstText", firstTextString);
    localStorage.setItem("secondText", secondTextString);
}



// Cria uma função para recuperar o audio e a animação do localStorage
function recuperarLocalStorage() {
    // Pega o áudio do localStorage pela chave "audioSinos"
    var audioString = localStorage.getItem("audioSinos");
    // Converte a string em um elemento de áudio usando o método document.createElement
    var audioElement = document.createElement("audio");
    // Atribui a string como o atributo src do elemento de áudio
    audioElement.src = audioString;

    // Pega as animações do localStorage pelas respectivas chaves
    var fundoString = localStorage.getItem("fundoEfect");
    var conteudoString = localStorage.getItem("oConteudo");
    var imgNoelString = localStorage.getItem("imgNoel");
    var firstTextString = localStorage.getItem("firstText");
    var secondTextString = localStorage.getItem("secondText");
    // Converte as strings em elementos HTML usando o método document.createElement
    var fundoEfect = document.createElement("div");
    var oConteudo = document.createElement("div");
    var imgNoel = document.createElement("img");
    var firstText = document.createElement("p");
    var secondText = document.createElement("p");
    // Atribui as strings como o atributo innerHTML dos elementos HTML
    fundoEfect.innerHTML = fundoString;
    oConteudo.innerHTML = conteudoString;
    imgNoel.innerHTML = imgNoelString;
    firstText.innerHTML = firstTextString;
    secondText.innerHTML = secondTextString;
}