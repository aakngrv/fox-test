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

export interface FrontSideDamage {
  id?: number;
  fogLights: boolean;
  radiatorGrille: boolean;
  frontBumper: boolean;
  withoutDamage: boolean;
  rightHeadlight: boolean;
  leftHeadlight: boolean;
  hood: boolean;
  addElement: string;
  }

export interface LeftSideDamage {
  id?: number;
  withoutDamage: boolean;
  leftFrontFender: boolean;
  leftFrontPillar: boolean;
  leftFrontDoor: boolean;
  leftCenterPillar: boolean;
  leftRearDoor: boolean;
  leftRearPillar: boolean;
  leftRearFender: boolean;
  leftMirror: boolean;
  leftThreshold: boolean;
  addElement: string;
}

export interface BackSideDamage {
  id?: number;
  withoutDamage: boolean;
  tailgate: boolean;
  rearBumper: boolean;
  leftLamp: boolean;
  rightLamp: boolean;
  addElement: string;
}

export interface RightSideDamage {
  id?: number;
  withoutDamage: boolean;
  rightFrontFender: boolean;
  rightFrontPillar: boolean;
  rightFrontDoor: boolean;
  rightCenterPillar: boolean;
  rightRearDoor: boolean;
  rightRearPillar: boolean;
  rightRearFender: boolean;
  rightMirror: boolean;
  rightThreshold: boolean;
  addElement: string;
}

export interface RoofDamage {
  id?: number;
  withoutDamage: boolean;
  roofRails: boolean;
  roof: boolean;
  luke: boolean;
  addElement: string;
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
  