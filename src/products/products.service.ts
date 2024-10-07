import { Injectable } from '@nestjs/common';

@Injectable()
export class ProductsService {

    getProducts() {
        return  [{
            id: 1,
            name: 'jabon'
        },
        {
            id: 2,
            name: 'Shampoo'
        }];
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
