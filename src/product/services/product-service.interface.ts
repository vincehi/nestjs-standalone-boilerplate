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

export interface IProductService {
	getProductList(params: ProductListParams): Promise<ProductListResult>;
	getTotalItems(): Promise<{ total: number }>;
	getProductById(id: number): Promise<Product | null>;
	getProductByIds(ids: number[]): Promise<Product[]>;
}
