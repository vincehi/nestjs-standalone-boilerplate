import { Module } from "@nestjs/common";
import { CartModule } from "../cart/cart.module";
import { DI_SYMBOLS } from "../types";
import { ProductMockService } from "./services/product-mock.service";
import { ProductService } from "./services/product.service";

@Module({
	imports: [CartModule],
	providers: [
		{
			provide: DI_SYMBOLS.IProductService,
			useClass: ProductMockService,
			// process.env.NODE_ENV === "production"
			// 	? ProductService
			// 	: ProductMockService,
		},
	],
})
export class ProductModule {}
