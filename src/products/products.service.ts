import { Injectable } from '@nestjs/common';

@Injectable()
export class ProductsService {

    getProducts(): string {
        return ' Get Products';
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
