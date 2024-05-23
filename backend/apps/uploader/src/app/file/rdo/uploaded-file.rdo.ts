import { Expose } from 'class-transformer';
import { ApiProperty } from '@nestjs/swagger';

export class UploadedFileRdo {

  @ApiProperty({
    description: 'ID файла',
    example: 1
  })
  @Expose()
  public fileId: number;
  
  @ApiProperty({
    description: 'Оригинальное имя файла',
    example: 'Картинка'
  })
  @Expose()
  public originalFilename: string;
  
  @ApiProperty({
    description: 'Хэш имени файла',
    example: 'dafasdf-23fffsdf-safe'
  })
  @Expose()
  public hashName: string;
  
  @ApiProperty({
    description: 'Расширение файла',
    example: 'image/jpeg'
  })
  @Expose()
  public mimetype: string;
  
  @ApiProperty({
    description: 'Размер файла',
    example: 16478790
  })
  @Expose()
  public size: number;
  
  @ApiProperty({
    description: 'Путь к файлу',
    example: 'Users/user/project/wef4f4-34f34f-sdfskk3.jpg'
  })
  @Expose()
  public path: string;
}