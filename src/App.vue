<template>
  <Header/>
  <RouterView/>
  <Footer/>
</template>

<script>
import './styles/global.css'
import Header from './components/HeaderTreinamento.vue'
import Footer from './components/FooterTreinamento.vue';
// import Home from './views/HomeView.vue';

export default {
name: 'App',
components: {
    Header,
    Footer,
    // Home
}
}
</script>
