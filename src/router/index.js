import { createRouter, createWebHistory } from "vue-router";
import HomeView from '../views/HomeView.vue'
import CargosFullTech from '../views/CargosFullTech.vue'
import FolhaPagamento from '../views/FolhaPagamento.vue'
import FuncionariosFullTech from '../views/FuncionariosFullTech.vue'
import RegistroHoras from '../views/RegistroHoras.vue'

const router = createRouter({
  history: createWebHistory('https://localhost:44329/'),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/cargos',
      name: 'Cargos',
      component: CargosFullTech
    },
    {
      path: '/folhaPagamento',
      name: 'FolhaPagamento',
      component: FolhaPagamento
    },
    {
      path: '/funcionarios',
      name: 'Funcionarios',
      component: FuncionariosFullTech
    },
    {
      path: '/registroHoras',
      name: 'RegistroHoras',
      component: RegistroHoras
    },
  ]
})

export default router