import { Controller, Get } from '@nestjs/common';
import { TagService } from './tag.service';

@Controller('tag')
export class TagController {
  constructor(private readonly tagService: TagService) {}

  @Get()
  async getAllTags() {
    // return this.tagService.getAll();
    const allTags = await this.tagService.getAll();
    const tags: string[] = allTags.map((tag) => tag.name);
    
    return {tags};
  }

}
