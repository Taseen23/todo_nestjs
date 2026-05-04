import { Injectable } from '@nestjs/common';

@Injectable()
export class CreateService {
  getHello(): string {
    return 'Hello from Create!';
  }
}
