const PacienteModel = require("../models/PacienteModel");

class PacienteController {

  criar(req, res) {
    const paciente = PacienteModel.criar(req.body);

    return res.status(201).json({
      sucesso: true,
      dados: paciente
    });
  }

  listar(req, res) {
    return res.status(200).json({
      sucesso: true,
      dados: PacienteModel.listar()
    });
  }

}

module.exports = new PacienteController();