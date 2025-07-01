import { INestApplicationContext } from "@nestjs/common";
import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";
import { DI_RETURN_TYPES, DI_SYMBOLS } from "./types";

let appInstance: INestApplicationContext;

export async function createStandaloneApp(): Promise<INestApplicationContext> {
	if (!appInstance) {
		appInstance = await NestFactory.createApplicationContext(AppModule);
	}
	return appInstance;
}

export async function getInjection<K extends keyof typeof DI_SYMBOLS>(
	symbol: K
) {
	const app = await createStandaloneApp();
	return app.get<DI_RETURN_TYPES[K]>(DI_SYMBOLS[symbol]);
}
