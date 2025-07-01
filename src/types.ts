import type { IProductService } from "./product/services/product-service.interface";

// Symbols for dependency injection
export const DI_SYMBOLS = {
	// Services
	IProductService: Symbol.for("IProductService"),
};

// Typed return types
export interface DI_RETURN_TYPES {
	// Services
	IProductService: IProductService;
}
