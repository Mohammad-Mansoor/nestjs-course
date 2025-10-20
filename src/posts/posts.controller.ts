import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  ParseIntPipe,
  Patch,
  Post,
  Query,
} from '@nestjs/common';
import { PostsService } from './posts.service';
// import type { default as postInterface } from './interfaces/post.interface';
import { Post as postInterface } from './entities/post.entity'; // ✅ use entity, not interface
import { CreateDto } from './dto/create.dto';
import { UpdateDto } from './dto/update.dto';
import { PostExistsPipe } from './pipes/post-exists.pipe';

@Controller('posts')
export class PostsController {
  constructor(private readonly postService: PostsService) {}
  @Get()
  async findAll(@Query('search') search: string): Promise<postInterface[]> {
    return await this.postService.findAll();
  }

  @Get(':id')
  async findOne(
    @Param('id', ParseIntPipe, PostExistsPipe) id: number,
  ): Promise<postInterface> {
    return await this.postService.findOne(id);
  }

  @Post()
  @HttpCode(HttpStatus.CREATED)
  async create(@Body() createPostData: CreateDto): Promise<postInterface> {
    return await this.postService.createPost(createPostData);
  }

  @Patch(':id')
  async updatePost(
    @Param('id', ParseIntPipe, PostExistsPipe) id: number,
    @Body()
    updatePostData: UpdateDto,
  ): Promise<postInterface> {
    return await this.postService.updatePost(id, updatePostData);
  }

  @Delete(':id')
  async delete(
    @Param('id', ParseIntPipe) id: number,
  ): Promise<{ message: string }> {
    return await this.postService.delete(id);
  }
}
