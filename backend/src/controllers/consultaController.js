const ConsultaModel = require("../models/ConsultaModel");

class ConsultaController {

  criar(req, res) {
    const { paciente, profissional, data, hora } = req.body;

    const conflito = ConsultaModel.buscarPorHorario(profissional, data, hora);

    if (conflito) {
      return res.status(400).json({ erro: "Horário indisponível" });
    }

    const consulta = ConsultaModel.criar({
      paciente,
      profissional,
      data,
      hora
    });

    
    return res.status(200).json({
        sucesso: true,
        dados: consulta
    })
    
  }

  listar(req, res) {
    return res.json(ConsultaModel.listar());
  }
}

module.exports = new ConsultaController();