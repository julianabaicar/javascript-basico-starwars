console.log('Olá, Javascript!')


var userName = 'Mana Ju'

// obter um elemento htlm com o java script por meio do ID
document.getElementById('user-name').innerHTML = userName


// EXEMPLOS:
    // variaveis em js -> possui uma tipagem dinâmica
    // var nome  = 'Mestre Yoda'
    // var idade = 100
    // var jedi  = true

    // typeof mostra o tipo, se chamar só o nome ele pega o conteúdo
    // console.log(typeof nome)
    // console.log(typeof idade)
    // console.log(typeof jedi)


// Operadores matemáticos //
            // + para somar
            //  - para subtrair
            // * para multiplicar
            //  / para dividir

        // var n1 = 5
        // var n2 = 2.5

        // console.log(typeof n1)
        // console.log(typeof n2)

        // var total = n1 / n2
        // console.log(total)


// Operadores de comparação //
            // === leva em consideração o tipo de dados
            //  == não leva em consideração o tipo de dados
            //  != valida se são diferentes e não leva em consideração a tipagem de dados
            //  !== leva em consideração a tipagem de dados


        // var v1 = 5
        // var v2 = '5'


        // var resultado = v1 === v2
        // console.log(resultado)


// Funções //
        // Após criada essa função precisa ser invocada/chamada e precisa passar os parâmetros com dados

        // function soma(n1, n2){
        //     console.log(n1 + n2)
        // }

        // soma(5, 100)


        // function boasVindas(nome) {
        //     alert(nome +', sejam bem-vindo (a)')
        // }

        // boasVindas('Fernando')

        // function soma(n1, n2) {
        //     return n1 + n2
        // }
            
        // var resultado = soma(5, 5)
        // console.log(resultado)
        //  return não exibe o valor no console


// Controle de Fluxos (if e else -> regras de negócio) //
// Desenvolvimento Orientado a Comportamento - BDD //

// Papel do QA: Definir o comportamento e prever as condições //
// Papel do PO: Definir regras de negócio e valores das operações //

    // ATOR             // Sendo um cliente correntista do banco
    // AÇÃO             // Posso sacar dinheiro em caixas eletrônicos
    // VALOR AGREGADO   // Para poder comprar em lugares que não aceitam o cartão de débito ou crédito

    // Cenário 1: Saque com sucesso
        // Dado que meu saldo é de 1000 reais
        // Quando faço um saque de 500 reais
        // Então o valor do saque deve ser deduzido do meu saldo

    // Cenário 2: Saque com valor superior ao saldo
        // Dado que meu saldo é de 1000 reais
        // Quando faço um saque de 1001 reais
        // Então não deve deduzir do meu saldo
        // E deve mostrar uma mensagem de alerta informando que o valor é superior ao saldo

    // Cenário 3: Saque com valor máximo
        // Dado que meu saldo é de 1000 reais
        // E o valor máximo por operação é de 700 reais
        // Quando faço um saque no valor de 701 reais
        // Então não deve deduzir do meu saldo
        // E deve mostrar uma mensagem de alerta informando que o valor é superior ao máximo permitido por operação

            // var saldo = 1000

            // function saque(valor){

            //     if (valor > saldo){
            //         console.log('Valor do saque superior ao saldo')
            //     } else if (valor > 700) {
            //         console.log('Valor do saque é superior ao maximo permitido por operação')
            //     } else {
            //         saldo = saldo - valor
            //     }

            // }

            // saque(701)
            // console.log(saldo)


// Arrays //
    //Em todo Array a primeira posição é determinada como posição Zero
        // var gaveteiro = ['Meias', 'Gravatas', 'Documentos', 'Salgadinhos']

        // console.log(gaveteiro[3])

        // var personagens = ['Mestre Yoda', 'Luke Skywalker', 'Princesa Leia', 'Darth Vader']

    //adiciona mais um item no Array, sempre na ultima posição
        // personagens.push('C3pO')

        // personagens.push('R2D2')

        // console.log(personagens)


    //remove o ultimo item da lista, sempre na ultima posição
        // personagens.pop()

    // Filtra tudo com excessão do item 'Darth Vader'
        // personagens = personagens.filter(function(p){
        //     return p !== 'Darth Vader'
        // })

    // Filtra somente o item 'Mestre Yoda'
        // personagens = personagens.filter(function(p){
        //     return p === 'Mestre Yoda'
        // })

        // console.log(personagens)

// Controles de Repetição (Loops)
    // OBSERVAÇÃO: 
        // Para trabalhar com objetos, 
        // é só chamar o objeto e concatenar
        //  com a função que eu desejo usar

var personagens = ['Mestre Yoda', 'Luke Skywalker', 'Princesa Leia', 'Darth Vader']

// exemplo de for, chamo o objeto concateno com a função ForEach
    // personagens.forEach(function(p){
        // console.log(p)
    // })

// outra forma de passar o array pelo loopin com for
    // for (var i in personagens)
    // {
    //     console.log(personagens [i])
    // }

// forma numero 3 de passar o array por um loopin for, que é o mais comum
// porém, é pouco usado por QAs
    // for (var i = 0; i<= 10; i ++) {
    //     console.log(i)
    //     // codigo será executado até a condição retornar false
    // }



// OBJETOS -> são flexíveis e podem ser chamados de Super Variáveis//

    // você pode declarar assim:
            // var yoda = {}

            // yoda.nome  = 'Mestre Yoda'
            // yoda.idade = 100
            // yoda.jedi  = true

    // ou pode declarar assim, com os itens dentro do objeto:
            // var yoda = {
            //     nome: 'Mestre Yoda',
            //     idade: 100,
            //     jedi: true,
            //     mostraIdade: function() {
            //         console.log(`A idade do ${this.nome} é ${this.idade}`)
            //         // para chamar as variáveis dentro do console.log é necessário utilizar apostrofe
            //     }
            // }

            // console.log(yoda)
            // yoda.mostraIdade()
            // Correto em JavaScript é trabalhar com o nome assim "mostraIdade" sem utilizar underline



// CONSTANTES //
// diferente do Var ela não pode ser alterada ao longo do teste

    // const nome = 'Darth Vader'
    // console.log(nome)


    