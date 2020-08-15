

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

        console.log("Coloquei " + produtoNoCarrinho.quantidade + " " + produtoNoCarrinho.nome + "(s) no carrinho!")
        alert("Coloquei " + produtoNoCarrinho.quantidade + " " + produtoNoCarrinho.nome + "(s) no carrinho!")

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

function pegarvalordoElementobyIdClick(){
     let clickXsalada = document.getElementById(`comprarXsalada`);
     let clickXchocolate =document.getElementById(`comprarXchocolate`);
     let clickXbacon =document.getElementById(`comprarXbacon`);
     let clickXegg =document.getElementById(`comprarXegg`);
     let clickXfrango =document.getElementById(`comprarXfrango`);
     let clickXcostela =document.getElementById(`comprarXcostela`);
     let clickXdog =document.getElementById(`comprarXdog`);
     let  =document.getElementById(``);
     let  =document.getElementById(``);
     let  =document.getElementById(``);
     let  =document.getElementById(``);
     let  =document.getElementById(``);
     let  =document.getElementById(``);
     let  =document.getElementById(``);
     let  =document.getElementById(``);
     //clickXsalada,clickXchocolate,clickXbacon,clickXegg,clickXfrango,clickXcostela,clickXdog
}

function pegarvalorElementobyIDPreco(){
    let temOprecoDoXsalada = document.getElementById(`precoXsalada`);
    let temOprecoDoXchocolate = document.getElementById(`precoXchocolate`);
    let temOprecoDoXbacon = document.getElementById(`precoXbacon`);
    let temOprecoDoXegg = document.getElementById(`precoXegg`);
    let temOprecoDoXfrango = document.getElementById(`precoXfrango`);
    let temOprecoDoXcostela = document.getElementById(`precoXcostela`);
    let temOprecoDoXdog = document.getElementById(`precoXdog`);

}
 

window.onload = function () {
    //////teste de function///////////////
    /*document.getElementById(click).addEventListener('click', () => {

        let valorPrecoXaslada = temOprecoDoXsalada.value

        let quantidadeXsalda = document.getElementById(`quantidadeXalada`).value

        if (quantidadeXsalda !== "") {
            let valorTotalXasala = valorPrecoXaslada * quantidadeXsalda

            alert("Sua quantidade de X-salada é $: " + valorTotalXasala)

        } else {
            alert(`Selecione uma quantidade para efetuar a compra`)
        }
        let idDoCampoPreco = "precoXsalada"
        let idDoCampoQuantidade = "quantidadeXalada"
        let nomeDoProduto = "X-salada"
        clicarComprarProduto(idDoCampoPreco, idDoCampoQuantidade, nomeDoProduto)
        pegarvalorElementobyIDPreco(click);

    })*/
     
    document.getElementById(`comprarXsalada`).addEventListener('click', () => {

        let temOprecoDoXsalada = document.getElementById(`precoXsalada`);
        let valorPrecoXaslada = temOprecoDoXsalada.value

        let quantidadeXsalda = document.getElementById(`quantidadeXalada`).value

        if (quantidadeXsalda !== "") {
            let valorTotalXasala = valorPrecoXaslada * quantidadeXsalda

            alert("Sua quantidade de X-salada é $: " + valorTotalXasala)

        } else {
            alert(`Selecione uma quantidade para efetuar a compra`)
        }
        let idDoCampoPreco = "precoXsalada"
        let idDoCampoQuantidade = "quantidadeXalada"
        let nomeDoProduto = "X-salada"
        clicarComprarProduto(idDoCampoPreco, idDoCampoQuantidade, nomeDoProduto)

    })
    document.getElementById(`comprarXchocolate`).addEventListener('click', () => {

        let temOprecoDoXchocolate = document.getElementById(`precoXchocolate`);
        let valorPrecoXchocolate = temOprecoDoXchocolate.value

        let quantidadeXchocolate = document.getElementById(`quantidadeXchocolate`).value

        if (quantidadeXchocolate !== "") {
            let valorTotalXchocolate = valorPrecoXchocolate * quantidadeXchocolate

            alert("Sua quantidade de X-Chocolate é $: " + valorTotalXchocolate)

        } else {
            alert(`Selecione uma quantidade para efetuar a compra`)
        }
        let idDoCampoPreco = "precoXchocolate"
        let idDoCampoQuantidade = "quantidadeXchocolate"
        let nomeDoProduto = "X-Chocolate"
        clicarComprarProduto(idDoCampoPreco, idDoCampoQuantidade, nomeDoProduto)

    })
    document.getElementById(`comprarXbacon`).addEventListener('click', () => {

        let temOprecoDoXbacon = document.getElementById(`precoXbacon`);
        let valorPrecoXbacon = temOprecoDoXbacon.value

        let quantidadeXbacon = document.getElementById(`quantidadeXbacon`).value

        if (quantidadeXbacon !== "") {
            let valorTotalXbacon = valorPrecoXbacon * quantidadeXbacon

            alert("Sua quantidade de X-bacon é $: " + valorTotalXbacon)

        } else {
            alert(`Selecione uma quantidade para efetuar a compra`)
        }

        let idDoCampoPreco = "precoXbacon"
        let idDoCampoQuantidade = "quantidadeXbacon"
        let nomeDoProduto = "X-Bacon"
        clicarComprarProduto(idDoCampoPreco, idDoCampoQuantidade, nomeDoProduto)


    })
    document.getElementById(`comprarXegg`).addEventListener('click', () => {

        let temOprecoDoXegg = document.getElementById(`precoXegg`);
        let valorPrecoXegg = temOprecoDoXegg.value

        let quantidadeXegg = document.getElementById(`quantidadeXegg`).value

        if (quantidadeXegg !== "") {
            let valorTotalXegg = valorPrecoXegg * quantidadeXegg

            alert("Sua quantidade de X-Egg é $: " + valorTotalXegg)

        } else {
            alert(`Selecione uma quantidade para efetuar a compra`)
        }

        let idDoCampoPreco = "precoXegg"
        let idDoCampoQuantidade = "quantidadeXegg"
        let nomeDoProduto = "X-Egg"
        clicarComprarProduto(idDoCampoPreco, idDoCampoQuantidade, nomeDoProduto)


    })
    document.getElementById(`comprarXfrango`).addEventListener('click', () => {

        let temOprecoDoXfrango = document.getElementById(`precoXfrango`);
        let valorPrecoXfrango = temOprecoDoXfrango.value

        let quantidadeXfrango = document.getElementById(`quantidadeXfrango`).value

        if (quantidadeXfrango !== "") {
            let valorTotalXfrango = valorPrecoXfrango * quantidadeXfrango

            alert("Sua quantidade de X-Costela é $: " + valorTotalXfrango)

        } else {
            alert(`Selecione uma quantidade para efetuar a compra`)
        }

        let idDoCampoPreco = "precoXcostela"
        let idDoCampoQuantidade = "quantidadeXfrango"
        let nomeDoProduto = "X-Costela"
        clicarComprarProduto(idDoCampoPreco, idDoCampoQuantidade, nomeDoProduto)


    })
    document.getElementById(`comprarXcostela`).addEventListener('click', () => {

        let temOprecoDoXcostela = document.getElementById(`precoXcostela`);
        let valorPrecoXcostela = temOprecoDoXcostela.value

        let quantidadeXcostela = document.getElementById(`quantidadeXcostela`).value

        if (quantidadeXcostela !== "") {
            let valorTotalXcostela = valorPrecoXcostela * quantidadeXcostela

            alert("Sua quantidade de X-Costela é $: " + valorTotalXcostela)

        } else {
            alert(`Selecione uma quantidade para efetuar a compra`)
        }

        let idDoCampoPreco = "precoXcostela"
        let idDoCampoQuantidade = "quantidadeXcostela"
        let nomeDoProduto = "X-Costela"
        clicarComprarProduto(idDoCampoPreco, idDoCampoQuantidade, nomeDoProduto)


    })
    document.getElementById(`comprarXdog`).addEventListener('click', () => {

        let temOprecoDoXdog = document.getElementById(`precoXdog`);
        let valorPrecoXdog = temOprecoDoXdog.value

        let quantidadeXdog = document.getElementById(`quantidadeXdog`).value

        if (quantidadeXdog !== "") {
            let valorTotalXdog = valorPrecoXdog * quantidadeXdog

            alert("Sua quantidade de X-dog é $: " + valorTotalXdog)

        } else {
            alert(`Selecione uma quantidade para efetuar a compra`)
        }

        let idDoCampoPreco = "precoXdog"
        let idDoCampoQuantidade = "quantidadeXdog"
        let nomeDoProduto = "X-dog"
        clicarComprarProduto(idDoCampoPreco, idDoCampoQuantidade, nomeDoProduto)


    })
    document.getElementById(`comprarXbatata`).addEventListener('click', () => {

        let temOprecoDoXbatata = document.getElementById(`precoXbatata`);
        let valorPrecoXbatata = temOprecoDoXbatata.value

        let quantidadeXbatata = document.getElementById(`quantidadeXbatata`).value

        if (quantidadeXbatata !== "") {
            let valorTotalXbatata = valorPrecoXbatata * quantidadeXbatata

            alert("Sua quantidade de X-Batata é $: " + valorTotalXbatata)

        } else {
            alert(`Selecione uma quantidade para efetuar a compra`)
        }

        let idDoCampoPreco = "precoXbatata"
        let idDoCampoQuantidade = "quantidadeXbatata"
        let nomeDoProduto = "X-Batata"
        clicarComprarProduto(idDoCampoPreco, idDoCampoQuantidade, nomeDoProduto)


    })
    document.getElementById(`comprarXcoracao`).addEventListener('click', () => {

        let temOprecoDoXcoracao = document.getElementById(`precoXcoracao`);
        let valorPrecoXcoracao = temOprecoDoXcoracao.value

        let quantidadeXcoracao = document.getElementById(`quantidadeXcoracao`).value

        if (quantidadeXcoracao !== "") {
            let valorTotalXcoracao = valorPrecoXcoracao * quantidadeXcoracao

            alert("Sua quantidade de X-coracao é $: " + valorTotalXcoracao)

        } else {
            alert(`Selecione uma quantidade para efetuar a compra`)
        }

        let idDoCampoPreco = "precoXcoracao"
        let idDoCampoQuantidade = "quantidadeXcoracao"
        let nomeDoProduto = "X-Coracao"
        clicarComprarProduto(idDoCampoPreco, idDoCampoQuantidade, nomeDoProduto)


    })
    document.getElementById(`comprarXbrasileiro`).addEventListener('click', () => {

        let temOprecoDoXbrasileiro = document.getElementById(`precoXbrasileiro`);
        let valorPrecoXbrasileiro = temOprecoDoXbrasileiro.value

        let quantidadeXbrasileiro = document.getElementById(`quantidadeXbrasileiro`).value

        if (quantidadeXbrasileiro !== "") {
            let valorTotalXbrasileiro = valorPrecoXbrasileiro * quantidadeXbrasileiro

            alert("Sua quantidade de X-brasileiro é $: " + valorTotalXbrasileiro)

        } else {
            alert(`Selecione uma quantidade para efetuar a compra`)
        }

        let idDoCampoPreco = "precoXbrasileiro"
        let idDoCampoQuantidade = "quantidadeXbrasileiro"
        let nomeDoProduto = "X-brasileiro"
        clicarComprarProduto(idDoCampoPreco, idDoCampoQuantidade, nomeDoProduto)


    })


}

