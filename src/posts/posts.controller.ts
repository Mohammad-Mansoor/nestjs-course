import { Controller, Get, Param, ParseIntPipe, Query } from '@nestjs/common';
import { PostsService } from './posts.service';
import type Post from './interfaces/post.interface';

@Controller('posts')
export class PostsController {
  constructor(private readonly postService: PostsService) {}

  @Get()
  findAll(@Query('search') search: string): Post[] {
    const extractedPosts = this.postService.findAll();
    if (search) {
      return extractedPosts.filter(
        (post) => post.title.toLowerCase().includes(search.toLowerCase()), // ||
        //   post.content.toLowerCase().includes(search.toLowerCase()) ||
        //   post.authorName.toLowerCase().includes(search.toLowerCase()),
      );
    }

    return extractedPosts;
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number): Post {
    return this.postService.findOne(id);
  }
}
