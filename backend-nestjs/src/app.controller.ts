import { Controller, Get, Param } from '@nestjs/common';
import { AppService } from './app.service';
import { IProduct } from './interfaces/IProduct';

import { MockProducts } from './mocks/ProductsMock'

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('/api/product')
  getProducts(): IProduct[] {
    return MockProducts
  }

  @Get('/api/product/:id')
  getProductById(@Param('id') id: String): IProduct {
    return MockProducts.find(item => item._id === id);
  }

}
