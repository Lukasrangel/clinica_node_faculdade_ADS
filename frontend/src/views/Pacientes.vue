<script setup>
import { ref } from 'vue'

const nome = ref('')
const email = ref('')
const telefone = ref('')

const lista = ref([])

async function carregar() {
  const res = await fetch('http://localhost:3000/pacientes')
  const data = await res.json()
  lista.value = data.dados
}

async function criar() {
  await fetch('http://localhost:3000/pacientes', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      nome: nome.value,
      email: email.value,
      telefone: telefone.value,
      endereco: {
        cep: "20000-000",
        rua: "Rua X",
        numero: "123",
        bairro: "Centro",
        cidade: "RJ",
        estado: "RJ"
      }
    })
  })

  nome.value = ''
  email.value = ''
  telefone.value = ''

  carregar()
}

carregar()
</script>

<template>
  <h2>Pacientes</h2>

  <input v-model="nome" placeholder="Nome" />
  <input v-model="email" placeholder="Email" />
  <input v-model="telefone" placeholder="Telefone" />
   <input v-model="cep" placeholder="CEP" />
  <button @click="criar">Cadastrar</button>

  <ul>
    <li v-for="p in lista" :key="p.id">
      {{ p.nome }}
    </li>
  </ul>
</template>