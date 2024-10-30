import {
  CarData,
  SellerDetails,
  Location,
} from "./documents.interface";

import { 
  ComplectationBody,
  ComplectationWheels,
  ComplectationSalon,
  ComplectationHeadlights,
  ComplectationMultimedia,
  ComplectationComfort,
  ComplectationSafety,
  ComplectationProtection,
  ComplectationOther
} from "./complectation.interface";

import { 
  PaintworkInspection,
  EngineCompartmentDamage,
  FrontSideDamage,
  LeftSideDamage,
  BackSideDamage,
  TrunkDamage,
  RightSideDamage,
  RoofDamage,
  GlassDamage,
  DiscDamage,
  InteriorDamage,
  ExteriorPhoto,
  InteriorPhoto,
  RoundViewVideo
} from "./body-and-interior.interface";

import  { 
  StoppedEngine,
  RunningEngine,
  Dashboard,
  TestDrive,
} from "./technical-inspection.interface";

import {
  ExpertOpinion,
} from "./expert-opinion.interface";

export interface Report {
  reportId?: number;
  userId: number;
  userEmail: string;
  vinNumber: string;
  title: string;
  sellerDetails: SellerDetails[];
  carData: CarData[];
  location: Location[];
  complectationBody: ComplectationBody[];
  complectationWheels: ComplectationWheels[];
  complectationSalon: ComplectationSalon[];
  complectationHeadlights: ComplectationHeadlights[];
  complectationMultimedia: ComplectationMultimedia[];
  complectationComfort: ComplectationComfort[]; 
  complectationSafety: ComplectationSafety[];
  complectationProtection: ComplectationProtection[];
  complectationOther: ComplectationOther[];
  paintworkInspection: PaintworkInspection[];
  engineCompartmentDamage: EngineCompartmentDamage[];
  frontSideDamage: FrontSideDamage[]; 
  leftSideDamage: LeftSideDamage[];
  backSideDamage: BackSideDamage[];
  trunkDamage: TrunkDamage[];
  rightSideDamage: RightSideDamage[];
  roofDamage: RoofDamage[];
  glassDamage: GlassDamage[];
  discDamage: DiscDamage[];
  interiorDamage: InteriorDamage[];
  exteriorPhoto: ExteriorPhoto[];
  interiorPhoto: InteriorPhoto[];
  roundViewVideo: RoundViewVideo[];
  stoppedEngine: StoppedEngine[];
  runningEngine: RunningEngine[];
  dashboard: Dashboard[];
  testDrive: TestDrive[];
  expertOpinion: ExpertOpinion[];
  createdAt: Date;
  publishAt: Date;
}