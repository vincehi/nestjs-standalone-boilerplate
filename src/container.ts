import { INestApplicationContext, InjectionToken, Type } from "@nestjs/common";
import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";

let appInstance: INestApplicationContext;

export async function createStandaloneApp(): Promise<INestApplicationContext> {
	if (!appInstance) {
		appInstance = await NestFactory.createApplicationContext(AppModule);
	}
	return appInstance;
}

export async function getInjection<T>(token: InjectionToken<T>) {
	const app = await createStandaloneApp();
	return app.get(token);
}
