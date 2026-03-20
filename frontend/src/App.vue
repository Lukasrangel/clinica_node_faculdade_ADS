<script setup>
import { ref } from 'vue'
import Pacientes from './views/Pacientes.vue'
import Profissionais from './views/Profissionais.vue'
import Consultas from './views/Consultas.vue'

const tela = ref('pacientes')
</script>

<template>
  <h1>Painel Admin</h1>

  <nav>
    <button @click="tela = 'pacientes'">Pacientes</button>
    <button @click="tela = 'profissionais'">Profissionais</button>
    <button @click="tela = 'consultas'">Consultas</button>
  </nav>

  <Pacientes v-if="tela === 'pacientes'" />
  <Profissionais v-if="tela === 'profissionais'" />
  <Consultas v-if="tela === 'consultas'" />
</template>

<style>
button {
  margin: 5px;
}
</style>