import { Controller, Get } from '@nestjs/common';
import { CreateService } from './create.service';

@Controller('create')
export class CreateController {
  constructor(private readonly createService: CreateService) {}

  @Get()
  getHello(): string {
    return this.createService.getHello();
  }
}
