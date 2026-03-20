class ProfissionalModel {
  constructor() {
    this.profissionais = [];
    this.id = 1;
  }

  listar() {
    return this.profissionais;
  }

  buscarPorId(id) {
    return this.profissionais.find(p => p.id === id);
  }

  buscarPorCRM(crm) {
    return this.profissionais.find(p => p.crm === crm);
  }

  criar(dados) {
    const existente = this.buscarPorCRM(dados.crm);

    if (existente) {
      throw new Error("CRM já cadastrado");
    }

    const novoProfissional = {
      id: this.id++,
      nome: dados.nome,
      especialidade: dados.especialidade,
      crm: dados.crm,
      telefone: dados.telefone,
      email: dados.email
    };

    this.profissionais.push(novoProfissional);
    return novoProfissional;
  }
}

module.exports = new ProfissionalModel();