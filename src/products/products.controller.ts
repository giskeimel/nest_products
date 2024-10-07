import { Body, Controller, Delete, Get, Post, Put } from '@nestjs/common';
import { ProductsService } from './products.service';
import { ProductModel } from './productModel';

@Controller('products')
export class ProductsController {
constructor(private readonly service: ProductsService) {}

  @Get()
  getProducts() {
    return this.service.getProducts();
  }

  @Post()
  postProducts(@Body()newProduct: ProductModel) {
    return this.service.postProducts(newProduct);
  }

  @Put()
  putProducts(): string {
    return this.service.putProducts();
  }
  @Delete()
  deleteProducts(): string {
    return this.service.deleteProducts();
  }
}
