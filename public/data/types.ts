// types.ts
export interface Project {
  id: string;
  name: string;
  description: string;
  is_locked?: boolean;
  password?: string;
}

export interface UserData {
  user: {
    name: string;
    description: string;
  };
  projects: Project[];
  additional_projects: Project[];
  projects_title: string;
}

export interface ProjectCardProps {
  name: string;
  description?: string;
  src: string;
  pid?: string;
  isLocked?: boolean;
  password?: string;
  onClick?: () => void;
  type?: string;
}