import { Injectable } from '@angular/core';
import { SkillGroup } from '../models/portfolio.model';

@Injectable({
  providedIn: 'root'
})
export class PortfolioDataService {
  public readonly personalInfo = {
    name: 'Cesar Bermudez Sierra',
    handle: 'Cbermudez98',
    email: 'cesar.bermudez.sierra@gmail.com',
    linkedin: 'https://www.linkedin.com/in/cesar-bermudez-sierra/',
    github: 'https://github.com/Cbermudez98',
    devto: 'https://dev.to/cesar-bermudez-sierra',
    location: 'Cartagena, Colombia',
    role: 'Backend Developer',
    company: 'Globant',
    yearsOfExperience: '7+',
    totalExperienceDetail: '7 years 10 months',
    studying: 'Master’s in Software Architecture'
  };

  /** Tech stack grouped by area; years estimated from LinkedIn experience & certification dates */
  public readonly skillGroups: SkillGroup[] = [
    {
      id: 'backend',
      icon: 'server',
      items: [
        { name: 'JavaScript', years: 7 },
        { name: 'Node.js', years: 7 },
        { name: 'SQL', years: 7 },
        { name: 'TypeScript', years: 4 },
        { name: 'Java', years: 3 },
        { name: 'PHP', years: 3 },
        { name: 'Go', years: 2 },
        { name: 'Python', years: 2 }
      ]
    },
    {
      id: 'frameworks',
      icon: 'layers',
      items: [
        { name: 'Express.js', years: 5 },
        { name: 'Angular', years: 4 },
        { name: 'Ionic', years: 4 },
        { name: 'React', years: 3 },
        { name: 'NestJS', years: 2 },
        { name: 'Spring Boot', years: 2 },
        { name: 'Jest', years: 2 },
        { name: 'FastAPI', years: 2 },
        { name: 'GraphQL / Apollo', years: 2 },
        { name: 'Pytest', years: 2 },
        { name: 'Cucumber.js', years: 2 }
      ]
    },
    {
      id: 'databases',
      icon: 'database',
      items: [
        { name: 'MySQL', years: 7 },
        { name: 'MongoDB', years: 4 },
        { name: 'Firestore', years: 4 },
        { name: 'PostgreSQL', years: 3 },
        { name: 'DynamoDB', years: 3 },
        { name: 'Prisma / TypeORM', years: 3 },
        { name: 'Amazon Aurora', years: 2 },
        { name: 'Redis', years: 2 }
      ]
    },
    {
      id: 'cloud',
      icon: 'cloud',
      items: [
        { name: 'Firebase', years: 4 },
        { name: 'Docker', years: 3 },
        { name: 'AWS Lambda', years: 3 },
        { name: 'API Gateway', years: 3 },
        { name: 'SQS', years: 3 },
        { name: 'Step Functions', years: 3 },
        { name: 'ECS / EC2', years: 3 },
        { name: 'S3', years: 3 },
        { name: 'GCP', years: 3 },
        { name: 'CI/CD', years: 3 },
        { name: 'Terraform / CDK', years: 3 },
        { name: 'Kubernetes', years: 2 },
        { name: 'OpenShift', years: 2 },
        { name: 'ArgoCD (GitOps)', years: 2 },
        { name: 'Cloudflare', years: 2 }
      ]
    },
    {
      id: 'ai',
      icon: 'cpu',
      items: [
        { name: 'Microservices', years: 3 },
        { name: 'Hexagonal / Clean Architecture', years: 3 },
        { name: 'Serverless', years: 3 },
        { name: 'Design Patterns', years: 3 },
        { name: 'Domain-Driven Design', years: 2 },
        { name: 'Event-Driven (Kafka, RabbitMQ)', years: 2 },
        { name: 'System Design', years: 2 },
        { name: 'Refactoring', years: 2 },
        { name: 'Model Context Protocol (MCP)', years: 2 }
      ]
    }
  ];
}
