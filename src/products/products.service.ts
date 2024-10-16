import { Injectable } from '@nestjs/common';
import { ProductModel } from './productModel';

@Injectable()
export class ProductsService {
    products = [];
    constructor() {
        let product = {
            "id": "1",
            "name": "Jabon",
            "code": "23456",
            "price": "550"
        }
        this.products.push(product);
        product = {
            "id": "2",
            "name": "Shampoo",
            "code": "12345",
            "price": "1300"
        }
        this.products.push(product);
    }
    getProducts() {
        return  this.products;
    }

    getProductByName(name: string) {
        for (const prod of  this.products) {
            if (prod.name == name) {
                return prod;
            }
        }
    }

    postProducts(product: ProductModel) {
        let newProduct = {
            "id": product.id,
            "name": product.name,
            "price": product.price,
            "code": product.code
        }
        this.products.push(product)
        return newProduct;
    }

    putProducts(newProduct: ProductModel, id: string): string {
        return ' Put Products';
    }

    deleteProducts(): string {
        return ' Delete Products';
    }
}
