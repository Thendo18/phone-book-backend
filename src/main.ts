import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
	const app = await NestFactory.create(AppModule, { cors: true });
	
	let logger = new Logger();

	app.enableCors({
		origin: ['http://localhost:4200'],
		credentials: true
	});
	app.setGlobalPrefix('api');
	await app.listen(process.env.PORT || 9000);

	logger.log('Listening on port: 9000')
}
bootstrap();
