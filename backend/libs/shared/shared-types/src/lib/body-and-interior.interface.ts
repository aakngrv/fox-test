export interface PaintworkInspectionDisplay {

        paintworkInspectionDisplayId: number;
        maximumThickness: string;
        condition: string;
        comment: string;
}

export interface PaintworkInspection {
    paintworkInspectionId: number;
    factoryColor: boolean;
    hood: boolean;
    roof: boolean;
    leftFrontFender: boolean;
    leftFrontPillar: boolean;
    leftFrontDoor: boolean;
    leftThreshold: boolean;
    leftCenterPillar: boolean;
    leftRearDoor: boolean;
    leftRearPillar: boolean;
    leftRearFender: boolean;
    trunkLid: boolean;
    rightFrontFender: boolean;
    rightFrontPillar: boolean;
    rightFrontDoor: boolean;
    rightThreshold: boolean;
    rightCenterPillar: boolean;
    rightRearDoor: boolean;
    rightRearPillar: boolean;
    rightRearFender: boolean;
    comment: string;
}

export interface FrontSideDamage {
    frontSideDamageId: number;
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
    leftSideDamageId: number;
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
    backSideDamageId: number;
    withoutDamage: boolean;
    tailgate: boolean;
    rearBumper: boolean;
    leftLamp: boolean;
    rightLamp: boolean;
    addElement: string;
  }

  export interface RightSideDamage {
    rightSideDamageId: number;
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
    roofDamageId: number;
    withoutDamage: boolean;
    roofRails: boolean;
    roof: boolean;
    luke: boolean;
    addElement: string;
  }

  export interface GlassDamage {
    glassDamageId: number;
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
    discDamageId: number;
    withoutDamage: boolean;
    leftFrontDisc: boolean;
    leftRearDisc: boolean;
    rightFrontDisc: boolean;
    rightRearDisc: boolean;
    addElement: string;
  }

  export interface InteriorDamage {
    interiorDamageId: number;
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
    exteriorPhotoId: number;
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
    interiorPhotoId: number;
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
    roundViewVideoId: number;
    video: string;
    photo: string;
    fail: string;
    comment: string;
  }
  