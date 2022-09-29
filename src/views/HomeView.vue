<template>
  <main>
    <div class="text-top">Informativo sobre o Treinamento</div>
    <a href="/" target="_blank">
      <img src="../assets/logo.png" id="documentacao-desafio-3" alt="documentação">
    </a>
    <div class="text-bottom">criterios de aceite</div>
  </main>
</template>

<script>
export default {
  name: 'HomeTreinamento'
}
</script>

<style scoped>
main{
  background-color: var(--color-background-home);
  justify-content: center;
  align-items: center;
}

.text-top{
  color: var(--color-text-light);
  font-size: 22px;
  margin-bottom: 20px;
}

.text-bottom{
  color: var(--color-text-light);
  font-size: 18px;
  margin-top: 20px;
}

#documentacao-desafio-3{
  width: 100px;
}

@media (min-width: 700px){
  #documentacao-desafio-3{
    width: 150px;
  }
}
</style>