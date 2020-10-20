import Vue from 'vue';
import VueGtag from "vue-gtag";
import Main from './components/main.vue';

Vue.component('main-app', Main);

Vue.use(VueGtag, {
    config: { id: "UA-1234567-1" },
    disableScriptLoad: true // doesn't install Google Analytics script
});

const app = new Vue({
    template: '<main-app />', 
})

app.$mount('#package-flow');