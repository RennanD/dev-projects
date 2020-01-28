const routes = require("express").Router();

const projects = [];

// Middlewares

/**
 * Conta número de requisições
 */

routes.use(({ next }) => {
  console.count("Número de requisições");

  return next();
});

/**
 * Verifica se existe um projeto com o id que está sendo repassado.
 */

function checkProject(req, res, next) {
  const { id } = req.params;

  const project = projects.find(p => p.id == id);

  if (!project) {
    return res.status(400).json({ error: "Projeto não encontrado!" });
  }

  return next();
}

/**
 * Verifica se existe um projeto com o mesmo id
 */

function checkExists(req, res, next) {
  const { id } = req.body;

  const project = projects.find(p => p.id == id);

  if (project) {
    return res
      .status(400)
      .json({ error: "Já existe um projeto com o mesmo id" });
  }

  return next();
}

/**
 * Rotas de requisições
 */

// Lista todos os projetos

routes.get("/projects", (req, res) => {
  return res.json(projects);
});

// Adiciona um novo projeto

routes.post("/projects", checkExists, (req, res) => {
  const { id, name, tasks } = req.body;

  const project = {
    id,
    name,
    tasks
  };

  projects.push(project);

  return res.json(projects);
});

/**
 * Rotas que precisam de id
 */

// Lista um projeto específico

routes.get("/projects/:id", checkProject, (req, res) => {
  const { id } = req.params;

  const project = projects.find(p => p.id == id);

  return res.json(project);
});

// Adicionar nova tarefa à um projeto

routes.post("/projects/:id/tasks", checkProject, (req, res) => {
  const { id } = req.params;
  const { task } = req.body;

  const project = projects.find(p => p.id == id);

  project.tasks.push(task);

  return res.json(project);
});

// Edita um projeto

routes.put("/projects/:id", checkProject, (req, res) => {
  const { id } = req.params;
  const { name } = req.body;

  const project = projects.find(p => p.id == id);

  project.name = name;

  return res.json(project);
});

// Deleta um projeto

routes.delete("/projects/:id", checkProject, (req, res) => {
  const { id } = req.params;

  const project = projects.find(p => p.id == id);

  projects.splice(project, 1);

  return res.send();
});

module.exports = routes;
