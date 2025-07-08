# NLW Agents

This is the backend server for **NLW Agents**, developed during a Rocketseat event. The project provides a simple API for managing rooms, using modern TypeScript, Fastify, and Drizzle ORM with a PostgreSQL database.

## 🛠️ Tech Stack

- **Node.js** with **TypeScript**
- **Fastify**: High-performance HTTP server
- **Drizzle ORM**: Type-safe SQL ORM for PostgreSQL
- **PostgreSQL** (with [pgvector](https://github.com/pgvector/pgvector) extension)
- **Zod**: Runtime schema validation
- **Docker**: For local database setup
- **Biome**: Linting and formatting

## 📁 Project Structure & Patterns

- **src/server.ts**: Main entry point, sets up Fastify, CORS, and routes.
- **src/http/rotes/**: Route handlers (e.g., `/rooms`).
- **src/db/connection.ts**: Database connection using Drizzle ORM.
- **src/db/schema/**: Database schema definitions (e.g., `rooms` table).
- **src/env.ts**: Environment variable validation with Zod.
- **docker-compose.yml**: Spins up a PostgreSQL database with pgvector extension.

## ⚙️ Configuration

- **Environment Variables** (see `src/env.ts`):
  - `PORT`: Server port (default: 3333)
  - `DB_URL`: PostgreSQL connection string (must start with `postgresql://`)
- **Drizzle ORM** is configured in `drizzle.config.ts` for migrations and schema.
- **Biome** is configured via `biome.jsonc` for code quality.

## 🚀 Setup Instructions

1. **Clone the repository**

2. **Start the database (Docker required):**
   ```sh
   docker-compose up -d
   ```

3. **Install dependencies:**
   ```sh
   npm install
   ```

4. **Configure environment variables:**
   - Create a `.env` file with:
     ```
     PORT=3333
     DB_URL=postgresql://docker:docker@localhost:5432/agents
     ```

5. **Run database migrations and seed (if needed):**
   ```sh
   npx drizzle-kit migrate
   ```

6. **Start the server:**
   ```sh
   npm run dev
   ```

## 🛠️ Available Scripts

- **`npm run dev`**: Start the development server.
- **`npm start`**: Start the production server.
- **`npm run db:seed`**: Seed the database.

## 📡 API Endpoints (Examples)

- **`GET /rooms`**: List all rooms.
- **`GET /rooms/:id`**: Get a specific room.

## 📚 Notable Libraries

- `fastify`, `@fastify/cors`, `fastify-type-provider-zod`
- `drizzle-orm`, `drizzle-kit`, `drizzle-seed`
- `postgres` (PostgreSQL client)
- `zod` (via `fastify-type-provider-zod`)
- `@biomejs/biome` (lint/format)
- `typescript` 