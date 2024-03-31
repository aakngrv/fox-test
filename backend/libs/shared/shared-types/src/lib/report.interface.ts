import { 
  AdditionalDocuments, 
  CarData, 
  STS, 
  SellerDetails, 
  TCP,
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
} from "./body-and-interior.interface";

export interface Report {
  reportId?: number;
  executorId: string;
  title: string;
  sellerDetails: SellerDetails[];
  carData: CarData[];
  additionalDocuments: AdditionalDocuments[];
  tcp: TCP[];
  sts: STS[];
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
  createdAt: Date;
  publishAt: Date;
}