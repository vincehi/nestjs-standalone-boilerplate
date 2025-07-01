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
- **Interface-Based Injection**: Use `src/types.ts` to inject interfaces instead of concrete classes
- **Mock/Real Switching**: Easy toggle between mock and real implementations
- **Type-Safe**: Full TypeScript support with autocomplete

## 📁 Structure

```
src/
├── container.ts              # Standalone DI container
├── types.ts                  # DI symbols and return types
├── app.module.ts            # Root module
└── product/                 # Example service module
```

## 🔧 Usage

```typescript
import { getInjection } from "./src/container";

// Get service by interface
const productService = await getInjection("IProductService");
const result = await productService.getTotalItems();
```

## 🎯 SolidStart Integration

```typescript
// In a query/controller
import { query } from "@solidjs/router";

export const getProductListQuery = query(async () => {
	"use server";
  const productService = await getInjection("IProductService");
  return await productService.getProductList({ skip: 0, take: 10 });
}, "get-product-list");
```

## 🔄 Switch Implementations

Update `app.module.ts` providers:

```typescript
// Real implementation
{ provide: DI_SYMBOLS.IProductService, useClass: ProductService }

// Mock implementation  
{ provide: DI_SYMBOLS.IProductService, useClass: ProductMockService }
```

## 🎉 Benefits

- Lightweight integration
- Type-safe dependency injection
- Easy mock/real switching
- Framework-agnostic
