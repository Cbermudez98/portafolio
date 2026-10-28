export const translations = {
  en: {
    nav: {
      about: 'About',
      experience: 'Experience',
      education: 'Education',
      skills: 'Skills',
      projects: 'GitHub',
      contact: 'Contact',
      resume: 'Download CV',
      generating: 'Generating…',
      switchLang: 'ES',
      currentLangLabel: 'English',
      statusAvailable: 'Available for Backend & Architecture Roles'
    },
    hero: {
      availableBadge: 'Open to Backend & Software Architecture Roles',
      location: 'Cartagena, Colombia • Remote Global',
      role: 'Backend Developer & Software Architecture',
      studyingBadge: 'Studying Master’s in Software Architecture',
      tagline: 'Senior Backend Developer & Software Architecture',
      description: 'With 7+ years of experience building high-performance cloud-native APIs and microservices using Node.js/TypeScript, Go, Python, and Java. Currently Backend Developer at Globant (American Century Investments) and pursuing a Master’s in Software Architecture.',
      ctaProjects: 'View My Career',
      ctaPlayground: 'View GitHub',
      relocation: 'Open to relocation: Europe · Canada · Asia',
      ctaContact: 'Get in Touch',
      stats: {
        experience: 'Years of Experience',
        availability: 'Service Uptime Focus',
        throughput: 'Daily Processed Requests',
        services: 'Production Microservices'
      },
      yearsValue: '7+',
      terminal: {
        title: 'cesar@backend-cluster ~ node system-probe.js',
        status: 'SYSTEM_STATUS: HEALTHY',
        region: 'AWS us-east-1 [Multi-AZ]',
        engine: 'Node.js v24.x | NestJS | Go | Redis | PostgreSQL',
        concurrency: 'P99 Latency: < 14ms | TPS: 12,400',
        activeProtocols: 'gRPC • REST • GraphQL • Kafka/RabbitMQ',
        ready: 'ready for new challenges',
        labels: { engine: 'ENGINE', infra: 'INFRASTRUCTURE', performance: 'PERFORMANCE', protocols: 'PROTOCOLS', uptime: 'UPTIME' }
      }
    },
    about: {
      eyebrow: 'ENGINEERING PHILOSOPHY',
      title: 'Reliable, Scalable, Zero-Downtime Backends',
      intro: "I am Cesar Bermudez Sierra, a Backend Developer with 7+ years of experience and a deep passion for distributed computing, resilient system architecture, and high-performance server-side engineering.",
      p1: "I specialize in cloud-native APIs and microservices with Node.js/TypeScript, Go, Python, and Java on AWS (API Gateway, Lambda, ECS, EC2). I optimize systems with CloudWatch, relational and NoSQL data stores, JWT/Cognito/IAM security, and IaC with CDK, CloudFormation, and Terraform.",
      p2: "Today I lead backend work at Globant for American Century Investments, and I am starting a Master’s in Software Architecture at Universidad de La Sabana to deepen my systems design craft. I am open to relocating to Europe, Canada, or Asia.",
      principlesTitle: 'Core Backend Principles',
      journeyTitle: 'The Engineering Journey',
      highlights: [
        'Specialist in Node.js, NestJS, Go, Python & SQL',
        'Production cloud architecture on AWS & Docker',
        'Former Web Technologies Instructor at UNICOLOMBO',
        'Open to relocation: Europe, Canada, or Asia'
      ],
      quote: 'Great backend code is rarely flashy. It is predictable, self-healing under extreme spikes, guarded against race conditions, and effortless for other developers to extend with confidence.',
      principleMeta: 'Production Standard',
      principles: [
        {
          title: 'High Concurrency & Idempotency',
          description: 'Designing locking mechanisms, transactional integrity, and idempotency keys to safely process financial and sensitive operations under intense load.',
          icon: 'cpu'
        },
        {
          title: 'Resilient Microservices',
          description: 'Implementing Circuit Breakers, Bulkheads, Retries with exponential backoff, and distributed tracing to ensure zero cascading failures.',
          icon: 'shield'
        },
        {
          title: 'Database Mastery & Query Tuning',
          description: 'Advanced indexing, execution plan analysis, connection pooling, read replicas, and caching strategies across PostgreSQL, MySQL, and Redis.',
          icon: 'database'
        },
        {
          title: 'Clean Architecture & DDD',
          description: 'Decoupling business logic from frameworks and external adapters through Domain-Driven Design and Hexagonal patterns for long-term maintainability.',
          icon: 'layers'
        }
      ]
    },
    experience: {
      eyebrow: 'CAREER TIMELINE',
      title: 'Professional Experience',
      subtitle: 'From most recent roles to earlier ones — backend engineering across Globant, client accounts, Pragma, education, and product teams.',
      currentLabel: 'Current',
      rolesLabel: 'roles',
      roleLabel: 'role',
      impactLabel: 'Impact',
      showMore: 'View details',
      showLess: 'Hide details',
      items: [
        {
          id: 'globant-aci',
          company: 'Globant',
          role: 'Backend Developer',
          period: 'Dec 2025 — Present',
          location: 'Remote',
          type: 'Full-Time',
          description: 'Leading backend development and proposing scalable architectures for the American Century Investments account.',
          achievements: [
            'Lead the backend development lifecycle, delivering high-quality code and robust solutions at every stage.',
            'Design and implement scalable architectures with Node.js, Python, and Golang for complex technical challenges.',
            'Manage and optimize data ecosystems with PostgreSQL and Redis for high performance and reliability.',
            'Deploy and orchestrate containerized apps on AWS, OpenShift, and Kubernetes; continuous delivery (GitOps) with ArgoCD.',
            'Translate technical requirements into high-impact deliverables aligned with the client’s business goals.'
          ],
          technologies: ['Node.js', 'Python', 'Golang', 'PostgreSQL', 'Redis', 'AWS', 'OpenShift', 'Kubernetes', 'ArgoCD']
        },
        {
          id: 'globant-io',
          company: 'Globant',
          role: 'Backend Developer',
          period: 'Sep 2024 — Dec 2025',
          location: 'Colombia',
          type: 'Full-Time',
          description: 'Led the migration of legacy services to clean architectures and built new microservices for BCP’s startup IO.',
          achievements: [
            'Led the migration of legacy services to clean architectures, ensuring quality and performance at every stage.',
            'Designed and implemented new microservices aligned with industry best practices and integrated with existing systems.',
            'Provided support and resolved critical incidents, prioritizing service continuity and stability.',
            'Proposed modern, scalable architectures for the client’s technological challenges.',
            'Actively participated in Scrum ceremonies, contributing to continuous process improvement.'
          ],
          technologies: ['Node.js', 'TypeScript', 'Microservices', 'Clean Architecture', 'AWS', 'Scrum']
        },
        {
          id: 'aci',
          company: 'American Century Investments',
          role: 'Senior Backend Developer',
          period: 'Dec 2025 — Oct 2026',
          location: 'Cartagena, Colombia · Remote',
          type: 'Full-Time',
          description: 'Assigned to the American Century Investments account through Globant.',
          achievements: [
            'Containerized deployments & CI/CD: managed workflows with Docker, OpenShift pipelines, ArgoCD, Kubernetes pods, and cronjobs.',
            'Architecture optimization: evaluated and profiled architectural decisions to improve backend efficiency, stability, and performance.',
            'Maintenance & reliability: diagnosed and resolved defects promptly, keeping high service availability.',
            'Software quality & testing: wrote comprehensive unit tests for high coverage across microservices, working closely with QA.',
            'Security & cloud: built custom Model Context Protocol (MCP) middleware for authentication and secure access, and configured Cloudflare.'
          ],
          technologies: ['Docker', 'OpenShift', 'ArgoCD', 'Kubernetes', 'MCP', 'Cloudflare', 'Unit Testing']
        },
        {
          id: 'freelance',
          company: 'Freelancer.com',
          role: 'Software Engineer Freelance',
          period: 'May 2019 — Sep 2026',
          location: 'Colombia · Remote',
          type: 'Freelance',
          description: 'Delivered multiple concurrent projects for international clients across cloud, backend, frontend, and mobile.',
          achievements: [
            'Architected and deployed applications on AWS (EC2, Lambda, S3, API Gateway) and GCP (Cloud Functions, App Engine, Cloud Run).',
            'Implemented serverless solutions with Firebase (Authentication, Firestore, Cloud Functions, Hosting).',
            'Built APIs, microservices, and enterprise apps with Node.js/TypeScript, Golang, Python, and Java Spring Boot.',
            'Created responsive web apps with Angular and React, and cross-platform mobile apps with Ionic.'
          ],
          technologies: ['AWS', 'GCP', 'Firebase', 'Node.js', 'TypeScript', 'Golang', 'Python', 'Spring Boot', 'Angular', 'React', 'Ionic']
        },
        {
          id: 'unicolombo',
          company: 'Fundación Universitaria Colombo Internacional (UNICOLOMBO)',
          role: 'Web Technologies Instructor',
          period: 'Jan 2023 — Jul 2026',
          location: 'Cartagena, Colombia · On-site',
          type: 'Full-Time',
          description: 'Taught web technologies and mentored students on projects and career paths.',
          achievements: [
            'Taught Node.js, SQL, NoSQL, and AWS.',
            'Developed and updated course materials to stay current with industry trends.',
            'Provided one-on-one mentorship on projects and career advice.'
          ],
          technologies: ['Node.js', 'SQL', 'NoSQL', 'AWS']
        },
        {
          id: 'io',
          company: 'iO',
          role: 'Backend Developer',
          period: 'Sep 2024 — Dec 2025',
          location: 'Cartagena, Colombia · Remote',
          type: 'Full-Time',
          description: 'Staff augmentation through Globant on the IO (BCP Banking) project, modernizing the digital banking ecosystem.',
          achievements: [
            'Architecture migration: led the end-to-end migration of legacy services to microservices with Hexagonal Architecture and Kafka.',
            'Serverless cloud: designed highly available AWS microservices with Lambda, API Gateway, SQS, Step Functions, and DynamoDB.',
            'Testing: unit and integration tests with Jest and Cucumber.js, achieving high coverage and fewer production incidents.',
            'Technical leadership: rigorous pull request reviews, mentoring teammates, and critical production support.',
            'Agile collaboration: contributed to Scrum ceremonies and proposed concrete process improvements.'
          ],
          technologies: ['Node.js', 'TypeScript', 'Kafka', 'Hexagonal Architecture', 'AWS Lambda', 'SQS', 'Step Functions', 'DynamoDB', 'Jest', 'Cucumber.js']
        },
        {
          id: 'pragma-iii',
          company: 'PRAGMA',
          role: 'Advanced Backend Node.js Developer III',
          period: 'Oct 2023 — Sep 2024',
          location: 'Colombia · Remote',
          type: 'Full-Time',
          description: 'Led a team implementing AWS microservices, improving transaction efficiency and integrating CI/CD.',
          achievements: [
            'Led a team implementing AWS microservices (Lambda, API Gateway, SQS, DynamoDB, Aurora, Step Functions).',
            'Improved transaction efficiency and integrated CI/CD pipelines.',
            'Provided guidance and training to developers, strengthening team skills.'
          ],
          technologies: ['Node.js', 'AWS Lambda', 'API Gateway', 'SQS', 'DynamoDB', 'Aurora', 'Step Functions', 'CI/CD']
        },
        {
          id: 'pragma-ii',
          company: 'PRAGMA',
          role: 'Advanced Backend Node.js Developer II',
          period: 'May 2023 — Oct 2023',
          location: 'Colombia',
          type: 'Full-Time',
          description: 'Built microservices for internal product management at Banco Agromercantil (BAM), Grupo Bancolombia, with secure access for external clients.',
          achievements: [
            'Led the development and optimization of microservices for internal product management.',
            'Improved microservice construction by applying clean architectures.',
            'Participated in Scrum ceremonies, giving feedback on user stories and proposing process improvements.'
          ],
          technologies: ['Node.js', 'TypeScript', 'Microservices', 'Clean Architecture', 'Scrum']
        },
        {
          id: 'godigital',
          company: 'Go Digital Colombia',
          role: 'Full-stack Developer',
          period: 'Apr 2022 — May 2023',
          location: 'Cartagena, Colombia · Remote',
          type: 'Full-Time',
          description: 'Built and maintained modules across web and mobile systems under Scrum.',
          achievements: [
            'Developed and maintained system modules, features, and data update scripts.',
            'Managed Firebase databases, built Angular components, and supported legacy Angular.js apps.',
            'Built mobile apps with Ionic and backends with Node.js, TypeScript, and Express.js.',
            'Implemented role management and authentication, and analyzed software requirements.'
          ],
          technologies: ['Node.js', 'TypeScript', 'Express', 'Angular', 'Ionic', 'Firebase', 'Scrum']
        },
        {
          id: 'simbiotica',
          company: 'Simbiotica Web Agency',
          role: 'Software Developer',
          period: 'Mar 2021 — Apr 2022',
          location: 'Cartagena, Colombia',
          type: 'Full-Time',
          description: 'Software development from user stories with agile, iterative processes.',
          achievements: [
            'Built with JavaScript (Node.js), Express.js, PHP (Laravel), Java, MySQL, and MongoDB.',
            'Worked with stakeholders to understand requirements and business rules.',
            'Implemented role management and authentication.'
          ],
          technologies: ['Node.js', 'Express', 'PHP', 'Laravel', 'Java', 'MySQL', 'MongoDB']
        },
        {
          id: 'autotest',
          company: 'Autotest SAS',
          role: 'Software Developer',
          period: 'Jan 2019 — Mar 2021',
          location: 'Cartagena, Colombia · On-site',
          type: 'Full-Time',
          description: 'Developed and tested new features, supported existing code, and managed MySQL databases and web services.',
          achievements: [
            'Developed and tested new features while supporting existing code.',
            'Worked with PHP, Java, JavaScript, C#, and MySQL; managed databases and web services.',
            'Wrote scripts to update existing system data and provided customer support.'
          ],
          technologies: ['PHP', 'Java', 'JavaScript', 'C#', 'MySQL', 'Web Services']
        }
      ]
    },
    education: {
      eyebrow: 'ACADEMIC PATH',
      title: 'Education & Certifications',
      subtitle: 'Formal studies, ongoing master’s work, and professional certifications that back the craft.',
      educationTitle: 'Universities & Studies',
      certificationsTitle: 'Licenses & Certifications',
      inProgress: 'In progress',
      completed: 'Completed',
      viewCredential: 'View credential',
      filterAll: 'All',
      showAll: 'Show all certifications',
      showLess: 'Show fewer',
      items: [
        {
          id: 'masters',
          degree: 'Master’s in Software Architecture',
          institution: 'Universidad de La Sabana',
          period: 'Oct 2026 — Dec 2027',
          location: 'Colombia',
          description: 'Deepening expertise in software architecture, scalable system design, and advanced engineering practices.',
          status: 'in-progress'
        },
        {
          id: 'systems',
          degree: 'Systems Engineering',
          institution: 'Fundación Universitaria Colombo Internacional (UNICOLOMBO)',
          period: 'Jan 2018 — May 2024',
          location: 'Cartagena, Colombia',
          description: 'Professional degree focused on software engineering, systems design, and applied computing.',
          status: 'completed'
        },
        {
          id: 'english',
          degree: 'English Language Professional Program',
          institution: 'Centro Colombo Americano de Cartagena',
          period: 'Apr 2018 — Aug 2019',
          location: 'Cartagena, Colombia',
          description: 'Professional English training for academic and industry communication.',
          status: 'completed'
        }
      ],
      certifications: [
        {
          id: 'aws-serverless',
          name: 'AWS Serverless Demonstrated',
          issuer: 'AWS',
          issued: 'Oct 2026',
          credentialId: '81679b37-66e9-446f-ae81-c224e1eaa77a',
          credentialUrl: 'https://www.credly.com/badges/81679b37-66e9-446f-ae81-c224e1eaa77a'
        },
        {
          id: 'udemy-java',
          name: 'Learn JAVA Programming - Beginner to Master',
          issuer: 'Udemy',
          issued: 'Jan 2026',
          credentialId: 'UC-ed43a0ce-d58c-430f-aca3-f4cc6ca13399',
          credentialUrl: 'https://www.udemy.com/certificate/UC-ed43a0ce-d58c-430f-aca3-f4cc6ca13399/'
        },
        {
          id: 'udemy-pytest',
          name: 'Python Unit Testing Fundamentals (unittest & pytest)',
          issuer: 'Udemy',
          issued: 'Jan 2026',
          credentialId: 'UC-6877fad0-d770-449b-8a24-51d3a99e3c08',
          credentialUrl: 'https://www.udemy.com/certificate/UC-6877fad0-d770-449b-8a24-51d3a99e3c08/'
        },
        {
          id: 'udemy-py-4',
          name: 'Python 3: Deep Dive (Part 4 - OOP)',
          issuer: 'Udemy',
          issued: 'Jan 2026',
          credentialId: 'UC-82204d89-0154-40c0-ad39-3fc4ffd61ce8',
          credentialUrl: 'https://www.udemy.com/certificate/UC-82204d89-0154-40c0-ad39-3fc4ffd61ce8/'
        },
        {
          id: 'udemy-py-3',
          name: 'Python 3: Deep Dive (Part 3 - Dictionaries, Sets, JSON)',
          issuer: 'Udemy',
          issued: 'Jan 2026',
          credentialId: 'UC-95ed0561-5e73-4524-b1a7-667ad27f1f12',
          credentialUrl: 'https://www.udemy.com/certificate/UC-95ed0561-5e73-4524-b1a7-667ad27f1f12/'
        },
        {
          id: 'udemy-py-2',
          name: 'Python 3: Deep Dive (Part 2 - Iterators, Generators)',
          issuer: 'Udemy',
          issued: 'Jan 2026',
          credentialId: 'UC-2185eda9-d077-49d0-95e2-8ac8f0ec50e9',
          credentialUrl: 'https://www.udemy.com/certificate/UC-2185eda9-d077-49d0-95e2-8ac8f0ec50e9/'
        },
        {
          id: 'udemy-py-1',
          name: 'Python 3: Deep Dive (Part 1 - Functional)',
          issuer: 'Udemy',
          issued: 'Jan 2026',
          credentialId: 'UC-b5e2212a-a9d8-4790-824c-b4be7d7fa5fa',
          credentialUrl: 'https://www.udemy.com/certificate/UC-b5e2212a-a9d8-4790-824c-b4be7d7fa5fa/'
        },
        {
          id: 'udemy-fastapi',
          name: 'FastAPI - The Complete Course 2026 (Beginner + Advanced)',
          issuer: 'Udemy',
          issued: 'Dec 2025',
          credentialId: 'UC-f056eb1c-54a8-4d57-aaec-b6ee7ee65a7d',
          credentialUrl: 'https://www.udemy.com/certificate/UC-f056eb1c-54a8-4d57-aaec-b6ee7ee65a7d/'
        },
        {
          id: 'udemy-graphql',
          name: 'GraphQL by Example',
          issuer: 'Udemy',
          issued: 'Nov 2025',
          credentialId: 'UC-59c7fb0d-d67f-463c-85c3-7c907358c85f',
          credentialUrl: 'https://www.udemy.com/certificate/UC-59c7fb0d-d67f-463c-85c3-7c907358c85f/'
        },
        {
          id: 'udemy-go-concurrency',
          name: 'Working with Concurrency in Go (Golang)',
          issuer: 'Udemy',
          issued: 'Oct 2025',
          credentialId: 'UC-f4952489-1ce8-473e-88a0-cee0d1078fa9',
          credentialUrl: 'https://www.udemy.com/certificate/UC-f4952489-1ce8-473e-88a0-cee0d1078fa9/'
        },
        {
          id: 'udemy-aws-dva',
          name: 'Ultimate AWS Certified Developer Associate 2025 DVA-C02',
          issuer: 'Udemy',
          issued: 'Jun 2025',
          credentialId: 'UC-321654bf-f611-437f-a545-1e4f5827ba4a',
          credentialUrl: 'https://www.udemy.com/certificate/UC-321654bf-f611-437f-a545-1e4f5827ba4a/'
        },
        {
          id: 'udemy-go',
          name: 'Go - The Complete Guide',
          issuer: 'Udemy',
          issued: 'Mar 2025',
          credentialId: 'UC-f8400101-674a-4549-af37-b1ddb084496e',
          credentialUrl: 'https://www.udemy.com/certificate/UC-f8400101-674a-4549-af37-b1ddb084496e/'
        },
        {
          id: 'algoexpert-systems',
          name: 'Systems Design',
          issuer: 'AlgoExpert',
          issued: 'Feb 2025',
          credentialId: 'SE-d4761d3647',
          credentialUrl: 'https://certificate.algoexpert.io/SE-d4761d3647'
        },
        {
          id: 'refactoring-guru',
          name: 'Dive Into Refactoring',
          issuer: 'Refactoring.Guru',
          issued: 'Feb 2025',
          credentialId: 'MTIxNTQy',
          credentialUrl: 'https://refactoring.guru/cert/r/MTIxNTQy'
        },
        {
          id: 'udemy-js-prototypes',
          name: 'JavaScript Prototypes, Inheritance & Objects - 2025',
          issuer: 'Udemy',
          issued: 'Feb 2025',
          credentialId: 'UC-e40aa392-5281-4032-bb58-f4a4f8169463',
          credentialUrl: 'https://www.udemy.com/certificate/UC-e40aa392-5281-4032-bb58-f4a4f8169463/'
        },
        {
          id: 'udemy-nest-micro',
          name: 'NestJS Microservices: Breaking a Monolith to Microservices',
          issuer: 'Udemy',
          issued: 'Jan 2025',
          credentialId: 'UC-e281000b-0a50-4d9b-9481-f1b943df065c',
          credentialUrl: 'https://www.udemy.com/certificate/UC-e281000b-0a50-4d9b-9481-f1b943df065c/'
        },
        {
          id: 'udemy-nest-master',
          name: 'NestJS Masterclass - NodeJS Framework Backend Development',
          issuer: 'Udemy',
          issued: 'Nov 2024',
          credentialId: 'UC-6718f74b-ffe5-40a2-a032-95a68785ca9f',
          credentialUrl: 'https://www.udemy.com/certificate/UC-6718f74b-ffe5-40a2-a032-95a68785ca9f/'
        },
        {
          id: 'udemy-ts-patterns',
          name: 'Design Patterns in TypeScript',
          issuer: 'Udemy',
          issued: 'Jan 2024',
          credentialId: 'UC-7e54f79b-f6c4-4269-8a55-0ef463836cec',
          credentialUrl: 'https://www.udemy.com/certificate/UC-7e54f79b-f6c4-4269-8a55-0ef463836cec/'
        },
        {
          id: 'efset',
          name: 'EF SET English Certificate (B1 Intermediate)',
          issuer: 'EF SET',
          issued: 'May 2023',
          credentialUrl: 'https://cert.efset.org/b8gvDf'
        },
        {
          id: 'platzi-node-postgres',
          name: 'Curso de Backend con Node.js: Base de Datos con PostgreSQL',
          issuer: 'Platzi',
          issued: 'May 2023',
          credentialId: '10058771-1a47-4b99-a2b4-49b1f77933f1'
        },
        {
          id: 'platzi-node-express',
          name: 'Curso de Backend con Node.js: API REST con Express.js',
          issuer: 'Platzi',
          issued: 'May 2023',
          credentialId: '87468771-2710-44b3-86a7-8f52ab305885',
          credentialUrl: 'https://platzi.com/p/cbermudez3054/curso/2485-backend-nodejs/diploma/detalle/'
        },
        {
          id: 'platzi-node-fundamentals',
          name: 'Curso de Fundamentos de Node.js',
          issuer: 'Platzi',
          issued: 'Mar 2023',
          credentialId: '8ce72512-cce3-485d-bfbf-ea8364875897'
        },
        {
          id: 'platzi-cleancode',
          name: 'Curso de Clean Code y Buenas Prácticas con JavaScript',
          issuer: 'Platzi',
          issued: 'Mar 2023',
          credentialId: '86707f55-0087-4565-9c4c-d5ebceb3bff0',
          credentialUrl: 'https://platzi.com/p/cbermudez3054/curso/6240-javascript-clean-code/diploma/detalle/'
        },
        {
          id: 'platzi-js-arrays',
          name: 'Curso de Manipulación de Arrays en JavaScript',
          issuer: 'Platzi',
          issued: 'Feb 2023',
          credentialId: '02c5dba8-3e77-44b9-b1e9-9772eab9d29f'
        },
        {
          id: 'platzi-js-practico',
          name: 'Curso Práctico de JavaScript',
          issuer: 'Platzi',
          issued: 'Jan 2023',
          credentialId: '14e6f893-1f26-4d2b-ba6c-e37b0e1c4325'
        },
        {
          id: 'platzi-js-functional',
          name: 'Curso de Programación Funcional en JavaScript por Bedu',
          issuer: 'Platzi',
          issued: 'Jan 2023',
          credentialId: 'c52c6f89-3bc5-4df8-8905-f7a4e43d6822'
        },
        {
          id: 'platzi-ts-poo',
          name: 'Curso de TypeScript: Programación Orientada a Objetos y Asincronismo',
          issuer: 'Platzi',
          issued: 'Oct 2022',
          credentialId: '725ef025-1831-4854-9a94-73ae33fb1a18'
        },
        {
          id: 'platzi-ts-advanced',
          name: 'Curso de TypeScript: Tipos Avanzados y Funciones',
          issuer: 'Platzi',
          issued: 'Sep 2022',
          credentialId: '5aee4584-df97-4e45-8d3c-16a022e66fb7'
        },
        {
          id: 'platzi-ts-fundamentals',
          name: 'Curso de Fundamentos de TypeScript',
          issuer: 'Platzi',
          issued: 'Sep 2022',
          credentialId: 'ba172c54-2456-40b9-a79b-6092b4513c66'
        },
        {
          id: 'platzi-js-basico',
          name: 'Curso Básico de JavaScript',
          issuer: 'Platzi',
          issued: 'Aug 2022',
          credentialId: '1b8a6beb-2a46-46a4-a819-99efe3411bea'
        }
      ]
    },
    skills: {
      eyebrow: 'TECH STACK & EXPERTISE',
      title: 'Tools of the Trade',
      subtitle: 'A specialized backend engineering toolkit honed over years of production workloads.',
      techHeader: 'Technology',
      yearsHeader: 'Experience',
      year: 'yr',
      years: 'yrs',
      groups: {
        backend: { title: 'Backend', caption: 'Core languages I ship to production' },
        frameworks: { title: 'Frameworks', caption: 'APIs, services, testing & UI' },
        databases: { title: 'Databases', caption: 'Relational, NoSQL & caching' },
        cloud: { title: 'Cloud & DevOps', caption: 'Infrastructure, containers & delivery' },
        ai: { title: 'AI & Architecture', caption: 'System design, patterns & AI tooling' }
      }
    },
    projects: {
      eyebrow: 'OPEN SOURCE',
      title: 'My Code Lives on GitHub',
      subtitle: 'Explore repositories, experiments, and backend tooling — architectures with Node.js, NestJS, Go, Python, and cloud infrastructure.',
      cta: 'Visit my GitHub',
      reposLabel: 'Repositories, experiments & tooling',
      focus: ['Microservices', 'Clean Architecture', 'Node.js / NestJS', 'Go', 'Python / FastAPI', 'AWS']
    },
    contact: {
      eyebrow: 'CONNECT WITH ME',
      title: "Let's Build Something Resilient Together",
      subtitle: 'Currently available for Senior Backend Developer, Tech Lead, or Software Architect roles — remote worldwide, hybrid, or relocation to Europe, Canada, or Asia.',
      emailLabel: 'Direct Email',
      linkedinLabel: 'LinkedIn Profile',
      githubLabel: 'GitHub Repositories',
      locationLabel: 'Location',
      locationValue: 'Cartagena, Colombia (UTC-5) • Global Remote',
      relocationLabel: 'Relocation',
      relocationRegions: ['Europe', 'Canada', 'Asia'],
      writeEmail: 'Send an Email',
      copyEmail: 'Copy Email',
      emailCopied: 'Copied to Clipboard!'
    },
    cv: {
      fileName: 'Cesar-Bermudez-Sierra-CV-EN',
      summary: 'Profile',
      experience: 'Professional Experience',
      skills: 'Technical Skills',
      education: 'Education',
      certifications: 'Licenses & Certifications',
      technologies: 'Technologies',
      certName: 'Certification',
      certIssuer: 'Issuer',
      certDate: 'Date'
    },
    boot: {
      ready: 'Loading portfolio',
      skip: 'Skip intro',
      lines: [
        { cmd: 'init', detail: 'runtime · Node.js · Go · Python' },
        { cmd: 'connect', detail: 'PostgreSQL · Redis · Kafka' },
        { cmd: 'load', detail: '{roles} roles · {certs} certifications' },
        { cmd: 'deploy', detail: '{years} years of backend → production' }
      ]
    },
    footer: {
      bio: 'Senior Backend Developer specialized in high-performance distributed systems, microservices, cloud infrastructure, and clean architecture.',
      quickLinks: 'Navigation',
      socials: 'Connect',
      status: 'All systems operational • 99.99% uptime',
      copyright: 'Cesar Bermudez Sierra. Built with Angular 21 & TypeScript.',
      builtWith: 'Built with'
    }
  },
  es: {
    nav: {
      about: 'Sobre Mí',
      experience: 'Experiencia',
      education: 'Educación',
      skills: 'Habilidades',
      projects: 'GitHub',
      contact: 'Contacto',
      resume: 'Descargar CV',
      generating: 'Generando…',
      switchLang: 'EN',
      currentLangLabel: 'Español',
      statusAvailable: 'Disponible para Roles Backend y Arquitectura'
    },
    hero: {
      availableBadge: 'Disponible para Roles Backend y Arquitectura de Software',
      location: 'Cartagena, Colombia • Remoto Global',
      role: 'Backend Developer & Arquitectura de Software',
      studyingBadge: 'Cursando Maestría en Arquitectura de Software',
      tagline: 'Desarrollador Senior Backend & Arquitecto de Software',
      description: 'Con más de 7 años de experiencia construyendo APIs cloud-native y microservicios de alto rendimiento con Node.js/TypeScript, Go, Python y Java. Actualmente Backend Developer en Globant (American Century Investments) y cursando una Maestría en Arquitectura de Software.',
      ctaProjects: 'Ver mi Trayectoria',
      ctaPlayground: 'Ver GitHub',
      relocation: 'Disponible para reubicación: Europa · Canadá · Asia',
      ctaContact: 'Contáctame',
      stats: {
        experience: 'Años de Experiencia',
        availability: 'Enfoque en Disponibilidad',
        throughput: 'Peticiones Procesadas al Día',
        services: 'Microservicios en Producción'
      },
      yearsValue: '7+',
      terminal: {
        title: 'cesar@backend-cluster ~ node system-probe.js',
        status: 'ESTADO_DEL_SISTEMA: SALUDABLE (200 OK)',
        region: 'AWS us-east-1 [Multi-AZ]',
        engine: 'Node.js v24.x | NestJS | Go | Redis | PostgreSQL',
        concurrency: 'Latencia P99: < 14ms | TPS: 12,400',
        activeProtocols: 'gRPC • REST • GraphQL • Kafka/RabbitMQ',
        ready: 'listo para nuevos retos',
        labels: { engine: 'MOTOR', infra: 'INFRAESTRUCTURA', performance: 'RENDIMIENTO', protocols: 'PROTOCOLOS', uptime: 'DISPONIBILIDAD' }
      }
    },
    about: {
      eyebrow: 'FILOSOFÍA DE INGENIERÍA',
      title: 'Backends Confiables, Escalables y Sin Caídas',
      intro: 'Soy Cesar Bermudez Sierra, Backend Developer con más de 7 años de experiencia y profunda pasión por la computación distribuida, la arquitectura resiliente y la ingeniería de servidores de alto desempeño.',
      p1: 'Me especializo en APIs cloud-native y microservicios con Node.js/TypeScript, Go, Python y Java sobre AWS (API Gateway, Lambda, ECS, EC2). Optimizo sistemas con CloudWatch, bases relacionales y NoSQL, seguridad JWT/Cognito/IAM e IaC con CDK, CloudFormation y Terraform.',
      p2: 'Hoy lidero el desarrollo backend en Globant para American Century Investments, y comienzo una Maestría en Arquitectura de Software en la Universidad de La Sabana para profundizar en el diseño de sistemas. Estoy disponible para reubicarme en Europa, Canadá o Asia.',
      principlesTitle: 'Principios Fundamentales de Backend',
      journeyTitle: 'Mi Trayectoria en Ingeniería',
      highlights: [
        'Especialista en Node.js, NestJS, Go, Python y SQL',
        'Arquitectura cloud en producción con AWS y Docker',
        'Ex docente de Tecnologías Web en UNICOLOMBO',
        'Disponible para reubicación: Europa, Canadá o Asia'
      ],
      quote: 'El buen código backend rara vez es llamativo. Es predecible, se recupera solo ante picos extremos, está protegido contra condiciones de carrera y otros desarrolladores lo extienden con confianza.',
      principleMeta: 'Estándar de Producción',
      principles: [
        {
          title: 'Alta Concurrencia e Idempotencia',
          description: 'Diseño de bloqueos distribuidos, integridad transaccional y claves de idempotencia para procesar operaciones financieras de forma segura bajo alta carga.',
          icon: 'cpu'
        },
        {
          title: 'Microservicios Resilientes',
          description: 'Patrones Circuit Breaker, Bulkheads, reintentos con backoff exponencial y trazabilidad distribuida para evitar fallos en cascada.',
          icon: 'shield'
        },
        {
          title: 'Dominio de Bases de Datos & Query Tuning',
          description: 'Indexación avanzada, planes de ejecución, pooling de conexiones, réplicas de lectura y caché multinivel en PostgreSQL, MySQL y Redis.',
          icon: 'database'
        },
        {
          title: 'Arquitectura Limpia & DDD',
          description: 'Desacoplamiento de reglas de negocio respecto a frameworks y adaptadores externos mediante Domain-Driven Design y arquitectura hexagonal.',
          icon: 'layers'
        }
      ]
    },
    experience: {
      eyebrow: 'TRAYECTORIA PROFESIONAL',
      title: 'Experiencia Profesional',
      subtitle: 'De lo más reciente a lo anterior — liderazgo backend en Globant, Pragma, academia y producto.',
      currentLabel: 'Actual',
      rolesLabel: 'cargos',
      roleLabel: 'cargo',
      impactLabel: 'Impacto',
      showMore: 'Ver detalles',
      showLess: 'Ocultar detalles',
      items: [
        {
          id: 'globant-aci',
          company: 'Globant',
          role: 'Backend Developer',
          period: 'Dic 2025 — Presente',
          location: 'Remoto',
          type: 'Tiempo Completo',
          description: 'Lidero el desarrollo backend y propongo arquitecturas escalables para la cuenta de American Century Investments.',
          achievements: [
            'Lidero el ciclo de desarrollo backend, entregando código de alta calidad y soluciones robustas en cada etapa.',
            'Diseño e implemento arquitecturas escalables con Node.js, Python y Golang para retos técnicos complejos.',
            'Gestiono y optimizo ecosistemas de datos con PostgreSQL y Redis para alto rendimiento y confiabilidad.',
            'Despliego y orquesto aplicaciones en contenedores sobre AWS, OpenShift y Kubernetes; entrega continua (GitOps) con ArgoCD.',
            'Traduzco requerimientos técnicos en entregables de alto impacto alineados con los objetivos del cliente.'
          ],
          technologies: ['Node.js', 'Python', 'Golang', 'PostgreSQL', 'Redis', 'AWS', 'OpenShift', 'Kubernetes', 'ArgoCD']
        },
        {
          id: 'globant-io',
          company: 'Globant',
          role: 'Backend Developer',
          period: 'Sep 2024 — Dic 2025',
          location: 'Colombia',
          type: 'Tiempo Completo',
          description: 'Lideré la migración de servicios legacy a arquitecturas limpias y construí nuevos microservicios para IO, la startup del BCP.',
          achievements: [
            'Lideré la migración de servicios legacy a arquitecturas limpias, garantizando calidad y rendimiento en cada etapa.',
            'Diseñé e implementé nuevos microservicios alineados con buenas prácticas e integrados con los sistemas existentes.',
            'Brindé soporte y resolví incidentes críticos, priorizando la continuidad y estabilidad del servicio.',
            'Propuse arquitecturas modernas y escalables para los retos tecnológicos del cliente.',
            'Participé activamente en ceremonias Scrum, aportando a la mejora continua de los procesos.'
          ],
          technologies: ['Node.js', 'TypeScript', 'Microservices', 'Clean Architecture', 'AWS', 'Scrum']
        },
        {
          id: 'aci',
          company: 'American Century Investments',
          role: 'Senior Backend Developer',
          period: 'Dic 2025 — Oct 2026',
          location: 'Cartagena, Colombia · Remoto',
          type: 'Tiempo Completo',
          description: 'Asignado a la cuenta de American Century Investments a través de Globant.',
          achievements: [
            'Despliegues en contenedores y CI/CD: gestioné flujos con Docker, pipelines de OpenShift, ArgoCD, pods de Kubernetes y cronjobs.',
            'Optimización de arquitectura: evalué y perfilé decisiones arquitectónicas para mejorar eficiencia, estabilidad y rendimiento del backend.',
            'Mantenimiento y confiabilidad: diagnostiqué y resolví defectos con rapidez, manteniendo alta disponibilidad del servicio.',
            'Calidad y pruebas: escribí pruebas unitarias exhaustivas para alta cobertura en microservicios, en estrecha colaboración con QA.',
            'Seguridad y cloud: construí un middleware Model Context Protocol (MCP) para autenticación y acceso seguro, y configuré Cloudflare.'
          ],
          technologies: ['Docker', 'OpenShift', 'ArgoCD', 'Kubernetes', 'MCP', 'Cloudflare', 'Unit Testing']
        },
        {
          id: 'freelance',
          company: 'Freelancer.com',
          role: 'Software Engineer Freelance',
          period: 'May 2019 — Sep 2026',
          location: 'Colombia · Remoto',
          type: 'Independiente',
          description: 'Entregué múltiples proyectos simultáneos para clientes internacionales en cloud, backend, frontend y mobile.',
          achievements: [
            'Diseñé y desplegué aplicaciones en AWS (EC2, Lambda, S3, API Gateway) y GCP (Cloud Functions, App Engine, Cloud Run).',
            'Implementé soluciones serverless con Firebase (Authentication, Firestore, Cloud Functions, Hosting).',
            'Construí APIs, microservicios y aplicaciones empresariales con Node.js/TypeScript, Golang, Python y Java Spring Boot.',
            'Creé aplicaciones web responsivas con Angular y React, y apps móviles multiplataforma con Ionic.'
          ],
          technologies: ['AWS', 'GCP', 'Firebase', 'Node.js', 'TypeScript', 'Golang', 'Python', 'Spring Boot', 'Angular', 'React', 'Ionic']
        },
        {
          id: 'unicolombo',
          company: 'Fundación Universitaria Colombo Internacional (UNICOLOMBO)',
          role: 'Web Technologies Instructor',
          period: 'Ene 2023 — Jul 2026',
          location: 'Cartagena, Colombia · Presencial',
          type: 'Tiempo Completo',
          description: 'Enseñé tecnologías web y acompañé a estudiantes en sus proyectos y carrera profesional.',
          achievements: [
            'Enseñé Node.js, SQL, NoSQL y AWS.',
            'Desarrollé y actualicé materiales de curso alineados con las tendencias de la industria.',
            'Brindé mentoría personalizada en proyectos y orientación profesional.'
          ],
          technologies: ['Node.js', 'SQL', 'NoSQL', 'AWS']
        },
        {
          id: 'io',
          company: 'iO',
          role: 'Backend Developer',
          period: 'Sep 2024 — Dic 2025',
          location: 'Cartagena, Colombia · Remoto',
          type: 'Tiempo Completo',
          description: 'Staff augmentation a través de Globant en el proyecto IO (BCP Banking), modernizando el ecosistema de banca digital.',
          achievements: [
            'Migración de arquitectura: lideré la migración completa de servicios legacy a microservicios con Arquitectura Hexagonal y Kafka.',
            'Cloud serverless: diseñé microservicios de alta disponibilidad en AWS con Lambda, API Gateway, SQS, Step Functions y DynamoDB.',
            'Pruebas: tests unitarios y de integración con Jest y Cucumber.js, logrando alta cobertura y menos incidentes en producción.',
            'Liderazgo técnico: revisiones rigurosas de pull requests, mentoría al equipo y soporte crítico en producción.',
            'Colaboración ágil: participé en ceremonias Scrum y propuse mejoras concretas a los procesos.'
          ],
          technologies: ['Node.js', 'TypeScript', 'Kafka', 'Hexagonal Architecture', 'AWS Lambda', 'SQS', 'Step Functions', 'DynamoDB', 'Jest', 'Cucumber.js']
        },
        {
          id: 'pragma-iii',
          company: 'PRAGMA',
          role: 'Advanced Backend Node.js Developer III',
          period: 'Oct 2023 — Sep 2024',
          location: 'Colombia · Remoto',
          type: 'Tiempo Completo',
          description: 'Lideré un equipo en la implementación de microservicios en AWS, mejorando la eficiencia transaccional e integrando CI/CD.',
          achievements: [
            'Lideré un equipo implementando microservicios en AWS (Lambda, API Gateway, SQS, DynamoDB, Aurora, Step Functions).',
            'Mejoré la eficiencia de las transacciones e integré pipelines de CI/CD.',
            'Brindé guía y formación a desarrolladores, fortaleciendo las habilidades del equipo.'
          ],
          technologies: ['Node.js', 'AWS Lambda', 'API Gateway', 'SQS', 'DynamoDB', 'Aurora', 'Step Functions', 'CI/CD']
        },
        {
          id: 'pragma-ii',
          company: 'PRAGMA',
          role: 'Advanced Backend Node.js Developer II',
          period: 'May 2023 — Oct 2023',
          location: 'Colombia',
          type: 'Tiempo Completo',
          description: 'Construí microservicios para la gestión interna de productos en Banco Agromercantil (BAM), Grupo Bancolombia, con acceso seguro para clientes externos.',
          achievements: [
            'Lideré el desarrollo y la optimización de microservicios para la gestión interna de productos.',
            'Mejoré la construcción de microservicios aplicando arquitecturas limpias.',
            'Participé en ceremonias Scrum, retroalimentando historias de usuario y proponiendo mejoras a los procesos.'
          ],
          technologies: ['Node.js', 'TypeScript', 'Microservices', 'Clean Architecture', 'Scrum']
        },
        {
          id: 'godigital',
          company: 'Go Digital Colombia',
          role: 'Full-stack Developer',
          period: 'Abr 2022 — May 2023',
          location: 'Cartagena, Colombia · Remoto',
          type: 'Tiempo Completo',
          description: 'Construí y mantuve módulos en sistemas web y mobile bajo Scrum.',
          achievements: [
            'Desarrollé y mantuve módulos del sistema, funcionalidades y scripts de actualización de datos.',
            'Gestioné bases de datos en Firebase, construí componentes en Angular y di soporte a apps en Angular.js.',
            'Construí apps móviles con Ionic y backends con Node.js, TypeScript y Express.js.',
            'Implementé gestión de roles y autenticación, y analicé requerimientos de software.'
          ],
          technologies: ['Node.js', 'TypeScript', 'Express', 'Angular', 'Ionic', 'Firebase', 'Scrum']
        },
        {
          id: 'simbiotica',
          company: 'Simbiotica Web Agency',
          role: 'Software Developer',
          period: 'Mar 2021 — Abr 2022',
          location: 'Cartagena, Colombia',
          type: 'Tiempo Completo',
          description: 'Desarrollo de software a partir de historias de usuario con procesos ágiles e iterativos.',
          achievements: [
            'Desarrollé con JavaScript (Node.js), Express.js, PHP (Laravel), Java, MySQL y MongoDB.',
            'Trabajé con stakeholders para entender requerimientos y reglas de negocio.',
            'Implementé gestión de roles y autenticación.'
          ],
          technologies: ['Node.js', 'Express', 'PHP', 'Laravel', 'Java', 'MySQL', 'MongoDB']
        },
        {
          id: 'autotest',
          company: 'Autotest SAS',
          role: 'Software Developer',
          period: 'Ene 2019 — Mar 2021',
          location: 'Cartagena, Colombia · Presencial',
          type: 'Tiempo Completo',
          description: 'Desarrollé y probé nuevas funcionalidades, di soporte al código existente y gestioné bases de datos MySQL y servicios web.',
          achievements: [
            'Desarrollé y probé nuevas funcionalidades, dando soporte al código existente.',
            'Trabajé con PHP, Java, JavaScript, C# y MySQL; gestioné bases de datos y servicios web.',
            'Escribí scripts para actualizar información del sistema y brindé soporte al cliente.'
          ],
          technologies: ['PHP', 'Java', 'JavaScript', 'C#', 'MySQL', 'Web Services']
        }
      ]
    },
    education: {
      eyebrow: 'RUTA ACADÉMICA',
      title: 'Educación y Certificaciones',
      subtitle: 'Estudios formales, maestría en curso y certificaciones profesionales que respaldan el oficio.',
      educationTitle: 'Universidades y Estudios',
      certificationsTitle: 'Licencias y Certificaciones',
      inProgress: 'En curso',
      completed: 'Completado',
      viewCredential: 'Ver credencial',
      filterAll: 'Todas',
      showAll: 'Ver todas las certificaciones',
      showLess: 'Ver menos',
      items: [
        {
          id: 'masters',
          degree: 'Maestría en Arquitectura de Software',
          institution: 'Universidad de La Sabana',
          period: 'Oct 2026 — Dic 2027',
          location: 'Colombia',
          description: 'Profundizando en arquitectura de software, diseño de sistemas escalables y prácticas avanzadas de ingeniería.',
          status: 'in-progress'
        },
        {
          id: 'systems',
          degree: 'Ingeniería de Sistemas',
          institution: 'Fundación Universitaria Colombo Internacional (UNICOLOMBO)',
          period: 'Ene 2018 — May 2024',
          location: 'Cartagena, Colombia',
          description: 'Título profesional enfocado en ingeniería de software, diseño de sistemas y computación aplicada.',
          status: 'completed'
        },
        {
          id: 'english',
          degree: 'Programa Profesional de Inglés',
          institution: 'Centro Colombo Americano de Cartagena',
          period: 'Abr 2018 — Ago 2019',
          location: 'Cartagena, Colombia',
          description: 'Formación profesional en inglés para comunicación académica e industrial.',
          status: 'completed'
        }
      ],
      certifications: [
        {
          id: 'aws-serverless',
          name: 'AWS Serverless Demonstrated',
          issuer: 'AWS',
          issued: 'Oct 2026',
          credentialId: '81679b37-66e9-446f-ae81-c224e1eaa77a',
          credentialUrl: 'https://www.credly.com/badges/81679b37-66e9-446f-ae81-c224e1eaa77a'
        },
        {
          id: 'udemy-java',
          name: 'Learn JAVA Programming - Beginner to Master',
          issuer: 'Udemy',
          issued: 'Ene 2026',
          credentialId: 'UC-ed43a0ce-d58c-430f-aca3-f4cc6ca13399',
          credentialUrl: 'https://www.udemy.com/certificate/UC-ed43a0ce-d58c-430f-aca3-f4cc6ca13399/'
        },
        {
          id: 'udemy-pytest',
          name: 'Python Unit Testing Fundamentals (unittest & pytest)',
          issuer: 'Udemy',
          issued: 'Ene 2026',
          credentialId: 'UC-6877fad0-d770-449b-8a24-51d3a99e3c08',
          credentialUrl: 'https://www.udemy.com/certificate/UC-6877fad0-d770-449b-8a24-51d3a99e3c08/'
        },
        {
          id: 'udemy-py-4',
          name: 'Python 3: Deep Dive (Part 4 - OOP)',
          issuer: 'Udemy',
          issued: 'Ene 2026',
          credentialId: 'UC-82204d89-0154-40c0-ad39-3fc4ffd61ce8',
          credentialUrl: 'https://www.udemy.com/certificate/UC-82204d89-0154-40c0-ad39-3fc4ffd61ce8/'
        },
        {
          id: 'udemy-py-3',
          name: 'Python 3: Deep Dive (Part 3 - Dictionaries, Sets, JSON)',
          issuer: 'Udemy',
          issued: 'Ene 2026',
          credentialId: 'UC-95ed0561-5e73-4524-b1a7-667ad27f1f12',
          credentialUrl: 'https://www.udemy.com/certificate/UC-95ed0561-5e73-4524-b1a7-667ad27f1f12/'
        },
        {
          id: 'udemy-py-2',
          name: 'Python 3: Deep Dive (Part 2 - Iterators, Generators)',
          issuer: 'Udemy',
          issued: 'Ene 2026',
          credentialId: 'UC-2185eda9-d077-49d0-95e2-8ac8f0ec50e9',
          credentialUrl: 'https://www.udemy.com/certificate/UC-2185eda9-d077-49d0-95e2-8ac8f0ec50e9/'
        },
        {
          id: 'udemy-py-1',
          name: 'Python 3: Deep Dive (Part 1 - Functional)',
          issuer: 'Udemy',
          issued: 'Ene 2026',
          credentialId: 'UC-b5e2212a-a9d8-4790-824c-b4be7d7fa5fa',
          credentialUrl: 'https://www.udemy.com/certificate/UC-b5e2212a-a9d8-4790-824c-b4be7d7fa5fa/'
        },
        {
          id: 'udemy-fastapi',
          name: 'FastAPI - The Complete Course 2026 (Beginner + Advanced)',
          issuer: 'Udemy',
          issued: 'Dic 2025',
          credentialId: 'UC-f056eb1c-54a8-4d57-aaec-b6ee7ee65a7d',
          credentialUrl: 'https://www.udemy.com/certificate/UC-f056eb1c-54a8-4d57-aaec-b6ee7ee65a7d/'
        },
        {
          id: 'udemy-graphql',
          name: 'GraphQL by Example',
          issuer: 'Udemy',
          issued: 'Nov 2025',
          credentialId: 'UC-59c7fb0d-d67f-463c-85c3-7c907358c85f',
          credentialUrl: 'https://www.udemy.com/certificate/UC-59c7fb0d-d67f-463c-85c3-7c907358c85f/'
        },
        {
          id: 'udemy-go-concurrency',
          name: 'Working with Concurrency in Go (Golang)',
          issuer: 'Udemy',
          issued: 'Oct 2025',
          credentialId: 'UC-f4952489-1ce8-473e-88a0-cee0d1078fa9',
          credentialUrl: 'https://www.udemy.com/certificate/UC-f4952489-1ce8-473e-88a0-cee0d1078fa9/'
        },
        {
          id: 'udemy-aws-dva',
          name: 'Ultimate AWS Certified Developer Associate 2025 DVA-C02',
          issuer: 'Udemy',
          issued: 'Jun 2025',
          credentialId: 'UC-321654bf-f611-437f-a545-1e4f5827ba4a',
          credentialUrl: 'https://www.udemy.com/certificate/UC-321654bf-f611-437f-a545-1e4f5827ba4a/'
        },
        {
          id: 'udemy-go',
          name: 'Go - The Complete Guide',
          issuer: 'Udemy',
          issued: 'Mar 2025',
          credentialId: 'UC-f8400101-674a-4549-af37-b1ddb084496e',
          credentialUrl: 'https://www.udemy.com/certificate/UC-f8400101-674a-4549-af37-b1ddb084496e/'
        },
        {
          id: 'algoexpert-systems',
          name: 'Systems Design',
          issuer: 'AlgoExpert',
          issued: 'Feb 2025',
          credentialId: 'SE-d4761d3647',
          credentialUrl: 'https://certificate.algoexpert.io/SE-d4761d3647'
        },
        {
          id: 'refactoring-guru',
          name: 'Dive Into Refactoring',
          issuer: 'Refactoring.Guru',
          issued: 'Feb 2025',
          credentialId: 'MTIxNTQy',
          credentialUrl: 'https://refactoring.guru/cert/r/MTIxNTQy'
        },
        {
          id: 'udemy-js-prototypes',
          name: 'JavaScript Prototypes, Inheritance & Objects - 2025',
          issuer: 'Udemy',
          issued: 'Feb 2025',
          credentialId: 'UC-e40aa392-5281-4032-bb58-f4a4f8169463',
          credentialUrl: 'https://www.udemy.com/certificate/UC-e40aa392-5281-4032-bb58-f4a4f8169463/'
        },
        {
          id: 'udemy-nest-micro',
          name: 'NestJS Microservices: Breaking a Monolith to Microservices',
          issuer: 'Udemy',
          issued: 'Ene 2025',
          credentialId: 'UC-e281000b-0a50-4d9b-9481-f1b943df065c',
          credentialUrl: 'https://www.udemy.com/certificate/UC-e281000b-0a50-4d9b-9481-f1b943df065c/'
        },
        {
          id: 'udemy-nest-master',
          name: 'NestJS Masterclass - NodeJS Framework Backend Development',
          issuer: 'Udemy',
          issued: 'Nov 2024',
          credentialId: 'UC-6718f74b-ffe5-40a2-a032-95a68785ca9f',
          credentialUrl: 'https://www.udemy.com/certificate/UC-6718f74b-ffe5-40a2-a032-95a68785ca9f/'
        },
        {
          id: 'udemy-ts-patterns',
          name: 'Design Patterns in TypeScript',
          issuer: 'Udemy',
          issued: 'Ene 2024',
          credentialId: 'UC-7e54f79b-f6c4-4269-8a55-0ef463836cec',
          credentialUrl: 'https://www.udemy.com/certificate/UC-7e54f79b-f6c4-4269-8a55-0ef463836cec/'
        },
        {
          id: 'efset',
          name: 'EF SET English Certificate (B1 Intermediate)',
          issuer: 'EF SET',
          issued: 'May 2023',
          credentialUrl: 'https://cert.efset.org/b8gvDf'
        },
        {
          id: 'platzi-node-postgres',
          name: 'Curso de Backend con Node.js: Base de Datos con PostgreSQL',
          issuer: 'Platzi',
          issued: 'May 2023',
          credentialId: '10058771-1a47-4b99-a2b4-49b1f77933f1'
        },
        {
          id: 'platzi-node-express',
          name: 'Curso de Backend con Node.js: API REST con Express.js',
          issuer: 'Platzi',
          issued: 'May 2023',
          credentialId: '87468771-2710-44b3-86a7-8f52ab305885',
          credentialUrl: 'https://platzi.com/p/cbermudez3054/curso/2485-backend-nodejs/diploma/detalle/'
        },
        {
          id: 'platzi-node-fundamentals',
          name: 'Curso de Fundamentos de Node.js',
          issuer: 'Platzi',
          issued: 'Mar 2023',
          credentialId: '8ce72512-cce3-485d-bfbf-ea8364875897'
        },
        {
          id: 'platzi-cleancode',
          name: 'Curso de Clean Code y Buenas Prácticas con JavaScript',
          issuer: 'Platzi',
          issued: 'Mar 2023',
          credentialId: '86707f55-0087-4565-9c4c-d5ebceb3bff0',
          credentialUrl: 'https://platzi.com/p/cbermudez3054/curso/6240-javascript-clean-code/diploma/detalle/'
        },
        {
          id: 'platzi-js-arrays',
          name: 'Curso de Manipulación de Arrays en JavaScript',
          issuer: 'Platzi',
          issued: 'Feb 2023',
          credentialId: '02c5dba8-3e77-44b9-b1e9-9772eab9d29f'
        },
        {
          id: 'platzi-js-practico',
          name: 'Curso Práctico de JavaScript',
          issuer: 'Platzi',
          issued: 'Ene 2023',
          credentialId: '14e6f893-1f26-4d2b-ba6c-e37b0e1c4325'
        },
        {
          id: 'platzi-js-functional',
          name: 'Curso de Programación Funcional en JavaScript por Bedu',
          issuer: 'Platzi',
          issued: 'Ene 2023',
          credentialId: 'c52c6f89-3bc5-4df8-8905-f7a4e43d6822'
        },
        {
          id: 'platzi-ts-poo',
          name: 'Curso de TypeScript: Programación Orientada a Objetos y Asincronismo',
          issuer: 'Platzi',
          issued: 'Oct 2022',
          credentialId: '725ef025-1831-4854-9a94-73ae33fb1a18'
        },
        {
          id: 'platzi-ts-advanced',
          name: 'Curso de TypeScript: Tipos Avanzados y Funciones',
          issuer: 'Platzi',
          issued: 'Sep 2022',
          credentialId: '5aee4584-df97-4e45-8d3c-16a022e66fb7'
        },
        {
          id: 'platzi-ts-fundamentals',
          name: 'Curso de Fundamentos de TypeScript',
          issuer: 'Platzi',
          issued: 'Sep 2022',
          credentialId: 'ba172c54-2456-40b9-a79b-6092b4513c66'
        },
        {
          id: 'platzi-js-basico',
          name: 'Curso Básico de JavaScript',
          issuer: 'Platzi',
          issued: 'Ago 2022',
          credentialId: '1b8a6beb-2a46-46a4-a819-99efe3411bea'
        }
      ]
    },
    skills: {
      eyebrow: 'STACK TECNOLÓGICO Y HABILIDADES',
      title: 'Herramientas y Tecnologías',
      subtitle: 'Un arsenal técnico especializado en backend forjado en sistemas de alta exigencia.',
      techHeader: 'Tecnología',
      yearsHeader: 'Experiencia',
      year: 'año',
      years: 'años',
      groups: {
        backend: { title: 'Backend', caption: 'Los lenguajes con los que trabajo en producción' },
        frameworks: { title: 'Frameworks', caption: 'APIs, servicios, testing e interfaces' },
        databases: { title: 'Bases de Datos', caption: 'Relacionales, NoSQL y caché' },
        cloud: { title: 'Cloud & DevOps', caption: 'Infraestructura, contenedores y despliegue' },
        ai: { title: 'IA & Arquitectura', caption: 'Diseño de sistemas, patrones y herramientas de IA' }
      }
    },
    projects: {
      eyebrow: 'CÓDIGO ABIERTO',
      title: 'Mi Código Vive en GitHub',
      subtitle: 'Explora repositorios, experimentos y herramientas backend — arquitecturas con Node.js, NestJS, Go, Python e infraestructura cloud.',
      cta: 'Visitar mi GitHub',
      reposLabel: 'Repositorios, experimentos y herramientas',
      focus: ['Microservicios', 'Clean Architecture', 'Node.js / NestJS', 'Go', 'Python / FastAPI', 'AWS']
    },
    contact: {
      eyebrow: 'CONTÁCTAME',
      title: 'Construyamos Algo Resiliente y Escalable',
      subtitle: 'Actualmente disponible para roles como Senior Backend Developer, Tech Lead o Arquitecto de Software — remoto mundial, híbrido o con reubicación a Europa, Canadá o Asia.',
      emailLabel: 'Correo Directo',
      linkedinLabel: 'Perfil de LinkedIn',
      githubLabel: 'Repositorios en GitHub',
      locationLabel: 'Ubicación',
      locationValue: 'Cartagena, Colombia (UTC-5) • Remoto Global',
      relocationLabel: 'Reubicación',
      relocationRegions: ['Europa', 'Canadá', 'Asia'],
      writeEmail: 'Escribir Correo',
      copyEmail: 'Copiar Correo',
      emailCopied: '¡Copiado al Portapapeles!'
    },
    cv: {
      fileName: 'Cesar-Bermudez-Sierra-CV-ES',
      summary: 'Perfil',
      experience: 'Experiencia Profesional',
      skills: 'Habilidades Técnicas',
      education: 'Educación',
      certifications: 'Licencias y Certificaciones',
      technologies: 'Tecnologías',
      certName: 'Certificación',
      certIssuer: 'Emisor',
      certDate: 'Fecha'
    },
    boot: {
      ready: 'Cargando portafolio',
      skip: 'Saltar intro',
      lines: [
        { cmd: 'init', detail: 'runtime · Node.js · Go · Python' },
        { cmd: 'connect', detail: 'PostgreSQL · Redis · Kafka' },
        { cmd: 'load', detail: '{roles} cargos · {certs} certificaciones' },
        { cmd: 'deploy', detail: '{years} años de backend → producción' }
      ]
    },
    footer: {
      bio: 'Desarrollador Backend Senior especializado en sistemas distribuidos de alto rendimiento, microservicios, infraestructura cloud y arquitectura limpia.',
      quickLinks: 'Navegación',
      socials: 'Conectar',
      status: 'Todos los sistemas operativos • 99.99% disponibilidad',
      copyright: 'Cesar Bermudez Sierra. Desarrollado con Angular 21 y TypeScript.',
      builtWith: 'Hecho con'
    }
  }
};

export type TranslationsType = typeof translations.en;
