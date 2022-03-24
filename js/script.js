

/*
Attraverso l'apposita API di Boolean https://flynn.boolean.careers/exercises/api/random/mail
Generare 10 indirizzi email e stamparli in pagina all'interno di una lista.
Bonus
Far comparire gli indirizzi email solamente quando sono stati tutti generati.
*/


const app = new Vue({

    el: '#app',
    data: {
        emails: [],
    },

    methods: {
        createMail() {
            /* const self = this; */
            const tempArray = [];
            for (let i = 0; i < 10; i++) {
                axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
                    .then(function (mail) {
                    let mailGenerated = mail.data.response;
                    tempArray.push(mailGenerated);
                    console.log(mailGenerated);
                })
            }
            console.log(tempArray);
            setTimeout(() => {
                this.emails = tempArray;
            }, 2000)
            /* this.emails = tempArray; */
        }
    },
    mounted() {
        this.createMail()
    }
    /* created() {
        setTimeout(() => {
            this.createMail()
        }, 2000)
    }, */
})

