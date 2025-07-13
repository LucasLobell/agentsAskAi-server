# NLW Agents - Backend

This is the backend server for **NLW Agents**, providing a REST API for AI-powered Q&A system with audio transcription, vector embeddings, and room management. Built with Node.js, Fastify, PostgreSQL, and Google Gemini AI.

> 📖 **See the [main project](../) for complete project overview and setup instructions.**

## 🛠️ Tech Stack

- **Node.js** with **TypeScript**
- **Fastify**: High-performance HTTP server
- **Drizzle ORM**: Type-safe SQL ORM for PostgreSQL
- **PostgreSQL** with pgvector extension for vector embeddings
- **Google Gemini AI**: Audio transcription and text generation
- **Zod**: Runtime schema validation
- **Docker**: Local database setup
- **Biome**: Linting and formatting

## 🚀 Quick Setup

1. **Start the database:**
   ```bash
   docker-compose up -d
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Configure environment:**
   ```bash
   # Create .env file
   echo "PORT=3333
   DB_URL=postgresql://docker:docker@localhost:5432/agents
   GEMINI_API_KEY=your_gemini_api_key_here" > .env
   ```

4. **Run migrations:**
   ```bash
   npm run db:migrate
   ```

5. **Start development server:**
   ```bash
   npm run dev
   ```

## 📁 Key Files

- `src/server.ts` - Main entry point with Fastify setup, CORS, and multipart support
- `src/http/routes/create-room.ts` - Room creation endpoint
- `src/http/routes/get-rooms.ts` - Room listing with question counts
- `src/http/routes/create-question.ts` - AI-powered Q&A endpoint with vector search
- `src/http/routes/get-room-questions.ts` - Question listing endpoint
- `src/http/routes/upload-audio.ts` - Audio upload and transcription endpoint
- `src/services/gemini.ts` - Google Gemini AI integration for transcription and embeddings
- `src/db/schema/` - Database schema definitions
- `docker-compose.yml` - PostgreSQL with pgvector setup

## 🛠️ Available Scripts

- `npm run dev` - Start development server
- `npm start` - Start production server
- `npm run db:seed` - Seed database with sample data
- `npm run db:generate` - Generate database migrations
- `npm run db:migrate` - Run database migrations

## 📡 API Endpoints

- `GET /rooms` - List all rooms with question counts
- `POST /rooms` - Create a new room
- `GET /rooms/:roomId/questions` - Get questions for a room
- `POST /rooms/:roomId/questions` - Create question with AI answer
- `POST /rooms/:roomId/audio` - Upload and transcribe audio
- `GET /health` - Health check endpoint

## 🗄️ Database Schema

**Rooms Table:**
- `id` (UUID, Primary Key) - Unique room identifier
- `name` (Text, Required) - Room name
- `description` (Text, Optional) - Room description
- `created_at` (Timestamp) - Creation timestamp

**Questions Table:**
- `id` (UUID, Primary Key) - Unique question identifier
- `room_id` (UUID, Foreign Key) - Reference to room
- `question` (Text, Required) - User's question
- `answer` (Text, Optional) - AI-generated answer
- `created_at` (Timestamp) - Creation timestamp

**Audio Chunks Table:**
- `id` (UUID, Primary Key) - Unique chunk identifier
- `room_id` (UUID, Foreign Key) - Reference to room
- `transcript` (Text, Required) - Transcribed audio text
- `embedding` (Vector, Required) - 768-dimensional embedding
- `created_at` (Timestamp) - Creation timestamp

## 🤖 AI Features

**Audio Transcription:**
- Uses Google Gemini 2.5 Flash for audio-to-text conversion
- Supports multiple audio formats
- Generates natural, punctuated transcriptions

**Vector Embeddings:**
- Generates 768-dimensional embeddings for questions and transcripts
- Uses pgvector for similarity search
- Enables semantic search across audio content

**AI-Powered Q&A:**
- Semantic search through audio transcripts
- Context-aware answer generation
- Professional and educational tone
- Source citation from audio context

## 🔧 Development

- **Environment Variables**: See `src/env.ts` for validation
- **Database**: Configured in `drizzle.config.ts`
- **Code Quality**: Biome configured in `biome.jsonc`
- **CORS**: Configured for frontend at `http://localhost:5173`
- **Multipart**: File upload support for audio files
- **Vector Database**: pgvector extension enabled for embeddings

## 📚 Dependencies

- **Server**: `fastify`, `@fastify/cors`, `@fastify/multipart`, `fastify-type-provider-zod`
- **Database**: `drizzle-orm`, `postgres` (with pgvector)
- **AI**: `@google/genai` (Gemini AI integration)
- **Validation**: `zod`
- **Dev Tools**: `typescript`, `@biomejs/biome`