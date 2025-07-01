import { Module } from "@nestjs/common";
import { CartModule } from "../cart/cart.module";
import { ProductMockService } from "./services/product-mock.service";
import { IProductService } from "./services/product-service.interface";
import { ProductService } from "./services/product.service";

@Module({
	imports: [CartModule],
	providers: [
		{
			provide: IProductService,
			useClass: ProductMockService,
			// process.env.NODE_ENV === "production"
			// 	? ProductService
			// 	: ProductMockService,
		},
	],
})
export class ProductModule {}
