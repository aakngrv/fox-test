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
  leftFrontPillar: string[];
  leftFrontDoor: string[];
  leftFrontDoorOpening: string[];
  leftCenterPillar: string[];
  leftThreshold: string[];
  leftRearDoor: string[];
  leftRearDoorOpening: string[];
  leftRearPillar: string[];
  leftRearFender: string[];
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
  id?: number;
  withoutDamage: boolean;
  windshield: boolean;
  leftFrontGlass: boolean;
  leftRearGlass: boolean;
  rearGlass: boolean;
  rightFrontGlass: boolean;
  rightRearGlass: boolean;
  addElement: string;
}

export interface DiscDamage {
  id?: number;
  withoutDamage: boolean;
  leftFrontDisc: boolean;
  leftRearDisc: boolean;
  rightFrontDisc: boolean;
  rightRearDisc: boolean;
  addElement: string;
}

export interface InteriorDamage {
  id?: number;
  withoutDamage: boolean;
  torpedo: boolean;
  driversSeat: boolean;
  passengerSeat: boolean;
  rearSear: boolean;
  salonCarpet: boolean;
  ceiling: boolean;
  trunk: boolean;
  addElement: string;
}

export interface ExteriorPhoto {
  id?: number;
  rightFrontPhoto: string;
  rightFrontVideo: string;
  frontPhoto: string;
  frontVideo: string;
  leftFrontPhoto: string;
  leftFrontVideo: string;
  rightBackPhoto: string;
  rightBackVideo: string;
  backPhoto: string;
  backVideo: string;
  leftBackPhoto: string;
  leftBackVideo: string;
  leftPhoto: string;
  leftVideo: string;
  rightPhoto: string;
  rightVideo: string;
}
  
export interface InteriorPhoto {
  id?: number;
  frontSeatsPhoto: string;
  frontSeatsVideo: string;
  transmissionPhoto: string;
  transmissionVideo: string;
  dashboardPhoto: string;
  dashboardVideo: string;
  driverSeatPhoto: string;
  driverSeatVideo: string;
  backSeatsPhoto: string;
  backSeatsVideo: string;
  trunkPhoto: string;
  trunkVideo: string;
  enginePhoto: string;
  engineVideo: string;
}

export interface RoundViewVideo {
  id?: number;
  video: string;
  photo: string;
  fail: string;
  comment: string;
}
