Vue.component(
    'mycomment',{
        props: ['comment'],
        template: '<li>{{ comment.content }}</li>>'
    }
)

var app = new Vue({
    el: '#app',
    data: {
        message: 'hello',
        title: 'hola',
        welcome: true,
        comments: [
            {content: 'nice~'},
            {content: 'great~'},
            {content: 'awesome~'},
            {content: 'good~'}
        ]
    },
    methods: {
        logMessage () {
            console.log(this.message)
        }
    }
})