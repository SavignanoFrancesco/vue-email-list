
var app = new Vue({
    el: '#root',
    data: {
        email: [],
        email_quantity: 10,
    },

    mounted() {
        const self = this;
        for (var i = 0; i < self.email_quantity; i++) {
            axios
                .get('https://flynn.boolean.careers/exercises/api/random/mail')
                .then(function(risposta) {

                    // console.log(risposta);
                    // self.email.push(risposta.data.response);

                    if (!self.email.includes(risposta.data.response)) {
                        self.email.push(risposta.data.response);
                    }else{
                        i--;
                    }

                });
        }
    }
});
