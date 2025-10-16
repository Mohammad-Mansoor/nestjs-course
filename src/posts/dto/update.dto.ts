import {
  IsNotEmpty,
  IsOptional,
  IsString,
  MaxLength,
  MinLength,
} from 'class-validator';

export class UpdateDto {
  @IsOptional()
  @IsNotEmpty({ message: 'Title is required' })
  @IsString({ message: 'Title must be a string' })
  @MinLength(3, { message: 'Title is too short' })
  @MaxLength(100, { message: 'Title is too long' })
  title?: string;

  @IsOptional()
  @IsNotEmpty({ message: 'Content is required' })
  @IsString({ message: 'Content must be a string' })
  @MinLength(3, { message: 'Content is too short' })
  content?: string;

  @IsOptional()
  @IsNotEmpty({ message: 'authorName is required' })
  @IsString({ message: 'authorName must be a string' })
  @MinLength(2, { message: 'authorName is too short' })
  authorName?: string;
}
