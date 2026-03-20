<script setup>
import { ref } from 'vue'

const nome = ref('')
const crm = ref("")
const telefone = ref('')
const email = ref('')
const especialidade = ref('')


const lista = ref([])

const especialidades = ['Clínico','Cirurgião', 'Pediatra', 'Ortopedista', 'Dermatologista', 'Neurologista'] 
const especialidadeSelecionada = ref('')


async function carregar() {
  const res = await fetch('http://localhost:3000/profissionais')
  const data = await res.json()
  lista.value = data.dados
}

async function criar() {
  await fetch('http://localhost:3000/profissionais', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      nome: nome.value,
      especialidade: "Clínico",
      crm: crm.value,
      telefone: telefone.value,
      email: email.value
    })
  })

  nome.value = ''
  especialidade.value = ""
  crm.value = ""
  telefone.value = ""
  email.value = ""
  carregar()
}

carregar()
</script>

<template>
  <h2>Profissionais</h2>

  <input v-model="nome" placeholder="Nome" />
  <select v-model="especialidadeSelecionada">
  <option disabled value="">Selecione uma especialidade</option>

  <option 
    v-for="esp in especialidades" 
    :key="esp" 
    :value="esp"
  >
    {{ esp }}
  </option>
</select>

  <input v-model="crm" placeholder="CRM" />
  <input v-model="telefone" placeholder="Telefone" />
  <input v-model="email" placeholder="Email" />
  <button @click="criar">Cadastrar</button>

  <ul>
    <li v-for="p in lista" :key="p.id">
      {{ p.nome }}
    </li>
  </ul>
</template>