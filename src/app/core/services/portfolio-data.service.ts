import { Injectable } from '@angular/core';
import { SkillItem, ApiEndpointSimulation } from '../models/portfolio.model';

@Injectable({
  providedIn: 'root'
})
export class PortfolioDataService {
  public readonly personalInfo = {
    name: 'Cesar Bermudez Sierra',
    handle: 'Cbermudez98',
    email: 'cesar.bermudez.dev@gmail.com',
    linkedin: 'https://www.linkedin.com/in/cesar-bermudez-sierra/',
    github: 'https://github.com/Cbermudez98',
    devto: 'https://dev.to/cesar-bermudez-sierra',
    location: 'Cartagena, Colombia',
    role: 'Senior Backend Developer',
    yearsOfExperience: '6+',
    resumePdfUrl: '#contact'
  };

  public readonly skills: SkillItem[] = [
    // Languages
    { name: 'TypeScript', category: 'languages', proficiency: 95, featured: true, icon: 'code' },
    { name: 'JavaScript / Node.js', category: 'languages', proficiency: 95, featured: true, icon: 'server' },
    { name: 'Go (Golang)', category: 'languages', proficiency: 85, featured: true, icon: 'zap' },
    { name: 'Python', category: 'languages', proficiency: 82, featured: true, icon: 'code' },
    { name: 'SQL (PostgreSQL / MySQL)', category: 'languages', proficiency: 92, featured: true, icon: 'database' },

    // Frameworks & Runtimes
    { name: 'NestJS', category: 'frameworks', proficiency: 95, featured: true, icon: 'layers' },
    { name: 'Express.js', category: 'frameworks', proficiency: 92, featured: false, icon: 'server' },
    { name: 'FastAPI', category: 'frameworks', proficiency: 84, featured: true, icon: 'zap' },
    { name: 'Angular (Latest)', category: 'frameworks', proficiency: 80, featured: false, icon: 'code' },

    // Databases & Caching
    { name: 'PostgreSQL', category: 'databases', proficiency: 94, featured: true, icon: 'database' },
    { name: 'Redis', category: 'databases', proficiency: 92, featured: true, icon: 'cpu' },
    { name: 'MySQL', category: 'databases', proficiency: 90, featured: false, icon: 'database' },
    { name: 'MongoDB', category: 'databases', proficiency: 88, featured: false, icon: 'database' },
    { name: 'Prisma / TypeORM', category: 'databases', proficiency: 90, featured: false, icon: 'layers' },

    // Cloud & Infra
    { name: 'AWS (ECS, Lambda, RDS, S3)', category: 'cloud', proficiency: 88, featured: true, icon: 'cloud' },
    { name: 'Docker & Compose', category: 'cloud', proficiency: 92, featured: true, icon: 'server' },
    { name: 'Kubernetes Basics', category: 'cloud', proficiency: 75, featured: false, icon: 'cloud' },
    { name: 'GitHub Actions / CI/CD', category: 'cloud', proficiency: 88, featured: true, icon: 'activity' },
    { name: 'Nginx & Reverse Proxies', category: 'cloud', proficiency: 84, featured: false, icon: 'shield' },

    // Architecture & Practices
    { name: 'Microservices Architecture', category: 'architecture', proficiency: 95, featured: true, icon: 'layers' },
    { name: 'Event-Driven (RabbitMQ / Kafka)', category: 'architecture', proficiency: 88, featured: true, icon: 'zap' },
    { name: 'Clean Architecture / Hexagonal', category: 'architecture', proficiency: 94, featured: true, icon: 'shield' },
    { name: 'Domain-Driven Design (DDD)', category: 'architecture', proficiency: 88, featured: true, icon: 'layers' },
    { name: 'High Concurrency & Idempotency', category: 'architecture', proficiency: 92, featured: true, icon: 'cpu' },
    { name: 'Jest / TDD & Integration Tests', category: 'architecture', proficiency: 90, featured: true, icon: 'activity' }
  ];

  public readonly endpointSimulations: ApiEndpointSimulation[] = [
    {
      id: 'transfer',
      method: 'POST',
      path: '/api/v1/payments/transfer',
      description: 'Executes a balance transfer with distributed lock, idempotency key verification, and transactional ledger update.',
      samplePayload: {
        idempotencyKey: 'idem_9a7f82b1c3e0',
        senderAccountId: 'acc_01HKR5',
        recipientAccountId: 'acc_02MNT8',
        amount: 2500.00,
        currency: 'USD',
        memo: 'Q3 Vendor Settlement'
      },
      sampleResponse: {
        statusCode: 201,
        success: true,
        data: {
          transactionId: 'txn_live_83719482',
          status: 'COMMITTED',
          settledAt: '2026-10-28T18:00:00.124Z',
          balanceSnapshot: {
            previous: 18450.00,
            current: 15950.00,
            currency: 'USD'
          },
          auditTraceId: 'trc_us_east_1_902'
        },
        meta: {
          distributedLockAcquired: true,
          executionTimeMs: 14.8,
          idempotencyEnforced: true
        }
      },
      pipelineSteps: [
        { name: 'API Gateway & Rate Limiter', description: 'Token Bucket algorithm checks client quota in Redis (998/1000 remaining)', latencyMs: 2 },
        { name: 'JWT Auth & Role Guard', description: 'Cryptographic token signature verification & RBAC permissions check', latencyMs: 3 },
        { name: 'Distributed Lock Acquisition', description: 'Acquires Redis Redlock on sender account mutex (ttl: 1500ms)', latencyMs: 4 },
        { name: 'PostgreSQL ACID Transaction', description: 'Debit sender, credit recipient, write audit ledger log in single atomic block', latencyMs: 5 },
        { name: 'Event Bus Dispatch', description: 'Publishes "transaction.settled" event to RabbitMQ fanout exchange', latencyMs: 1 }
      ]
    },
    {
      id: 'health',
      method: 'GET',
      path: '/api/v1/system/health',
      description: 'Deep health probe reporting database pool capacity, cache connectivity, and memory metrics.',
      sampleResponse: {
        status: 'UP',
        timestamp: '2026-10-28T18:00:02.000Z',
        uptimeSeconds: 849203,
        components: {
          database: { status: 'HEALTHY', poolActive: 14, poolMax: 50, latencyMs: 1.8 },
          redisCache: { status: 'HEALTHY', clusterNodes: 3, memoryUsed: '142MB', hitRate: '96.4%' },
          eventBroker: { status: 'HEALTHY', queuesActive: 8, consumerLag: 0 }
        },
        server: {
          runtime: 'Node.js v24.13.0',
          memoryRss: '118MB',
          cpuLoadPercent: 4.2
        }
      },
      pipelineSteps: [
        { name: 'Edge Reverse Proxy', description: 'Nginx receives TLS termination, forwards to Node cluster upstream', latencyMs: 1 },
        { name: 'Health Probe Handler', description: 'Executes parallel ping across Postgres, Redis, and message broker', latencyMs: 2 },
        { name: 'Metric Aggregation', description: 'Gathers RSS memory and CPU load from OS kernel stats', latencyMs: 1 }
      ]
    },
    {
      id: 'metrics',
      method: 'GET',
      path: '/api/v1/cache/cluster-stats',
      description: 'Returns distributed cache telemetry, hit/miss ratios, key eviction metrics, and memory pressure.',
      sampleResponse: {
        engine: 'Redis 7.2 Cluster [Multi-AZ]',
        metrics: {
          hitRatePercentage: 97.3,
          totalHits: 4182930,
          totalMisses: 116240,
          connectedClients: 84,
          opsPerSec: 14200,
          evictionPolicy: 'volatile-lru',
          evictionsLastHour: 0
        },
        hotKeysSample: [
          'user:session:auth_*',
          'catalog:inventory:sku_*',
          'rate_limit:ip_*'
        ]
      },
      pipelineSteps: [
        { name: 'API Guard', description: 'Internal admin token validation', latencyMs: 2 },
        { name: 'Redis INFO Command', description: 'Queries Redis nodes for telemetry snapshots', latencyMs: 3 },
        { name: 'Response Serialization', description: 'Transforms raw dictionary into standardized JSON contract', latencyMs: 1 }
      ]
    },
    {
      id: 'events',
      method: 'POST',
      path: '/api/v1/events/publish',
      description: 'Publishes an event to the distributed message broker with schema validation and dead-letter fallback.',
      samplePayload: {
        topic: 'orders.v1.created',
        aggregateId: 'ord_91820491',
        payload: {
          customerId: 'usr_38472',
          itemCount: 4,
          totalAmount: 189.50
        }
      },
      sampleResponse: {
        statusCode: 202,
        status: 'ACCEPTED',
        message: 'Event accepted into broker pipeline',
        dispatchDetails: {
          exchange: 'domain_events_topic',
          routingKey: 'orders.v1.created',
          messageId: 'msg_f738a9e201b',
          partition: 2,
          replicated: true
        }
      },
      pipelineSteps: [
        { name: 'Schema Validation', description: 'Validates JSON event payload against JSON Schema definition', latencyMs: 2 },
        { name: 'Broker Channel Publish', description: 'Pushes payload with confirmation ack to RabbitMQ / Kafka', latencyMs: 3 },
        { name: 'Outbox Pattern Logging', description: 'Persists dispatched event record in Postgres outbox table for audit', latencyMs: 3 }
      ]
    }
  ];
}
