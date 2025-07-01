export interface Product {
	id: number;
	name: string;
	price: number;
	description?: string;
	image?: string;
}

export interface ProductListParams {
	skip: number;
	take: number;
}

export interface ProductListResult {
	data: Product[];
	meta: {
		skip: number;
		take: number;
		totalItems: number;
	};
}

export abstract class IProductService {
	abstract getProductList(
		params: ProductListParams
	): Promise<ProductListResult>;
	abstract getTotalItems(): Promise<{ total: number }>;
	abstract getProductById(id: number): Promise<Product | null>;
	abstract getProductByIds(ids: number[]): Promise<Product[]>;
}
