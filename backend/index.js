//imports
const express = require("express");
const cors = require("cors");





//constantes
const app = express();


const ConsultaController = require("./src/controllers/consultaController");
const pacienteController = require("./src/controllers/pacienteController");
const ProfissionalController = require("./src/controllers/profissionalController");




app.use(express.json());
app.use(cors());


//rotas
app.get("/", (req, res) => {
    res.json({message: "API rodando"})
})



app.post("/consultas", (req, res) => ConsultaController.criar(req, res));
app.get("/consultas", (req, res) => ConsultaController.listar(req, res));


app.get("/pacientes",(req, res) => pacienteController.listar(req,res));
app.post("/pacientes", (req,res) => pacienteController.criar(req, res));

app.post("/profissionais", (req, res) => ProfissionalController.criar(req, res));
app.get("/profissionais", (req, res) => ProfissionalController.listar(req, res));
app.get("/profissionais/:id", (req, res) => ProfissionalController.buscar(req, res));



//server
app.listen(3000, () => {
    console.log("Servidor rodando em http://localhost:3000")
})
