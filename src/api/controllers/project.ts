import { randomUUID } from "crypto";
import {
  Request,
  Response,
} from "express";
import {
  ICreateProjectData,
  IProject,
} from "../interfaces/project";

const projects: IProject[] = [];
export function createProject(
  req: Request,
  res: Response
): void {
  if (!req.body) {
    res.status(400).json({
      error:
        "Dados do projeto não fornecidos",
    });
    return;
  }

  const data: ICreateProjectData =
    req.body;

  const newProject: IProject = {
    ...data,
    id: randomUUID(),
    createdAt: new Date().toISOString(),
  };

  projects.push(newProject);
  res.status(201).json(newProject);
}

export function getProjects(
  req: Request,
  res: Response
): void {
  res.status(200).json({
    projects,
  });
}

// test commit
