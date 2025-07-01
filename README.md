# NestJS Standalone Boilerplate

A lightweight NestJS standalone boilerplate for integrating dependency injection into monolithic applications. Perfect for frameworks like SolidStart where you need to call services in queries or actions.

## 🚀 Quick Start

```bash
npm install

# For example :
npm run ex
```

## 🏗️ Key Features

- **Standalone DI Container**: No HTTP server overhead
- **Abstract Class-Based Injection**: Use abstract classes as injection tokens for type-safe DI
- **Mock/Real Switching**: Easy toggle between mock and real implementations
- **Type-Safe**: Full TypeScript support with autocomplete

## 📁 Structure

```
src/
├── container.ts              # Standalone DI container
├── app.module.ts            # Root module
└── product/                 # Example service module
    └── services/
        ├── product-service.interface.ts  # Abstract class as interface
        ├── product.service.ts            # Real implementation
        └── product-mock.service.ts       # Mock implementation
```

## 🔧 Usage

```typescript
import { getInjection } from "./src/container";
import { IProductService } from "./src/product/services/product-service.interface";

// Get service by abstract class (acts as interface)
const productService = await getInjection(IProductService);
const result = await productService.getTotalItems();
```

## 🎯 SolidStart Integration

```typescript
// In a query/controller
import { query } from "@solidjs/router";
import { IProductService } from "./src/product/services/product-service.interface";

export const getProductListQuery = query(async () => {
	"use server";
  const productService = await getInjection(IProductService);
  return await productService.getProductList({ skip: 0, take: 10 });
}, "get-product-list");
```

## 🔄 Switch Implementations

Update `app.module.ts` providers:

```typescript
// Real implementation
{ provide: IProductService, useClass: ProductService }

// Mock implementation  
{ provide: IProductService, useClass: ProductMockService }
```

## 🎉 Benefits

- Lightweight integration
- Type-safe dependency injection using abstract classes
- Easy mock/real switching
- Framework-agnostic
- No need for separate DI symbols
