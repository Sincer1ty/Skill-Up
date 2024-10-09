import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { UserModule } from './user/user.module';
import { User } from './user/schemas/user.schema';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors(
    {origin: 'https://sincer1ty.github.io/', // 프론트엔드 도메인
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true}
  );
  await app.listen(3000);
}
bootstrap();
