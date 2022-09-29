<template>
  <footer>
    <a class="linksUteis" href="https://google.com" target="_blank">
      <img alt="documentacao Vue" title="documentacao Vue" src="@/assets/logo.png"/>
    </a>
    <a class="linksUteis" @click="consoleData">
      <img alt="curso YouTube" title="curso YouTube" src="@/assets/logo.png"/>
    </a>
    <a class="linksUteis" href="https://google.com" target="_blank">
      <img alt="documentacao desafio" title="documentacao desafio" src="@/assets/logo.png"/>
    </a>
  </footer>
</template>

<script>
import axios from 'axios'

export default {
  name: 'FooterTreinamento',
  data() {
    return {
      data: null
    }
  },
  methods: {
    consoleData() {
      axios.get('https://localhost:44329/FuncionariosControllers').then(response => {
        console.log(response.data)
      })
    }
  },
  // mounted() {
  //   axios.get('FuncionariosControllers').then(response => {
  //     console.log(response.data)
  //   })
  // }
}
</script>

<style scoped>
footer{
  width: 100%;
  height: 60px;
  background-color: var(--color-background-nav);
  display: flex;
  justify-content: center;
  align-items: center;
}

.linksUteis{
  border: 2px solid var(--color-text-light);
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  margin: 0 10px;
}

.linksUteis img{
  width: 20px;
}
</style>