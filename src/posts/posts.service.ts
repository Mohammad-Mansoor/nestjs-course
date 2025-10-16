import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Post } from './entities/post.entity'; // ✅ use entity, not interface
import { CreateDto } from './dto/create.dto';
import { UpdateDto } from './dto/update.dto';

@Injectable()
export class PostsService {
  constructor(
    @InjectRepository(Post)
    private readonly postRepository: Repository<Post>,
  ) {}

  async findAll(): Promise<Post[]> {
    return this.postRepository.find();
  }

  async findOne(id: number): Promise<Post> {
    const findPost = await this.postRepository.findOneBy({ id });

    console.log(findPost, '✅✅✅');
    if (!findPost) {
      throw new NotFoundException('Post not found');
    }
    return findPost;
  }

  async createPost(createPostData: CreateDto): Promise<Post> {
    const newPost = this.postRepository.create({
      title: createPostData.title,
      content: createPostData.content,
      authorName: createPostData.authorName,
    });
    return await this.postRepository.save(newPost);
  }

  async updatePost(id: number, updatePostData: UpdateDto): Promise<Post> {
    const post = await this.findOne(id);
    const updatedPost = Object.assign(post, updatePostData);
    return await this.postRepository.save(updatedPost);
  }

  async delete(id: number): Promise<{ message: string }> {
    const post = await this.findOne(id);
    await this.postRepository.remove(post); // ✅ correct syntax
    return { message: 'Post deleted successfully' };
  }
}
