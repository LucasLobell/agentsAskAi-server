import fastifyCors from '@fastify/cors';
import fastifyMultipart from '@fastify/multipart';
import { fastify } from 'fastify';
import { serializerCompiler, validatorCompiler, } from 'fastify-type-provider-zod';
import { env } from './env';
import { createQuestionRoute } from './http/routes/create-question';
import { createRoomRoute } from './http/routes/create-room';
import { getRoomQuestions } from './http/routes/get-room-questions';
import { getRoomsRoute } from './http/routes/get-rooms';
import { uploadAudioRoute } from './http/routes/upload-audio';
const app = fastify().withTypeProvider();
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
