import { Entity } from '@backend/util/util-types';
import { ComplectationSalon } from '@backend/shared/shared-types';


export class ComplectationSalonEntity implements Entity<ComplectationSalonEntity>, ComplectationSalon {

  public complectationSalonId?: number;
  public reportId: number;
  public luke: boolean;
  public seatCovers: boolean;
  public panoramicView: boolean;
  public thirdRowOfSeats: boolean;
  public tintedGlass: boolean;
  public steeringWheelHeating: boolean;
  public leatherTrimmedGearshiftLever: boolean;
  public sportsFrontSeats: boolean;
  public steeringWheelLeatherTrim: boolean;
  public foldingRearSeat: boolean;
  public frontCenterArmrest: boolean;
  public interiorMaterial: string;
  public heatedSeats: string[];
  public seatHeightAdjustment: string;
  public electricallyAdjustableSeats: string[];
  public seatPositionMemory: string;
  public seatVentilation: string[];
  public seatMassage: string[];
  

  constructor(complectationSalon: ComplectationSalon) {
    this.fillEntity(complectationSalon);
  } 

 
  public fillEntity(entity: ComplectationSalon): void {
    this.complectationSalonId = entity.complectationSalonId;
    this.reportId = entity.reportId;
    this.luke = entity.luke;
    this.seatCovers = entity.seatCovers;
    this.panoramicView = entity.panoramicView;
    this.thirdRowOfSeats = entity.thirdRowOfSeats;
    this.tintedGlass = entity.tintedGlass;
    this.steeringWheelHeating = entity.steeringWheelHeating;
    this.leatherTrimmedGearshiftLever = entity.leatherTrimmedGearshiftLever;
    this.sportsFrontSeats = entity.sportsFrontSeats;
    this.steeringWheelLeatherTrim = entity.steeringWheelLeatherTrim;
    this.foldingRearSeat = entity.foldingRearSeat;
    this.frontCenterArmrest = entity.frontCenterArmrest;
    this.interiorMaterial = entity.interiorMaterial;
    this.heatedSeats = entity.heatedSeats;
    this.seatHeightAdjustment = entity.seatHeightAdjustment;
    this.electricallyAdjustableSeats = entity.electricallyAdjustableSeats;
    this.seatPositionMemory = entity.seatPositionMemory;
    this.seatVentilation = entity.seatVentilation;
    this.seatMassage = entity.seatMassage;
  }

  public toObject(): ComplectationSalonEntity {
    return { ...this }
  }
}