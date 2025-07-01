import { getInjection } from "./src/container";
import { IProductService } from "./src/product/services/product-service.interface";

async function example() {
	// Récupération du service avec typage automatique
	const productService = await getInjection(IProductService);

	// Utilisation du service
	const products = await productService.getProductList({ skip: 0, take: 10 });
	console.log("Produits récupérés:", products.data.length);

	const total = await productService.getTotalItems();
	console.log("Total des produits:", total.total);

	const product = await productService.getProductById(1);
	console.log("Produit avec ID 1:", product);
}

example().catch(console.error);
