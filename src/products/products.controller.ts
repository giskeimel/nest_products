import { Controller, Delete, Get, Post, Put } from '@nestjs/common';
import { ProductsService } from './products.service';

@Controller('products')
export class ProductsController {
constructor(private readonly service: ProductsService) {}

  @Get()
  getProducts(): string {
    return this.service.getProducts();
  }

  @Post()
  postProducts(): string {
    return this.service.postProducts();
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
