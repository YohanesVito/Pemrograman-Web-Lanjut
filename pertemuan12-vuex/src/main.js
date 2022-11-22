import { createApp } from 'vue'
import { createStore } from 'vuex'
import App from './App.vue'
import router from './router'

const store = createStore({
    state() {
        return {
            listPenduduk: []
        }
    },
    mutations: {
        // parameter pertama harus bernama state
        add(state, nama) {
            state.listPenduduk.push(nama)
        }
    }
})

var app = createApp(App)
app.use(router)
app.use(store)
app.mount('#app')
// createApp(App).use(router).mount('#app')
