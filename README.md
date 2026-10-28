# Cesar Bermudez Sierra - Senior Backend Developer Portfolio

A modern, high-performance developer portfolio built with **Angular 21 (Latest)**, TypeScript, and SCSS, tailored for a **Senior Backend Developer**.

## 🌟 Key Features

- **Angular 21 Latest**: Standalone components, modern `@if` / `@for` control flow, Signals (`signal`, `computed`, `effect`), and OnPush change detection.
- **Bilingual (English & Spanish)**: Automatic browser language detection with English fallback (`es` if browser language is Spanish, else `en`), instant reactive toggle with persistence in `localStorage`.
- **Engineering Dark Theme**: Sleek cyber-terminal aesthetic with deep slate/carbon surfaces (`#07090e`), glowing cyan (`#38bdf8`) & emerald (`#10b981`) accents, glassmorphic cards, and JetBrains Mono monospace typography.
- **Interactive System Architecture & API Playground**: Visitors can trigger live backend simulations (e.g. `POST /api/v1/payments/transfer`, `GET /api/v1/system/health`, `GET /api/v1/cache/cluster-stats`) and watch the execution pipeline progress across Token Bucket Rate Limiter, JWT Auth Guard, Distributed Lock, PostgreSQL ACID transaction, and RabbitMQ Event Bus with real-time latency and JSON formatting.
- **Battle-Tested Experience Showcase**: Detailed roles and impact across **Globant**, **Pragma**, **Fundación Universitaria Colombo Internacional (Unicolombo)**, and **Go Digital / Simbiotica**.
- **Production Projects Grid**: Direct links to Cesar's open-source repositories (`banking_transaction`, `gym_store`, `todo_fast_api`, `binnacle_back_unicolombo`, `apirest_vicpimar`, `testing-library`).
- **Interactive Contact Section**: Direct email copy-to-clipboard, LinkedIn profile link (`/in/cesar-bermudez-sierra/`), GitHub (`@Cbermudez98`), and client-side validated contact form.

## 🚀 Getting Started

### Prerequisites

- Node.js (v20+ or v24+ recommended)
- npm (v10+ or v11+)

### Development Server

Run `npm start` or:

```bash
ng serve
```

Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

### Build

To build the project for production:

```bash
npm run build
```

The build artifacts will be stored in the `dist/backend-portfolio` directory.

### Running Tests

To run the unit test suite:

```bash
npm test
```

## 📁 Project Structure

```text
src/
├── app/
│   ├── core/
│   │   ├── i18n/
│   │   │   └── translations.ts            # English & Spanish complete copy
│   │   ├── models/
│   │   │   └── portfolio.model.ts         # Strongly-typed data models
│   │   └── services/
│   │       ├── i18n.service.ts            # Browser detection & language switcher
│   │       └── portfolio-data.service.ts  # Experience, projects & API simulations
│   ├── features/
│   │   ├── navbar/                        # Frosted glass nav, lang toggle, socials
│   │   ├── hero/                          # Hero header, metrics & terminal probe
│   │   ├── about/                         # Bio, philosophy & engineering principles
│   │   ├── experience/                    # Timeline (Globant, Pragma, Unicolombo)
│   │   ├── skills/                        # Filterable tech stack matrix
│   │   ├── architecture-demo/             # Interactive API pipeline playground
│   │   ├── projects/                      # Featured backend projects & repo links
│   │   ├── contact/                       # Contact channels & validated message form
│   │   └── footer/                        # Status indicator & links
│   ├── shared/
│   │   └── components/
│   │       └── icon/                      # Sanitized SVG icon system
│   ├── app.ts                             # Main root component
│   ├── app.html                           # Root layout
│   └── app.scss                           # Root styles
├── styles.scss                            # Global design system & theme variables
└── index.html                             # Entry point, fonts & SEO meta tags
```
