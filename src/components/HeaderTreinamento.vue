<template>
  <header>
    <nav class="container">
      <a href="/">
        <img alt='FullTech Pro' id='logo' src='../assets/teste.png'/>
      </a>

      <img @click="openMenu" alt='menu' id='menu-button' src='../assets/logo.png'/>

      <div @click="closeMenu" id="menu-overlay" v-if="menuActive"></div>

      <div id="menu-items" :class="{active:menuActive}">
        <img alt="logo" id="menu-logo" src="../assets/teste.png"/>
        <ul>
          <li><a href="/cargos">Cargos</a></li>
          <li><a href="/folhaPagamento">Folha de Pagamento</a></li>
          <li><a href="/funcionarios">Funcionarios</a></li>
          <li><a href="/registroHoras">Registro de Horas</a></li>
        </ul>
      </div>
    </nav>
  </header>
</template>

<script>
export default {
  name: 'HeaderTreinamento',
  data() {
    return {
      menuActive: true
    }
  },
  methods: {
    openMenu() {
      this.menuActive = true
    },
    closeMenu() {
      this.menuActive = false
    }
  }
}
</script>

<style scoped>
header{
  background-color: var(--color-background-nav);
  width: 100%;
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
}

nav{
  display: flex;
  justify-content: space-between;
  height: 60px;
  align-items: center;
}

#logo{
  width: 230px;
}

#menu-button{
  width: 30px;
}

#menu-overlay{
  position: fixed;
  top: 0;
  left: 0;
  width: 40%;
  height: 100vh;
  background-color: #000000;
  opacity: 0.8;
}

#menu-logo{
  width: 230;
  margin-top: 30px;
  margin-bottom: 10px;
}

#menu-items{
  position: fixed;
  top: 0;
  right: 0;
  background-color: var(--color-background-nav);
  width: 60%;
  height: 100vh;
  display: none;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
}

#menu-items.active{
  display: flex;
}

ul{
  list-style: none;
  text-align: center;
}

ul li a{
  color: var(--color-text-light)
}

ul li{
  margin: 20px 0px;
}

@media (min-width: 700px){
  #menu-button,
  #menu-logo,
  #menu-overlay{
    display: none;
  }
  #menu-items{
    display: flex;
    position: static;
    height: 60px;
    width: auto;
  }
  ul{
    display: flex;
    height: 60px;
    align-items: center;
  }
  ul li {
    margin: 0;
    margin-left: 20px;
  }
}
</style>