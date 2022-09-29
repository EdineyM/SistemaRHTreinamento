<template>
  <main>
    <div class="container">
      <h1>Funcionarios</h1>

      <div class="tabela">
        <table>
          <thead>
            <td v-for="header in headers" :key="header">{{ header }}</td>
          </thead>
          <tbody>
            <tr v-for="item in items" :key="item.id">
          <td>{{ item.nome }}</td>
          <td>{{ item.docFederal }}</td>
          <td>{{ item.nacionalidade }}</td>
          <td>{{ item.cargo }}</td>
          <td>{{ item.idade }}</td>
          <td>{{ item.telefone }}</td>
        </tr>
          </tbody>
        </table>
      </div>
    </div>

  </main>
</template>

<script>
import api from '@/services/api'

export default {
  name: 'FuncionariosFullTech',
  data() {
    return {
      headers: ["Nome", "Documento Federal", "Nacionalidade", "Cargo", "Idade", "Telefone"],
      items: []
    }
  },
  methods: {
    getFuncionarios() {
      let th = this
      api.get("/FuncionariosControllers").then(response => {
        th.items = response.data
      })
    }
  }
}
</script>

<style scoped>
main{
  align-items: center;
}
</style>