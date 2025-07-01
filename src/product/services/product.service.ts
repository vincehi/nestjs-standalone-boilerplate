import { Injectable } from "@nestjs/common";
import {
	IProductService,
	Product,
	ProductListParams,
	ProductListResult,
} from "./product-service.interface";

@Injectable()
export class ProductService implements IProductService {
	async getProductList(_params: ProductListParams): Promise<ProductListResult> {
		// TODO: Implémenter la vraie logique de récupération depuis la base de données
		throw new Error("RealProductService not implemented yet");
	}

	async getTotalItems(): Promise<{ total: number }> {
		// TODO: Implémenter la vraie logique de comptage
		throw new Error("RealProductService not implemented yet");
	}

	async getProductById(_id: number): Promise<Product | null> {
		// TODO: Implémenter la vraie logique de récupération par ID
		throw new Error("RealProductService not implemented yet");
	}

	async getProductByIds(_ids: number[]): Promise<Product[]> {
		// TODO: Implémenter la vraie logique de récupération par IDs
		throw new Error("RealProductService not implemented yet");
	}
}
