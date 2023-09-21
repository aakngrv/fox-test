import { ApiProperty } from '@nestjs/swagger';

export class CarDataDto {
  
  @ApiProperty({
    description: 'ID отчета',
    example: '1'
  })
  public reportId: number;
  
  public vin: string;
  public frameNumber: string;
  public comment: string;
  public haveAServiceBook: boolean;
  public additionalDocuments: string;
  public sts: string;
  public tcp: string;
  public stateNumber: string;
  public carType: string;
  public carBrand: string;
  public carModel: string;
  public manufactureYear: string;
  public bodyType: string;
  public generation: string;
  public enginesType: string;
  public enginesModification: string;
  public enginesNumber: string;
  public driveUnit: string;
  public gearboxType: string;
  public modification: string;
  public engineCapacity: string;
  public power: string;
  public color: string;
  public isMetallic: boolean;
  public mileage: string;
  public isNotInstalled: boolean;
  public isNewCar: boolean;
  public isEmergency: boolean;
  public isNotOnTrack: boolean;
  public totalComment: string;
}