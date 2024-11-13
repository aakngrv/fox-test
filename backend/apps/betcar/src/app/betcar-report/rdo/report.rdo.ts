import { ApiProperty } from '@nestjs/swagger';
import { 
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
  RoundViewVideo,
  StoppedEngine,
  RunningEngine,
  Dashboard,
  TestDrive,
  ExpertOpinion,
} from '@prisma/client';

import { Expose } from 'class-transformer';

export class ReportRdo {

  @ApiProperty({
    description: 'ID пользователя',
    example: 1
  })
  @Expose()
  public  userId: number;
  
  @ApiProperty({
    description: 'ID отчета',
    example: 1
  })
  @Expose()
  public reportId: number;
  
  @ApiProperty({
    description: 'Название отчета',
    example: 'Осмотр автомобиля BMW X6'
  })
  @Expose()
  public title: string;

  @ApiProperty({
    description: 'Email заказчика осмотра',
    example: 'string@email.com'
  })
  @Expose()
  public userEmail: string;

  @ApiProperty({
    description: 'Отказа от осмотра',
    example: false
  })
  @Expose()
  public sellerDetailsRefusalOfInspection: boolean;

  @ApiProperty({
    description: 'Ссылка на объявление',
    example: ["string"]
  })
  @Expose()
  public sellerDetailsLinkToAd: string[];

  @ApiProperty({
    description: 'Имя продавца',
    example: 'Иван'
  })
  @Expose()
  public sellerDetailsName: string;
  
  @ApiProperty({
    description: 'Номер телефона',
    example: '+79195674839'
  })
  @Expose()
  public sellerDetailsPhone: string;
  
  @ApiProperty({
    description: 'Стоимость автомобиля',
    example: '100000'
  })
  @Expose()
  public sellerDetailsCarCost: string;
  
  @ApiProperty({
    description: 'Собственник или дилер',
    example: "string"
  })
  @Expose()
  public sellerDetailsRole: string;
  
  @ApiProperty({
    description: 'Общий комментнарий',
    example: 'Тачка огонь!!!'
  })
  @Expose()
  public sellerDetailsComment: string;
 
  //////////////////////////////////
  @ApiProperty({
    description: 'VIN номер',
    example: "string"
  })
  @Expose()
  public vinNumber: string;

  @ApiProperty({
    description: 'Подтвержден экспертом',
    example: false
  })
  @Expose()
  public vinBodyNumberExpertConfirm: boolean;

  @ApiProperty({
    description: 'Состояние номера',
    example: [false]
  })
  @Expose()
  public vinBodyNumberNumberState: boolean[];

  @ApiProperty({
    description: 'Фото VIN',
    example: ["string"]
  })
  @Expose()
  public vinBodyNumberPhoto: string[];

  @ApiProperty({
    description: 'Комментарий',
    example: "string"
  })
  @Expose()
  public vinBodyNumberComment: string;

  @ApiProperty({
    description: 'Рамы номер',
    example: "string"
  })
  @Expose()
  public frameNumber: string;

  @ApiProperty({
    description: 'Подтвержден экспертом',
    example: false
  })
  @Expose()
  public frameNumberExpertConfirm: boolean;

  @ApiProperty({
    description: 'Состояние номера',
    example: [false]
  })
  @Expose()
  public frameNumberNumberState: boolean[];

  @ApiProperty({
    description: 'Фото номера рамы',
    example: ["string"]
  })
  @Expose()
  public frameNumberPhoto: string[];
  
  @ApiProperty({
    description: 'Комментарий',
    example: "string"
  })
  @Expose()
  public frameNumberComment: string;

  @ApiProperty({
    description: 'Отсутствует',
    example: false
  })
  @Expose()
  public stateNumberAbsent: boolean;

  @ApiProperty({
    description: 'Иностранный',
    example: false
  })
  @Expose()
  public stateNumberForeign: boolean;

  @ApiProperty({
    description: 'Гос номер',
    example: "string"
  })
  @Expose()
  public stateNumberStateNumber: string;

  @ApiProperty({
    description: 'Комментарий',
    example: "string"
  })
  @Expose()
  public stateNumberComment: string;

  @ApiProperty({
    description: 'Отсутствует',
    example: false
  })
  @Expose()
  public tCPAbsent: boolean;

  @ApiProperty({
    description: 'Тип ПТС',
    example: 'string'
  })
  @Expose()
  public tCPType: string;

  @ApiProperty({
    description: 'Фото',
    example: ["string"]
  })
  @Expose()
  public tCPPhoto: string[];

  @ApiProperty({
    description: 'Количество владельцев',
    example: "string"
  })
  @Expose()
  public tCPNumberOfOwners: string;

  @ApiProperty({
    description: 'Комментарий',
    example: 'string'
  })
  @Expose()
  public tCPComment: string;

  @ApiProperty({
    description: 'Отсутствует',
    example: false
  })
  @Expose()
  public sTSAbsent: boolean;

  @ApiProperty({
    description: 'Фото',
    example: ["string"]
  })
  @Expose()
  public sTSPhoto: string[];

  @ApiProperty({
    description: 'Комментарий',
    example: "string"
  })
  @Expose()
  public sTSComment: string;

  @ApiProperty({
    description: 'Марка',
    example: "string"
  })
  @Expose()
  public carDataCarBrand: string;

  @ApiProperty({
    description: 'Модель',
    example: "string"
  })
  @Expose()
  public carDataCarModel: string;

  @ApiProperty({
    description: 'Год',
    example: "string"
  })
  @Expose()
  public carDataManufactureYear: string;

  @ApiProperty({
    description: 'Цвет',
    example: "string"
  })
  @Expose()
  public carDataColor: string;

  @ApiProperty({
    description: 'Тип кузова',
    example: "string"
  })
  @Expose()
  public carDataBodyType: string;

  @ApiProperty({
    description: 'Тип двигателя',
    example: "string"
  })
  @Expose()
  public carDataEnginesType: string;

  @ApiProperty({
    description: 'Тип КПП',
    example: "string"
  })
  @Expose()
  public carDataGearboxType: string;

  @ApiProperty({
    description: 'Привод',
    example: "string"
  })
  @Expose()
  public carDataDriveUnit: string;

  @ApiProperty({
    description: 'Расположение руля',
    example: "string"
  })
  @Expose()
  public carDataSteeringWheelLocation: string;

  @ApiProperty({
    description: 'Номер двигателя',
    example: "string"
  })
  @Expose()
  public engineNumber: string;

  @ApiProperty({
    description: 'Подтвержден экспертом',
    example: false
  })
  @Expose()
  public engineNumberExpertConfirm: boolean;

  @ApiProperty({
    description: 'Состояние номера',
    example: [false]
  })
  @Expose()
  public engineNumberNumberState: boolean[];

  @ApiProperty({
    description: 'Фото номера рамы',
    example: ["string"]
  })
  @Expose()
  public engineNumberPhoto: string[];

  @ApiProperty({
    description: 'Номер двигателя',
    example: "string"
  })
  @Expose()
  public engineNumberEngineNumber: string;

  @ApiProperty({
    description: 'Комментарий',
    example: "string"
  })
  @Expose()
  public engineNumberComment: string;

  @ApiProperty({
    description: 'Объем двигателя',
    example: "string"
  })
  @Expose()
  public carDataEngineCapacity: string;

  @ApiProperty({
    description: 'Мощность',
    example: "string"
  })
  @Expose()
  public carDataPower: string;

  @ApiProperty({
    description: 'Сервисная книжка',
    example: "string"
  })
  @Expose()
  public carDataServiceBook: string;

  @ApiProperty({
    description: 'Комментарий',
    example: "string"
  })
  @Expose()
  public additionalDocumentsComment: string;

  @ApiProperty({
    description: 'Фото',
    example: ["string"]
  })
  @Expose()
  public additionalDocumentsPhoto: string[];
  //////////////////////////////////
  @ApiProperty({
    description: 'Страна',
    example: "string"
  })
  @Expose()
  public locationCountry: string;

  @ApiProperty({
    description: 'Регион',
    example: "string"
  })
  @Expose()
  public locationRegion: string;

  @ApiProperty({
    description: 'Город',
    example: "string"
  })
  @Expose()
  public locationCity: string;

  @ApiProperty({
    description: 'Адрес',
    example: "string"
  })
  @Expose()
  public locationAddress: string;

  @ApiProperty({
    description: 'Комментарий',
    example: "string"
  })
  @Expose()
  public locationComment: string;
 ////////////////////////////////////////
 @ApiProperty({
  description: 'Рейлинги на крыше',
  example: false
})
@Expose()
public complectationBodyRoofRails: boolean;

@ApiProperty({
  description: 'Наклейки на кузове',
  example: false
})
@Expose()
public complectationBodyBodyStickers: boolean;

@ApiProperty({
  description: 'Аэрография',
  example: false
})
@Expose()
public complectationBodyAirbrushing: boolean;

@ApiProperty({
  description: 'Тюнинг кузова',
  example: false
})
@Expose()
public complectationBodyBodyTuning: boolean;

@ApiProperty({
  description: 'Оклеен пленкой',
  example: false
})
@Expose()
public complectationBodyBodyInFilm: boolean;
//////////////////////////////////////////////
@ApiProperty({
  description: 'Все шины одинаковые',
  example: false
})
@Expose()
public complectationWheelsIsTiresIdentical: boolean;

@ApiProperty({
  description: 'Дополнительные комплекты шин',
  example: false
})
@Expose()
public complectationWheelsAdditionalTireSets: boolean;

@ApiProperty({
  description: 'Дополнительные комплекты дисков',
  example: false
})
@Expose()
public complectationWheelsAdditionalSetsOfDisks: boolean;

@ApiProperty({
  description: 'Тип дисков',
  example: 'string'
})
@Expose()
public complectationWheelsTypeOfDisks: string;

@ApiProperty({
  description: 'Сезонность',
  example: "string"
})
@Expose()
public complectationWheelsSeasonality: string;

@ApiProperty({
  description: 'Марка шин переднего левого колеса',
  example: 'string'
})
@Expose()
public complectationWheelsFrontLeftBrand: string;

@ApiProperty({
  description: 'Марка шин заднего левого колеса',
  example: 'string'
})
@Expose()
public complectationWheelsBackLeftBrand: string;

@ApiProperty({
  description: 'Марка шин переднего правого колеса',
  example: 'string'
})
@Expose()
public complectationWheelsFrontRightBrand: string;

@ApiProperty({
  description: 'Марка шин заднего правого колеса',
  example: 'string'
})
@Expose()
public complectationWheelsBackRightBrand: string;

@ApiProperty({
  description: 'Модель шин переднего левого колеса',
  example: 'string'
})
@Expose()
public complectationWheelsFrontLeftModel: string;

@ApiProperty({
  description: 'Модель шин заднего левого колеса',
  example: 'string'
})
@Expose()
public complectationWheelsBackLeftModel: string;

@ApiProperty({
  description: 'Модель шин переднего правого колеса',
  example: 'string'
})
@Expose()
public complectationWheelsFrontRightModel: string;

@ApiProperty({
  description: 'Модель шин заднего правого колеса',
  example: 'string'
})
@Expose()
public complectationWheelsBackRightModel: string;

@ApiProperty({
  description: 'Дата выпуска шин переднего левого колеса',
  example: 'string'
})
@Expose()
public complectationWheelsFrontLeftIssueDate: string;

@ApiProperty({
  description: 'Дата выпуска шин заднего левого колеса',
  example: 'string'
})
@Expose()
public complectationWheelsBackLeftIssueDate: string;

@ApiProperty({
  description: 'Дата выпуска шин переднего правого колеса',
  example: 'string'
})
@Expose()
public complectationWheelsFrontRightIssueDate: string;

@ApiProperty({
  description: 'Дата выпуска шин заднего правого колеса',
  example: 'string'
})
@Expose()
public complectationWheelsBackRightIssueDate: string;

@ApiProperty({
  description: 'Параметры шин переднего левого колеса',
  example: ['string']
})
@Expose()
public complectationWheelsFrontLeftOptions: string[];

@ApiProperty({
  description: 'Параметры шин заднего левого колеса',
  example: ['string']
})
@Expose()
public complectationWheelsBackLeftOptions: string[];

@ApiProperty({
  description: 'Параметры шин переднего правого колеса',
  example: ['string']
})
@Expose()
public complectationWheelsFrontRightOptions: string[];

@ApiProperty({
  description: 'Параметры шин заднего правого колеса',
  example: ['string']
})
@Expose()
public complectationWheelsBackRightOptions: string[];

@ApiProperty({
  description: 'Износ шин переднего левого колеса',
  example: 'string'
})
@Expose()
public complectationWheelsFrontLeftWear: string;

@ApiProperty({
  description: 'Износ шин заднего левого колеса',
  example: 'string'
})
@Expose()
public complectationWheelsBackLeftWear: string;

@ApiProperty({
  description: 'Износ шин переднего правого колеса',
  example: 'string'
})
@Expose()
public complectationWheelsFrontRightWear: string;

@ApiProperty({
  description: 'Износ шин заднего правого колеса',
  example: 'string'
})
@Expose()
public complectationWheelsBackRightWear: string;

@ApiProperty({
  description: 'Дополнительные шины - сезонность',
  example: ['string']
})
@Expose()
public complectationWheelsAdditionalTiresSeasonality: string[];

@ApiProperty({
  description: 'Дополнительные диски - тип',
  example: 'string'
})
@Expose()
public complectationWheelsAdditionalDisksType: string;
//////////////////////////////////////////////////////////////////
@ApiProperty({
  description: 'Люк',
  example: false
})
@Expose()
public complectationSalonLuke: boolean;

@ApiProperty({
  description: 'Чехлы на сиденьях',
  example: false
})
@Expose()
public complectationSalonSeatCovers: boolean;

@ApiProperty({
  description: 'Панорамная крыша',
  example: false
})
@Expose()
public complectationSalonPanoramicView: boolean;

@ApiProperty({
  description: 'Третий ряд сидений',
  example: false
})
@Expose()
public complectationSalonThirdRowOfSeats: boolean;

@ApiProperty({
  description: 'Тонированные стекла',
  example: false
})
@Expose()
public complectationSalonTintedGlass: boolean;

@ApiProperty({
  description: 'Подогрев руля',
  example: false
})
@Expose()
public complectationSalonSteeringWheelHeating: boolean;

@ApiProperty({
  description: 'Отделка кожей рычага КПП',
  example: false
})
@Expose()
public complectationSalonLeatherTrimmedGearshiftLever: boolean;

@ApiProperty({
  description: 'Спортивные передние сиденья',
  example: false
})
@Expose()
public complectationSalonSportsFrontSeats: boolean;

@ApiProperty({
  description: 'Отделка кожей рулевого колеса',
  example: false
})
@Expose()
public complectationSalonSteeringWheelLeatherTrim: boolean;

@ApiProperty({
  description: 'Складывающеется заднее сиденье',
  example: false
})
@Expose()
public complectationSalonFoldingRearSeat: boolean;

@ApiProperty({
  description: 'Передний центральный подлокотник',
  example: false
})
@Expose()
public complectationSalonFrontCenterArmrest: boolean;

@ApiProperty({
  description: 'Материал салона',
  example: "string"
})
@Expose()
public complectationSalonInteriorMaterial: string;

@ApiProperty({
  description: 'Подогрев сидений',
  example: ["string"]
})
@Expose()
public complectationSalonHeatedSeats: string[];

@ApiProperty({
  description: 'Регулировка сидений по высоте',
  example: "string"
})
@Expose()
public complectationSalonSeatHeightAdjustment: string;

@ApiProperty({
  description: 'Электрорегулировка сидений',
  example: ["string"]
})
@Expose()
public complectationSalonElectricallyAdjustableSeats: string[];

@ApiProperty({
  description: 'Память положения сидений',
  example: "string"
})
@Expose()
public complectationSalonSeatPositionMemory: string;

@ApiProperty({
  description: 'Вентиляция сидений',
  example: ["string"]
})
@Expose()
public complectationSalonSeatVentilation: string[];

@ApiProperty({
  description: 'Сиденья с массажем',
  example: ["string"]
})
@Expose()
public complectationSalonSeatMassage: string[];
////////////////////////////////////////////////////////////////////////
@ApiProperty({
  description: 'Датчик света',
  example: false
})
@Expose()
public complectationHeadlightsLightSensor: boolean;

@ApiProperty({
  description: 'Датчик дождя',
  example: false
})
@Expose()
public complectationHeadlightsRainSensor: boolean;

@ApiProperty({
  description: 'Омыватель фар',
  example: false
})
@Expose()
public complectationHeadlightsHeadlightWasher: boolean;

@ApiProperty({
  description: 'Противотуманные фары',
  example: false
})
@Expose()
public complectationHeadlightsFogLights: boolean;

@ApiProperty({
  description: 'Автоматический корректор фар',
  example: false
})
@Expose()
public complectationHeadlightsAutomaticHeadlightLeveling: boolean;

@ApiProperty({
  description: 'Система адаптивного освещения',
  example: false
})
@Expose()
public complectationHeadlightsAdaptivLlightingSystem: boolean;

@ApiProperty({
  description: 'Система управления дальним светом',
  example: false
})
@Expose()
public complectationHeadlightsHighBeamControlSystem: boolean;

@ApiProperty({
  description: 'Фары',
  example: "string"
})
@Expose()
public complectationHeadlightsHeadlights: string;
/////////////////////////////////////////////////////////////////////////////////

@ApiProperty({
  description: 'cd',
  example: false
})
@Expose()
public complectationMultimediaCd: boolean;

@ApiProperty({
  description: 'tv',
  example: false
})
@Expose()
public complectationMultimediaTv: boolean;

@ApiProperty({
  description: 'usb',
  example: false
})
@Expose()
public complectationMultimediaUsb: boolean;

@ApiProperty({
  description: 'aux',
  example: false
})
@Expose()
public complectationMultimediaAux: boolean;

@ApiProperty({
  description: 'dvd',
  example: false
})
@Expose()
public complectationMultimediaDvd: boolean;

@ApiProperty({
  description: 'Кассета',
  example: false
})
@Expose()
public complectationMultimediaCassette: boolean;

@ApiProperty({
  description: 'CarPlay',
  example: false
})
@Expose()
public complectationMultimediaCarPlay: boolean;

@ApiProperty({
  description: 'bluetooth',
  example: false
})
@Expose()
public complectationMultimediaBluetooth: boolean;

@ApiProperty({
  description: 'Сабвуфер',
  example: false
})
@Expose()
public complectationMultimediaSubwoofer: boolean;

@ApiProperty({
  description: 'Голосовое управление',
  example: false
})
@Expose()
public complectationMultimediaVoiceControl: boolean;

@ApiProperty({
  description: 'Навигационная система',
  example: false
})
@Expose()
public complectationMultimediaNavigationSystem: boolean;

@ApiProperty({
  description: 'Мультимедиа для пассажиров',
  example: false
})
@Expose()
public complectationMultimediaMultimediaSystemForRearPassengers: boolean;
///////////////////////////////////////////////////////////////////////////////////////////
@ApiProperty({
  description: 'Система старт-стоп',
  example: false
})
@Expose()
public complectationComfortStartStopSystem: boolean;

@ApiProperty({
  description: 'Бортовой компьютер',
  example: false
})
@Expose()
public complectationComfortOnBoardComputer: boolean;

@ApiProperty({
  description: 'Электропривод зеркал',
  example: false
})
@Expose()
public complectationComfortElectricMirrors: boolean;

@ApiProperty({
  description: 'Предпусковой отопитель',
  example: false
})
@Expose()
public complectationComfortPreheater: boolean;

@ApiProperty({
  description: 'Запуск двигателя с кнопки',
  example: false
})
@Expose()
public complectationComfortEngineStartButton: boolean;

@ApiProperty({
  description: 'Система запуска без ключа',
  example: false
})
@Expose()
public complectationComfortKeylessEntrySystem: boolean;

@ApiProperty({
  description: 'Открытие багажника без рук',
  example: false
})
@Expose()
public complectationComfortHandsFreeTrunkOpening: boolean;

@ApiProperty({
  description: 'Электросладывание зеркал',
  example: false
})
@Expose()
public complectationComfortElectrofoldingOfMirrors: boolean;

@ApiProperty({
  description: 'Мультифункциональный руль',
  example: false
})
@Expose()
public complectationComfortMultifunctionSteeringWheel: boolean;

@ApiProperty({
  description: 'Сенсорная панель управления',
  example: false
})
@Expose()
public complectationComfortTouchControlPanel: boolean;

@ApiProperty({
  description: 'Переключение передач на руле',
  example: false
})
@Expose()
public complectationComfortGearshiftPaddles: boolean;

@ApiProperty({
  description: 'Регулируемый педальный узел',
  example: false
})
@Expose()
public complectationComfortAdjustablePedalAssembly: boolean;

@ApiProperty({
  description: 'Электронная приборная панель',
  example: false
})
@Expose()
public complectationComfortElectronicDashboard: boolean;

@ApiProperty({
  description: 'Дистанционный запуск двигателя',
  example: false
})
@Expose()
public complectationComfortRemoteEngineStart: boolean;

@ApiProperty({
  description: 'Электропривод крышки багажника',
  example: false
})
@Expose()
public complectationComfortElectricTrunkLid: boolean;

@ApiProperty({
  description: 'Камера',
  example: ["string"]
})
@Expose()
public complectationComfortCamera: string[];

@ApiProperty({
  description: 'Подвеска',
  example: ["string"]
})
@Expose()
public complectationComfortSuspension: string[];

@ApiProperty({
  description: 'Кондиционер',
  example: "string"
})
@Expose()
public complectationComfortAirConditioner: string;

@ApiProperty({
  description: 'Усилитель руля',
  example: "string"
})
@Expose()
public complectationComfortPowerSteering: string;

@ApiProperty({
  description: 'Круиз-контроль',
  example: "string"
})
@Expose()
public complectationComfortCruiseControl: string;

@ApiProperty({
  description: 'Электроподогрев',
  example: ["string"]
})
@Expose()
public complectationComfortElectricHeating: string[];

@ApiProperty({
  description: 'Регулировка руля',
  example: ["string"]
})
@Expose()
public complectationComfortSteeringWheelAdjustment: string[];

@ApiProperty({
  description: 'Помощь при парковке',
  example: ["string"]
})
@Expose()
public complectationComfortParkingAssistanceSystem: string[];

@ApiProperty({
  description: 'Электроподъемние стекла',
  example: ["string"]
})
@Expose()
public complectationComfortElectricLifts: string[];
/////////////////////////////////////////////////////////////////////////////////////////////////
@ApiProperty({
  description: 'ЭРА-ГЛОНАСС',
  example: false
})
@Expose()
public complectationSafetyEraGlonass: boolean;

@ApiProperty({
  description: 'Блокировка замков',
  example: false
})
@Expose()
public complectationSafetyLocking: boolean;

@ApiProperty({
  description: 'Бронированный кузов',
  example: false
})
@Expose()
public complectationSafetyArmoredBody: boolean;

@ApiProperty({
  description: 'Подушки безопасности',
  example: ["string"]
})
@Expose()
public complectationSafetyAirbags: string[];

@ApiProperty({
  description: 'Система крепления isofix',
  example: ["string"]
})
@Expose()
public isofix: string[];

@ApiProperty({
  description: 'Вспомогательные системы',
  example: ["string"]
})
@Expose()
public complectationSafetyAuxiliarySystems: string[];
////////////////////////////////////////////////////////////////////////////////////////////////////
@ApiProperty({
  description: 'Метка',
  example: false
})
@Expose()
public complectationProtectionLabel: boolean;

@ApiProperty({
  description: 'Иммобилайзер',
  example: false
})
@Expose()
public complectationProtectionImmobilizer: boolean;

@ApiProperty({
  description: 'Центральный замок',
  example: false
})
@Expose()
public complectationProtectionCentralLocking: boolean;

@ApiProperty({
  description: 'Авторская охранная система',
  example: false
})
@Expose()
public complectationProtectionAuthorsSecuritySystem: boolean;

@ApiProperty({
  description: 'Датчик проникновения в салон',
  example: false
})
@Expose()
public complectationProtectionInteriorIntrusionSensor: boolean;

@ApiProperty({
  description: 'Сигнализация',
  example: "string"
})
@Expose()
public complectationProtectionSignaling: string;
//////////////////////////////////////////////////////////////////////////////////////////////////////
@ApiProperty({
  description: 'Фаркоп',
  example: false
})
@Expose()
public complectationOtherTowBar: boolean;

@ApiProperty({
  description: 'Лебедка',
  example: false
})
@Expose()
public complectationOtherWinch: boolean;

@ApiProperty({
  description: 'Аэробокс',
  example: false
})
@Expose()
public complectationOtherAirbox: boolean;

@ApiProperty({
  description: 'Защита картера',
  example: false
})
@Expose()
public complectationOtherCrankcaseProtection: boolean;

@ApiProperty({
  description: 'Поперечные дуги',
  example: false
})
@Expose()
public complectationOtherTransverseArches: boolean;

@ApiProperty({
  description: 'Газобалонное оборудование',
  example: false
})
@Expose()
public complectationOtherGasEquipment: boolean;

@ApiProperty({
  description: 'Количество ключей',
  example: "string"
})
@Expose()
public complectationOtherNumberOfKeys: string;

@ApiProperty({
  description: 'Запасное колесо',
  example: "string"
})
@Expose()
public complectationOtherSpareWheel: string;
///////////////////////////////////////////////////////////////////////////////////////////////////////
@ApiProperty({
  description: 'Заводской окрас',
  example: false
})
@Expose()
public paintworkInspectionFactoryColor: boolean;

@ApiProperty({
  description: 'Кузов оклее пленкой',
  example: false
})
@Expose()
public paintworkInspectionBodyInFilm: boolean;

@ApiProperty({
  description: 'Крыша',
  example: ["string"]
})
@Expose()
public paintworkInspectionRoof: string[];

@ApiProperty({
  description: 'Крышка багажника',
  example: ["string"]
})
@Expose()
public paintworkInspectionTrunkLid: string[];

@ApiProperty({
  description: 'Правое заднее крыло',
  example: ["string"]
})
@Expose()
public paintworkInspectionRightRearFender: string[];

@ApiProperty({
  description: 'Правая задняя стойка',
  example: ["string"]
})
@Expose()
public paintworkInspectionRightRearPillar: string[];

@ApiProperty({
  description: 'Правая задняя дверь',
  example: ["string"]
})
@Expose()
public paintworkInspectionRightRearDoor: string[];

@ApiProperty({
  description: 'Правый проем задней двери',
  example: ["string"]
})
@Expose()
public paintworkInspectionRightRearDoorOpening: string[];

@ApiProperty({
  description: 'Правая центральная стойка',
  example: ["string"]
})
@Expose()
public paintworkInspectionRightCenterPillar: string[];

@ApiProperty({
  description: 'Правый порог',
  example: ["string"]
})
@Expose()
public paintworkInspectionRightThreshold: string[];

@ApiProperty({
  description: 'Правая передняя дверь',
  example: ["string"]
})
@Expose()
public paintworkInspectionRightFrontDoor: string[];

@ApiProperty({
  description: 'Правый проем передней двери',
  example: ["string"]
})
@Expose()
public paintworkInspectionRightFrontDoorOpening: string[];

@ApiProperty({
  description: 'Правая передняя стойка',
  example: ["string"]
})
@Expose()
public paintworkInspectionRightFrontPillar: string[];

@ApiProperty({
  description: 'Правое переднее крыло',
  example: ["string"]
})
@Expose()
public paintworkInspectionRightFrontFender: string[];

@ApiProperty({
  description: 'Капот',
  example: ["string"]
})
@Expose()
public paintworkInspectionHood: string[];

@ApiProperty({
  description: 'Левое переднее крыло',
  example: ["string"]
})
@Expose()
public paintworkInspectionLeftFrontFender: string[];

@ApiProperty({
  description: 'Левая передняя стойка',
  example: ["string"]
})
@Expose()
public paintworkInspectionLeftFrontPillar: string[];

@ApiProperty({
  description: 'Левая передняя дверь',
  example: ["string"]
})
@Expose()
public paintworkInspectionLeftFrontDoor: string[];

@ApiProperty({
  description: 'Левый проем передней двери',
  example: ["string"]
})
@Expose()
public paintworkInspectionLeftFrontDoorOpening: string[];

@ApiProperty({
  description: 'Левая центральная стойка',
  example: ["string"]
})
@Expose()
public paintworkInspectionLeftCenterPillar: string[];

@ApiProperty({
  description: 'Левый порог',
  example: ["string"]
})
@Expose()
public paintworkInspectionLeftThreshold: string[];

@ApiProperty({
  description: 'Левая задняя дверь',
  example: ["string"]
})
@Expose()
public paintworkInspectionLeftRearDoor: string[];

@ApiProperty({
  description: 'Левый проем задней двери',
  example: ["string"]
})
@Expose()
public paintworkInspectionLeftRearDoorOpening: string[];

@ApiProperty({
  description: 'Левая задняя стойка',
  example: ["string"]
})
@Expose()
public paintworkInspectionLeftRearPillar: string[];

@ApiProperty({
  description: 'Левое заднее крыло',
  example: ["string"]
})
@Expose()
public paintworkInspectionLeftRearFender: string[];

@ApiProperty({
  description: 'Имя элемента',
  example: "string"
})
@Expose()
public paintworkInspectionAddNameOne: string;

@ApiProperty({
  description: 'Инфо элемента',
  example: ["string"]
})
@Expose()
public paintworkInspectionAddInfoOne: string[];

@ApiProperty({
  description: 'Имя элемента',
  example: "string"
})
@Expose()
public paintworkInspectionAddNameTwo: string;

@ApiProperty({
  description: 'Инфо элемента',
  example: ["string"]
})
@Expose()
public paintworkInspectionAddInfTwo: string[];

@ApiProperty({
  description: 'Имя элемента',
  example: "string"
})
@Expose()
public paintworkInspectionAddNameThree: string;

@ApiProperty({
  description: 'Инфо элемента',
  example: ["string"]
})
@Expose()
public paintworkInspectionAddInfoThree: string[];
////////////////////////////////////////////////////////////////////////////////////////////////////////
@ApiProperty({
  description: 'Без повреждений',
  example: false
})
@Expose()
public engineCompartmentDamageWithoutDamage: boolean;

@ApiProperty({
  description: 'Левый лонжерон',
  example: ['string']
})
@Expose()
public engineCompartmentDamageLeftSideMember: string[];

@ApiProperty({
  description: 'Левый стакан',
  example: ['string']
})
@Expose()
public engineCompartmentDamageLeftGlass: string[];

@ApiProperty({
  description: 'Правый лонжерон',
  example: ['string']
})
@Expose()
public engineCompartmentDamageRightSideMember: string[];

@ApiProperty({
  description: 'Правый стакан',
  example: ['string']
})
@Expose()
public engineCompartmentDamageRightGlass: string[];

@ApiProperty({
  description: 'Петли капота',
  example: ['string']
})
@Expose()
public engineCompartmentDamageHoodHinges: string[]; 

@ApiProperty({
  description: 'Телевизор',
  example: ['string']
})
@Expose()
public engineCompartmentDamageTelevisor: string[];

@ApiProperty({
  description: 'Моторный щит',
  example: ['string']
})
@Expose()
public engineCompartmentDamageMotorShield: string[];

@ApiProperty({
  description: 'Имя элемента',
  example: "string"
})
@Expose()
public engineCompartmentDamageAddNameOne: string;

@ApiProperty({
  description: 'Инфо элемента',
  example: ["string"]
})
@Expose()
public engineCompartmentDamageAddInfoOne: string[];

@ApiProperty({
  description: 'Имя элемента',
  example: "string"
})
@Expose()
public engineCompartmentDamageAddNameTwo: string;

@ApiProperty({
  description: 'Инфо элемента',
  example: ["string"]
})
@Expose()
public engineCompartmentDamageAddInfTwo: string[];

@ApiProperty({
  description: 'Имя элемента',
  example: "string"
})
@Expose()
public engineCompartmentDamageAddNameThree: string;

@ApiProperty({
  description: 'Инфо элемента',
  example: ["string"]
})
@Expose()
public engineCompartmentDamageAddInfoThree: string[];
//////////////////////////////////////////////////////////////////////////////////////////////////////
@ApiProperty({
  description: 'Без повреждений',
  example: false
})
@Expose()
public frontSideDamageWithoutDamage: boolean;

@ApiProperty({
  description: 'Противотуманные фары',
  example: ["string"]
})
@Expose()
public frontSideDamageFogLights: string[]; 

@ApiProperty({
  description: 'Решетка радиатора',
  example: ["string"]
})
@Expose()
public frontSideDamageRadiatorGrille: string[]; 

@ApiProperty({
  description: 'Бампер',
  example: ["string"]
})
@Expose()
public frontSideDamageFrontBumper: string[]; 

@ApiProperty({
  description: 'Правая фара',
  example: ["string"]
})
@Expose()
public frontSideDamageRightHeadlight: string[]; 

@ApiProperty({
  description: 'Левая фара',
  example: ["string"]
})
@Expose()
public frontSideDamageLeftHeadlight: string[]; 

@ApiProperty({
  description: 'Капот',
  example: ["string"]
})
@Expose()
public frontSideDamageHood: string[]; 

@ApiProperty({
  description: 'Имя элемента',
  example: "string"
})
@Expose()
public frontSideDamageAddNameOne: string;

@ApiProperty({
  description: 'Инфо элемента',
  example: ["string"]
})
@Expose()
public frontSideDamageAddInfoOne: string[];

@ApiProperty({
  description: 'Имя элемента',
  example: "string"
})
@Expose()
public frontSideDamageAddNameTwo: string;

@ApiProperty({
  description: 'Инфо элемента',
  example: ["string"]
})
@Expose()
public frontSideDamageAddInfTwo: string[];

@ApiProperty({
  description: 'Имя элемента',
  example: "string"
})
@Expose()
public frontSideDamageAddNameThree: string;

@ApiProperty({
  description: 'Инфо элемента',
  example: ["string"]
})
@Expose()
public frontSideDamageAddInfoThree: string[];
///////////////////////////////////////////////////////////////////////////////////////////////////////

  @ApiProperty({
    description: 'Массив объектов c информацией о повреждениях левой части',
    example: [0]
  })
  @Expose()
  public leftSideDamage: LeftSideDamage[];

  @ApiProperty({
    description: 'Массив объектов c информацией о повреждениях задней части',
    example: [0]
  })
  @Expose()
  public backSideDamage: BackSideDamage[];

  @ApiProperty({
    description: 'Массив объектов c информацией о повреждениях багажника',
    example: [0]
  })
  @Expose()
  public trunkDamage: TrunkDamage[];

  @ApiProperty({
    description: 'Массив объектов c информацией о повреждениях правой части',
    example: [0]
  })
  @Expose()
  public rightSideDamage: RightSideDamage[];

  @ApiProperty({
    description: 'Массив объектов c информацией о повреждениях крыши',
    example: [0]
  })
  @Expose()
  public roofDamage: RoofDamage[];

  @ApiProperty({
    description: 'Массив объектов c информацией о повреждениях стекол',
    example: [0]
  })
  @Expose()
  public glassDamage: GlassDamage[];

  @ApiProperty({
    description: 'Массив объектов c информацией о повреждениях колес',
    example: [0]
  })
  @Expose()
  public discDamage: DiscDamage[];

  @ApiProperty({
    description: 'Массив объектов c информацией о повреждениях салона',
    example: [0]
  })
  @Expose()
  public interiorDamage: InteriorDamage[];

  @ApiProperty({
    description: 'Массив объектов c фото кузова',
    example: [0]
  })
  @Expose()
  public exteriorPhoto: ExteriorPhoto[];

  @ApiProperty({
    description: 'Массив объектов c фото салона',
    example: [0]
  })
  @Expose()
  public interiorPhoto: InteriorPhoto[];

  @ApiProperty({
    description: 'Массив объектов c круговым обзором',
    example: [0]
  })
  @Expose()
  public roundViewVideo: RoundViewVideo[];

  @ApiProperty({
    description: 'Массив объектов c заглушенным двигателем',
    example: [0]
  })
  @Expose()
  public stoppedEngine: StoppedEngine[];

  @ApiProperty({
    description: 'Массив объектов c запущенным двигателем',
    example: [0]
  })
  @Expose()
  public runningEngine: RunningEngine[];

  @ApiProperty({
    description: 'Массив объектов c приборной панелью',
    example: [0]
  })
  @Expose()
  public dashboard: Dashboard[];

  @ApiProperty({
    description: 'Массив объектов c тест драйвом',
    example: [0]
  })
  @Expose()
  public testDrive: TestDrive[];

  @ApiProperty({
    description: 'Массив объектов c заключением эксперта',
    example: [0]
  })
  @Expose()
  public expertOpinion: ExpertOpinion[];

  @ApiProperty({
    description: 'Дата создания',
    example: ''
  })
  @Expose()
  public  createdAt: string;

  @ApiProperty({
    description: 'Дата публикации отчета',
    example: '1'
  })
  @Expose()
  public publishAt: string;
}



