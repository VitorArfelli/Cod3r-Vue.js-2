new Vue({
	el: '#desafio',
	data: {
		trocarEfeito: false,
		classInformada: '',
		classInformada2: '',
		classInformada3: '',
		cor: '',
		cor2: '',
		counter: 0,
	},
	computed: {
		classesTrocarEfeito() {
			return {
				destaque: this.trocarEfeito,
				encolher: !this.trocarEfeito,
			}
		},
		classesTrocarEfeito2() {
			return {
				true1: this.classInformada3 === 'true',
				false1: this.classInformada3 === 'false' ?? false,
			}
		},
		estiloCor() {
			return {
				backgroundColor: this.cor,
				width: 185+'px',
				height: 185+'px',
			}
		},
		estilo() {
			return {
				backgroundColor: this.cor2,
				width: this.counter+'px',
				height: 15+'px'
			}
		}
	},
	watch: {
		counter() {
			if(this.counter >= 1000) {
				setTimeout(() => {
					this.counter = 0;
					this.cor2 = 'red';
				},2000)
			}
		}
	},
	methods: {
		iniciarEfeito() {
			this.trocarEfeito = !this.trocarEfeito
		},
		iniciarProgresso() {
			this.counter += 50
			if(this.counter <= 250 ) {
				this.cor2 = 'grey';
			} else if(this.counter <= 500) {
				this.cor2 = 'red';
			} else if (this.counter <= 750){
				this.cor2 = 'yellow'
			} else {
				this.cor2 = 'green'
			}
		}
	}
})
