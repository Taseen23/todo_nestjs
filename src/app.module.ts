import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CreateModule } from './create/create.module';
import { TagModule } from './tag/tag.module';
import ormconfig from './ormconfig';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [CreateModule, TagModule, TypeOrmModule.forRoot(ormconfig)],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
