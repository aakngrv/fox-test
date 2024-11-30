import { ApiProperty } from '@nestjs/swagger';
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
    description: 'Порядковый номер отчета',
    example: 1
  })
  @Expose()
  public reportNumber: number;
  
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
public complectationSafetyIsofix: string[];

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
  description: 'Без повреждений',
  example: false
})
@Expose()
public leftSideDamageWithoutDamage: boolean;

@ApiProperty({
  description: 'Переднее крыло',
  example: ['string']
})
@Expose()
public leftSideDamageLeftFrontFender: string[]; 

@ApiProperty({
  description: 'Передняя стойка',
  example: ['string']
})
@Expose()
public leftSideDamageLeftFrontPillar: string[]; 

@ApiProperty({
  description: 'Передняя дверь',
  example: ['string']
})
@Expose()
public leftSideDamageLeftFrontDoor: string[]; 

@ApiProperty({
  description: 'Центральная стойка',
  example: ['string']
})
@Expose()
public leftSideDamageLeftCenterPillar: string[];

@ApiProperty({
  description: 'Задняя дверь',
  example: ['string']
})
@Expose()
public leftSideDamageLeftRearDoor: string[]; 

@ApiProperty({
  description: 'Задняя стойка',
  example: ['string']
})
@Expose()
public leftSideDamageLeftRearPillar: string[]; 

@ApiProperty({
  description: 'Заднее крыло',
  example: ['string']
})
@Expose()
public leftSideDamageLeftRearFender: string[]; 

@ApiProperty({
  description: 'Левое зеркало',
  example: ['string']
})
@Expose()
public leftSideDamageLeftMirror: string[]; 

@ApiProperty({
  description: 'Порог',
  example: ['string']
})
@Expose()
public leftSideDamageLeftThreshold: string[]; 

@ApiProperty({
  description: 'Имя элемента',
  example: "string"
})
@Expose()
public leftSideDamageAddNameOne: string;

@ApiProperty({
  description: 'Инфо элемента',
  example: ["string"]
})
@Expose()
public leftSideDamageAddInfoOne: string[];

@ApiProperty({
  description: 'Имя элемента',
  example: "string"
})
@Expose()
public leftSideDamageAddNameTwo: string;

@ApiProperty({
  description: 'Инфо элемента',
  example: ["string"]
})
@Expose()
public leftSideDamageAddInfTwo: string[];

@ApiProperty({
  description: 'Имя элемента',
  example: "string"
})
@Expose()
public leftSideDamageAddNameThree: string;

@ApiProperty({
  description: 'Инфо элемента',
  example: ["string"]
})
@Expose()
public leftSideDamageAddInfoThree: string[];
//////////////////////////////////////////////////////////////////////////////////////////////////////
@ApiProperty({
  description: 'Без повреждений',
  example: false
})
@Expose()
public backSideDamageWithoutDamage: boolean;

@ApiProperty({
  description: 'Крышка багажника',
  example: ['string']
})
@Expose()
public backSideDamageTailgate: string[]; 

@ApiProperty({
  description: 'Задний бампер',
  example: ['string']
})
@Expose()
public backSideDamageRearBumper: string[]; 

@ApiProperty({
  description: 'Левый фонарь',
  example: ['string']
})
@Expose()
public backSideDamageLeftLamp: string[]; 

@ApiProperty({
  description: 'Правый фонарь',
  example: ['string']
})
@Expose()
public backSideDamageRightLamp: string[]; 

@ApiProperty({
  description: 'Имя элемента',
  example: "string"
})
@Expose()
public backSideDamageAddNameOne: string;

@ApiProperty({
  description: 'Инфо элемента',
  example: ["string"]
})
@Expose()
public backSideDamageAddInfoOne: string[];

@ApiProperty({
  description: 'Имя элемента',
  example: "string"
})
@Expose()
public backSideDamageAddNameTwo: string;

@ApiProperty({
  description: 'Инфо элемента',
  example: ["string"]
})
@Expose()
public backSideDamageAddInfTwo: string[];

@ApiProperty({
  description: 'Имя элемента',
  example: "string"
})
@Expose()
public backSideDamageAddNameThree: string;

@ApiProperty({
  description: 'Инфо элемента',
  example: ["string"]
})
@Expose()
public backSideDamageAddInfoThree: string[];
//////////////////////////////////////////////////////////////////////////////////////////////////
@ApiProperty({
  description: 'Без повреждений',
  example: false
})
@Expose()
public trunkDamageWithoutDamage: boolean;

@ApiProperty({
  description: 'Обшивка крышки',
  example: ['string']
})
@Expose()
public trunkDamageCoverTrim: string[]; 

@ApiProperty({
  description: 'Ковролин пола',
  example: ['string']
})
@Expose()
public trunkDamageCarpetFloor: string[]; 

@ApiProperty({
  description: 'Обшивка правая',
  example: ['string']
})
@Expose()
public trunkDamageRightTrim: string[]; 

@ApiProperty({
  description: 'Правый стакан',
  example: ['string']
})
@Expose()
public trunkDamageRightGlass: string[]; 

@ApiProperty({
  description: 'Обшивка левая',
  example: ['string']
})
@Expose()
public trunkDamageLeftTrim: string[]; 

@ApiProperty({
  description: 'Левый стакан',
  example: ['string']
})
@Expose()
public trunkDamageLeftGlass: string[]; 

@ApiProperty({
  description: 'Обшивка спинки сиденья',
  example: ['string']
})
@Expose()
public trunkDamageSeatBackTrim: string[]; 

@ApiProperty({
  description: 'Ниша запасного колеса',
  example: ['string']
})
@Expose()
public trunkDamageSpareWheelWell: string[]; 

@ApiProperty({
  description: 'Имя элемента',
  example: "string"
})
@Expose()
public trunkDamageAddNameOne: string;

@ApiProperty({
  description: 'Инфо элемента',
  example: ["string"]
})
@Expose()
public trunkDamageAddInfoOne: string[];

@ApiProperty({
  description: 'Имя элемента',
  example: "string"
})
@Expose()
public trunkDamageAddNameTwo: string;

@ApiProperty({
  description: 'Инфо элемента',
  example: ["string"]
})
@Expose()
public trunkDamageAddInfTwo: string[];

@ApiProperty({
  description: 'Имя элемента',
  example: "string"
})
@Expose()
public trunkDamageAddNameThree: string;

@ApiProperty({
  description: 'Инфо элемента',
  example: ["string"]
})
@Expose()
public trunkDamageAddInfoThree: string[];
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
@ApiProperty({
  description: 'Без повреждений',
  example: false
})
@Expose()
public rightSideDamageWithoutDamage: boolean;

@ApiProperty({
  description: 'Переднее крыло',
  example: ['string']
})
@Expose()
public rightSideDamageRightFrontFender: string[]; 

@ApiProperty({
  description: 'Передняя стойка',
  example: ['string']
})
@Expose()
public rightSideDamageRightFrontPillar: string[]; 

@ApiProperty({
  description: 'Передняя дверь',
  example: ['string']
})
@Expose()
public rightSideDamageRightFrontDoor: string[]; 

@ApiProperty({
  description: 'Центральная стойка',
  example: ['string']
})
@Expose()
public rightSideDamageRightCenterPillar: string[];

@ApiProperty({
  description: 'Задняя дверь',
  example: ['string']
})
@Expose()
public rightSideDamageRightRearDoor: string[]; 

@ApiProperty({
  description: 'Задняя стойка',
  example: ['string']
})
@Expose()
public rightSideDamageRightRearPillar: string[]; 

@ApiProperty({
  description: 'Заднее крыло',
  example: ['string']
})
@Expose()
public rightSideDamageRightRearFender: string[]; 

@ApiProperty({
  description: 'Левое зеркало',
  example: ['string']
})
@Expose()
public rightSideDamageRightMirror: string[]; 

@ApiProperty({
  description: 'Порог',
  example: ['string']
})
@Expose()
public rightSideDamageRightThreshold: string[]; 

@ApiProperty({
  description: 'Имя элемента',
  example: "string"
})
@Expose()
public rightSideDamageAddNameOne: string;

@ApiProperty({
  description: 'Инфо элемента',
  example: ["string"]
})
@Expose()
public rightSideDamageAddInfoOne: string[];

@ApiProperty({
  description: 'Имя элемента',
  example: "string"
})
@Expose()
public rightSideDamageAddNameTwo: string;

@ApiProperty({
  description: 'Инфо элемента',
  example: ["string"]
})
@Expose()
public rightSideDamageAddInfTwo: string[];

@ApiProperty({
  description: 'Имя элемента',
  example: "string"
})
@Expose()
public rightSideDamageAddNameThree: string;

@ApiProperty({
  description: 'Инфо элемента',
  example: ["string"]
})
@Expose()
public rightSideDamageAddInfoThree: string[];
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
@ApiProperty({
  description: 'Без повреждений',
  example: false
})
@Expose()
public roofDamageWithoutDamage: boolean;

@ApiProperty({
  description: 'Рейлинги',
  example: ['string']
})
@Expose()
public roofDamageRoofRails: string[];

@ApiProperty({
  description: 'Крыша',
  example: ['string']
})
@Expose()
public roofDamageRoof: string[];

@ApiProperty({
  description: 'Люк',
  example: ['string']
})
@Expose()
public roofDamageLuke: string[];

@ApiProperty({
  description: 'Панорама',
  example: ['string']
})
@Expose()
public roofDamagePanorama: string[];

@ApiProperty({
  description: 'Имя элемента',
  example: "string"
})
@Expose()
public roofDamageAddNameOne: string;

@ApiProperty({
  description: 'Инфо элемента',
  example: ["string"]
})
@Expose()
public roofDamageAddInfoOne: string[];

@ApiProperty({
  description: 'Имя элемента',
  example: "string"
})
@Expose()
public roofDamageAddNameTwo: string;

@ApiProperty({
  description: 'Инфо элемента',
  example: ["string"]
})
@Expose()
public roofDamageAddInfTwo: string[];

@ApiProperty({
  description: 'Имя элемента',
  example: "string"
})
@Expose()
public roofDamageAddNameThree: string;

@ApiProperty({
  description: 'Инфо элемента',
  example: ["string"]
})
@Expose()
public roofDamageAddInfoThree: string[];
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
@ApiProperty({
  description: 'Без повреждений',
  example: false
})
@Expose()
public glassDamageWithoutDamage: boolean;

@ApiProperty({
  description: 'Лобовое стекло',
  example: ['string']
})
@Expose()
public glassDamageWindshield: string[];

@ApiProperty({
  description: 'Левое переднее',
  example: ['string']
})
@Expose()
public glassDamageLeftFrontGlass: string[];

@ApiProperty({
  description: 'Левое заднее',
  example: ['string']
})
@Expose()
public glassDamageLeftRearGlass: string[];

@ApiProperty({
  description: 'Заднее стекло',
  example: ['string']
})
@Expose()
public glassDamageRearGlass: string[];

@ApiProperty({
  description: 'Правое переднее',
  example: ['string']
})
@Expose()
public glassDamageRightFrontGlass: string[];

@ApiProperty({
  description: 'Правое заднее',
  example: ['string']
})
@Expose()
public glassDamageRightRearGlass: string[];

@ApiProperty({
  description: 'Все стекла заводские',
  example: false
})
@Expose()
public glassDamageAllGlassIsFactory: boolean;

@ApiProperty({
  description: 'Имя элемента',
  example: "string"
})
@Expose()
public glassDamageAddNameOne: string;

@ApiProperty({
  description: 'Инфо элемента',
  example: ["string"]
})
@Expose()
public glassDamageAddInfoOne: string[];

@ApiProperty({
  description: 'Имя элемента',
  example: "string"
})
@Expose()
public glassDamageAddNameTwo: string;

@ApiProperty({
  description: 'Инфо элемента',
  example: ["string"]
})
@Expose()
public glassDamageAddInfTwo: string[];

@ApiProperty({
  description: 'Имя элемента',
  example: "string"
})
@Expose()
public glassDamageAddNameThree: string;

@ApiProperty({
  description: 'Инфо элемента',
  example: ["string"]
})
@Expose()
public glassDamageAddInfoThree: string[];
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
@ApiProperty({
  description: 'Без повреждений',
  example: false
})
@Expose()
public discDamageWithoutDamage: boolean;

@ApiProperty({
  description: 'Левое переднее',
  example: ['string']
})
@Expose()
public discDamageLeftFrontDisc: string[];

@ApiProperty({
  description: 'Левое заднее',
  example: ['string']
})
@Expose()
public discDamageLeftRearDisc: string[];

@ApiProperty({
  description: 'Правое переднее',
  example: ['string']
})
@Expose()
public discDamageRightFrontDisc: string[];

@ApiProperty({
  description: 'Правое заднее',
  example: ['string']
})
@Expose()
public discDamageRightRearDisc: string[];

@ApiProperty({
  description: 'Имя элемента',
  example: "string"
})
@Expose()
public discDamageAddNameOne: string;

@ApiProperty({
  description: 'Инфо элемента',
  example: ["string"]
})
@Expose()
public discDamageAddInfoOne: string[];

@ApiProperty({
  description: 'Имя элемента',
  example: "string"
})
@Expose()
public discDamageAddNameTwo: string;

@ApiProperty({
  description: 'Инфо элемента',
  example: ["string"]
})
@Expose()
public discDamageAddInfTwo: string[];

@ApiProperty({
  description: 'Имя элемента',
  example: "string"
})
@Expose()
public discDamageAddNameThree: string;

@ApiProperty({
  description: 'Инфо элемента',
  example: ["string"]
})
@Expose()
public discDamageAddInfoThree: string[];
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
@ApiProperty({
  description: 'Без повреждений',
  example: false
})
@Expose()
public interiorDamageWithoutDamage: boolean;

@ApiProperty({
  description: 'Передняя левая карта двери',
  example: ['string']
})
@Expose()
public interiorDamageFrontLeftDoorCard: string[];

@ApiProperty({
  description: 'Водительское сиденье',
  example: ['string']
})
@Expose()
public interiorDamageDriversSeat: string[];

@ApiProperty({
  description: 'Ковер салона',
  example: ['string']
})
@Expose()
public interiorDamageSalonCarpet: string[];

@ApiProperty({
  description: 'Торпеда',
  example: ['string']
})
@Expose()
public interiorDamageTorpedo: string[];

@ApiProperty({
  description: 'Потолок',
  example: ['string']
})
@Expose()
public interiorDamageCeiling: string[];

@ApiProperty({
  description: 'Задняя левая карта двери',
  example: ['string']
})
@Expose()
public interiorDamageBackLeftDoorCard: string[];

@ApiProperty({
  description: 'Заднее сиденье',
  example: ['string']
})
@Expose()
public interiorDamageBackSeat: string[];

@ApiProperty({
  description: 'Задняя правая карта двери',
  example: ['string']
})
@Expose()
public interiorDamageBackRightDoorCard: string[];

@ApiProperty({
  description: 'Передняя правая карта двери',
  example: ['string']
})
@Expose()
public interiorDamageFrontRightDoorCard: string[];

@ApiProperty({
  description: 'Пассажирское сиденье',
  example: ['string']
})
@Expose()
public interiorDamagePassengerSeat: string[];

@ApiProperty({
  description: 'Спальное отделение',
  example: ['string']
})
@Expose()
public interiorDamageSleepingCompartment: string[];

@ApiProperty({
  description: 'Имя элемента',
  example: "string"
})
@Expose()
public interiorDamageAddNameOne: string;

@ApiProperty({
  description: 'Инфо элемента',
  example: ["string"]
})
@Expose()
public interiorDamageAddInfoOne: string[];

@ApiProperty({
  description: 'Имя элемента',
  example: "string"
})
@Expose()
public interiorDamageAddNameTwo: string;

@ApiProperty({
  description: 'Инфо элемента',
  example: ["string"]
})
@Expose()
public interiorDamageAddInfTwo: string[];

@ApiProperty({
  description: 'Имя элемента',
  example: "string"
})
@Expose()
public interiorDamageAddNameThree: string;

@ApiProperty({
  description: 'Инфо элемента',
  example: ["string"]
})
@Expose()
public interiorDamageAddInfoThree: string[];
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
@ApiProperty({
  description: 'Перед справа',
  example: 'string'
})
@Expose()
public exteriorPhotoRightFrontPhoto: string;

@ApiProperty({
  description: 'Перед',
  example: 'string'
})
@Expose()
public exteriorPhotoFrontPhoto: string;

@ApiProperty({
  description: 'Перед слева',
  example: 'string'
})
@Expose()
public exteriorPhotoLeftFrontPhoto: string;

@ApiProperty({
  description: 'Справа сзади',
  example: 'string'
})
@Expose()
public exteriorPhotoRightBackPhoto: string;

@ApiProperty({
  description: 'Сзади',
  example: 'string'
})
@Expose()
public exteriorPhotoBackPhoto: string;

@ApiProperty({
  description: 'Слева сзади',
  example: 'string'
})
@Expose()
public exteriorPhotoLeftBackPhoto: string;

@ApiProperty({
  description: 'Слева',
  example: 'string'
})
@Expose()
public exteriorPhotoLeftPhoto: string;

@ApiProperty({
  description: 'Справа',
  example: 'string'
})
@Expose()
public exteriorPhotoRightPhoto: string;

@ApiProperty({
  description: 'Открытй капот',
  example: 'string'
})
@Expose()
public exteriorPhotoHoodOpen: string;

@ApiProperty({
  description: 'Открытый багажник',
  example: 'string'
})
@Expose()
public exteriorPhotoTrunkOpen: string;

@ApiProperty({
  description: 'Дополнительное фото',
  example: ['string']
})
@Expose()
public exteriorPhotoAddPhoto: string[];
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
@ApiProperty({
  description: 'Левая передняя дверь',
  example: 'string'
})
@Expose()
public interiorPhotoLeftFrontDoor: string;

@ApiProperty({
  description: 'Сиденье водителя',
  example: 'string'
})
@Expose()
public interiorPhotoDriverSeatPhoto: string;

@ApiProperty({
  description: 'Фото руля',
  example: 'string'
})
@Expose()
public interiorPhotoSteeringWheelPhoto: string;

@ApiProperty({
  description: 'Приборная панель',
  example: 'string'
})
@Expose()
public interiorPhotoDashboardPhoto: string;

@ApiProperty({
  description: 'Левая задняя дверь',
  example: 'string'
})
@Expose()
public interiorPhotoLeftBackDoor: string;

@ApiProperty({
  description: 'Заднее сидень слева',
  example: 'string'
})
@Expose()
public interiorPhotoBackLeftSeatsPhoto: string;

@ApiProperty({
  description: 'Передние сиденья',
  example: 'string'
})
@Expose()
public interiorPhotoFrontSeatsPhoto: string;

@ApiProperty({
  description: 'Правая задняя дверь',
  example: 'string'
})
@Expose()
public interiorPhotoRightBackDoor: string;

@ApiProperty({
  description: 'Заднее сидень справа',
  example: 'string'
})
@Expose()
public interiorPhotoBackRightSeatsPhoto: string;

@ApiProperty({
  description: 'Правая передняя дверь',
  example: 'string'
})
@Expose()
public interiorPhotoRightFrontDoor: string;

@ApiProperty({
  description: 'Пассажирское сиденье',
  example: 'string'
})
@Expose()
public interiorPhotoPassengerSeatPhoto: string;

@ApiProperty({
  description: 'Дополнительное фото',
  example: ['string']
})
@Expose()
public interiorPhotoAddPhoto: string[];
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
@ApiProperty({
  description: 'Круговое видео',
  example: 'string'
})
@Expose()
public roundViewVideoVideo: string;

@ApiProperty({
  description: 'Комментарий',
  example: 'string'
})
@Expose()
public roundViewVideoComment: string;
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
@ApiProperty({
  description: 'Новый',
  example: false
})
@Expose()
public stoppedEngineIsNew: boolean;

@ApiProperty({
  description: 'Не на ходу',
  example: false
})
@Expose()
public stoppedEngineIsNotGo: boolean;

@ApiProperty({
  description: 'Аварийный',
  example: false
})
@Expose()
public stoppedEngineIsEmergency: boolean;

@ApiProperty({
  description: 'Разукомплектован',
  example: false
})
@Expose()
public stoppedEngineIsUnderstaffed: boolean;

@ApiProperty({
  description: 'Комментарий',
  example: 'string'
})
@Expose()
public stoppedEngineComment: string;

@ApiProperty({
  description: 'Уровень масла ДВС',
  example: 'string'
})
@Expose()
public stoppedEngineEngineOilLevel: string;

@ApiProperty({
  description: 'Уровень масла КПП',
  example: 'string'
})
@Expose()
public stoppedEngineGearboxOilLevel: string;

@ApiProperty({
  description: 'Уровень жидкости ГУР',
  example: 'string'
})
@Expose()
public stoppedEngineGurLiquidLevel: string;

@ApiProperty({
  description: 'Уровень тормозной жидкости',
  example: 'string'
})
@Expose()
public stoppedEngineBrakeFluidLevel: string;

@ApiProperty({
  description: 'Уровень охлаждающей жидкости',
  example: 'string'
})
@Expose()
public stoppedEngineCoolantLevel: string;

@ApiProperty({
  description: 'Комментарий тех жидкости',
  example: 'string'
})
@Expose()
public stoppedEngineTechnicalFluidsComment: string;

@ApiProperty({
  description: 'Приводные ремни',
  example: 'string'
})
@Expose()
public stoppedEngineDriveBelts: string;

@ApiProperty({
  description: 'Тормозные диски',
  example: 'string'
})
@Expose()
public stoppedEngineBrakeDiscs: string;

@ApiProperty({
  description: 'Тормозные колодки',
  example: 'string'
})
@Expose()
public stoppedEngineBrakePads: string;

@ApiProperty({
  description: 'Комментарий износа',
  example: 'string'
})
@Expose()
public stoppedEngineWearComment: string;

@ApiProperty({
  description: 'Запотевание есть или нет',
  example: false
})
@Expose()
public stoppedEngineIsFogging: boolean;

@ApiProperty({
  description: 'Имя',
  example: 'string'
})
@Expose()
public stoppedEngineNameOne: string;

@ApiProperty({
  description: 'Запотевание',
  example: ['string']
})
@Expose()
public stoppedEngineFoggingOne: string[];

@ApiProperty({
  description: 'Фото',
  example: ['string']
})
@Expose()
public stoppedEnginePhotoOne: string[];

@ApiProperty({
  description: 'Комментарий',
  example: 'string'
})
@Expose()
public stoppedEngineCommentOne: string;

@ApiProperty({
  description: 'Имя',
  example: 'string'
})
@Expose()
public stoppedEngineNameTwo: string;

@ApiProperty({
  description: 'Запотевание',
  example: ['string']
})
@Expose()
public stoppedEngineFoggingTwo: string[];

@ApiProperty({
  description: 'Фото',
  example: ['string']
})
@Expose()
public stoppedEnginePhotoTwo: string[];

@ApiProperty({
  description: 'Комментарий',
  example: 'string'
})
@Expose()
public stoppedEngineCommenTwo: string;

@ApiProperty({
  description: 'Имя',
  example: 'string'
})
@Expose()
public stoppedEngineNameThree: string;

@ApiProperty({
  description: 'Запотевание',
  example: ['string']
})
@Expose()
public stoppedEngineFoggingThree: string[];

@ApiProperty({
  description: 'Фото',
  example: ['string']
})
@Expose()
public stoppedEnginePhotoThree: string[];

@ApiProperty({
  description: 'Комментарий',
  example: 'string'
})
@Expose()
public stoppedEngineCommentThree: string;
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
@ApiProperty({
  description: 'Двигатель не запускается',
  example: false
})
@Expose()
public runningEngineEngineNotStart: boolean;

@ApiProperty({
  description: 'Комментарий',
  example: 'string'
})
@Expose()
public runningEngineComment: string;

@ApiProperty({
  description: 'Видео запуска двигателя',
  example: 'string'
})
@Expose()
public runningEngineEngineVideo: string;

@ApiProperty({
  description: 'Все системы в порядке',
  example: false
})
@Expose()
public runningEngineAllSystemOkElectric: boolean;

@ApiProperty({
  description: 'Все системы в порядке',
  example: false
})
@Expose()
public runningEngineAllSystemOkMechanical: boolean;

@ApiProperty({
  description: 'Имя',
  example: 'string'
})
@Expose()
public runningEngineElectricalNameOne: string;

@ApiProperty({
  description: 'Выбрано',
  example: false
})
@Expose()
public runningEngineElectricalIsCheckOne: boolean;

@ApiProperty({
  description: 'Комментарий',
  example: 'string'
})
@Expose()
public runningEngineElectricalCommentOne: string;

@ApiProperty({
  description: 'Имя',
  example: 'string'
})
@Expose()
public runningEngineElectricalNameTwo: string;

@ApiProperty({
  description: 'Выбрано',
  example: false
})
@Expose()
public runningEngineElectricalIsCheckTwo: boolean;

@ApiProperty({
  description: 'Комментарий',
  example: 'string'
})
@Expose()
public runningEngineElectricalCommentTwo: string;

@ApiProperty({
  description: 'Имя',
  example: 'string'
})
@Expose()
public runningEngineElectricalNameThree: string;

@ApiProperty({
  description: 'Выбрано',
  example: false
})
@Expose()
public runningEngineElectricalIsCheckThree: boolean;

@ApiProperty({
  description: 'Комментарий',
  example: 'string'
})
@Expose()
public runningEngineElectricalCommentThree: string;

@ApiProperty({
  description: 'Имя',
  example: 'string'
})
@Expose()
public runningEngineMechanicalNameOne: string;

@ApiProperty({
  description: 'Выбрано',
  example: false
})
@Expose()
public runningEngineMechanicalIsCheckOne: boolean;

@ApiProperty({
  description: 'Комментарий',
  example: 'string'
})
@Expose()
public runningEngineMechanicalCommentOne: string;

@ApiProperty({
  description: 'Имя',
  example: 'string'
})
@Expose()
public runningEngineMechanicalNameTwo: string;

@ApiProperty({
  description: 'Выбрано',
  example: false
})
@Expose()
public runningEngineMechanicalIsCheckTwo: boolean;

@ApiProperty({
  description: 'Комментарий',
  example: 'string'
})
@Expose()
public runningEngineMechanicalCommentTwo: string;

@ApiProperty({
  description: 'Имя',
  example: 'string'
})
@Expose()
public runningEngineMechanicalNameThree: string;

@ApiProperty({
  description: 'Выбрано',
  example: false
})
@Expose()
public runningEngineMechanicalIsCheckThree: boolean;

@ApiProperty({
  description: 'Комментарий',
  example: 'string'
})
@Expose()
public runningEngineMechanicalCommentThree: string;
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
@ApiProperty({
  description: 'Ошибки отсутствуют',
  example: false
})
@Expose()
public dashboardNoErrors: boolean;

@ApiProperty({
  description: 'Файл диагностики',
  example: ["string"]
})
@Expose()
public dashboardDiagnosticsFile?: string[];

@ApiProperty({
  description: 'Комментарий эксперта',
  example: "string"
})
@Expose()
public dashboardDiagnosticsComment: string;

@ApiProperty({
  description: 'Пробег на приборной панели',
  example: "string"
})
@Expose()
public dashboardMileageOnDashboard?: string;

@ApiProperty({
  description: 'Пробег в блоках ДВС',
  example: "string"
})
@Expose()
public dashboardMileageInTheEngineBlock?: string;

@ApiProperty({
  description: 'Пробег в блоке КПП',
  example: "string"
})
@Expose()
public dashboardMileageInTheGearbox?: string;

@ApiProperty({
  description: 'Пробег в доп блоке',
  example: "string"
})
@Expose()
public dashboardMileageInAdditionalBlocks?: string;

@ApiProperty({
  description: 'Без пробега',
  example: false
})
@Expose()
public dashboardIsNoMileage?: boolean;

@ApiProperty({
  description: 'Комментарий',
  example: "string"
})
@Expose()
public dashboardTotalComment: string;

@ApiProperty({
  description: 'Имя',
  example: 'string'
})
@Expose()
public dashboardNameOne: string;

@ApiProperty({
  description: 'Выбрано',
  example: false
})
@Expose()
public dashboardIsCheckOne: boolean;

@ApiProperty({
  description: 'Комментарий',
  example: 'string'
})
@Expose()
public dashboardCommentOne: string;

@ApiProperty({
  description: 'Имя',
  example: 'string'
})
@Expose()
public dashboardNameTwo: string;

@ApiProperty({
  description: 'Выбрано',
  example: false
})
@Expose()
public dashboardIsCheckTwo: boolean;

@ApiProperty({
  description: 'Комментарий',
  example: 'string'
})
@Expose()
public dashboardCommentTwo: string;

@ApiProperty({
  description: 'Имя',
  example: 'string'
})
@Expose()
public dashboardNameThree: string;

@ApiProperty({
  description: 'Выбрано',
  example: false
})
@Expose()
public dashboardIsCheckThree: boolean;

@ApiProperty({
  description: 'Комментарий',
  example: 'string'
})
@Expose()
public dashboardCommentThree: string;
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
@ApiProperty({
  description: 'Все системы работают исправно',
  example: false
})
@Expose()
public testDriveAllSystemOk: boolean;

@ApiProperty({
  description: 'Неисправности',
  example: ['string']
})
@Expose()
public testDriveMalfunctions: string[];

@ApiProperty({
  description: 'Имя',
  example: 'string'
})
@Expose()
public testDriveNameOne: string;

@ApiProperty({
  description: 'Выбрано',
  example: false
})
@Expose()
public testDriveIsCheckOne: boolean;

@ApiProperty({
  description: 'Комментарий',
  example: 'string'
})
@Expose()
public testDriveCommentOne: string;

@ApiProperty({
  description: 'Имя',
  example: 'string'
})
@Expose()
public testDriveNameTwo: string;

@ApiProperty({
  description: 'Выбрано',
  example: false
})
@Expose()
public testDriveIsCheckTwo: boolean;

@ApiProperty({
  description: 'Комментарий',
  example: 'string'
})
@Expose()
public testDriveCommentTwo: string;

@ApiProperty({
  description: 'Имя',
  example: 'string'
})
@Expose()
public testDriveNameThree: string;

@ApiProperty({
  description: 'Выбрано',
  example: false
})
@Expose()
public testDriveIsCheckThree: boolean;

@ApiProperty({
  description: 'Комментарий',
  example: 'string'
})
@Expose()
public testDriveCommentThree: string;
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
@ApiProperty({
  description: 'Комментарий плюсов',
  example: 'string'
})
@Expose()
public expertOpinionPlusComment: string;

@ApiProperty({
  description: 'Комментарий минусов',
  example: 'string'
})
@Expose()
public expertOpinionMinusComment: string;

@ApiProperty({
  description: 'Комментарий общий',
  example: 'string'
})
@Expose()
public expertOpinionTotalComment: string;

@ApiProperty({
  description: 'Файл истории',
  example: ['string']
})
@Expose()
public expertOpinionHistoryFile: string[];

@ApiProperty({
  description: 'Комментарий истории автомобиля',
  example: 'string'
})
@Expose()
public expertOpinionHistoryComment: string;
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
@ApiProperty({
  description: 'Проверка компрессии',
  example: ["string"]
})
@Expose()
public serviceInspectionCompressionCheck: string[];

@ApiProperty({
  description: 'Проверка эндоскопом',
  example: ["string"]
})
@Expose()
public serviceInspectionEndoscopeCheck: string[];

@ApiProperty({
  description: 'Осмотр ДВС',
  example: ["string"]
})
@Expose()
public serviceInspectionEngineInspection: string[];

@ApiProperty({
  description: 'Осмотр КПП',
  example: ["string"]
})
@Expose()
public serviceInspectionCheckpointInspection: string[];

@ApiProperty({
  description: 'Осмотр ГУР',
  example: ["string"]
})
@Expose()
public serviceInspectionPowerSteeringInspection: string[];

@ApiProperty({
  description: 'Осмотр раздатки',
  example: ["string"]
})
@Expose()
public serviceInspectionTransferCaseInspection: string[];

@ApiProperty({
  description: 'Осмотр задний мост',
  example: ["string"]
})
@Expose()
public serviceInspectionRearAxleInspection: string[];

@ApiProperty({
  description: 'Передний мост',
  example: ["string"]
})
@Expose()
public serviceInspectionFrontAxleInspection: string[];

@ApiProperty({
  description: 'Осмотр рулевой рейки',
  example: ["string"]
})
@Expose()
public serviceInspectionSteeringRackInspection: string[];

@ApiProperty({
  description: 'Осмотр ходовой части',
  example: ["string"]
})
@Expose()
public serviceInspectionChassisInspection: string[];
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

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



