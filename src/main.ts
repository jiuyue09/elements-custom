import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import ElContainer from './components'
import ElHeader from './components/header.vue'
import ElFooter from './components/footer.vue'
import ElMain from './components/main.vue'
import ElAside from './components/aside.vue'
// import El from './components/container.vue'

createApp(App).use(ElContainer).mount('#app')
