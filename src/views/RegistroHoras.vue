<template>
  <main>
    <div class="container">
      <h1>Registro de Horas</h1>

      <div class="tabela">
        <table>
          <thead>
            <td v-for="header in headers" :key="header">{{ header }}</td>
          </thead>
          <tbody>
            <tr v-for="item in items" :key="item.id">
          <td>{{ item.nome }}</td>
          <td>{{ item.docFederal }}</td>
          <td>{{ item.cargo }}</td>
          <td>{{ item.horas }}</td>
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
    name: 'RegistroHoras',
    data() {
      return {
        headers: ["Nome", "Documento Federal", "Cargo", "Horas"],
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