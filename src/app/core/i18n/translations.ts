export const translations = {
  en: {
    nav: {
      about: 'About',
      experience: 'Experience',
      skills: 'Skills',
      architecture: 'System Design',
      projects: 'Projects',
      contact: 'Contact',
      resume: 'Resume',
      switchLang: 'ES',
      currentLangLabel: 'English',
      statusAvailable: 'Available for Senior Backend Roles'
    },
    hero: {
      availableBadge: 'Open to Senior Backend & Tech Lead Roles',
      location: 'Cartagena, Colombia • Remote Global',
      role: 'Senior Backend Developer',
      tagline: 'Architecting High-Throughput Distributed Systems & Resilient Cloud Infrastructures',
      description: 'Specialized in building mission-critical microservices, low-latency APIs, event-driven architectures, and scalable database systems with Node.js, NestJS, Go, Python, and AWS.',
      ctaProjects: 'Explore Architecture & Code',
      ctaPlayground: 'Live API Playground',
      ctaContact: 'Get in Touch',
      stats: {
        experience: 'Years of Experience',
        availability: 'Service Uptime Focus',
        throughput: 'Daily Processed Requests',
        services: 'Production Microservices'
      },
      terminal: {
        title: 'cesar@backend-cluster ~ node system-probe.js',
        status: 'SYSTEM_STATUS: HEALTHY',
        region: 'AWS us-east-1 [Multi-AZ]',
        engine: 'Node.js v24.x | NestJS | Go | Redis | PostgreSQL',
        concurrency: 'P99 Latency: < 14ms | TPS: 12,400',
        activeProtocols: 'gRPC • REST • GraphQL • Kafka/RabbitMQ'
      }
    },
    about: {
      eyebrow: 'ENGINEERING PHILOSOPHY',
      title: 'Reliable, Scalable, Zero-Downtime Backends',
      intro: "I am Cesar Bermudez Sierra, a Senior Backend Developer with a deep passion for distributed computing, resilient system architecture, and high-performance server-side engineering.",
      p1: "Over the years, I've designed and scaled systems across banking, fintech, enterprise platforms, and academic environments. My focus goes far beyond writing CRUD endpoints: I tackle race conditions, idempotency, database query optimization, asynchronous job queues, and fault-tolerant cloud infrastructure.",
      p2: "In addition to industry engineering at companies like Globant and Pragma, I have shared knowledge as a Web Technologies instructor at Fundación Universitaria Colombo Internacional (Unicolombo), training future engineers in clean code and modern development standards.",
      principlesTitle: 'Core Backend Principles',
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
      title: 'Battle-Tested Engineering Experience',
      subtitle: 'Driving backend excellence across international consulting, fintech, and high-load web architectures.',
      items: [
        {
          id: 'globant',
          company: 'Globant',
          role: 'Senior Backend Engineer',
          period: '2023 - Present',
          location: 'Remote',
          type: 'Full-Time',
          description: 'Architecting enterprise-scale backend services and cloud integrations for top-tier global clients.',
          achievements: [
            'Architected and implemented high-throughput microservices handling millions of transactions monthly with NestJS and AWS.',
            'Refactored legacy bottlenecks, reducing API response times by up to 45% using Redis caching and database indexing.',
            'Standardized unit and integration test coverage across squads, raising test coverage to >88% with Jest and Supertest.',
            'Mentored junior and mid-level developers in Clean Architecture, Docker containerization, and async queues.'
          ],
          technologies: ['Node.js', 'NestJS', 'TypeScript', 'PostgreSQL', 'Redis', 'Docker', 'AWS', 'Jest']
        },
        {
          id: 'pragma',
          company: 'Pragma',
          role: 'Backend Developer',
          period: '2021 - 2023',
          location: 'Remote / Colombia',
          type: 'Full-Time',
          description: 'Engineered mission-critical microservices and financial transaction flows for banking clients.',
          achievements: [
            'Built resilient banking transaction pipelines with strict concurrency control and automated rollback mechanisms.',
            'Migrated monolithic endpoints into domain-specific serverless and containerized microservices on AWS.',
            'Implemented automated CI/CD deployment pipelines using GitHub Actions and Docker, reducing deployment cycle times by 60%.',
            'Collaborated with frontend and QA teams to design clean RESTful and event-driven interfaces.'
          ],
          technologies: ['TypeScript', 'Node.js', 'Express', 'MySQL', 'MongoDB', 'Docker', 'AWS Lambda', 'Git']
        },
        {
          id: 'unicolombo',
          company: 'Fundación Universitaria Colombo Internacional (Unicolombo)',
          role: 'Web Technologies Instructor & Academic Contributor',
          period: '2020 - 2022',
          location: 'Cartagena, Colombia',
          type: 'Academic / Engineering',
          description: 'Taught modern web architectures, backend technologies, and software engineering methodologies.',
          achievements: [
            'Designed and instructed the curriculum for server-side architecture, relational databases, and RESTful APIs.',
            'Developed the academic tracking and binnacle backend platform (binnacle_back_unicolombo) for the university.',
            'Guided over 100+ students in software engineering best practices, Git collaboration, and automated testing.'
          ],
          technologies: ['JavaScript', 'TypeScript', 'Node.js', 'MySQL', 'Clean Architecture', 'REST APIs']
        },
        {
          id: 'go-digital',
          company: 'Go Digital & Simbiotica Ltda',
          role: 'Software Developer',
          period: '2019 - 2021',
          location: 'Cartagena, Colombia',
          type: 'Full-Time',
          description: 'Engineered full-stack and backend solutions for commercial products and internal management platforms.',
          achievements: [
            'Developed RESTful API backends powering inventory, authentication, and reporting platforms.',
            'Optimized SQL queries and schema normalization, decreasing latency on heavy analytic reports.',
            'Delivered secure JWT authentication, role-based access control (RBAC), and third-party webhook integrations.'
          ],
          technologies: ['Node.js', 'Express', 'MySQL', 'MongoDB', 'JavaScript', 'Postman']
        }
      ]
    },
    skills: {
      eyebrow: 'TECH STACK & EXPERTISE',
      title: 'Tools of the Trade',
      subtitle: 'A specialized backend engineering toolkit honed over years of production workloads.',
      filterAll: 'All Technologies',
      filterLanguages: 'Languages & Core',
      filterFrameworks: 'Frameworks & Runtimes',
      filterDatabases: 'Databases & Caching',
      filterCloud: 'Cloud, DevOps & Infra',
      filterArch: 'Architecture & Patterns'
    },
    architecture: {
      eyebrow: 'INTERACTIVE SYSTEM PLAYGROUND',
      title: 'Live API & Pipeline Simulator',
      subtitle: 'Simulate how backend requests traverse authentication, caching, message brokers, and transactional databases in real time.',
      selectEndpoint: 'Select Endpoint to Execute:',
      sendRequest: 'Dispatch Request',
      statusLabel: 'Status Code',
      latencyLabel: 'Latency',
      stepByStep: 'Request Execution Pipeline',
      responsePayload: 'Response JSON',
      completed: 'Executed in',
      authStep: 'Auth Guard & JWT Verification',
      rateStep: 'Token Bucket Rate Limiter (Redis)',
      cacheStep: 'Distributed Cache Layer (Cache-Aside)',
      logicStep: 'Domain Logic & Event Bus Publish',
      dbStep: 'PostgreSQL ACID Transaction'
    },
    projects: {
      eyebrow: 'SELECTED PORTFOLIO',
      title: 'Featured Backend Projects',
      subtitle: 'Real-world architectures and open-source systems highlighting performance, security, and scalability.',
      viewCode: 'View on GitHub',
      liveDemo: 'Live Service',
      highlightsTitle: 'Key Architecture Highlights:',
      items: [
        {
          id: 'banking-transaction',
          title: 'High-Throughput Banking & Transaction Engine',
          category: 'Distributed Systems / Fintech',
          description: 'A resilient transactional engine designed for financial operations, featuring two-phase commits, concurrency locks, and idempotency guarantees to prevent double-spending.',
          architectureHighlights: [
            'Distributed lock management with Redis to avoid race conditions during concurrent balance transfers',
            'Idempotency key enforcement to safely handle retried network requests',
            'Full transactional audit log and ACID guarantees backed by PostgreSQL with isolation levels'
          ],
          metrics: 'Sub-18ms latency • 100% ACID Compliance',
          tags: ['TypeScript', 'NestJS', 'PostgreSQL', 'Redis', 'Docker', 'Jest'],
          githubUrl: 'https://github.com/Cbermudez98/banking_transaction',
          icon: 'shield'
        },
        {
          id: 'gym-store',
          title: 'Event-Driven E-Commerce & Store Platform',
          category: 'Microservices / Event-Driven',
          description: 'A modular backend platform for retail and inventory synchronization, powered by asynchronous event publishing, inventory reservation, and role-based access control.',
          architectureHighlights: [
            'Decoupled order and payment processing via asynchronous message broker',
            'JWT + Refresh Token rotation security pattern with Redis session invalidation',
            'Containerized multi-service deployment with Docker Compose orchestration'
          ],
          metrics: '99.9% Uptime • Zero Data Loss on Disconnects',
          tags: ['Node.js', 'Express', 'MongoDB', 'Docker', 'JWT', 'REST API'],
          githubUrl: 'https://github.com/Cbermudez98/gym_store',
          icon: 'server'
        },
        {
          id: 'fastapi-microservice',
          title: 'High-Performance Python Async Microservice',
          category: 'Python / Cloud Native',
          description: 'Asynchronous microservice utilizing FastAPI and async database drivers for high-concurrency tasks, automated OpenAPI documentation, and containerized deployment.',
          architectureHighlights: [
            'Non-blocking async I/O pipeline supporting thousands of concurrent worker connections',
            'Automated Pydantic validation and strict schema enforcement',
            'Integrated health checks, Prometheus metric scrapers, and Docker multi-stage builds'
          ],
          metrics: '10k+ Concurrent Connections • Low Memory Footprint',
          tags: ['Python', 'FastAPI', 'PostgreSQL', 'AsyncIO', 'Docker', 'Pytest'],
          githubUrl: 'https://github.com/Cbermudez98/todo_fast_api',
          icon: 'zap'
        },
        {
          id: 'binnacle-unicolombo',
          title: 'Academic Tracking Platform Backend',
          category: 'Enterprise / Academic System',
          description: 'Enterprise backend platform powering academic auditing, student logging, and administrative workflows with granular RBAC permissions.',
          architectureHighlights: [
            'Clean Architecture layout separating domain entities from infrastructure adapters',
            'Automated relational schema migrations and multi-tenant isolation',
            'Export pipelines for streaming large CSV and PDF reports with low RAM overhead'
          ],
          metrics: 'Serving 5,000+ university users',
          tags: ['TypeScript', 'Node.js', 'MySQL', 'Clean Architecture', 'Jest'],
          githubUrl: 'https://github.com/Cbermudez98/binnacle_back_unicolombo',
          icon: 'database'
        },
        {
          id: 'vicpimar-api',
          title: 'Vicpimar Commercial RESTful API',
          category: 'Commercial Backend',
          description: 'Robust API backend for commercial logistics, order management, customer interactions, and multi-channel notification dispatches.',
          architectureHighlights: [
            'REST API with hypermedia principles and standardized error envelope formatting',
            'Data indexing and aggregation pipelines with MongoDB for fast inventory lookups',
            'Production cloud hosting with secure HTTPS, CORS controls, and rate limits'
          ],
          metrics: 'Zero security incidents • 99.95% API Availability',
          tags: ['TypeScript', 'Express', 'MongoDB', 'AWS', 'Security'],
          githubUrl: 'https://github.com/Cbermudez98/apirest_vicpimar',
          icon: 'layers'
        },
        {
          id: 'testing-framework',
          title: 'Backend Testing & Resilience Harness',
          category: 'DevOps / QA Automation',
          description: 'A suite of backend testing patterns, integration test harness, and load simulation scripts to guarantee API resilience before production rollout.',
          architectureHighlights: [
            'End-to-end integration test runners mocking external payment gateways and third-party APIs',
            'Database container spin-up with testcontainers for isolated test environments',
            'Continuous integration pipelines verifying contracts and preventing regressions'
          ],
          metrics: 'Automated CI runs in < 45 seconds',
          tags: ['JavaScript', 'Jest', 'Supertest', 'CI/CD', 'Docker'],
          githubUrl: 'https://github.com/Cbermudez98/testing-library',
          icon: 'activity'
        }
      ]
    },
    contact: {
      eyebrow: 'CONNECT WITH ME',
      title: "Let's Build Something Resilient Together",
      subtitle: 'Currently available for Senior Backend Developer, Tech Lead, or Distributed Systems roles (Remote worldwide or Hybrid).',
      emailLabel: 'Direct Email',
      linkedinLabel: 'LinkedIn Profile',
      githubLabel: 'GitHub Repositories',
      locationLabel: 'Location',
      locationValue: 'Cartagena, Colombia (UTC-5) • Global Remote',
      copyEmail: 'Copy Email',
      emailCopied: 'Copied to Clipboard!',
      form: {
        name: 'Your Name',
        namePlaceholder: 'e.g. John Doe / Tech Recruiter',
        email: 'Your Email',
        emailPlaceholder: 'e.g. hiring@company.com',
        subject: 'Subject',
        subjectPlaceholder: 'Senior Backend Role / Architecture Project',
        message: 'Message',
        messagePlaceholder: 'Hi Cesar, we would love to discuss an engineering opportunity with you...',
        submit: 'Send Message',
        sending: 'Dispatching Message...',
        success: 'Thank you! Your message has been prepared. You can also contact me directly via LinkedIn or email.',
        requiredError: 'This field is required.',
        emailError: 'Please enter a valid email address.'
      }
    },
    footer: {
      bio: 'Senior Backend Developer specialized in high-performance distributed systems, microservices, cloud infrastructure, and clean architecture.',
      quickLinks: 'Navigation',
      socials: 'Connect',
      status: 'All systems operational • 99.99% uptime',
      copyright: 'Cesar Bermudez Sierra. Built with Angular 21, TypeScript & SCSS.',
      designedFor: 'Crafted with dark aesthetic and modern engineering practices.'
    }
  },
  es: {
    nav: {
      about: 'Sobre Mí',
      experience: 'Experiencia',
      skills: 'Habilidades',
      architecture: 'Diseño de Sistemas',
      projects: 'Proyectos',
      contact: 'Contacto',
      resume: 'Currículum',
      switchLang: 'EN',
      currentLangLabel: 'Español',
      statusAvailable: 'Disponible para Roles Senior Backend'
    },
    hero: {
      availableBadge: 'Disponible para Roles Senior Backend & Tech Lead',
      location: 'Cartagena, Colombia • Remoto Global',
      role: 'Senior Backend Developer',
      tagline: 'Arquitectura de Sistemas Distribuidos de Alto Rendimiento e Infraestructura Cloud Resiliente',
      description: 'Especializado en diseñar microservicios de misión crítica, APIs de baja latencia, arquitecturas orientadas a eventos y bases de datos escalables con Node.js, NestJS, Go, Python y AWS.',
      ctaProjects: 'Explorar Arquitectura y Código',
      ctaPlayground: 'Playground Interactivo de APIs',
      ctaContact: 'Contáctame',
      stats: {
        experience: 'Años de Experiencia',
        availability: 'Enfoque en Disponibilidad',
        throughput: 'Peticiones Procesadas al Día',
        services: 'Microservicios en Producción'
      },
      terminal: {
        title: 'cesar@backend-cluster ~ node system-probe.js',
        status: 'ESTADO_DEL_SISTEMA: SALUDABLE (200 OK)',
        region: 'AWS us-east-1 [Multi-AZ]',
        engine: 'Node.js v24.x | NestJS | Go | Redis | PostgreSQL',
        concurrency: 'Latencia P99: < 14ms | TPS: 12,400',
        activeProtocols: 'gRPC • REST • GraphQL • Kafka/RabbitMQ'
      }
    },
    about: {
      eyebrow: 'FILOSOFÍA DE INGENIERÍA',
      title: 'Backends Confiables, Escalables y Sin Caídas',
      intro: 'Soy Cesar Bermudez Sierra, Desarrollador Backend Senior con profunda pasión por la computación distribuida, la arquitectura de sistemas tolerantes a fallos y la ingeniería de servidores de alto desempeño.',
      p1: 'A lo largo de los años he diseñado y escalado sistemas en el sector bancario, fintech, plataformas corporativas y entornos académicos. Mi enfoque va más allá de simples endpoints CRUD: resuelvo condiciones de carrera, idempotencia, optimización de queries complejas, colas asíncronas e infraestructura cloud resiliente.',
      p2: 'Además de mi experiencia en la industria en empresas como Globant y Pragma, he impartido conocimientos como Docente de Tecnologías Web en la Fundación Universitaria Colombo Internacional (Unicolombo), formando a nuevas generaciones de ingenieros en clean code y estándares modernos.',
      principlesTitle: 'Principios Fundamentales de Backend',
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
      title: 'Experiencia Probada en Producción',
      subtitle: 'Impulsando excelencia backend en consultoría internacional, fintech y arquitecturas web de alta demanda.',
      items: [
        {
          id: 'globant',
          company: 'Globant',
          role: 'Senior Backend Engineer',
          period: '2023 - Presente',
          location: 'Remoto',
          type: 'Tiempo Completo',
          description: 'Diseño de servicios backend de escala empresarial e integraciones cloud para clientes internacionales de primer nivel.',
          achievements: [
            'Diseño e implementación de microservicios de alto tráfico procesando millones de transacciones mensuales con NestJS y AWS.',
            'Refactorización de cuellos de botella heredados, reduciendo los tiempos de respuesta de APIs hasta en un 45% mediante caché Redis e indexación.',
            'Estandarización de cobertura de pruebas unitarias e integrales en los squads, elevando la cobertura a >88% con Jest y Supertest.',
            'Mentoría a desarrolladores junior y semi-senior en Clean Architecture, contenedores Docker y colas asíncronas.'
          ],
          technologies: ['Node.js', 'NestJS', 'TypeScript', 'PostgreSQL', 'Redis', 'Docker', 'AWS', 'Jest']
        },
        {
          id: 'pragma',
          company: 'Pragma',
          role: 'Backend Developer',
          period: '2021 - 2023',
          location: 'Remoto / Colombia',
          type: 'Tiempo Completo',
          description: 'Ingeniería de microservicios de misión crítica y flujos transaccionales bancarios.',
          achievements: [
            'Construcción de pipelines transaccionales bancarios con estricto control de concurrencia y mecanismos automáticos de rollback.',
            'Migración de endpoints monolíticos hacia microservicios serverless y en contenedores en AWS.',
            'Implementación de pipelines automatizados de CI/CD con GitHub Actions y Docker, reduciendo el ciclo de despliegue en un 60%.',
            'Colaboración activa con equipos de frontend y QA para diseñar contratos REST y basados en eventos consistentes.'
          ],
          technologies: ['TypeScript', 'Node.js', 'Express', 'MySQL', 'MongoDB', 'Docker', 'AWS Lambda', 'Git']
        },
        {
          id: 'unicolombo',
          company: 'Fundación Universitaria Colombo Internacional (Unicolombo)',
          role: 'Docente de Tecnologías Web & Colaborador Académico',
          period: '2020 - 2022',
          location: 'Cartagena, Colombia',
          type: 'Académico / Ingeniería',
          description: 'Enseñanza de arquitectura web moderna, tecnologías de servidor y metodologías de ingeniería de software.',
          achievements: [
            'Diseño y ejecución del plan de estudios de arquitectura backend, bases de datos relacionales y APIs REST.',
            'Desarrollo de la plataforma backend de bitácora y seguimiento académico (binnacle_back_unicolombo) para la universidad.',
            'Capacitación de más de 100 estudiantes en buenas prácticas de desarrollo, colaboración con Git y testing automatizado.'
          ],
          technologies: ['JavaScript', 'TypeScript', 'Node.js', 'MySQL', 'Clean Architecture', 'REST APIs']
        },
        {
          id: 'go-digital',
          company: 'Go Digital & Simbiotica Ltda',
          role: 'Software Developer',
          period: '2019 - 2021',
          location: 'Cartagena, Colombia',
          type: 'Tiempo Completo',
          description: 'Desarrollo de soluciones backend y full-stack para productos comerciales y plataformas de gestión interna.',
          achievements: [
            'Desarrollo de APIs RESTful para plataformas de inventario, autenticación y generación de reportes.',
            'Optimización de consultas SQL y normalización de esquemas, disminuyendo la latencia en reportes analíticos pesados.',
            'Implementación de autenticación segura con JWT, control de acceso basado en roles (RBAC) e integración de webhooks.'
          ],
          technologies: ['Node.js', 'Express', 'MySQL', 'MongoDB', 'JavaScript', 'Postman']
        }
      ]
    },
    skills: {
      eyebrow: 'STACK TECNOLÓGICO Y HABILIDADES',
      title: 'Herramientas y Tecnologías',
      subtitle: 'Un arsenal técnico especializado en backend forjado en sistemas de alta exigencia.',
      filterAll: 'Todas las Tecnologías',
      filterLanguages: 'Lenguajes y Core',
      filterFrameworks: 'Frameworks y Runtimes',
      filterDatabases: 'Bases de Datos y Caché',
      filterCloud: 'Cloud, DevOps e Infra',
      filterArch: 'Arquitectura y Patrones'
    },
    architecture: {
      eyebrow: 'PLAYGROUND INTERACTIVO DE SISTEMAS',
      title: 'Simulador de APIs y Pipeline en Vivo',
      subtitle: 'Observa en tiempo real cómo viaja una petición backend por las capas de autenticación, caché, cola de mensajes y base de datos relacional.',
      selectEndpoint: 'Selecciona un Endpoint para Ejecutar:',
      sendRequest: 'Disparar Petición',
      statusLabel: 'Código de Estado',
      latencyLabel: 'Latencia',
      stepByStep: 'Pipeline de Ejecución del Backend',
      responsePayload: 'Respuesta JSON',
      completed: 'Completado en',
      authStep: 'Guardia de Autenticación & Verificación JWT',
      rateStep: 'Limitador de Tasa Token Bucket (Redis)',
      cacheStep: 'Capa de Caché Distribuida (Cache-Aside)',
      logicStep: 'Lógica de Dominio y Publicación en Bus de Eventos',
      dbStep: 'Transacción ACID en PostgreSQL'
    },
    projects: {
      eyebrow: 'PROYECTOS DESTACADOS',
      title: 'Proyectos Backend Seleccionados',
      subtitle: 'Arquitecturas del mundo real y sistemas de código abierto que destacan rendimiento, seguridad y escalabilidad.',
      viewCode: 'Ver en GitHub',
      liveDemo: 'Servicio en Vivo',
      highlightsTitle: 'Aspectos Clave de Arquitectura:',
      items: [
        {
          id: 'banking-transaction',
          title: 'Motor Transaccional y Bancario de Alta Disponibilidad',
          category: 'Sistemas Distribuidos / Fintech',
          description: 'Motor transaccional diseñado para operaciones financieras críticas, con bloqueos de concurrencia, idempotencia y auditoría para prevenir doble gasto.',
          architectureHighlights: [
            'Gestión de bloqueos distribuidos con Redis para prevenir condiciones de carrera en transferencias concurrentes',
            'Aplicación estricta de claves de idempotencia para soportar reintentos de red sin duplicaciones',
            'Registro completo de auditoría transaccional con garantías ACID en PostgreSQL'
          ],
          metrics: 'Latencia < 18ms • Cumplimiento ACID 100%',
          tags: ['TypeScript', 'NestJS', 'PostgreSQL', 'Redis', 'Docker', 'Jest'],
          githubUrl: 'https://github.com/Cbermudez98/banking_transaction',
          icon: 'shield'
        },
        {
          id: 'gym-store',
          title: 'Plataforma de E-Commerce y Almacén Orientada a Eventos',
          category: 'Microservicios / Event-Driven',
          description: 'Plataforma backend modular para sincronización de inventarios y ventas, impulsada por publicación de eventos asíncronos y autenticación robusta.',
          architectureHighlights: [
            'Desacoplamiento del procesamiento de órdenes y pagos mediante colas asíncronas',
            'Seguridad JWT con rotación de Refresh Tokens y revocación inmediata en Redis',
            'Despliegue multi-servicio orquestado con Docker Compose'
          ],
          metrics: '99.9% Uptime • Cero Pérdida de Datos en Desconexiones',
          tags: ['Node.js', 'Express', 'MongoDB', 'Docker', 'JWT', 'REST API'],
          githubUrl: 'https://github.com/Cbermudez98/gym_store',
          icon: 'server'
        },
        {
          id: 'fastapi-microservice',
          title: 'Microservicio Asíncrono de Alto Desempeño en Python',
          category: 'Python / Cloud Native',
          description: 'Microservicio con FastAPI y drivers asíncronos para tareas de alta concurrencia, documentación OpenAPI automática y empaquetado Docker.',
          architectureHighlights: [
            'Pipeline de E/S no bloqueante que gestiona miles de conexiones concurrentes de workers',
            'Validación automatizada de tipos y esquemas estrictos con Pydantic',
            'Health checks integrados, métricas para Prometheus y Docker multi-stage'
          ],
          metrics: '+10,000 Conexiones Concurrentes • Mínimo Consumo de RAM',
          tags: ['Python', 'FastAPI', 'PostgreSQL', 'AsyncIO', 'Docker', 'Pytest'],
          githubUrl: 'https://github.com/Cbermudez98/todo_fast_api',
          icon: 'zap'
        },
        {
          id: 'binnacle-unicolombo',
          title: 'Backend de Plataforma de Auditoría y Bitácora Académica',
          category: 'Sistema Empresarial / Académico',
          description: 'Plataforma empresarial para auditoría académica, bitácora de estudiantes y flujos administrativos con permisos granulares RBAC.',
          architectureHighlights: [
            'Estructura Clean Architecture desacoplando entidades de negocio de adaptadores de infraestructura',
            'Migraciones relacionales automatizadas y partición de datos multi-inquilino',
            'Pipelines de streaming para exportación de reportes CSV y PDF de gran volumen sin saturar memoria'
          ],
          metrics: 'Atendiendo a más de 5,000 usuarios universitarios',
          tags: ['TypeScript', 'Node.js', 'MySQL', 'Clean Architecture', 'Jest'],
          githubUrl: 'https://github.com/Cbermudez98/binnacle_back_unicolombo',
          icon: 'database'
        },
        {
          id: 'vicpimar-api',
          title: 'API RESTful Comercial Vicpimar',
          category: 'Backend Comercial',
          description: 'Backend para logística comercial, administración de inventarios, gestión de clientes y despacho de notificaciones multicanal.',
          architectureHighlights: [
            'API REST con principios hipermedia y estructura estandarizada de respuestas de error',
            'Indexación y agregaciones en MongoDB para búsquedas ultrarrápidas de catálogo',
            'Alojamiento cloud con HTTPS forzado, políticas CORS y limitación de tasa'
          ],
          metrics: 'Cero incidentes de seguridad • 99.95% Disponibilidad',
          tags: ['TypeScript', 'Express', 'MongoDB', 'AWS', 'Security'],
          githubUrl: 'https://github.com/Cbermudez98/apirest_vicpimar',
          icon: 'layers'
        },
        {
          id: 'testing-framework',
          title: 'Suite de Resiliencia y Pruebas Automatizadas Backend',
          category: 'DevOps / Automatización QA',
          description: 'Conjunto de patrones de prueba, arnés de integración y simuladores de carga para garantizar la resiliencia de servicios antes de salir a producción.',
          architectureHighlights: [
            'Ejecutores de pruebas end-to-end con mocks de pasarelas de pago y APIs externas',
            'Levantamiento dinámico de bases de datos de prueba en contenedores aislados',
            'Pipelines de integración continua verificando contratos para evitar regresiones'
          ],
          metrics: 'Ejecución automatizada en CI en menos de 45 segundos',
          tags: ['JavaScript', 'Jest', 'Supertest', 'CI/CD', 'Docker'],
          githubUrl: 'https://github.com/Cbermudez98/testing-library',
          icon: 'activity'
        }
      ]
    },
    contact: {
      eyebrow: 'CONTÁCTAME',
      title: 'Construyamos Algo Resiliente y Escalable',
      subtitle: 'Actualmente disponible para roles como Senior Backend Developer, Tech Lead o Ingeniero de Sistemas Distribuidos (Remoto mundial o Híbrido).',
      emailLabel: 'Correo Directo',
      linkedinLabel: 'Perfil de LinkedIn',
      githubLabel: 'Repositorios en GitHub',
      locationLabel: 'Ubicación',
      locationValue: 'Cartagena, Colombia (UTC-5) • Remoto Global',
      copyEmail: 'Copiar Correo',
      emailCopied: '¡Copiado al Portapapeles!',
      form: {
        name: 'Tu Nombre',
        namePlaceholder: 'Ej. Juan Pérez / Tech Recruiter',
        email: 'Tu Correo',
        emailPlaceholder: 'Ej. hiring@empresa.com',
        subject: 'Asunto',
        subjectPlaceholder: 'Rol Senior Backend / Proyecto de Arquitectura',
        message: 'Mensaje',
        messagePlaceholder: 'Hola Cesar, nos gustaría conversar sobre una oportunidad de ingeniería...',
        submit: 'Enviar Mensaje',
        sending: 'Enviando Mensaje...',
        success: '¡Muchas gracias! Tu mensaje ha sido preparado. También puedes escribirme directamente por LinkedIn o correo.',
        requiredError: 'Este campo es obligatorio.',
        emailError: 'Por favor ingresa un correo válido.'
      }
    },
    footer: {
      bio: 'Desarrollador Backend Senior especializado en sistemas distribuidos de alto rendimiento, microservicios, infraestructura cloud y arquitectura limpia.',
      quickLinks: 'Navegación',
      socials: 'Conectar',
      status: 'Todos los sistemas operativos • 99.99% disponibilidad',
      copyright: 'Cesar Bermudez Sierra. Desarrollado con Angular 21, TypeScript y SCSS.',
      designedFor: 'Diseñado con estética oscura y buenas prácticas de ingeniería.'
    }
  }
};

export type TranslationsType = typeof translations.en;
