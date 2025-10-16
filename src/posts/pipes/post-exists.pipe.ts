import {
  ArgumentMetadata,
  Injectable,
  NotFoundException,
  PipeTransform,
} from '@nestjs/common';
import { PostsService } from '../posts.service';

@Injectable()
export class PostExistsPipe implements PipeTransform {
  constructor(private readonly postService: PostsService) {}

  async transform(value: number, metadata: ArgumentMetadata) {
    try {
      const post = await this.postService.findOne(value);
      if (!post) {
        throw new NotFoundException('Post not found');
      }
    } catch (error) {
      throw new NotFoundException('Post not found');
    }

    return value;
  }
}
