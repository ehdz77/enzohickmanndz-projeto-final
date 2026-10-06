/* =========================================
   DADOS DOS PROJETOS
   ========================================= */

const projetos = {

    freelancer: {

        titulo: "Freelancer",

        texto: "O melhor site de vendas de sites do Brasil!!",

        imagem: "https://s3.amazonaws.com//beta-img.b2bstack.net/uploads/production/product/product_image/26366/freelancer.png"

    },


    mkt: {

titulo: "Impulso MKT",

        texto: "Quer impulsionar seu site? É com o MKT!!",

        imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzGStUfW6447XOuZk-osifiISmGieCi--dwaAwjh5_c3B_9uZA5qnLozpa&s=10"

    }

};


/* =========================================
   ABRIR DEMONSTRAÇÃO
   ========================================= */

function abrirDemo(projeto) {

    const modal = document.getElementById("modal");

    const imagem = document.getElementById("imagemDemo");

    const titulo = document.getElementById("tituloDemo");

    const texto = document.getElementById("textoDemo");


    /* PEGA AS INFORMAÇÕES DO PROJETO */

    const dados = projetos[projeto];


    /* COLOCA AS INFORMAÇÕES NA JANELA */

    imagem.src = dados.imagem;

    titulo.textContent = dados.titulo;

    texto.textContent = dados.texto;


    /* MOSTRA A JANELA */

    modal.style.display = "flex";

}


/* =========================================
   FECHAR DEMONSTRAÇÃO
   ========================================= */

function fecharDemo() {

    const modal = document.getElementById("modal");

    modal.style.display = "none";

}


/* =========================================
   FECHAR CLICANDO FORA DO QUADRADO
   ========================================= */

window.addEventListener("click", function(event) {

    const modal = document.getElementById("modal");


    if (event.target === modal) {

        fecharDemo();

    }

});


/* =========================================
   FECHAR COM A TECLA ESC
   ========================================= */

document.addEventListener("keydown", function(event) {

    if (event.key === "Escape") {

        fecharDemo();

    }

});