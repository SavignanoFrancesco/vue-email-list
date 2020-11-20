
var app = new Vue({
    el: '#root',
    data: {
        email: false,
    },

    mounted() {
        const self = this;
        axios
            .get('https://flynn.boolean.careers/exercises/api/random/mail')
            .then(function(risposta) {
                console.log(risposta);
                self.email = risposta.data.response;
            });

    }
});
