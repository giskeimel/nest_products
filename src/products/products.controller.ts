import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { ProductsService } from './products.service';
import { ProductModel } from './productModel';

@Controller('products')
export class ProductsController {
constructor(private readonly service: ProductsService) {}

  @Get()
  getProducts() {
    return this.service.getProducts();
  }

  @Get(':id')
  getProductByName(@Param('id') name: string) {
    return this.service.getProductByName(name);
  }

  @Post()
  postProducts(@Body()newProduct: ProductModel) {
    return this.service.postProducts(newProduct);
  }

  @Put(':id')
  putProducts(@Body()newProduct: ProductModel, @Param('id')id: string): string {
    return this.service.putProducts(newProduct,  id);
  }
  @Delete()
  deleteProducts(): string {
    return this.service.deleteProducts();
  }
}
