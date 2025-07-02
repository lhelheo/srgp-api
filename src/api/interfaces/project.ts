export interface IProject {
  id: string;
  name: string;
  description: string;
  thematicArea: string;
  startDate: string;
  createdAt: string;
}

export interface IProjects {
  projects: IProject[];
}

export interface ICreateProjectData {
  name: string;
  description: string;
  thematicArea: string;
  startDate: string;
}
