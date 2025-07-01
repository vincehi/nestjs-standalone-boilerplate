import { getInjection } from "./src/container";

async function main() {
	try {
		console.log("🚀 Démarrage de l'exemple d'injection de dépendance...");

		const productService = await getInjection("IProductService");

		console.log("✅ Service IProductService récupéré avec succès");

		const result = await productService.getTotalItems();

		console.log("📊 Résultat de getTotalItems:", result);
		console.log(`📈 Nombre total d'articles: ${result.total}`);
	} catch (error) {
		console.error("❌ Erreur lors de l'exécution:", error);
		process.exit(1);
	}
}

main()
	.then(() => {
		console.log("✅ Exemple terminé avec succès");
		process.exit(0);
	})
	.catch((error) => {
		console.error("❌ Erreur fatale:", error);
		process.exit(1);
	});
