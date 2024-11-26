//cotacao da moeda do dia dia
const USD = 5.80
const EUR = 6.06
const GBP = 7.26

//recuperar o submit form
const form = document.querySelector("form")
//recuperar o valor digitado
const amount = document.getElementById("amount")
//recuperar a moeda selecionada
const currency = document.getElementById("currency")
//recuperando o footer
const footer = document.querySelector("main footer")
//selecionando a descricao
const description = document.getElementById("description")
//selecionando h1 do resultado
const result = document.getElementById("result")

//capturar o valor conforme digita
amount.addEventListener('input', (event) => {
    //remover letras e deixa apenas numeros
    const hasCharacteresRegex = /\D+/g
    amount.value = amount.value.replace(hasCharacteresRegex, "")
})

//pegando a moeda que o usuario ira selecionar!, captando o evento de submit(Enviar) do formulario
form.onsubmit = (event) => {
    //evita o submit padrao de reniciar a tela
    event.preventDefault()

    switch (currency.value) {
        case "USD":
            convertCurrency(amount.value, USD, "US$")
            break
        case "EUR":
            convertCurrency(amount.value, EUR, "€")
            break
        case "GBP":
            convertCurrency(amount.value, GBP, "£")
            break
    }
}
//funcao para converter a moeda!
function convertCurrency(amount, price, symbol) {
    try {
        //Exibindo a cotacao da moeda selecionada
        description.textContent = `${symbol} 1  = ${formatCurrencyBRL(price)}`

        //calcula o valor total
        // let total = String(amount * price).replace(".", ",") outra forma de fazer a formatacao
        let total = amount * price 

        if(isNaN(total)){
            alert("Digir o valor corretamente!")
        }

        //formatar o valor total para pode exibir
        total = formatCurrencyBRL(total).replace("R$", "")
        //retorna o valor formatado
        result.textContent = `${total} Reais`

        //classe do css que adiciona block,exibe o footer!
        footer.classList.add("show-result")

    } catch (error) {
        console.log(error)
        //caso der error ele remove a classe que exibe ele!
        footer.classList.remove("show-result")
        alert("Nao foi possivel converter")
    }
}
//Formatar a moeda em Real Brasilheiro
function formatCurrencyBRL(value) {
    //transoformamos primeiro para numero para poder utilizar toLocaleString
    return Number(value).toLocaleString("pt-BR", {
        style: "currency",
        currency: "BRL"
    })
}

