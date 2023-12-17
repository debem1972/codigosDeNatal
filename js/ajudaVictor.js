//Chamando e ocultando os botoes de ajuda

//Capturando a div #iframe
function chamaBotoes() {
    let aiframeAjuda = document.querySelector('#iframe');


    //Capturando as classes
    let classI = "ocultaIframe";
    let classJ = "iframe";

    //Utilizando o operador toggle para mudanças entre as classes
    aiframeAjuda.classList.toggle(classI);
    aiframeAjuda.classList.toggle(classJ);

}



//Ajuda em português
function helpBr() {
    let aiframeAjuda = document.querySelector('#iframe');
    let aiframeAjudeMe = document.querySelector('#ajudeMe');
    let aiframeHelpMe = document.querySelector('#helpMe');

    //Verificando se a ajuda em inglês está aberta
    if (aiframeHelpMe.classList.contains('ajudaEmEng')) {
        helpEng();
    }

    //Capturando as classes
    let classA = "iframe";
    let classB = "iframeAjuda";
    let classC = "ajuda";
    let classD = "ajudaEmPtBr";

    //Utilizando o operador toggle para mudanças entre as classes
    aiframeAjuda.classList.toggle(classA);
    aiframeAjuda.classList.toggle(classB);
    aiframeAjudeMe.classList.toggle(classC);
    aiframeAjudeMe.classList.toggle(classD);

};


//Ajuda em ingles
function helpEng() {
    let aiframeAjuda = document.querySelector('#iframe');
    let aiframeHelpMe = document.querySelector('#helpMe');
    let aiframeAjudeMe = document.querySelector('#ajudeMe');

    //Verificando se a ajuda em português está aberta
    if (aiframeAjudeMe.classList.contains('ajudaEmPtBr')) {
        helpBr();
    }

    //Capturando as classes
    let classA = "iframe";
    let classB = "iframeAjuda";
    let classG = "ajuda";
    let classH = "ajudaEmEng";

    //Utilizando o operador toggle para mudanças entre as classes
    aiframeAjuda.classList.toggle(classA);
    aiframeAjuda.classList.toggle(classB);
    aiframeHelpMe.classList.toggle(classG);
    aiframeHelpMe.classList.toggle(classH);

};

