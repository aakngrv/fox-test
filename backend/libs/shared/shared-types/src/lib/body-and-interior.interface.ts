export interface PaintworkInspection {
  paintworkInspectionId?: number;
  reportId: number;
  factoryColor: boolean;
  bodyInFilm: boolean;
  roof: string[];
  trunkLid: string[];
  rightRearFender: string[];
  rightRearPillar: string[];
  rightRearDoor: string[];
  rightRearDoorOpening: string[];
  rightCenterPillar: string[];
  rightThreshold: string[];
  rightFrontDoor: string[];
  rightFrontDoorOpening: string[];
  rightFrontPillar: string[];
  rightFrontFender: string[];
  hood: string[];
  leftFrontFender: string[];
  leftFrontPillar: string[];
  leftFrontDoor: string[];
  leftFrontDoorOpening: string[];
  leftCenterPillar: string[];
  leftThreshold: string[];
  leftRearDoor: string[];
  leftRearDoorOpening: string[];
  leftRearPillar: string[];
  leftRearFender: string[];
  addElementPaintwork?: AddElementPaintwork[];
}

export interface AddElementPaintwork {
  addElementPaintworkId?: number;
  paintworkInspectionId: number;
  name: string;
  info: string[];
}

export interface EngineCompartmentDamage {
  engineCompartmentDamageId?: number;
  reportId: number;
  withoutDamage: boolean;
  leftSideMember: string[];
  leftGlass: string[];
  rightSideMember: string[];
  rightGlass: string[];
  hoodHinges: string[]; 
  televisor: string[];
  motorShield: string[];
  addElement?: AddElement[];
}

export interface AddElement {
  addElementId?: number;
  engineCompartmentDamageId: number;
  name: string;
  info: string[];
}

export interface FrontSideDamage {
  frontSideDamageId?: number;
  reportId: number;
  withoutDamage: boolean;
  fogLights: string[]; 
  radiatorGrille: string[]; 
  frontBumper: string[]; 
  rightHeadlight: string[]; 
  leftHeadlight: string[]; 
  hood: string[]; 
  addElementFront?: AddElementFront[];
  }

  export interface AddElementFront {
    addElementFrontId?: number;
    frontSideDamageId: number;
    name: string;
    info: string[];
  }

export interface LeftSideDamage {
  leftSideDamageId?: number;
  reportId: number;
  withoutDamage: boolean;
  leftFrontFender: string[]; 
  leftFrontPillar: string[]; 
  leftFrontDoor: string[]; 
  leftCenterPillar: string[]; 
  leftRearDoor: string[]; 
  leftRearPillar: string[]; 
  leftRearFender: string[]; 
  leftMirror: string[]; 
  leftThreshold: string[]; 
  addElementLeft?: AddElementLeft[];
}

export interface AddElementLeft {
  addElementLeftId?: number;
  leftSideDamageId: number;
  name: string;
  info: string[];
}

export interface BackSideDamage {
  backSideDamageId?: number;
  reportId: number;
  withoutDamage: boolean;
  tailgate: string[]; 
  rearBumper: string[]; 
  leftLamp: string[]; 
  rightLamp: string[]; 
  addElementBack?: AddElementBack[];
}

export interface AddElementBack {
  addElementBackId?: number;
  backSideDamageId: number;
  name: string;
  info: string[];
}

export interface TrunkDamage {
  trunkDamageId?: number;
  reportId: number;
  withoutDamage: boolean;
  coverTrim: string[]; 
  carpetFloor: string[]; 
  rightTrim: string[]; 
  rightGlass: string[]; 
  leftTrim: string[]; 
  leftGlass: string[]; 
  seatBackTrim: string[]; 
  spareWheelWell: string[]; 
  addElementTrunk?: AddElementTrunk[];
}

export interface AddElementTrunk {
  addElementTrunkId?: number;
  trunkDamageId: number;
  name: string;
  info: string[];
}

export interface RightSideDamage {
  rightSideDamageId?: number;
  reportId: number;
  withoutDamage: boolean;
  rightFrontFender: string[]; 
  rightFrontPillar: string[]; 
  rightFrontDoor: string[]; 
  rightCenterPillar: string[]; 
  rightRearDoor: string[]; 
  rightRearPillar: string[]; 
  rightRearFender: string[]; 
  rightMirror: string[]; 
  rightThreshold: string[]; 
  addElementRight?: AddElementRight[];
}

export interface AddElementRight {
  addElementRightId?: number;
  rightSideDamageId: number;
  name: string;
  info: string[];
}

export interface RoofDamage {
  roofDamageId?: number;
  reportId: number;
  withoutDamage: boolean;
  roofRails: string[];
  roof: string[];
  luke: string[];
  panorama: string[];
  addElementRoof?: AddElementRoof[];
}

export interface AddElementRoof {
  addElementRoofId?: number;
  roofDamageId: number;
  name: string;
  info: string[];
}

export interface GlassDamage {
  glassDamageId?: number;
  reportId: number;
  withoutDamage: boolean;
  allGlassIsFactory: boolean;
  windshield: string[];
  leftFrontGlass: string[];
  leftRearGlass: string[];
  rearGlass: string[];
  rightFrontGlass: string[];
  rightRearGlass: string[];
  addElementGlass?: AddElementGlass[];
}

export interface AddElementGlass {
  addElementGlassId?: number;
  glassDamageId: number;
  name: string;
  info: string[];
}

export interface DiscDamage {
  discDamageId?: number;
  reportId: number;
  withoutDamage: boolean;
  leftFrontDisc: string[];
  leftRearDisc: string[];
  rightFrontDisc: string[];
  rightRearDisc: string[];
  addElementDisc?: AddElementDisc[];
}

export interface AddElementDisc {
  addElementDiscId?: number;
  discDamageId: number;
  name: string;
  info: string[];
}

export interface InteriorDamage {
  interiorDamageId?: number;
  reportId: number;
  withoutDamage: boolean;
  frontLeftDoorCard: string[];
  driversSeat: string[];
  salonCarpet: string[];
  torpedo: string[];
  ceiling: string[];
  backLeftDoorCard: string[];
  backSeat: string[];
  backRightDoorCard: string[];
  frontRightDoorCard: string[];
  passengerSeat: string[];
  sleepingCompartment: string[];
  addElementInterior?: AddElementInterior[]
}

export interface AddElementInterior {
  addElementInteriorId?: number;
  interiorDamageId: number;
  name: string;
  info: string[];
}

export interface ExteriorPhoto {
  exteriorPhotoId?: number;
  reportId: number;
  rightFrontPhoto: string;
  frontPhoto: string;
  leftFrontPhoto: string;
  rightBackPhoto: string;
  backPhoto: string;
  leftBackPhoto: string;
  leftPhoto: string;
  rightPhoto: string;
  hoodOpen: string;
  trunkOpen: string;
  addPhoto: string[];
}
  
export interface InteriorPhoto {
  interiorPhotoId?: number;    
  reportId: number;
  leftFrontDoor: string;
  driverSeatPhoto: string;
  steeringWheelPhoto: string;
  dashboardPhoto: string;
  leftBackDoor: string;
  backLeftSeatsPhoto: string;
  frontSeatsPhoto: string;
  rightBackDoor: string;
  backRightSeatsPhoto: string;
  rightFrontDoor: string;
  passengerSeatPhoto: string;
  addPhoto: string[];
}

export interface RoundViewVideo {
  roundViewVideoId?: number;
  reportId: number;
  video: string;
  comment: string;
}
