class PacienteModel {
  constructor() {
    this.pacientes = [];
    this.id = 1;
  }

  listar() {
    return this.pacientes;
  }

  buscarPorId(id) {
    return this.pacientes.find(p => p.id === id);
  }

  criar(dados) {
    const novoPaciente = {
      id: this.id++,
      nome: dados.nome,
      email: dados.email,
      telefone: dados.telefone,
      endereco: {
        cep: dados.cep,
        rua: dados.rua,
        numero: dados.numero,
        bairro: dados.bairro,
        cidade: dados.cidade,
        estado: dados.estado
      }
    };

    this.pacientes.push(novoPaciente);
    return novoPaciente;
  }
}

module.exports = new PacienteModel();