import { IsNotEmpty, IsString, MaxLength, MinLength } from 'class-validator';

export class CreateDto {
  @IsNotEmpty({ message: 'Title is required' })
  @IsString({ message: 'Title must be a string' })
  @MinLength(3, { message: 'Title is too short' })
  @MaxLength(100, { message: 'Title is too long' })
  title: string;

  @IsNotEmpty({ message: 'Content is required' })
  @IsString({ message: 'Content must be a string' })
  @MinLength(3, { message: 'Content is too short' })
  content: string;

  @IsString({ message: 'Author Name must be a string' })
  @MinLength(2, { message: 'Author Name is too short' })
  @IsNotEmpty({ message: 'Author Name is required' })
  authorName: string;
}
