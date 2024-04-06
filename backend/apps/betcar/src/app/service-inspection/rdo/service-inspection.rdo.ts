import { ApiProperty } from '@nestjs/swagger';
import { Expose } from "class-transformer";

export class ServiceInspectionRdo {

  @ApiProperty({
    description: 'ID осмотра на сервисе',
    example: 1
  })
  @Expose()
  public serviceInspectionId: number;
  
  @ApiProperty({
    description: 'Проверка компрессии',
    example: ["string"]
  })
  @Expose()
  public compressionCheck: string[];

  @ApiProperty({
    description: 'Проверка эндоскопом',
    example: ["string"]
  })
  @Expose()
  public endoscopeCheck: string[];

  @ApiProperty({
    description: 'Осмотр ДВС',
    example: ["string"]
  })
  @Expose()
  public engineInspection: string[];

  @ApiProperty({
    description: 'Осмотр КПП',
    example: ["string"]
  })
  @Expose()
  public checkpointInspection: string[];

  @ApiProperty({
    description: 'Осмотр ГУР',
    example: ["string"]
  })
  @Expose()
  public powerSteeringInspection: string[];

  @ApiProperty({
    description: 'Осмотр раздатки',
    example: ["string"]
  })
  @Expose()
  public transferCaseInspection: string[];

  @ApiProperty({
    description: 'Осмотр задний мост',
    example: ["string"]
  })
  @Expose()
  public rearAxleInspection: string[];

  @ApiProperty({
    description: 'Передний мост',
    example: ["string"]
  })
  @Expose()
  public frontAxleInspection: string[];

  @ApiProperty({
    description: 'Осмотр рулевой рейки',
    example: ["string"]
  })
  @Expose()
  public steeringRackInspection: string[];

  @ApiProperty({
    description: 'Осмотр ходовой части',
    example: ["string"]
  })
  @Expose()
  public chassisInspection: string[];
}