import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors(
    {origin: '*', // 프론트엔드 도메인
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true}
  );
  await app.listen(3000, '0.0.0.0');
}
bootstrap();
