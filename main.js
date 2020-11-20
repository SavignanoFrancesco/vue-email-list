
var app = new Vue({
    el: '#root',
    data: {
        email: [],
    },

    mounted() {
        const self = this;
        for (var i = 0; i < 10; i++) {
            axios
                .get('https://flynn.boolean.careers/exercises/api/random/mail')
                .then(function(risposta) {

                    console.log(risposta);
                    // self.email = risposta.data.response;

                    self.email.push(risposta.data.response);

                });


        }

        // if (self.email.length == 10) {
        //     self.ready = true;
        //     console.log(self.ready);
        // }

    }
});
