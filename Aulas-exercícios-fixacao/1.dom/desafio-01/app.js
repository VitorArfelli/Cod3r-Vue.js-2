new Vue({
    el: '#desafio',
    data: {
        nome: 'Vitor Arfelli',
        idade: '21',
        src: 'https://miro.medium.com/max/1400/1*OrjCKmou1jT4It5so5gvOA.jpeg'
    },
    methods: {
        idadeMult3() {
            return this.idade*3
        },
        alet() {
            return Math.random()
        }
    }
})