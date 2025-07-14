import fastifyCors from '@fastify/cors';
import fastifyMultipart from '@fastify/multipart';
import { fastify } from 'fastify';
import {
  serializerCompiler,
  validatorCompiler,
  type ZodTypeProvider,
} from 'fastify-type-provider-zod';
import { env } from './env.js';
import { createQuestionRoute } from './http/routes/create-question.js';
import { createRoomRoute } from './http/routes/create-room.js';
import { getRoomQuestions } from './http/routes/get-room-questions.js';
import { getRoomsRoute } from './http/routes/get-rooms.js';
import { uploadAudioRoute } from './http/routes/upload-audio.js';

const app = fastify().withTypeProvider<ZodTypeProvider>();

app.register(fastifyCors, {
  origin: 'http://localhost:5173',
});

app.register(fastifyMultipart);

app.setSerializerCompiler(serializerCompiler);
app.setValidatorCompiler(validatorCompiler);

app.get('/health', () => {
  return 'OK';
});

app.register(getRoomsRoute);
app.register(createRoomRoute);
app.register(getRoomQuestions);
app.register(createQuestionRoute);
app.register(uploadAudioRoute);

app.listen({ port: env.PORT });
