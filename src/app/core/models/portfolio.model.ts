export type Language = 'en' | 'es';

export interface ProjectItem {
  id: string;
  title: string;
  category: string;
  description: string;
  architectureHighlights: string[];
  metrics: string;
  tags: string[];
  githubUrl: string;
  liveUrl?: string;
  icon: string;
}

export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  period: string;
  location: string;
  type: string;
  description: string;
  achievements: string[];
  technologies: string[];
}

export interface SkillItem {
  name: string;
  category: 'languages' | 'frameworks' | 'databases' | 'cloud' | 'architecture';
  proficiency: number;
  featured?: boolean;
  icon: string;
}

export interface MetricItem {
  value: string;
  label: string;
  subtext: string;
}

export interface PrincipleItem {
  title: string;
  description: string;
  icon: string;
}

export interface ApiEndpointSimulation {
  id: string;
  method: 'GET' | 'POST' | 'PUT' | 'DELETE';
  path: string;
  description: string;
  samplePayload?: Record<string, any>;
  sampleResponse: Record<string, any>;
  pipelineSteps: {
    name: string;
    description: string;
    latencyMs: number;
  }[];
}
