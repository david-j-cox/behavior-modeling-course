export interface WeekMeta {
  slug: string;
  number: number;
  title: string;
  subtitle: string;
  description: string;
  published: boolean;
  keyModels: string[];
  keyEquations: string[];
}

export interface ProblemMeta {
  id: number;
  title: string;
  week: number;
  difficulty: "Introductory" | "Intermediate" | "Advanced";
  modelingSteps: number[];
  tags: string[];
}

export interface GlossaryEntry {
  term: string;
  definition: string;
  relatedTerms?: string[];
  firstAppears?: number;
}

export interface AppendixMeta {
  slug: string;
  letter: string;
  title: string;
  description: string;
}

export interface InstructorNoteMeta {
  title: string;
  week: number;
}

export interface FrameworkStep {
  number: number;
  engineeringLanguage: string;
  behaviorScienceLanguage: string;
  description: string;
  commonMistakes: string;
}

export interface LabNotebook {
  filename: string;
  title: string;
}

export interface LabMeta {
  week: number;
  title: string;
  description: string;
  notebooks: LabNotebook[];
  dataFiles: string[];
}
