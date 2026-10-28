export type Language = 'en' | 'es';

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
  logoKey: string;
  logoUrl?: string;
  current?: boolean;
}

export interface EducationItem {
  id: string;
  degree: string;
  institution: string;
  period: string;
  location: string;
  description: string;
  status: 'completed' | 'in-progress';
  logoKey: string;
  logoUrl?: string;
}

export interface CertificationItem {
  id: string;
  name: string;
  issuer: string;
  issued: string;
  credentialId?: string;
  credentialUrl?: string;
  logoKey: string;
}

export type SkillGroupId = 'backend' | 'frameworks' | 'databases' | 'cloud' | 'ai';

export interface SkillEntry {
  name: string;
  /** Years of hands-on experience */
  years: number;
}

export interface SkillGroup {
  id: SkillGroupId;
  icon: string;
  items: SkillEntry[];
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
