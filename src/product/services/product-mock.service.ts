import { faker } from "@faker-js/faker";
import { Injectable } from "@nestjs/common";
import type {
	IProductService,
	Product,
	ProductListParams,
	ProductListResult,
} from "./product-service.interface";

faker.seed(123);

@Injectable()
export class ProductMockService implements IProductService {
	private readonly products: Product[];
	private readonly defaultTake = 20;

	constructor() {
		this.products = Array.from({ length: 200 }, (_, index) => ({
			id: index + 1,
			name: faker.commerce.productName(),
			price: Number.parseFloat(faker.commerce.price({ min: 10, max: 1000 })),
			description: faker.commerce.productDescription(),
			image: "/cream.jpg",
		}));
	}

	async getTotalItems(): Promise<{ total: number }> {
		return { total: this.products.length };
	}

	async getProductList(params: ProductListParams): Promise<ProductListResult> {
		const skip = params.skip ?? 0;
		const take = params.take ?? this.defaultTake;

		const paginatedData = this.products.slice(skip, skip + take);

		return {
			data: paginatedData,
			meta: {
				skip,
				take,
				totalItems: this.products.length,
			},
		};
	}

	async getProductById(id: number): Promise<Product | null> {
		return this.products.find((product) => product.id === id) || null;
	}

	async getProductByIds(ids: number[]): Promise<Product[]> {
		return this.products.filter((product) => ids.includes(product.id));
	}
}

// Implémentation réelle (pour plus tard)
// export class ApiProductService implements IProductService {
// 	async getProducts() {
// 		const res = await fetch("https://api.reelle/products");
// 		return res.json();
// 	}
// }
