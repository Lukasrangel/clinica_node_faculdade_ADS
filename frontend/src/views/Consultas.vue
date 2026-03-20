<script setup>
import { ref } from 'vue'

const pacienteId = ref('')
const profissionalId = ref('')
const data = ref('')
const hora = ref('')
const lista = ref([])

async function carregar() {
  const res = await fetch('http://localhost:3000/consultas')
  const dataRes = await res.json()
  lista.value = dataRes.dados
}

async function agendar() {
  const res = await fetch('http://localhost:3000/consultas', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      pacienteId: Number(pacienteId.value),
      profissionalId: Number(profissionalId.value),
      data: data.value,
      hora: hora.value
    })
  })

  const resultado = await res.json()

  if (!resultado.sucesso) {
    alert(resultado.erro)
  }

  carregar()
}

carregar()
</script>

<template>
  <h2>Consultas</h2>

  <input v-model="pacienteId" placeholder="Paciente ID" />
  <input v-model="profissionalId" placeholder="Profissional ID" />
  <input v-model="data" type="date" />
  <input v-model="hora" type="time" />

  <button @click="agendar">Agendar</button>

  <ul>
    <li v-for="c in lista" :key="c.id">
      Paciente {{ c.pacienteId }} - Profissional {{ c.profissionalId }} - {{ c.data }} {{ c.hora }}
    </li>
  </ul>
</template>