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

    