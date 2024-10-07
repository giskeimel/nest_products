import { Injectable } from '@nestjs/common';

@Injectable()
export class ProductsService {
    products = [];
    constructor() {
        let product = {
            "id": 1,
            "nombre": "Jabon",
            "codigo": 23456,
            "precio": 550
        }
        this.products.push(product);
        product = {
            "id": 2,
            "nombre": "Shampoo",
            "codigo": 12345,
            "precio": 1300
        }
        this.products.push(product);
    }
    getProducts() {
        return  this.products;
    }

    postProducts(): string {
        return ' Post Products';
    }

    putProducts(): string {
        return ' Put Products';
    }

    deleteProducts(): string {
        return ' Delete Products';
    }
}
