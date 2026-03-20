class ConsultaModel {
  constructor() {
    this.consultas = [];
    this.id = 1;
  }

  listar() {
    return this.consultas;
  }

  criar(dados) {
    const novaConsulta = {
      id: this.id++,
      ...dados
    };

    this.consultas.push(novaConsulta);
    return novaConsulta;
  }

  buscarPorHorario(profissional, data, hora) {
    return this.consultas.find(c =>
      c.profissional === profissional &&
      c.data === data &&
      c.hora === hora
    );
  }
}

module.exports = new ConsultaModel();