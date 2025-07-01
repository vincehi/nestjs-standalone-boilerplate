import { Injectable } from "@nestjs/common";
import { CART_STORE_NAME } from "./cart.constants";

export interface CartData {
	state?: {
		productIds: number[];
	};
}

@Injectable()
export class CartService {
	parseCartCookie(cookieHeader: string | undefined): number[] {
		if (!cookieHeader) {
			return [];
		}

		try {
			const cartCookieMatch = cookieHeader.match(
				new RegExp(`${CART_STORE_NAME}=([^;]+)`),
			);
			if (cartCookieMatch) {
				const cartData: CartData = JSON.parse(
					decodeURIComponent(cartCookieMatch[1]),
				);
				return cartData.state?.productIds || [];
			}
		} catch (error) {
			console.error("Erreur lors du parsing du cookie du panier:", error);
		}

		return [];
	}
}
