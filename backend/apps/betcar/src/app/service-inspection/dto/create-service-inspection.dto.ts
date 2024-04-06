import { ApiProperty } from '@nestjs/swagger';

export class CreateServiceInspectionDto {

  @ApiProperty({
    description: 'Проверка компрессии',
    example: ["string"]
  })
  public compressionCheck: string[];

  @ApiProperty({
    description: 'Проверка эндоскопом',
    example: ["string"]
  })
  public endoscopeCheck: string[];

  @ApiProperty({
    description: 'Осмотр ДВС',
    example: ["string"]
  })
  public engineInspection: string[];

  @ApiProperty({
    description: 'Осмотр КПП',
    example: ["string"]
  })
  public checkpointInspection: string[];

  @ApiProperty({
    description: 'Осмотр ГУР',
    example: ["string"]
  })
  public powerSteeringInspection: string[];

  @ApiProperty({
    description: 'Осмотр раздатки',
    example: ["string"]
  })
  public transferCaseInspection: string[];

  @ApiProperty({
    description: 'Осмотр задний мост',
    example: ["string"]
  })
  public rearAxleInspection: string[];

  @ApiProperty({
    description: 'Передний мост',
    example: ["string"]
  })
  public frontAxleInspection: string[];

  @ApiProperty({
    description: 'Осмотр рулевой рейки',
    example: ["string"]
  })
  public steeringRackInspection: string[];

  @ApiProperty({
    description: 'Осмотр ходовой части',
    example: ["string"]
  })
  public chassisInspection: string[];
}