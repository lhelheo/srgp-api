"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const project_1 = require("../controllers/project");
const router = (0, express_1.Router)();
router.post("/projects", project_1.createProject);
router.get("/projects", project_1.getProjects);
exports.default = router;
