/*!
    * Start Bootstrap - Freelancer v6.0.4 (https://startbootstrap.com/themes/freelancer)
    * Copyright 2013-2020 Start Bootstrap
    * Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-freelancer/blob/master/LICENSE)
    */
(function ($) {
    "use strict"; // Start of use strict

    // Smooth scrolling using jQuery easing
    $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function () {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                $('html, body').animate({
                    scrollTop: (target.offset().top - 71)
                }, 1000, "easeInOutExpo");
                return false;
            }
        }
    });

    // Scroll to top button appear
    $(document).scroll(function () {
        var scrollDistance = $(this).scrollTop();
        if (scrollDistance > 100) {
            $('.scroll-to-top').fadeIn();
        } else {
            $('.scroll-to-top').fadeOut();
        }
    });

    // Closes responsive menu when a scroll trigger link is clicked
    $('.js-scroll-trigger').click(function () {
        $('.navbar-collapse').collapse('hide');
    });

    // Activate scrollspy to add active class to navbar items on scroll
    $('body').scrollspy({
        target: '#mainNav',
        offset: 80
    });

    // Collapse Navbar
    var navbarCollapse = function () {
        if ($("#mainNav").offset().top > 100) {
            $("#mainNav").addClass("navbar-shrink");
        } else {
            $("#mainNav").removeClass("navbar-shrink");
        }
    };
    // Collapse now if page is not at top
    navbarCollapse();
    // Collapse the navbar when page is scrolled
    $(window).scroll(navbarCollapse);

    // Floating label headings for the contact form
    $(function () {
        $("body").on("input propertychange", ".floating-label-form-group", function (e) {
            $(this).toggleClass("floating-label-form-group-with-value", !!$(e.target).val());
        }).on("focus", ".floating-label-form-group", function () {
            $(this).addClass("floating-label-form-group-with-focus");
        }).on("blur", ".floating-label-form-group", function () {
            $(this).removeClass("floating-label-form-group-with-focus");
        });
    });

})(jQuery); // End of use strict



// Implementações de Imput-->

//criando um carrinho
let carrinho = []

class ProdutoNoCarrinho {
    constructor(nome, preco, quantidade) {
        this.nome = nome
        this.preco = preco
        this.quantidade = quantidade
    }


}

//funcões que iremos utilizar
function colocarProdutoNoCarrinho(nomeProduto, valorDoProduto, quantidadeDoProduto) {
    if (quantidadeDoProduto !== "") {
        let produtoNoCarrinho = new ProdutoNoCarrinho(nomeProduto, valorDoProduto, quantidadeDoProduto)
        carrinho.push(produtoNoCarrinho)

        console.log("Coloquei " + produtoNoCarrinho.quantidade + " " + produtoNoCarrinho.nome + " no carrinho!")
        alert("Coloquei " + produtoNoCarrinho.quantidade + " " + produtoNoCarrinho.nome + " no carrinho!")

        calcularValorTotalDoCarrinho()
    } else {
        //alert("Mas não queria o produto?")
    }
}

function calcularValorTotalDoCarrinho() {
    let soma = 0

    for (let i = 0; i < carrinho.length; i++) {
        let produtoNoEspacoAtualNoCarrinho = carrinho[i]
        // a gente só tá calculando o preço X quantidade daquele produto no carrinho
        let valorTotalDoProdutoAtual = produtoNoEspacoAtualNoCarrinho.preco * produtoNoEspacoAtualNoCarrinho.quantidade

        soma = soma + valorTotalDoProdutoAtual
    }

    console.log("O valor total do carrinho é de R$ " + soma)
    // let inputOndeFicaValorTotalDoCarrinho = document.getElementById("valorTotalDoCarrinho")
    let h3Valor = document.getElementById("h3Valor")

    // inputOndeFicaValorTotalDoCarrinho.value = soma
    // toLocaleString('pt-br', { style: 'currency', currency: 'BRL' }); serve pra formatar o número em dinheiro
    h3Valor.innerHTML = soma.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' });
}

function clicarComprarProduto(idDoCampoPreco, idDoCampoQuantidade, nomeDoProduto) {
    let inputComPreco = document.getElementById(idDoCampoPreco)
    let valorDoProduto = inputComPreco.value // onde fica que a maçã custa R$ 2,30
    let quantidadeDoProduto = document.getElementById(idDoCampoQuantidade).value // aqui é onde o usuário diz quantas quer

    colocarProdutoNoCarrinho(nomeDoProduto, valorDoProduto, quantidadeDoProduto)
}

function pegarvalordoElementobyIdClick() {

    let = document.getElementById(``);
    let = document.getElementById(``);
    let = document.getElementById(``);
    let = document.getElementById(``);
    let = document.getElementById(``);
    let = document.getElementById(``);
    let = document.getElementById(``);
    let = document.getElementById(``);
    //clickXsalada,clickCamisaSaopaulo,clickXbacon,clickXegg,clickXfrango,clickXcostela,clickXdog
}

function pegarvalorElementobyIDPreco() {
    let temOprecoDoXsalada = document.getElementById(``);

}
function mostrarCarrinho() {
    for (let i = 0; i < carrinho.length; i++) {
        let produtodocarrinho = carrinho[i]
        console.log(produtodocarrinho);
        produtodocarrinho = getElementById("todosOsProdutos")
        let todosOsProdutos = document.getElementById("todosOsProdutos")
        todosOsProdutos = mostrarCarrinho("Todos os seus produtos: ");

    }


}
function MostrarProdutos(){
    let divtodosOsProdutos = document.getElementById("id");
    
}


window.onload = function () {
    function Camisa() {
        document.getElementById(`comprarCamisaCorinthians`).addEventListener('click', () => {

            let temOprecoDoCamisaCorinthians = document.getElementById(`precoCamisaCorinthians`);
            let valorPrecoXaslada = temOprecoDoCamisaCorinthians.value

            let quantidadeCamisaCorinthians = document.getElementById(`quantidadeCamisaCorinthians`).value

            if (quantidadeCamisaCorinthians !== "") {
                let valorTotalXasala = valorPrecoXaslada * quantidadeCamisaCorinthians

                alert("Sua quantidade de Camisa do Corinthians $: " + valorTotalXasala)

            } else {
                alert(`Selecione uma quantidade para efetuar a compra`)
            }
            let idDoCampoPreco = "precoCamisaCorinthians"
            let idDoCampoQuantidade = "quantidadeCamisaCorinthians"
            let nomeDoProduto = "Camisa Corinthians"
            clicarComprarProduto(idDoCampoPreco, idDoCampoQuantidade, nomeDoProduto)

        })
        document.getElementById(`comprarCamisaSaopaulo`).addEventListener('click', () => {

            let temOprecoDoCamisaSaopaulo = document.getElementById(`precoCamisaSaopaulo`);
            let valorPrecoCamisaSaopaulo = temOprecoDoCamisaSaopaulo.value

            let quantidadeCamisaSaopaulo = document.getElementById(`quantidadeCamisaSaopaulo`).value

            if (quantidadeCamisaSaopaulo !== "") {
                let valorTotalCamisaSaopaulo = valorPrecoCamisaSaopaulo * quantidadeCamisaSaopaulo

                alert("Sua quantidade de camisas do São Paulo é $: " + valorTotalCamisaSaopaulo)

            } else {
                alert(`Selecione uma quantidade para efetuar a compra`)
            }
            let idDoCampoPreco = "precoCamisaSaopaulo"
            let idDoCampoQuantidade = "quantidadeCamisaSaopaulo"
            let nomeDoProduto = "Camisa São Paulo"
            clicarComprarProduto(idDoCampoPreco, idDoCampoQuantidade, nomeDoProduto)

        })
        document.getElementById(`comprarCamisaSantos`).addEventListener('click', () => {

            let temOprecoDoCamisaSantos = document.getElementById(`precoCamisaSantos`);
            let valorPrecoCamisaSantos = temOprecoDoCamisaSantos.value

            let quantidadeCamisaSantos = document.getElementById(`quantidadeCamisaSantos`).value

            if (quantidadeCamisaSantos !== "") {
                let valorTotalCamisaSantos = valorPrecoCamisaSantos * quantidadeCamisaSantos

                alert("Sua quantidade de camisa do Santos é $: " + valorTotalCamisaSantos)

            } else {
                alert(`Selecione uma quantidade para efetuar a compra`)
            }

            let idDoCampoPreco = "precoCamisaSantos"
            let idDoCampoQuantidade = "quantidadeCamisaSantos"
            let nomeDoProduto = "Camisa São Paulo"
            clicarComprarProduto(idDoCampoPreco, idDoCampoQuantidade, nomeDoProduto)


        })
        document.getElementById(`comprarCamisaPalmeiras`).addEventListener('click', () => {

            let temOprecoDoCamisaPalmeiras = document.getElementById(`precoCamisaPalmeiras`);
            let valorPrecoCamisaPalmeiras = temOprecoDoCamisaPalmeiras.value

            let quantidadeCamisaPalmeiras = document.getElementById(`quantidadeCamisaPalmeiras`).value

            if (quantidadeCamisaPalmeiras !== "") {
                let valorTotalCamisaPalmeiras = valorPrecoCamisaPalmeiras * quantidadeCamisaPalmeiras

                alert("Sua quantidade de camisa do Palmeiras é $: " + valorTotalCamisaPalmeiras)

            } else {
                alert(`Selecione uma quantidade para efetuar a compra`)
            }

            let idDoCampoPreco = "precoCamisaPalmeiras"
            let idDoCampoQuantidade = "quantidadeCamisaPalmeiras"
            let nomeDoProduto = "Camisa Palmeiras"
            clicarComprarProduto(idDoCampoPreco, idDoCampoQuantidade, nomeDoProduto)


        })
        document.getElementById(`comprarCamisaBrasil`).addEventListener('click', () => {

            let temOprecoDoCamisaBrasil = document.getElementById(`precoCamisaBrasil`);
            let valorPrecoCamisaBrasil = temOprecoDoCamisaBrasil.value

            let quantidadeCamisaBrasil = document.getElementById(`quantidadeCamisaBrasil`).value

            if (quantidadeCamisaBrasil !== "") {
                let valorTotalCamisaBrasil = valorPrecoCamisaBrasil * quantidadeCamisaBrasil

                alert("Sua quantidade de camisas do Brasil é $: " + valorTotalCamisaBrasil)

            } else {
                alert(`Selecione uma quantidade para efetuar a compra`)
            }

            let idDoCampoPreco = "precoCamisaBrasil"
            let idDoCampoQuantidade = "quantidadeCamisaBrasil"
            let nomeDoProduto = "Camisa do Brasil"
            clicarComprarProduto(idDoCampoPreco, idDoCampoQuantidade, nomeDoProduto)


        })
        document.getElementById(`comprarCamisaNike`).addEventListener('click', () => {

            let temOprecoDoCamisaNike = document.getElementById(`precoCamisaNike`);
            let valorPrecoCamisaNike = temOprecoDoCamisaNike.value

            let quantidadeCamisaNike = document.getElementById(`quantidadeCamisaNike`).value

            if (quantidadeCamisaNike !== "") {
                let valorTotalCamisaNike = valorPrecoCamisaNike * quantidadeCamisaNike

                alert("Sua quantidade de camisa da Nike é $: " + valorTotalCamisaNike)

            } else {
                alert(`Selecione uma quantidade para efetuar a compra`)
            }

            let idDoCampoPreco = "precoCamisaNike"
            let idDoCampoQuantidade = "quantidadeCamisaNike"
            let nomeDoProduto = "Camisa Nike"
            clicarComprarProduto(idDoCampoPreco, idDoCampoQuantidade, nomeDoProduto)


        })
        document.getElementById(`comprarCamisaAdidas`).addEventListener('click', () => {

            let temOprecoDoCamisaAdidas = document.getElementById(`precoCamisaAdidas`);
            let valorPrecoCamisaAdidas = temOprecoDoCamisaAdidas.value

            let quantidadeCamisaAdidas = document.getElementById(`quantidadeCamisaAdidas`).value

            if (quantidadeCamisaAdidas !== "") {
                let valorTotalCamisaAdidas = valorPrecoCamisaAdidas * quantidadeCamisaAdidas

                alert("Sua quantidade de Camisa da Adidas é $: " + valorTotalCamisaAdidas)

            } else {
                alert(`Selecione uma quantidade para efetuar a compra`)
            }

            let idDoCampoPreco = "precoCamisaAdidas"
            let idDoCampoQuantidade = "quantidadeCamisaAdidas"
            let nomeDoProduto = "Camisa Adidas"
            clicarComprarProduto(idDoCampoPreco, idDoCampoQuantidade, nomeDoProduto)


        })
        document.getElementById(`comprarCamisaPsg`).addEventListener('click', () => {

            let temOprecoDoCamisaPsg = document.getElementById(`precoCamisaPsg`);
            let valorPrecoCamisaPsg = temOprecoDoCamisaPsg.value

            let quantidadeCamisaPsg = document.getElementById(`quantidadeCamisaPsg`).value

            if (quantidadeCamisaPsg !== "") {
                let valorTotalCamisaPsg = valorPrecoCamisaPsg * quantidadeCamisaPsg

                alert("Sua quantidade de Camisa do Psg é $: " + valorTotalCamisaPsg)

            } else {
                alert(`Selecione uma quantidade para efetuar a compra`)
            }

            let idDoCampoPreco = "precoCamisaPsg"
            let idDoCampoQuantidade = "quantidadeCamisaPsg"
            let nomeDoProduto = "Camisa Psg"
            clicarComprarProduto(idDoCampoPreco, idDoCampoQuantidade, nomeDoProduto)


        })
        document.getElementById(`comprarCamisaJuventus`).addEventListener('click', () => {

            let temOprecoDoCamisaJuventus = document.getElementById(`precoCamisaJuventus`);
            let valorPrecoCamisaJuventus = temOprecoDoCamisaJuventus.value

            let quantidadeCamisaJuventus = document.getElementById(`quantidadeCamisaJuventus`).value

            if (quantidadeCamisaJuventus !== "") {
                let valorTotalCamisaJuventus = valorPrecoCamisaJuventus * quantidadeCamisaJuventus

                alert("Sua quantidade de Camisa da Juventus é $: " + valorTotalCamisaJuventus)

            } else {
                alert(`Selecione uma quantidade para efetuar a compra`)
            }

            let idDoCampoPreco = "precoCamisaJuventus"
            let idDoCampoQuantidade = "quantidadeCamisaJuventus"
            let nomeDoProduto = "Camisa Juventus"
            clicarComprarProduto(idDoCampoPreco, idDoCampoQuantidade, nomeDoProduto)


        })
    }
    Camisa();

    function Chuteira() {
        document.getElementById(`comprarChuteiraNike`).addEventListener('click', () => {

            let temOprecoDoChuteiraNike = document.getElementById(`precoChuteiraNike`);
            let valorPrecoChuteiraNike = temOprecoDoChuteiraNike.value

            let quantidadeChuteiraNike = document.getElementById(`quantidadeChuteiraNike`).value

            if (quantidadeChuteiraNike !== "") {
                let valorTotalChuteiraNike = valorPrecoChuteiraNike * quantidadeChuteiraNike

                alert("Sua quantidade de chuteira Nike é $: " + valorTotalChuteiraNike)

            } else {
                alert(`Selecione uma quantidade para efetuar a compra`)
            }
            let idDoCampoPreco = "precoChuteiraNike"
            let idDoCampoQuantidade = "quantidadeChuteiraNike"
            let nomeDoProduto = "Chuteira Nike"
            clicarComprarProduto(idDoCampoPreco, idDoCampoQuantidade, nomeDoProduto)

        })
          document.getElementById(`comprarChuteiraAdidas`).addEventListener('click', () => {

            let temOprecoDoChuteiraAdidas = document.getElementById(`precoChuteiraAdidas`);
            let valorPrecoChuteiraAdidas = temOprecoDoChuteiraAdidas.value

            let quantidadeChuteiraAdidas = document.getElementById(`quantidadeChuteiraAdidas`).value

            if (quantidadeChuteiraAdidas !== "") {
                let valorTotalChuteiraAdidas = valorPrecoChuteiraAdidas * quantidadeChuteiraAdidas

                alert("Sua quantidade de chuteira Adidas é $: " + valorTotalChuteiraAdidas)

            } else {
                alert(`Selecione uma quantidade para efetuar a compra`)
            }
            let idDoCampoPreco = "precoChuteiraAdidas"
            let idDoCampoQuantidade = "quantidadeChuteiraAdidas"
            let nomeDoProduto = "Chuteira Adidas"
            clicarComprarProduto(idDoCampoPreco, idDoCampoQuantidade, nomeDoProduto)

        })
        document.getElementById(`comprarChuteiraTooper`).addEventListener('click', () => {

            let temOprecoDoChuteiraTooper = document.getElementById(`precoChuteiraTooper`);
            let valorPrecoChuteiraTooper = temOprecoDoChuteiraTooper.value

            let quantidadeChuteiraTooper = document.getElementById(`quantidadeChuteiraTooper`).value

            if (quantidadeChuteiraTooper !== "") {
                let valorTotalChuteiraTooper = valorPrecoChuteiraTooper * quantidadeChuteiraTooper

                alert("Sua quantidade de chuteira Tooper é $: " + valorTotalChuteiraTooper)

            } else {
                alert(`Selecione uma quantidade para efetuar a compra`)
            }
            let idDoCampoPreco = "precoChuteiraTooper"
            let idDoCampoQuantidade = "quantidadeChuteiraTooper"
            let nomeDoProduto = "Chuteira Tooper"
            clicarComprarProduto(idDoCampoPreco, idDoCampoQuantidade, nomeDoProduto)

        })


    }
    Chuteira();

    function Bola() {
        document.getElementById(`comprarBolaNike`).addEventListener('click', () => {

            let temOprecoDoBolaNike = document.getElementById(`precoBolaNike`);
            let valorPrecoBolaNike = temOprecoDoBolaNike.value

            let quantidadeBolaNike = document.getElementById(`quantidadeBolaNike`).value

            if (quantidadeBolaNike !== "") {
                let valorTotalBolaNike = valorPrecoBolaNike * quantidadeBolaNike

                alert("Sua quantidade de bola Nke é $: " + valorTotalBolaNike)

            } else {
                alert(`Selecione uma quantidade para efetuar a compra`)
            }
            let idDoCampoPreco = "precoBolaNike"
            let idDoCampoQuantidade = "quantidadeBolaNike"
            let nomeDoProduto = "Bola Nike"
            clicarComprarProduto(idDoCampoPreco, idDoCampoQuantidade, nomeDoProduto)

        })
        document.getElementById(`comprarBolaAdidas`).addEventListener('click', () => {

            let temOprecoDoBolaAdidas = document.getElementById(`precoBolaAdidas`);
            let valorPrecoBolaAdidas = temOprecoDoBolaAdidas.value

            let quantidadeBolaAdidas = document.getElementById(`quantidadeBolaAdidas`).value

            if (quantidadeBolaAdidas !== "") {
                let valorTotalBolaAdidas = valorPrecoBolaAdidas * quantidadeBolaAdidas

                alert("Sua quantidade de bola Adidas é $: " + valorTotalBolaAdidas)

            } else {
                alert(`Selecione uma quantidade para efetuar a compra`)
            }
            let idDoCampoPreco = "precoBolaAdidas"
            let idDoCampoQuantidade = "quantidadeBolaAdidas"
            let nomeDoProduto = "Bola Adidas"
            clicarComprarProduto(idDoCampoPreco, idDoCampoQuantidade, nomeDoProduto)

        })
        document.getElementById(`comprarBolaTooper`).addEventListener('click', () => {

            let temOprecoDoBolaTooper = document.getElementById(`precoBolaTooper`);
            let valorPrecoBolaTooper = temOprecoDoBolaTooper.value

            let quantidadeBolaTooper = document.getElementById(`quantidadeBolaTooper`).value

            if (quantidadeBolaTooper !== "") {
                let valorTotalBolaTooper = valorPrecoBolaTooper * quantidadeBolaTooper

                alert("Sua quantidade de bola Tooper é $: " + valorTotalBolaTooper)

            } else {
                alert(`Selecione uma quantidade para efetuar a compra`)
            }
            let idDoCampoPreco = "precoBolaTooper"
            let idDoCampoQuantidade = "quantidadeBolaTooper"
            let nomeDoProduto = "Bola Tooper"
            clicarComprarProduto(idDoCampoPreco, idDoCampoQuantidade, nomeDoProduto)

        })
      
        

    }
    Bola();
        
    



}




