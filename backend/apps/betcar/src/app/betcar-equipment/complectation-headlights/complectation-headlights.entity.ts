import { Entity } from '@backend/util/util-types';
import { ComplectationHeadlights } from '@backend/shared/shared-types';


export class ComplectationHeadlightsEntity implements Entity<ComplectationHeadlightsEntity>, ComplectationHeadlights {

  public complectationHeadlightsId?: number;
  public reportId: number;
  public lightSensor: boolean;
  public rainSensor: boolean;
  public headlightWasher: boolean;
  public fogLights: boolean;
  public automaticHeadlightLeveling: boolean;
  public adaptivLlightingSystem: boolean;
  public highBeamControlSystem: boolean;
  public headlights: string;
  

  constructor(complectationHeadlights: ComplectationHeadlights) {
    this.fillEntity(complectationHeadlights);
  } 

 
  public fillEntity(entity: ComplectationHeadlights): void {
    this.complectationHeadlightsId = entity.complectationHeadlightsId;
    this.reportId = entity.reportId;
    this.lightSensor = entity.lightSensor;
    this.rainSensor = entity.rainSensor;
    this.headlightWasher = entity.headlightWasher;
    this.fogLights = entity.fogLights;
    this.automaticHeadlightLeveling = entity.automaticHeadlightLeveling;
    this.adaptivLlightingSystem = entity.adaptivLlightingSystem;
    this.highBeamControlSystem = entity.highBeamControlSystem;
    this.headlights = entity.headlights;
  }

  public toObject(): ComplectationHeadlightsEntity {
    return { ...this }
  }
}