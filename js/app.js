

const LIST = [
    {
        id: 1,
        nome: 'Mestre Yoda',
        avatar: 'images/yoda.png'
    },
    {
        id: 2,
        nome: 'Luke Skywalker',
        avatar: 'images/luke.png'
    },
    {
        id: 3,
        nome: 'Princesa Leia',
        avatar: 'images/leia.png'
    },
    {
        id: 4,
        nome: 'Han Solo',
        avatar: 'images/hansolo.png'
    },
    {
        id: 5,
        nome: 'Darth Vader',
        avatar: 'images/vader.png'
    },
    {
        id: 6,
        nome: 'Chewbacca',
        avatar: 'images/chewbacca.png'
    },
    {
        id: 7,
        nome: 'R2D2',
        avatar: 'images/r2d2.png'
    },
    {
        id: 8,
        nome: 'C3pO',
        avatar: 'images/c3po.png'
    }
]

// regra do vue o nome dessa constante estar em maiusculo
const App = new Vue({
    el: '#app',
    data: {
        title: 'Star Wars Lego',
        userName: 'Juliana',
        characters: LIST,
        searchName: ''
    },
    methods: {
        like(userName) {
            alert(`O personagem ${userName} recebeu um like!`)
        },

        search () {

            if (this.searchName === '') {
                return alert('O campo de busca é obrigatório.')
            }

            const list = this.characters = LIST
            // obs: no vuejs a função 'function' não é 
            // entendida o correto é usá-la com o ponteiro => como demonstrado abaixo
            const result = list.filter(item => {
                return item.nome === this.searchName
            })

            if (result.length <= 0) {
                alert('Nenhum registro encontrado.')
            } else {
                this.characters = result
            }
        }
    }
})