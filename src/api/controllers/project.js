"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createProject = createProject;
exports.getProjects = getProjects;
const crypto_1 = require("crypto");
const projects = [];
function createProject(req, res) {
    if (!req.body) {
        res.status(400).json({
            error: "Dados do projeto não fornecidos",
        });
        return;
    }
    const data = req.body;
    const newProject = Object.assign(Object.assign({}, data), { id: (0, crypto_1.randomUUID)(), createdAt: new Date().toISOString() });
    projects.push(newProject);
    res.status(201).json(newProject);
}
function getProjects(req, res) {
    res.status(200).json({
        projects,
    });
}
