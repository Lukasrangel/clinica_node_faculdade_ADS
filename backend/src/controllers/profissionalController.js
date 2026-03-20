const ProfissionalModel = require("../models/ProfissionalModel");

class ProfissionalController {

  criar(req, res) {
    try {
      const profissional = ProfissionalModel.criar(req.body);

      return res.status(201).json({
        sucesso: true,
        dados: profissional
      });

    } catch (err) {
      return res.status(400).json({
        sucesso: false,
        erro: err.message
      });
    }
  }

  listar(req, res) {
    return res.status(200).json({
      sucesso: true,
      dados: ProfissionalModel.listar()
    });
  }

  buscar(req, res) {
    const profissional = ProfissionalModel.buscarPorId(parseInt(req.params.id));

    if (!profissional) {
      return res.status(404).json({
        sucesso: false,
        erro: "Profissional não encontrado"
      });
    }

    return res.status(200).json({
      sucesso: true,
      dados: profissional
    });
  }
}

module.exports = new ProfissionalController();