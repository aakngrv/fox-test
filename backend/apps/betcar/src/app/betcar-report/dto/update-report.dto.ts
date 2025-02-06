import { ApiProperty } from '@nestjs/swagger';

export class UpdateReportDto {
   
  @ApiProperty({
    description: 'ID пользователя',
    example: 1
  })
  public  userId: number;
  
  @ApiProperty({
    description: 'Заголовок отчета',
    example: ''
  })
  public title: string;

  @ApiProperty({
    description: 'Email заказчика осмотра',
    example: ''
  })
  public userEmail: string;

  @ApiProperty({
    description: 'Тариф',
    example: false
  })
  public isPrime: boolean;

  @ApiProperty({
    description: 'Отказа от осмотра',
    example: false
  })
  public sellerDetailsRefusalOfInspection: boolean;

  @ApiProperty({
    description: 'Ссылка на объявление',
    example: ""
  })
  public sellerDetailsLinkToAd: string;

  @ApiProperty({
    description: 'Имя продавца',
    example: ''
  })
  public sellerDetailsName: string;
  
  @ApiProperty({
    description: 'Номер телефона',
    example: ''
  })
  public sellerDetailsPhone: string;
  
  @ApiProperty({
    description: 'Стоимость автомобиля',
    example: ''
  })
  public sellerDetailsCarCost: string;
  
  @ApiProperty({
    description: 'Собственник или дилер',
    example: ""
  })
  public sellerDetailsRole: string;
  
  @ApiProperty({
    description: 'Общий комментнарий',
    example: ''
  })
  public sellerDetailsComment: string;

  ////////////////////////////////////////
  @ApiProperty({
    description: 'VIN номер',
    example: ""
  })
  public vinNumber: string;

  @ApiProperty({
    description: 'Подтвержден экспертом',
    example: false
  })
  public vinBodyNumberExpertConfirm: boolean;

  @ApiProperty({
    description: 'Состояние номера',
    example: [false]
  })
  public vinBodyNumberNumberState: boolean[];

  @ApiProperty({
    description: 'Фото VIN',
    example: [""]
  })
  public vinBodyNumberPhoto: string[];

  @ApiProperty({
    description: 'Комментарий',
    example: ""
  })
  public vinBodyNumberComment: string;

  @ApiProperty({
    description: 'Рамы номер',
    example: ""
  })
  public frameNumber: string;

  @ApiProperty({
    description: 'Подтвержден экспертом',
    example: false
  })
  public frameNumberExpertConfirm: boolean;

  @ApiProperty({
    description: 'Состояние номера',
    example: [false]
  })
  public frameNumberNumberState: boolean[];

  @ApiProperty({
    description: 'Фото номера рамы',
    example: [""]
  })
  public frameNumberPhoto: string[];
  
  @ApiProperty({
    description: 'Комментарий',
    example: ""
  })
  public frameNumberComment: string;

  @ApiProperty({
    description: 'Отсутствует',
    example: false
  })
  public stateNumberAbsent: boolean;

  @ApiProperty({
    description: 'Иностранный',
    example: false
  })
  public stateNumberForeign: boolean;

  @ApiProperty({
    description: 'Гос номер',
    example: ""
  })
  public stateNumberStateNumber: string;

  @ApiProperty({
    description: 'Комментарий',
    example: ""
  })
  public stateNumberComment: string;

  @ApiProperty({
    description: 'Отсутствует',
    example: false
  })
  public tCPAbsent: boolean;

  @ApiProperty({
    description: 'Тип ПТС',
    example: ''
  })
  public tCPType: string;

  @ApiProperty({
    description: 'Фото',
    example: [""]
  })
  public tCPPhoto: string[];

  @ApiProperty({
    description: 'Количество владельцев',
    example: ""
  })
  public tCPNumberOfOwners: string;

  @ApiProperty({
    description: 'Комментарий',
    example: ''
  })
  public tCPComment: string;

  @ApiProperty({
    description: 'Отсутствует',
    example: false
  })
  public sTSAbsent: boolean;

  @ApiProperty({
    description: 'Фото',
    example: [""]
  })
  public sTSPhoto: string[];

  @ApiProperty({
    description: 'Комментарий',
    example: ""
  })
  public sTSComment: string;

  @ApiProperty({
    description: 'Марка',
    example: ""
  })
  public carDataCarBrand: string;

  @ApiProperty({
    description: 'Модель',
    example: ""
  })
  public carDataCarModel: string;

  @ApiProperty({
    description: 'Год',
    example: ""
  })
  public carDataManufactureYear: string;

  @ApiProperty({
    description: 'Цвет',
    example: ""
  })
  public carDataColor: string;

  @ApiProperty({
    description: 'Тип кузова',
    example: ""
  })
  public carDataBodyType: string;

  @ApiProperty({
    description: 'Тип двигателя',
    example: ""
  })
  public carDataEnginesType: string;

  @ApiProperty({
    description: 'Тип КПП',
    example: ""
  })
  public carDataGearboxType: string;

  @ApiProperty({
    description: 'Привод',
    example: ""
  })
  public carDataDriveUnit: string;

  @ApiProperty({
    description: 'Расположение руля',
    example: ""
  })
  public carDataSteeringWheelLocation: string;
  
  @ApiProperty({
    description: 'Номер двигателя',
    example: ""
  })
  public engineNumber: string;

  @ApiProperty({
    description: 'Подтвержден экспертом',
    example: false
  })
  public engineNumberExpertConfirm: boolean;

  @ApiProperty({
    description: 'Состояние номера',
    example: [false]
  })
  public engineNumberNumberState: boolean[];

  @ApiProperty({
    description: 'Фото номера рамы',
    example: [""]
  })
  public engineNumberPhoto: string[];

  @ApiProperty({
    description: 'Номер двигателя',
    example: ""
  })
  public engineNumberEngineNumber: string;

  @ApiProperty({
    description: 'Комментарий',
    example: ""
  })
  public engineNumberComment: string;

  @ApiProperty({
    description: 'Объем двигателя',
    example: ""
  })
  public carDataEngineCapacity: string;

  @ApiProperty({
    description: 'Мощность',
    example: ""
  })
  public carDataPower: string;

  @ApiProperty({
    description: 'Сервисная книжка',
    example: ""
  })
  public carDataServiceBook: string;

  @ApiProperty({
    description: 'Комментарий',
    example: ""
  })
  public additionalDocumentsComment: string;

  @ApiProperty({
    description: 'Фото',
    example: [""]
  })
  public additionalDocumentsPhoto: string[];
  /////////////////////////////////////////
  @ApiProperty({
    description: 'Страна',
    example: ""
  })
  public locationCountry: string;

  @ApiProperty({
    description: 'Регион',
    example: ""
  })
  public locationRegion: string;

  @ApiProperty({
    description: 'Город',
    example: ""
  })
  public locationCity: string;

  @ApiProperty({
    description: 'Адрес',
    example: ""
  })
  public locationAddress: string;

  @ApiProperty({
    description: 'Комментарий',
    example: ""
  })
  public locationComment: string;
  ///////////////////////////////////////////

  @ApiProperty({
    description: 'Рейлинги на крыше',
    example: false
  })
  public complectationBodyRoofRails: boolean;

  @ApiProperty({
    description: 'Наклейки на кузове',
    example: false
  })
  public complectationBodyBodyStickers: boolean;

  @ApiProperty({
    description: 'Аэрография',
    example: false
  })
  public complectationBodyAirbrushing: boolean;

  @ApiProperty({
    description: 'Тюнинг кузова',
    example: false
  })
  public complectationBodyBodyTuning: boolean;

  @ApiProperty({
    description: 'Оклеен пленкой',
    example: false
  })
  public complectationBodyBodyInFilm: boolean;
  //////////////////////////////////////////////////////////////
  @ApiProperty({
    description: 'Все шины одинаковые',
    example: false
  })
  public complectationWheelsIsTiresIdentical: boolean;

  @ApiProperty({
    description: 'Дополнительные комплекты шин',
    example: false
  })
  public complectationWheelsAdditionalTireSets: boolean;

  @ApiProperty({
    description: 'Дополнительные комплекты дисков',
    example: false
  })
  public complectationWheelsAdditionalSetsOfDisks: boolean;

  @ApiProperty({
    description: 'Тип дисков',
    example: ''
  })
  public complectationWheelsTypeOfDisks: string;

  @ApiProperty({
    description: 'Сезонность',
    example: ""
  })
  public complectationWheelsSeasonality: string;

  @ApiProperty({
    description: 'Марка шин переднего левого колеса',
    example: ''
  })
  public complectationWheelsFrontLeftBrand: string;

  @ApiProperty({
    description: 'Марка шин заднего левого колеса',
    example: ''
  })
  public complectationWheelsBackLeftBrand: string;

  @ApiProperty({
    description: 'Марка шин переднего правого колеса',
    example: ''
  })
  public complectationWheelsFrontRightBrand: string;

  @ApiProperty({
    description: 'Марка шин заднего правого колеса',
    example: ''
  })
  public complectationWheelsBackRightBrand: string;

  @ApiProperty({
    description: 'Модель шин переднего левого колеса',
    example: ''
  })
  public complectationWheelsFrontLeftModel: string;

  @ApiProperty({
    description: 'Модель шин заднего левого колеса',
    example: ''
  })
  public complectationWheelsBackLeftModel: string;

  @ApiProperty({
    description: 'Модель шин переднего правого колеса',
    example: ''
  })
  public complectationWheelsFrontRightModel: string;

  @ApiProperty({
    description: 'Модель шин заднего правого колеса',
    example: ''
  })
  public complectationWheelsBackRightModel: string;

  @ApiProperty({
    description: 'Дата выпуска шин переднего левого колеса',
    example: ''
  })
  public complectationWheelsFrontLeftIssueDate: string;

  @ApiProperty({
    description: 'Дата выпуска шин заднего левого колеса',
    example: ''
  })
  public complectationWheelsBackLeftIssueDate: string;

  @ApiProperty({
    description: 'Дата выпуска шин переднего правого колеса',
    example: ''
  })
  public complectationWheelsFrontRightIssueDate: string;

  @ApiProperty({
    description: 'Дата выпуска шин заднего правого колеса',
    example: ''
  })
  public complectationWheelsBackRightIssueDate: string;

  @ApiProperty({
    description: 'Параметры шин переднего левого колеса',
    example: ['']
  })
  public complectationWheelsFrontLeftOptions: string[];

  @ApiProperty({
    description: 'Параметры шин заднего левого колеса',
    example: ['']
  })
  public complectationWheelsBackLeftOptions: string[];

  @ApiProperty({
    description: 'Параметры шин переднего правого колеса',
    example: ['']
  })
  public complectationWheelsFrontRightOptions: string[];

  @ApiProperty({
    description: 'Параметры шин заднего правого колеса',
    example: ['']
  })
  public complectationWheelsBackRightOptions: string[];

  @ApiProperty({
    description: 'Износ шин переднего левого колеса',
    example: ''
  })
  public complectationWheelsFrontLeftWear: string;

  @ApiProperty({
    description: 'Износ шин заднего левого колеса',
    example: ''
  })
  public complectationWheelsBackLeftWear: string;

  @ApiProperty({
    description: 'Износ шин переднего правого колеса',
    example: ''
  })
  public complectationWheelsFrontRightWear: string;

  @ApiProperty({
    description: 'Износ шин заднего правого колеса',
    example: ''
  })
  public complectationWheelsBackRightWear: string;
  
  @ApiProperty({
    description: 'Дополнительные шины - сезонность',
    example: ['']
  })
  public complectationWheelsAdditionalTiresSeasonality: string[];
  
  @ApiProperty({
    description: 'Дополнительные диски - тип',
    example: ''
  })
  public complectationWheelsAdditionalDisksType: string;
  ///////////////////////////////////////////////////////////////////////////////////////

  @ApiProperty({
    description: 'Люк',
    example: false
  })
  public complectationSalonLuke: boolean;

  @ApiProperty({
    description: 'Чехлы на сиденьях',
    example: false
  })
  public complectationSalonSeatCovers: boolean;

  @ApiProperty({
    description: 'Панорамная крыша',
    example: false
  })
  public complectationSalonPanoramicView: boolean;

  @ApiProperty({
    description: 'Третий ряд сидений',
    example: false
  })
  public complectationSalonThirdRowOfSeats: boolean;

  @ApiProperty({
    description: 'Тонированные стекла',
    example: false
  })
  public complectationSalonTintedGlass: boolean;

  @ApiProperty({
    description: 'Подогрев руля',
    example: false
  })
  public complectationSalonSteeringWheelHeating: boolean;

  @ApiProperty({
    description: 'Отделка кожей рычага КПП',
    example: false
  })
  public complectationSalonLeatherTrimmedGearshiftLever: boolean;

  @ApiProperty({
    description: 'Спортивные передние сиденья',
    example: false
  })
  public complectationSalonSportsFrontSeats: boolean;

  @ApiProperty({
    description: 'Отделка кожей рулевого колеса',
    example: false
  })
  public complectationSalonSteeringWheelLeatherTrim: boolean;

  @ApiProperty({
    description: 'Складывающеется заднее сиденье',
    example: false
  })
  public complectationSalonFoldingRearSeat: boolean;

  @ApiProperty({
    description: 'Передний центральный подлокотник',
    example: false
  })
  public complectationSalonFrontCenterArmrest: boolean;

  @ApiProperty({
    description: 'Материал салона',
    example: ""
  })
  public complectationSalonInteriorMaterial: string;

  @ApiProperty({
    description: 'Подогрев сидений',
    example: [""]
  })
  public complectationSalonHeatedSeats: string[];

  @ApiProperty({
    description: 'Регулировка сидений по высоте',
    example: ""
  })
  public complectationSalonSeatHeightAdjustment: string;

  @ApiProperty({
    description: 'Электрорегулировка сидений',
    example: [""]
  })
  public complectationSalonElectricallyAdjustableSeats: string[];

  @ApiProperty({
    description: 'Память положения сидений',
    example: ""
  })
  public complectationSalonSeatPositionMemory: string;

  @ApiProperty({
    description: 'Вентиляция сидений',
    example: [""]
  })
  public complectationSalonSeatVentilation: string[];

  @ApiProperty({
    description: 'Сиденья с массажем',
    example: [""]
  })
  public complectationSalonSeatMassage: string[];
  ///////////////////////////////////////////////////////////////////////////

  @ApiProperty({
    description: 'Датчик света',
    example: false
  })
  public complectationHeadlightsLightSensor: boolean;

  @ApiProperty({
    description: 'Датчик дождя',
    example: false
  })
  public complectationHeadlightsRainSensor: boolean;

  @ApiProperty({
    description: 'Омыватель фар',
    example: false
  })
  public complectationHeadlightsHeadlightWasher: boolean;

  @ApiProperty({
    description: 'Противотуманные фары',
    example: false
  })
  public complectationHeadlightsFogLights: boolean;

  @ApiProperty({
    description: 'Автоматический корректор фар',
    example: false
  })
  public complectationHeadlightsAutomaticHeadlightLeveling: boolean;

  @ApiProperty({
    description: 'Система адаптивного освещения',
    example: false
  })
  public complectationHeadlightsAdaptivLlightingSystem: boolean;

  @ApiProperty({
    description: 'Система управления дальним светом',
    example: false
  })
  public complectationHeadlightsHighBeamControlSystem: boolean;

  @ApiProperty({
    description: 'Фары',
    example: ""
  })
  public complectationHeadlightsHeadlights: string;
  /////////////////////////////////////////////////////////////////////////////////

  @ApiProperty({
    description: 'cd',
    example: false
  })
  public complectationMultimediaCd: boolean;

  @ApiProperty({
    description: 'tv',
    example: false
  })
  public complectationMultimediaTv: boolean;

  @ApiProperty({
    description: 'usb',
    example: false
  })
  public complectationMultimediaUsb: boolean;

  @ApiProperty({
    description: 'aux',
    example: false
  })
  public complectationMultimediaAux: boolean;

  @ApiProperty({
    description: 'dvd',
    example: false
  })
  public complectationMultimediaDvd: boolean;

  @ApiProperty({
    description: 'Кассета',
    example: false
  })
  public complectationMultimediaCassette: boolean;

  @ApiProperty({
    description: 'CarPlay',
    example: false
  })
  public complectationMultimediaCarPlay: boolean;

  @ApiProperty({
    description: 'bluetooth',
    example: false
  })
  public complectationMultimediaBluetooth: boolean;

  @ApiProperty({
    description: 'Сабвуфер',
    example: false
  })
  public complectationMultimediaSubwoofer: boolean;

  @ApiProperty({
    description: 'Голосовое управление',
    example: false
  })
  public complectationMultimediaVoiceControl: boolean;

  @ApiProperty({
    description: 'Навигационная система',
    example: false
  })
  public complectationMultimediaNavigationSystem: boolean;

  @ApiProperty({
    description: 'Мультимедиа для пассажиров',
    example: false
  })
  public complectationMultimediaMultimediaSystemForRearPassengers: boolean;
  ///////////////////////////////////////////////////////////////////////////////////////////
  @ApiProperty({
    description: 'Система старт-стоп',
    example: false
  })
  public complectationComfortStartStopSystem: boolean;

  @ApiProperty({
    description: 'Бортовой компьютер',
    example: false
  })
  public complectationComfortOnBoardComputer: boolean;

  @ApiProperty({
    description: 'Электропривод зеркал',
    example: false
  })
  public complectationComfortElectricMirrors: boolean;

  @ApiProperty({
    description: 'Предпусковой отопитель',
    example: false
  })
  public complectationComfortPreheater: boolean;
  
  @ApiProperty({
    description: 'Запуск двигателя с кнопки',
    example: false
  })
  public complectationComfortEngineStartButton: boolean;

  @ApiProperty({
    description: 'Система запуска без ключа',
    example: false
  })
  public complectationComfortKeylessEntrySystem: boolean;

  @ApiProperty({
    description: 'Открытие багажника без рук',
    example: false
  })
  public complectationComfortHandsFreeTrunkOpening: boolean;

  @ApiProperty({
    description: 'Электросладывание зеркал',
    example: false
  })
  public complectationComfortElectrofoldingOfMirrors: boolean;

  @ApiProperty({
    description: 'Мультифункциональный руль',
    example: false
  })
  public complectationComfortMultifunctionSteeringWheel: boolean;

  @ApiProperty({
    description: 'Сенсорная панель управления',
    example: false
  })
  public complectationComfortTouchControlPanel: boolean;

  @ApiProperty({
    description: 'Переключение передач на руле',
    example: false
  })
  public complectationComfortGearshiftPaddles: boolean;

  @ApiProperty({
    description: 'Регулируемый педальный узел',
    example: false
  })
  public complectationComfortAdjustablePedalAssembly: boolean;

  @ApiProperty({
    description: 'Электронная приборная панель',
    example: false
  })
  public complectationComfortElectronicDashboard: boolean;

  @ApiProperty({
    description: 'Дистанционный запуск двигателя',
    example: false
  })
  public complectationComfortRemoteEngineStart: boolean;

  @ApiProperty({
    description: 'Электропривод крышки багажника',
    example: false
  })
  public complectationComfortElectricTrunkLid: boolean;

  @ApiProperty({
    description: 'Камера',
    example: [""]
  })
  public complectationComfortCamera: string[];

  @ApiProperty({
    description: 'Подвеска',
    example: [""]
  })
  public complectationComfortSuspension: string[];

  @ApiProperty({
    description: 'Кондиционер',
    example: ""
  })
  public complectationComfortAirConditioner: string;

  @ApiProperty({
    description: 'Усилитель руля',
    example: ""
  })
  public complectationComfortPowerSteering: string;

  @ApiProperty({
    description: 'Круиз-контроль',
    example: ""
  })
  public complectationComfortCruiseControl: string;

  @ApiProperty({
    description: 'Электроподогрев',
    example: [""]
  })
  public complectationComfortElectricHeating: string[];

  @ApiProperty({
    description: 'Регулировка руля',
    example: [""]
  })
  public complectationComfortSteeringWheelAdjustment: string[];

  @ApiProperty({
    description: 'Помощь при парковке',
    example: [""]
  })
  public complectationComfortParkingAssistanceSystem: string[];

  @ApiProperty({
    description: 'Электроподъемние стекла',
    example: [""]
  })
  public complectationComfortElectricLifts: string[];
  /////////////////////////////////////////////////////////////////////////////////////////////////
  @ApiProperty({
    description: 'ЭРА-ГЛОНАСС',
    example: false
  })
  public complectationSafetyEraGlonass: boolean;

  @ApiProperty({
    description: 'Блокировка замков',
    example: false
  })
  public complectationSafetyLocking: boolean;

  @ApiProperty({
    description: 'Бронированный кузов',
    example: false
  })
  public complectationSafetyArmoredBody: boolean;

  @ApiProperty({
    description: 'Подушки безопасности',
    example: [""]
  })
  public complectationSafetyAirbags: string[];

  @ApiProperty({
    description: 'Система крепления isofix',
    example: [""]
  })
  public complectationSafetyIsofix: string[];

  @ApiProperty({
    description: 'Вспомогательные системы',
    example: [""]
  })
  public complectationSafetyAuxiliarySystems: string[];
  ////////////////////////////////////////////////////////////////////////////////////////////////////
  @ApiProperty({
    description: 'Метка',
    example: false
  })
  public complectationProtectionLabel: boolean;

  @ApiProperty({
    description: 'Иммобилайзер',
    example: false
  })
  public complectationProtectionImmobilizer: boolean;

  @ApiProperty({
    description: 'Центральный замок',
    example: false
  })
  public complectationProtectionCentralLocking: boolean;

  @ApiProperty({
    description: 'Авторская охранная система',
    example: false
  })
  public complectationProtectionAuthorsSecuritySystem: boolean;

  @ApiProperty({
    description: 'Датчик проникновения в салон',
    example: false
  })
  public complectationProtectionInteriorIntrusionSensor: boolean;

  @ApiProperty({
    description: 'Сигнализация',
    example: ""
  })
  public complectationProtectionSignaling: string;
  //////////////////////////////////////////////////////////////////////////////////////////////////////
  @ApiProperty({
    description: 'Фаркоп',
    example: false
  })
  public complectationOtherTowBar: boolean;

  @ApiProperty({
    description: 'Лебедка',
    example: false
  })
  public complectationOtherWinch: boolean;

  @ApiProperty({
    description: 'Аэробокс',
    example: false
  })
  public complectationOtherAirbox: boolean;

  @ApiProperty({
    description: 'Защита картера',
    example: false
  })
  public complectationOtherCrankcaseProtection: boolean;

  @ApiProperty({
    description: 'Поперечные дуги',
    example: false
  })
  public complectationOtherTransverseArches: boolean;

  @ApiProperty({
    description: 'Газобалонное оборудование',
    example: false
  })
  public complectationOtherGasEquipment: boolean;

  @ApiProperty({
    description: 'Количество ключей',
    example: ""
  })
  public complectationOtherNumberOfKeys: string;

  @ApiProperty({
    description: 'Запасное колесо',
    example: ""
  })
  public complectationOtherSpareWheel: string;
  ///////////////////////////////////////////////////////////////////////////////////////////////////////
  @ApiProperty({
    description: 'Заводской окрас',
    example: false
  })
  public paintworkInspectionFactoryColor: boolean;

  @ApiProperty({
    description: 'Кузов оклее пленкой',
    example: false
  })
  public paintworkInspectionBodyInFilm: boolean;

  @ApiProperty({
    description: 'Крыша',
    example: [""]
  })
  public paintworkInspectionRoof: string[];

  @ApiProperty({
    description: 'Крышка багажника',
    example: [""]
  })
  public paintworkInspectionTrunkLid: string[];

  @ApiProperty({
    description: 'Правое заднее крыло',
    example: [""]
  })
  public paintworkInspectionRightRearFender: string[];

  @ApiProperty({
    description: 'Правая задняя стойка',
    example: [""]
  })
  public paintworkInspectionRightRearPillar: string[];

  @ApiProperty({
    description: 'Правая задняя дверь',
    example: [""]
  })
  public paintworkInspectionRightRearDoor: string[];

  @ApiProperty({
    description: 'Правый проем задней двери',
    example: [""]
  })
  public paintworkInspectionRightRearDoorOpening: string[];

  @ApiProperty({
    description: 'Правая центральная стойка',
    example: [""]
  })
  public paintworkInspectionRightCenterPillar: string[];

  @ApiProperty({
    description: 'Правый порог',
    example: [""]
  })
  public paintworkInspectionRightThreshold: string[];

  @ApiProperty({
    description: 'Правая передняя дверь',
    example: [""]
  })
  public paintworkInspectionRightFrontDoor: string[];

  @ApiProperty({
    description: 'Правый проем передней двери',
    example: [""]
  })
  public paintworkInspectionRightFrontDoorOpening: string[];

  @ApiProperty({
    description: 'Правая передняя стойка',
    example: [""]
  })
  public paintworkInspectionRightFrontPillar: string[];

  @ApiProperty({
    description: 'Правое переднее крыло',
    example: [""]
  })
  public paintworkInspectionRightFrontFender: string[];

  @ApiProperty({
    description: 'Капот',
    example: [""]
  })
  public paintworkInspectionHood: string[];
  
  @ApiProperty({
    description: 'Левое переднее крыло',
    example: [""]
  })
  public paintworkInspectionLeftFrontFender: string[];

  @ApiProperty({
    description: 'Левая передняя стойка',
    example: [""]
  })
  public paintworkInspectionLeftFrontPillar: string[];

  @ApiProperty({
    description: 'Левая передняя дверь',
    example: [""]
  })
  public paintworkInspectionLeftFrontDoor: string[];

  @ApiProperty({
    description: 'Левый проем передней двери',
    example: [""]
  })
  public paintworkInspectionLeftFrontDoorOpening: string[];

  @ApiProperty({
    description: 'Левая центральная стойка',
    example: [""]
  })
  public paintworkInspectionLeftCenterPillar: string[];

  @ApiProperty({
    description: 'Левый порог',
    example: [""]
  })
  public paintworkInspectionLeftThreshold: string[];

  @ApiProperty({
    description: 'Левая задняя дверь',
    example: [""]
  })
  public paintworkInspectionLeftRearDoor: string[];

  @ApiProperty({
    description: 'Левый проем задней двери',
    example: [""]
  })
  public paintworkInspectionLeftRearDoorOpening: string[];

  @ApiProperty({
    description: 'Левая задняя стойка',
    example: [""]
  })
  public paintworkInspectionLeftRearPillar: string[];

  @ApiProperty({
    description: 'Левое заднее крыло',
    example: [""]
  })
  public paintworkInspectionLeftRearFender: string[];
  
  @ApiProperty({
    description: 'Имя элемента',
    example: ""
  })
  public paintworkInspectionAddNameOne: string;
  
  @ApiProperty({
    description: 'Инфо элемента',
    example: [""]
  })
  public paintworkInspectionAddInfoOne: string[];

  @ApiProperty({
    description: 'Имя элемента',
    example: ""
  })
  public paintworkInspectionAddNameTwo: string;

  @ApiProperty({
    description: 'Инфо элемента',
    example: [""]
  })
  public paintworkInspectionAddInfTwo: string[];

  @ApiProperty({
    description: 'Имя элемента',
    example: ""
  })
  public paintworkInspectionAddNameThree: string;

  @ApiProperty({
    description: 'Инфо элемента',
    example: [""]
  })
  public paintworkInspectionAddInfoThree: string[];
  /////////////////////////////////////////////////////////////////////////////////////////////////////////

  @ApiProperty({
    description: 'Без повреждений',
    example: false
  })
  public engineCompartmentDamageWithoutDamage: boolean;

  @ApiProperty({
    description: 'Левый лонжерон',
    example: ['']
  })
  public engineCompartmentDamageLeftSideMember: string[];

  @ApiProperty({
    description: 'Левый стакан',
    example: ['']
  })
  public engineCompartmentDamageLeftGlass: string[];

  @ApiProperty({
    description: 'Правый лонжерон',
    example: ['']
  })
  public engineCompartmentDamageRightSideMember: string[];

  @ApiProperty({
    description: 'Правый стакан',
    example: ['']
  })
  public engineCompartmentDamageRightGlass: string[];

  @ApiProperty({
    description: 'Петли капота',
    example: ['']
  })
  public engineCompartmentDamageHoodHinges: string[]; 

  @ApiProperty({
    description: 'Телевизор',
    example: ['']
  })
  public engineCompartmentDamageTelevisor: string[];
  
  @ApiProperty({
    description: 'Моторный щит',
    example: ['']
  })
  public engineCompartmentDamageMotorShield: string[];

  @ApiProperty({
    description: 'Имя элемента',
    example: ""
  })
  public engineCompartmentDamageAddNameOne: string;

  @ApiProperty({
    description: 'Инфо элемента',
    example: [""]
  })
  public engineCompartmentDamageAddInfoOne: string[];

  @ApiProperty({
    description: 'Имя элемента',
    example: ""
  })
  public engineCompartmentDamageAddNameTwo: string;

  @ApiProperty({
    description: 'Инфо элемента',
    example: [""]
  })
  public engineCompartmentDamageAddInfTwo: string[];

  @ApiProperty({
    description: 'Имя элемента',
    example: ""
  })
  public engineCompartmentDamageAddNameThree: string;

  @ApiProperty({
    description: 'Инфо элемента',
    example: [""]
  })
  public engineCompartmentDamageAddInfoThree: string[];
  ////////////////////////////////////////////////////////////////////////////////////////////////////////////

  @ApiProperty({
    description: 'Без повреждений',
    example: false
  })
  public frontSideDamageWithoutDamage: boolean;
  
  @ApiProperty({
    description: 'Противотуманные фары',
    example: [""]
  })
  public frontSideDamageFogLights: string[]; 

  @ApiProperty({
    description: 'Решетка радиатора',
    example: [""]
  })
  public frontSideDamageRadiatorGrille: string[]; 

  @ApiProperty({
    description: 'Бампер',
    example: [""]
  })
  public frontSideDamageFrontBumper: string[]; 

  @ApiProperty({
    description: 'Правая фара',
    example: [""]
  })
  public frontSideDamageRightHeadlight: string[]; 

  @ApiProperty({
    description: 'Левая фара',
    example: [""]
  })
  public frontSideDamageLeftHeadlight: string[]; 

  @ApiProperty({
    description: 'Капот',
    example: [""]
  })
  public frontSideDamageHood: string[]; 
  
  @ApiProperty({
    description: 'Имя элемента',
    example: ""
  })
  public frontSideDamageAddNameOne: string;

  @ApiProperty({
    description: 'Инфо элемента',
    example: [""]
  })
  public frontSideDamageAddInfoOne: string[];

  @ApiProperty({
    description: 'Имя элемента',
    example: ""
  })
  public frontSideDamageAddNameTwo: string;

  @ApiProperty({
    description: 'Инфо элемента',
    example: [""]
  })
  public frontSideDamageAddInfTwo: string[];

  @ApiProperty({
    description: 'Имя элемента',
    example: ""
  })
  public frontSideDamageAddNameThree: string;

  @ApiProperty({
    description: 'Инфо элемента',
    example: [""]
  })
  public frontSideDamageAddInfoThree: string[];
  //////////////////////////////////////////////////////////////////////////////////////////////////////////////

  @ApiProperty({
    description: 'Без повреждений',
    example: false
  })
  public leftSideDamageWithoutDamage: boolean;
  
  @ApiProperty({
    description: 'Переднее крыло',
    example: ['']
  })
  public leftSideDamageLeftFrontFender: string[]; 

  @ApiProperty({
    description: 'Передняя стойка',
    example: ['']
  })
  public leftSideDamageLeftFrontPillar: string[]; 

  @ApiProperty({
    description: 'Передняя дверь',
    example: ['']
  })
  public leftSideDamageLeftFrontDoor: string[]; 

  @ApiProperty({
    description: 'Центральная стойка',
    example: ['']
  })
  public leftSideDamageLeftCenterPillar: string[];
  
  @ApiProperty({
    description: 'Задняя дверь',
    example: ['']
  })
  public leftSideDamageLeftRearDoor: string[]; 

  @ApiProperty({
    description: 'Задняя стойка',
    example: ['']
  })
  public leftSideDamageLeftRearPillar: string[]; 

  @ApiProperty({
    description: 'Заднее крыло',
    example: ['']
  })
  public leftSideDamageLeftRearFender: string[]; 

  @ApiProperty({
    description: 'Левое зеркало',
    example: ['']
  })
  public leftSideDamageLeftMirror: string[]; 

  @ApiProperty({
    description: 'Порог',
    example: ['']
  })
  public leftSideDamageLeftThreshold: string[]; 

  @ApiProperty({
    description: 'Имя элемента',
    example: ""
  })
  public leftSideDamageAddNameOne: string;

  @ApiProperty({
    description: 'Инфо элемента',
    example: [""]
  })
  public leftSideDamageAddInfoOne: string[];

  @ApiProperty({
    description: 'Имя элемента',
    example: ""
  })
  public leftSideDamageAddNameTwo: string;

  @ApiProperty({
    description: 'Инфо элемента',
    example: [""]
  })
  public leftSideDamageAddInfTwo: string[];

  @ApiProperty({
    description: 'Имя элемента',
    example: ""
  })
  public leftSideDamageAddNameThree: string;

  @ApiProperty({
    description: 'Инфо элемента',
    example: [""]
  })
  public leftSideDamageAddInfoThree: string[];
  /////////////////////////////////////////////////////////////////////////////////////////////////////////////
  @ApiProperty({
    description: 'Без повреждений',
    example: false
  })
  public backSideDamageWithoutDamage: boolean;
  
  @ApiProperty({
    description: 'Крышка багажника',
    example: ['']
  })
  public backSideDamageTailgate: string[]; 

  @ApiProperty({
    description: 'Задний бампер',
    example: ['']
  })
  public backSideDamageRearBumper: string[]; 

  @ApiProperty({
    description: 'Левый фонарь',
    example: ['']
  })
  public backSideDamageLeftLamp: string[]; 

  @ApiProperty({
    description: 'Правый фонарь',
    example: ['']
  })
  public backSideDamageRightLamp: string[]; 

  @ApiProperty({
    description: 'Имя элемента',
    example: ""
  })
  public backSideDamageAddNameOne: string;

  @ApiProperty({
    description: 'Инфо элемента',
    example: [""]
  })
  public backSideDamageAddInfoOne: string[];

  @ApiProperty({
    description: 'Имя элемента',
    example: ""
  })
  public backSideDamageAddNameTwo: string;

  @ApiProperty({
    description: 'Инфо элемента',
    example: [""]
  })
  public backSideDamageAddInfTwo: string[];

  @ApiProperty({
    description: 'Имя элемента',
    example: ""
  })
  public backSideDamageAddNameThree: string;

  @ApiProperty({
    description: 'Инфо элемента',
    example: [""]
  })
  public backSideDamageAddInfoThree: string[];
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  @ApiProperty({
    description: 'Без повреждений',
    example: false
  })
  public trunkDamageWithoutDamage: boolean;
  
  @ApiProperty({
    description: 'Обшивка крышки',
    example: ['']
  })
  public trunkDamageCoverTrim: string[]; 

  @ApiProperty({
    description: 'Ковролин пола',
    example: ['']
  })
  public trunkDamageCarpetFloor: string[]; 

  @ApiProperty({
    description: 'Обшивка правая',
    example: ['']
  })
  public trunkDamageRightTrim: string[]; 

  @ApiProperty({
    description: 'Правый стакан',
    example: ['']
  })
  public trunkDamageRightGlass: string[]; 

  @ApiProperty({
    description: 'Обшивка левая',
    example: ['']
  })
  public trunkDamageLeftTrim: string[]; 

  @ApiProperty({
    description: 'Левый стакан',
    example: ['']
  })
  public trunkDamageLeftGlass: string[]; 

  @ApiProperty({
    description: 'Обшивка спинки сиденья',
    example: ['']
  })
  public trunkDamageSeatBackTrim: string[]; 

  @ApiProperty({
    description: 'Ниша запасного колеса',
    example: ['']
  })
  public trunkDamageSpareWheelWell: string[]; 

  @ApiProperty({
    description: 'Имя элемента',
    example: ""
  })
  public trunkDamageAddNameOne: string;

  @ApiProperty({
    description: 'Инфо элемента',
    example: [""]
  })
  public trunkDamageAddInfoOne: string[];

  @ApiProperty({
    description: 'Имя элемента',
    example: ""
  })
  public trunkDamageAddNameTwo: string;

  @ApiProperty({
    description: 'Инфо элемента',
    example: [""]
  })
  public trunkDamageAddInfTwo: string[];

  @ApiProperty({
    description: 'Имя элемента',
    example: ""
  })
  public trunkDamageAddNameThree: string;

  @ApiProperty({
    description: 'Инфо элемента',
    example: [""]
  })
  public trunkDamageAddInfoThree: string[];
  ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  @ApiProperty({
    description: 'Без повреждений',
    example: false
  })
  public rightSideDamageWithoutDamage: boolean;
  
  @ApiProperty({
    description: 'Переднее крыло',
    example: ['']
  })
  public rightSideDamageRightFrontFender: string[]; 

  @ApiProperty({
    description: 'Передняя стойка',
    example: ['']
  })
  public rightSideDamageRightFrontPillar: string[]; 

  @ApiProperty({
    description: 'Передняя дверь',
    example: ['']
  })
  public rightSideDamageRightFrontDoor: string[]; 

  @ApiProperty({
    description: 'Центральная стойка',
    example: ['']
  })
  public rightSideDamageRightCenterPillar: string[];
  
  @ApiProperty({
    description: 'Задняя дверь',
    example: ['']
  })
  public rightSideDamageRightRearDoor: string[]; 

  @ApiProperty({
    description: 'Задняя стойка',
    example: ['']
  })
  public rightSideDamageRightRearPillar: string[]; 

  @ApiProperty({
    description: 'Заднее крыло',
    example: ['']
  })
  public rightSideDamageRightRearFender: string[]; 

  @ApiProperty({
    description: 'Левое зеркало',
    example: ['']
  })
  public rightSideDamageRightMirror: string[]; 

  @ApiProperty({
    description: 'Порог',
    example: ['']
  })
  public rightSideDamageRightThreshold: string[]; 

  @ApiProperty({
    description: 'Имя элемента',
    example: ""
  })
  public rightSideDamageAddNameOne: string;

  @ApiProperty({
    description: 'Инфо элемента',
    example: [""]
  })
  public rightSideDamageAddInfoOne: string[];

  @ApiProperty({
    description: 'Имя элемента',
    example: ""
  })
  public rightSideDamageAddNameTwo: string;

  @ApiProperty({
    description: 'Инфо элемента',
    example: [""]
  })
  public rightSideDamageAddInfTwo: string[];

  @ApiProperty({
    description: 'Имя элемента',
    example: ""
  })
  public rightSideDamageAddNameThree: string;

  @ApiProperty({
    description: 'Инфо элемента',
    example: [""]
  })
  public rightSideDamageAddInfoThree: string[];
  ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

  @ApiProperty({
    description: 'Без повреждений',
    example: false
  })
  public roofDamageWithoutDamage: boolean;
  
  @ApiProperty({
    description: 'Рейлинги',
    example: ['']
  })
  public roofDamageRoofRails: string[];

  @ApiProperty({
    description: 'Крыша',
    example: ['']
  })
  public roofDamageRoof: string[];

  @ApiProperty({
    description: 'Люк',
    example: ['']
  })
  public roofDamageLuke: string[];

  @ApiProperty({
    description: 'Панорама',
    example: ['']
  })
  public roofDamagePanorama: string[];

  @ApiProperty({
    description: 'Имя элемента',
    example: ""
  })
  public roofDamageAddNameOne: string;

  @ApiProperty({
    description: 'Инфо элемента',
    example: [""]
  })
  public roofDamageAddInfoOne: string[];

  @ApiProperty({
    description: 'Имя элемента',
    example: ""
  })
  public roofDamageAddNameTwo: string;

  @ApiProperty({
    description: 'Инфо элемента',
    example: [""]
  })
  public roofDamageAddInfTwo: string[];

  @ApiProperty({
    description: 'Имя элемента',
    example: ""
  })
  public roofDamageAddNameThree: string;

  @ApiProperty({
    description: 'Инфо элемента',
    example: [""]
  })
  public roofDamageAddInfoThree: string[];
  //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  @ApiProperty({
    description: 'Без повреждений',
    example: false
  })
  public glassDamageWithoutDamage: boolean;
  
  @ApiProperty({
    description: 'Лобовое стекло',
    example: ['']
  })
  public glassDamageWindshield: string[];

  @ApiProperty({
    description: 'Левое переднее',
    example: ['']
  })
  public glassDamageLeftFrontGlass: string[];

  @ApiProperty({
    description: 'Левое заднее',
    example: ['']
  })
  public glassDamageLeftRearGlass: string[];

  @ApiProperty({
    description: 'Заднее стекло',
    example: ['']
  })
  public glassDamageRearGlass: string[];

  @ApiProperty({
    description: 'Правое переднее',
    example: ['']
  })
  public glassDamageRightFrontGlass: string[];

  @ApiProperty({
    description: 'Правое заднее',
    example: ['']
  })
  public glassDamageRightRearGlass: string[];
  
  @ApiProperty({
    description: 'Все стекла заводские',
    example: false
  })
  public glassDamageAllGlassIsFactory: boolean;

  @ApiProperty({
    description: 'Имя элемента',
    example: ""
  })
  public glassDamageAddNameOne: string;

  @ApiProperty({
    description: 'Инфо элемента',
    example: [""]
  })
  public glassDamageAddInfoOne: string[];

  @ApiProperty({
    description: 'Имя элемента',
    example: ""
  })
  public glassDamageAddNameTwo: string;

  @ApiProperty({
    description: 'Инфо элемента',
    example: [""]
  })
  public glassDamageAddInfTwo: string[];

  @ApiProperty({
    description: 'Имя элемента',
    example: ""
  })
  public glassDamageAddNameThree: string;

  @ApiProperty({
    description: 'Инфо элемента',
    example: [""]
  })
  public glassDamageAddInfoThree: string[];
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  @ApiProperty({
    description: 'Без повреждений',
    example: false
  })
  public discDamageWithoutDamage: boolean;
  
  @ApiProperty({
    description: 'Левое переднее',
    example: ['']
  })
  public discDamageLeftFrontDisc: string[];

  @ApiProperty({
    description: 'Левое заднее',
    example: ['']
  })
  public discDamageLeftRearDisc: string[];

  @ApiProperty({
    description: 'Правое переднее',
    example: ['']
  })
  public discDamageRightFrontDisc: string[];

  @ApiProperty({
    description: 'Правое заднее',
    example: ['']
  })
  public discDamageRightRearDisc: string[];

  @ApiProperty({
    description: 'Имя элемента',
    example: ""
  })
  public discDamageAddNameOne: string;

  @ApiProperty({
    description: 'Инфо элемента',
    example: [""]
  })
  public discDamageAddInfoOne: string[];

  @ApiProperty({
    description: 'Имя элемента',
    example: ""
  })
  public discDamageAddNameTwo: string;

  @ApiProperty({
    description: 'Инфо элемента',
    example: [""]
  })
  public discDamageAddInfTwo: string[];

  @ApiProperty({
    description: 'Имя элемента',
    example: ""
  })
  public discDamageAddNameThree: string;

  @ApiProperty({
    description: 'Инфо элемента',
    example: [""]
  })
  public discDamageAddInfoThree: string[];
  /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

  @ApiProperty({
    description: 'Без повреждений',
    example: false
  })
  public interiorDamageWithoutDamage: boolean;

  @ApiProperty({
    description: 'Передняя левая карта двери',
    example: ['']
  })
  public interiorDamageFrontLeftDoorCard: string[];

  @ApiProperty({
    description: 'Водительское сиденье',
    example: ['']
  })
  public interiorDamageDriversSeat: string[];

  @ApiProperty({
    description: 'Ковер салона',
    example: ['']
  })
  public interiorDamageSalonCarpet: string[];

  @ApiProperty({
    description: 'Торпеда',
    example: ['']
  })
  public interiorDamageTorpedo: string[];

  @ApiProperty({
    description: 'Потолок',
    example: ['']
  })
  public interiorDamageCeiling: string[];

  @ApiProperty({
    description: 'Задняя левая карта двери',
    example: ['']
  })
  public interiorDamageBackLeftDoorCard: string[];

  @ApiProperty({
    description: 'Заднее сиденье',
    example: ['']
  })
  public interiorDamageBackSeat: string[];

  @ApiProperty({
    description: 'Задняя правая карта двери',
    example: ['']
  })
  public interiorDamageBackRightDoorCard: string[];

  @ApiProperty({
    description: 'Передняя правая карта двери',
    example: ['']
  })
  public interiorDamageFrontRightDoorCard: string[];

  @ApiProperty({
    description: 'Пассажирское сиденье',
    example: ['']
  })
  public interiorDamagePassengerSeat: string[];

  @ApiProperty({
    description: 'Спальное отделение',
    example: ['']
  })
  public interiorDamageSleepingCompartment: string[];

  @ApiProperty({
    description: 'Имя элемента',
    example: ""
  })
  public interiorDamageAddNameOne: string;

  @ApiProperty({
    description: 'Инфо элемента',
    example: [""]
  })
  public interiorDamageAddInfoOne: string[];

  @ApiProperty({
    description: 'Имя элемента',
    example: ""
  })
  public interiorDamageAddNameTwo: string;

  @ApiProperty({
    description: 'Инфо элемента',
    example: [""]
  })
  public interiorDamageAddInfTwo: string[];

  @ApiProperty({
    description: 'Имя элемента',
    example: ""
  })
  public interiorDamageAddNameThree: string;

  @ApiProperty({
    description: 'Инфо элемента',
    example: [""]
  })
  public interiorDamageAddInfoThree: string[];
  ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  @ApiProperty({
    description: 'Перед справа',
    example: ''
  })
  public exteriorPhotoRightFrontPhoto: string;

  @ApiProperty({
    description: 'Перед',
    example: ''
  })
  public exteriorPhotoFrontPhoto: string;

  @ApiProperty({
    description: 'Перед слева',
    example: ''
  })
  public exteriorPhotoLeftFrontPhoto: string;

  @ApiProperty({
    description: 'Справа сзади',
    example: ''
  })
  public exteriorPhotoRightBackPhoto: string;

  @ApiProperty({
    description: 'Сзади',
    example: ''
  })
  public exteriorPhotoBackPhoto: string;

  @ApiProperty({
    description: 'Слева сзади',
    example: ''
  })
  public exteriorPhotoLeftBackPhoto: string;

  @ApiProperty({
    description: 'Слева',
    example: ''
  })
  public exteriorPhotoLeftPhoto: string;

  @ApiProperty({
    description: 'Справа',
    example: ''
  })
  public exteriorPhotoRightPhoto: string;

  @ApiProperty({
    description: 'Открытй капот',
    example: ''
  })
  public exteriorPhotoHoodOpen: string;

  @ApiProperty({
    description: 'Открытый багажник',
    example: ''
  })
  public exteriorPhotoTrunkOpen: string;

  @ApiProperty({
    description: 'Дополнительное фото',
    example: ['']
  })
  public exteriorPhotoAddPhoto: string[];
  //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  @ApiProperty({
    description: 'Левая передняя дверь',
    example: ''
  })
  public interiorPhotoLeftFrontDoor: string;

  @ApiProperty({
    description: 'Сиденье водителя',
    example: ''
  })
  public interiorPhotoDriverSeatPhoto: string;

  @ApiProperty({
    description: 'Фото руля',
    example: ''
  })
  public interiorPhotoSteeringWheelPhoto: string;

  @ApiProperty({
    description: 'Приборная панель',
    example: ''
  })
  public interiorPhotoDashboardPhoto: string;

  @ApiProperty({
    description: 'Левая задняя дверь',
    example: ''
  })
  public interiorPhotoLeftBackDoor: string;

  @ApiProperty({
    description: 'Заднее сидень слева',
    example: ''
  })
  public interiorPhotoBackLeftSeatsPhoto: string;

  @ApiProperty({
    description: 'Передние сиденья',
    example: ''
  })
  public interiorPhotoFrontSeatsPhoto: string;

  @ApiProperty({
    description: 'Правая задняя дверь',
    example: ''
  })
  public interiorPhotoRightBackDoor: string;

  @ApiProperty({
    description: 'Заднее сидень справа',
    example: ''
  })
  public interiorPhotoBackRightSeatsPhoto: string;

  @ApiProperty({
    description: 'Правая передняя дверь',
    example: ''
  })
  public interiorPhotoRightFrontDoor: string;

  @ApiProperty({
    description: 'Пассажирское сиденье',
    example: ''
  })
  public interiorPhotoPassengerSeatPhoto: string;

  @ApiProperty({
    description: 'Дополнительное фото',
    example: ['']
  })
  public interiorPhotoAddPhoto: string[];
  //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

  @ApiProperty({
    description: 'Круговое видео',
    example: ''
  })
  public roundViewVideoVideo: string;

  @ApiProperty({
    description: 'Комментарий',
    example: ''
  })
  public roundViewVideoComment: string;
  ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  @ApiProperty({
    description: 'Новый',
    example: false
  })
  public stoppedEngineIsNew: boolean;

  @ApiProperty({
    description: 'Не на ходу',
    example: false
  })
  public stoppedEngineIsNotGo: boolean;

  @ApiProperty({
    description: 'Аварийный',
    example: false
  })
  public stoppedEngineIsEmergency: boolean;

  @ApiProperty({
    description: 'Разукомплектован',
    example: false
  })
  public stoppedEngineIsUnderstaffed: boolean;

  @ApiProperty({
    description: 'Комментарий',
    example: ''
  })
  public stoppedEngineComment: string;

  @ApiProperty({
    description: 'Уровень масла ДВС',
    example: ''
  })
  public stoppedEngineEngineOilLevel: string;

  @ApiProperty({
    description: 'Уровень масла КПП',
    example: ''
  })
  public stoppedEngineGearboxOilLevel: string;

  @ApiProperty({
    description: 'Уровень жидкости ГУР',
    example: ''
  })
  public stoppedEngineGurLiquidLevel: string;

  @ApiProperty({
    description: 'Уровень тормозной жидкости',
    example: ''
  })
  public stoppedEngineBrakeFluidLevel: string;

  @ApiProperty({
    description: 'Уровень охлаждающей жидкости',
    example: ''
  })
  public stoppedEngineCoolantLevel: string;

  @ApiProperty({
    description: 'Комментарий тех жидкости',
    example: ''
  })
  public stoppedEngineTechnicalFluidsComment: string;

  @ApiProperty({
    description: 'Приводные ремни',
    example: ''
  })
  public stoppedEngineDriveBelts: string;

  @ApiProperty({
    description: 'Тормозные диски',
    example: ''
  })
  public stoppedEngineBrakeDiscs: string;

  @ApiProperty({
    description: 'Тормозные колодки',
    example: ''
  })
  public stoppedEngineBrakePads: string;

  @ApiProperty({
    description: 'Комментарий износа',
    example: ''
  })
  public stoppedEngineWearComment: string;
  
  @ApiProperty({
    description: 'Запотевание есть или нет',
    example: false
  })
  public stoppedEngineIsFogging: boolean;
  
  @ApiProperty({
    description: 'Имя',
    example: ''
  })
  public stoppedEngineNameOne: string;

  @ApiProperty({
    description: 'Запотевание',
    example: ['']
  })
  public stoppedEngineFoggingOne: string[];

  @ApiProperty({
    description: 'Фото',
    example: ['']
  })
  public stoppedEnginePhotoOne: string[];

  @ApiProperty({
    description: 'Комментарий',
    example: ''
  })
  public stoppedEngineCommentOne: string;

  @ApiProperty({
    description: 'Имя',
    example: ''
  })
  public stoppedEngineNameTwo: string;

  @ApiProperty({
    description: 'Запотевание',
    example: ['']
  })
  public stoppedEngineFoggingTwo: string[];

  @ApiProperty({
    description: 'Фото',
    example: ['']
  })
  public stoppedEnginePhotoTwo: string[];

  @ApiProperty({
    description: 'Комментарий',
    example: ''
  })
  public stoppedEngineCommenTwo: string;

  @ApiProperty({
    description: 'Имя',
    example: ''
  })
  public stoppedEngineNameThree: string;

  @ApiProperty({
    description: 'Запотевание',
    example: ['']
  })
  public stoppedEngineFoggingThree: string[];

  @ApiProperty({
    description: 'Фото',
    example: ['']
  })
  public stoppedEnginePhotoThree: string[];

  @ApiProperty({
    description: 'Комментарий',
    example: ''
  })
  public stoppedEngineCommentThree: string;
  //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

  @ApiProperty({
    description: 'Запотевание',
    example: false
  })
  public stoppedEnginePipesFogging: boolean;

  @ApiProperty({
    description: 'Подтек',
    example: false
  })
  public stoppedEnginePipesSmudges: boolean;

  @ApiProperty({
    description: 'Фото',
    example: ''
  })
  public stoppedEnginePipesPhoto: string;

  @ApiProperty({
    description: 'Комментарий',
    example: ''
  })
  public stoppedEnginePipesComment: string;
  
  @ApiProperty({
    description: 'Запотевание',
    example: false
  })
  public stoppedEngineValveCoverFogging: boolean;

  @ApiProperty({
    description: 'Подтек',
    example: false
  })
  public stoppedEngineValveCoverSmudges: boolean;

  @ApiProperty({
    description: 'Фото',
    example: ''
  })
  public stoppedEngineValveCoverPhoto: string;

  @ApiProperty({
    description: 'Комментарий',
    example: ''
  })
  public stoppedEngineValveCoverComment: string;
  
  @ApiProperty({
    description: 'Запотевание',
    example: false
  })
  public stoppedEngineCamshaftSensorFogging: boolean;

  @ApiProperty({
    description: 'Подтек',
    example: false
  })
  public stoppedEngineCamshaftSensorSmudges: boolean;

  @ApiProperty({
    description: 'Фото',
    example: ''
  })
  public stoppedEngineCamshaftSensorPhoto: string;

  @ApiProperty({
    description: 'Комментарий',
    example: ''
  })
  public stoppedEngineCamshaftSensorComment: string;
  
  @ApiProperty({
    description: 'Запотевание',
    example: false
  })
  public stoppedEngineOilPressureSensorFogging: boolean;

  @ApiProperty({
    description: 'Подтек',
    example: false
  })
  public stoppedEngineOilPressureSensorSmudges: boolean;

  @ApiProperty({
    description: 'Фото',
    example: ''
  })
  public stoppedEngineOilPressureSensorPhoto: string;

  @ApiProperty({
    description: 'Комментарий',
    example: ''
  })
  public stoppedEngineOilPressureSensorComment: string;
  
  @ApiProperty({
    description: 'Запотевание',
    example: false
  })
  public stoppedEngineCrankshaftOilSealFogging: boolean;

  @ApiProperty({
    description: 'Подтек',
    example: false
  })
  public stoppedEngineCrankshaftOilSealSmudges: boolean;

  @ApiProperty({
    description: 'Фото',
    example: ''
  })
  public stoppedEngineCrankshaftOilSealPhoto: string;

  @ApiProperty({
    description: 'Комментарий',
    example: ''
  })
  public stoppedEngineCrankshaftOilSealComment: string;
  
  @ApiProperty({
    description: 'Запотевание',
    example: false
  })
  public stoppedEngineCamshaftOilSealFogging: boolean;

  @ApiProperty({
    description: 'Подтек',
    example: false
  })
  public stoppedEngineCamshaftOilSealSmudges: boolean;

  @ApiProperty({
    description: 'Фото',
    example: ''
  })
  public stoppedEngineCamshaftOilSealPhoto: string;

  @ApiProperty({
    description: 'Комментарий',
    example: ''
  })
  public stoppedEngineCamshaftOilSealComment: string;
  
  @ApiProperty({
    description: 'Запотевание',
    example: false
  })
  public stoppedEngineCrankcaseFogging: boolean;

  @ApiProperty({
    description: 'Подтек',
    example: false
  })
  public stoppedEngineCrankcaseSmudges: boolean;

  @ApiProperty({
    description: 'Фото',
    example: ''
  })
  public stoppedEngineCrankcasePhoto: string;

  @ApiProperty({
    description: 'Комментарий',
    example: ''
  })
  public stoppedEngineCrankcaseComment: string;
  
  @ApiProperty({
    description: 'Запотевание',
    example: false
  })
  public stoppedEngineGurFogging: boolean;

  @ApiProperty({
    description: 'Подтек',
    example: false
  })
  public stoppedEngineGurSmudges: boolean;

  @ApiProperty({
    description: 'Фото',
    example: ''
  })
  public stoppedEngineGurPhoto: string;

  @ApiProperty({
    description: 'Комментарий',
    example: ''
  })
  public stoppedEngineGurComment: string;
  
  @ApiProperty({
    description: 'Запотевание',
    example: false
  })
  public stoppedEngineSteeringRackFogging: boolean;

  @ApiProperty({
    description: 'Подтек',
    example: false
  })
  public stoppedEngineSteeringRackSmudges: boolean;

  @ApiProperty({
    description: 'Фото',
    example: ''
  })
  public stoppedEngineSteeringRackPhoto: string;

  @ApiProperty({
    description: 'Комментарий',
    example: ''
  })
  public stoppedEngineSteeringRackComment: string;
  
  @ApiProperty({
    description: 'Запотевание',
    example: false
  })
  public stoppedEngineShockAbsorbersFogging: boolean;

  @ApiProperty({
    description: 'Подтек',
    example: false
  })
  public stoppedEngineShockAbsorbersSmudges: boolean;

  @ApiProperty({
    description: 'Фото',
    example: ''
  })
  public stoppedEngineShockAbsorbersPhoto: string;

  @ApiProperty({
    description: 'Комментарий',
    example: ''
  })
  public stoppedEngineShockAbsorbersComment: string;
  ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  @ApiProperty({
    description: 'Двигатель не запускается',
    example: false
  })
  public runningEngineEngineNotStart: boolean;

  @ApiProperty({
    description: 'Комментарий',
    example: ''
  })
  public runningEngineComment: string;

  @ApiProperty({
    description: 'Видео запуска двигателя',
    example: ''
  })
  public runningEngineEngineVideo: string;
  
  @ApiProperty({
    description: 'Все системы в порядке',
    example: false
  })
  public runningEngineAllSystemOkElectric: boolean;

  @ApiProperty({
    description: 'Все системы в порядке',
    example: false
  })
  public runningEngineAllSystemOkMechanical: boolean;

  @ApiProperty({
    description: 'Имя',
    example: ''
  })
  public runningEngineElectricalNameOne: string;

  @ApiProperty({
    description: 'Выбрано',
    example: false
  })
  public runningEngineElectricalIsCheckOne: boolean;

  @ApiProperty({
    description: 'Комментарий',
    example: ''
  })
  public runningEngineElectricalCommentOne: string;

  @ApiProperty({
    description: 'Имя',
    example: ''
  })
  public runningEngineElectricalNameTwo: string;

  @ApiProperty({
    description: 'Выбрано',
    example: false
  })
  public runningEngineElectricalIsCheckTwo: boolean;

  @ApiProperty({
    description: 'Комментарий',
    example: ''
  })
  public runningEngineElectricalCommentTwo: string;

  @ApiProperty({
    description: 'Имя',
    example: ''
  })
  public runningEngineElectricalNameThree: string;

  @ApiProperty({
    description: 'Выбрано',
    example: false
  })
  public runningEngineElectricalIsCheckThree: boolean;

  @ApiProperty({
    description: 'Комментарий',
    example: ''
  })
  public runningEngineElectricalCommentThree: string;
  
  @ApiProperty({
    description: 'Имя',
    example: ''
  })
  public runningEngineMechanicalNameOne: string;

  @ApiProperty({
    description: 'Выбрано',
    example: false
  })
  public runningEngineMechanicalIsCheckOne: boolean;

  @ApiProperty({
    description: 'Комментарий',
    example: ''
  })
  public runningEngineMechanicalCommentOne: string;

  @ApiProperty({
    description: 'Имя',
    example: ''
  })
  public runningEngineMechanicalNameTwo: string;

  @ApiProperty({
    description: 'Выбрано',
    example: false
  })
  public runningEngineMechanicalIsCheckTwo: boolean;

  @ApiProperty({
    description: 'Комментарий',
    example: ''
  })
  public runningEngineMechanicalCommentTwo: string;

  @ApiProperty({
    description: 'Имя',
    example: ''
  })
  public runningEngineMechanicalNameThree: string;

  @ApiProperty({
    description: 'Выбрано',
    example: false
  })
  public runningEngineMechanicalIsCheckThree: boolean;

  @ApiProperty({
    description: 'Комментарий',
    example: ''
  })
  public runningEngineMechanicalCommentThree: string;
  /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  
  @ApiProperty({
    description: 'Выбрано',
    example: false
  })
  public runningEngineElectricalBattery: boolean;

  @ApiProperty({
    description: 'Комментарий',
    example: ''
  })
  public runningEngineElectricalBatteryComment: string;
  
  @ApiProperty({
    description: 'Выбрано',
    example: false
  })
  public runningEngineElectricalLightingEngineering: boolean;

  @ApiProperty({
    description: 'Комментарий',
    example: ''
  })
  public runningEngineElectricalLightingEngineeringComment: string;
  
  @ApiProperty({
    description: 'Выбрано',
    example: false
  })
  public runningEngineElectricalAudiosystem: boolean;

  @ApiProperty({
    description: 'Комментарий',
    example: ''
  })
  public runningEngineElectricalAudiosystemComment: string;
  
  @ApiProperty({
    description: 'Выбрано',
    example: false
  })
  public runningEngineElectricalHeatedSteeringWheel: boolean;

  @ApiProperty({
    description: 'Комментарий',
    example: ''
  })
  public runningEngineElectricalHeatedSteeringWheelComment: string;
  
  @ApiProperty({
    description: 'Выбрано',
    example: false
  })
  public runningEngineElectricalSoundSignal: boolean;

  @ApiProperty({
    description: 'Комментарий',
    example: ''
  })
  public runningEngineElectricalSoundSignalComment: string;
  
  @ApiProperty({
    description: 'Выбрано',
    example: false
  })
  public runningEngineElectricalSeatMassage: boolean;

  @ApiProperty({
    description: 'Комментарий',
    example: ''
  })
  public runningEngineElectricalSeatMassageComment: string;
  
  @ApiProperty({
    description: 'Выбрано',
    example: false
  })
  public runningEngineElectricalWindshieldWashers: boolean;

  @ApiProperty({
    description: 'Комментарий',
    example: ''
  })
  public runningEngineElectricalWindshieldWashersComment: string;
  
  @ApiProperty({
    description: 'Выбрано',
    example: false
  })
  public runningEngineElectricalHeatedSeats: boolean;

  @ApiProperty({
    description: 'Комментарий',
    example: ''
  })
  public runningEngineElectricalHeatedSeatsComment: string;
  
  @ApiProperty({
    description: 'Выбрано',
    example: false
  })
  public runningEngineElectricalWindshieldWipers: boolean;

  @ApiProperty({
    description: 'Комментарий',
    example: ''
  })
  public runningEngineElectricalWindshieldWipersComment: string;
  
  @ApiProperty({
    description: 'Выбрано',
    example: false
  })
  public runningEngineElectricalWindowLifters: boolean;

  @ApiProperty({
    description: 'Комментарий',
    example: ''
  })
  public runningEngineElectricalWindowLiftersComment: string;
  
  @ApiProperty({
    description: 'Выбрано',
    example: false
  })
  public runningEngineElectricalElectricSunroof: boolean;

  @ApiProperty({
    description: 'Комментарий',
    example: ''
  })
  public runningEngineElectricalElectricSunroofComment: string;
  
  @ApiProperty({
    description: 'Выбрано',
    example: false
  })
  public runningEngineElectricalElectricSteering: boolean;

  @ApiProperty({
    description: 'Комментарий',
    example: ''
  })
  public runningEngineElectricalElectricSteeringComment: string;
  
  @ApiProperty({
    description: 'Выбрано',
    example: false
  })
  public runningEngineElectricalElectricMirrors: boolean;

  @ApiProperty({
    description: 'Комментарий',
    example: ''
  })
  public runningEngineElectricalElectricMirrorsComment: string;
  
  @ApiProperty({
    description: 'Выбрано',
    example: false
  })
  public runningEngineElectricalElectricSeats: boolean;

  @ApiProperty({
    description: 'Комментарий',
    example: ''
  })
  public runningEngineElectricalElectricSeatsComment: string;
  
  @ApiProperty({
    description: 'Выбрано',
    example: false
  })
  public runningEngineElectricalElectricPanorama: boolean;

  @ApiProperty({
    description: 'Комментарий',
    example: ''
  })
  public runningEngineElectricalElectricPanoramaComment: string;
  
  @ApiProperty({
    description: 'Выбрано',
    example: false
  })
  public runningEngineElectricalHeatedWindshield: boolean;

  @ApiProperty({
    description: 'Комментарий',
    example: ''
  })
  public runningEngineElectricalHeatedWindshieldComment: string;
  
  @ApiProperty({
    description: 'Выбрано',
    example: false
  })
  public runningEngineElectricalElectricTrunkDrive: boolean;

  @ApiProperty({
    description: 'Комментарий',
    example: ''
  })
  public runningEngineElectricalElectricTrunkDriveComment: string;
  ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

  @ApiProperty({
    description: 'Выбрано',
    example: false
  })
  public runningEngineMechanicalGearShifting: boolean;

  @ApiProperty({
    description: 'Комментарий',
    example: ''
  })
  public runningEngineMechanicalGearShiftingComment: string;
  
  @ApiProperty({
    description: 'Выбрано',
    example: false
  })
  public runningEngineMechanicalEngineOperation: boolean;

  @ApiProperty({
    description: 'Комментарий',
    example: ''
  })
  public runningEngineMechanicalEngineOperationComment: string;
  
  @ApiProperty({
    description: 'Выбрано',
    example: false
  })
  public runningEngineMechanicalInteriorHeater: boolean;

  @ApiProperty({
    description: 'Комментарий',
    example: ''
  })
  public runningEngineMechanicalInteriorHeaterComment: string;
  
  @ApiProperty({
    description: 'Выбрано',
    example: false
  })
  public runningEngineMechanicalPowerSteering: boolean;

  @ApiProperty({
    description: 'Комментарий',
    example: ''
  })
  public runningEngineMechanicalPowerSteeringComment: string;
  
  @ApiProperty({
    description: 'Выбрано',
    example: false
  })
  public runningEngineMechanicalAirConditioner: boolean;

  @ApiProperty({
    description: 'Комментарий',
    example: ''
  })
  public runningEngineMechanicalAirConditionerComment: string;
  ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  @ApiProperty({
    description: 'Ошибки отсутствуют',
    example: false
  })
  public dashboardNoErrors: boolean;
  
  @ApiProperty({
    description: 'Файл диагностики',
    example: [""]
  })
  public dashboardDiagnosticsFile?: string[];

  @ApiProperty({
    description: 'Комментарий эксперта',
    example: ""
  })
  public dashboardDiagnosticsComment: string;

  @ApiProperty({
    description: 'Пробег на приборной панели',
    example: ""
  })
  public dashboardMileageOnDashboard?: string;

  @ApiProperty({
    description: 'Пробег в блоках ДВС',
    example: ""
  })
  public dashboardMileageInTheEngineBlock?: string;

  @ApiProperty({
    description: 'Пробег в блоке КПП',
    example: ""
  })
  public dashboardMileageInTheGearbox?: string;

  @ApiProperty({
    description: 'Пробег в доп блоке',
    example: ""
  })
  public dashboardMileageInAdditionalBlocks?: string;

  @ApiProperty({
    description: 'Без пробега',
    example: false
  })
  public dashboardIsNoMileage?: boolean;

  @ApiProperty({
    description: 'Комментарий',
    example: ""
  })
  public dashboardTotalComment: string;

  @ApiProperty({
    description: 'Имя',
    example: ''
  })
  public dashboardNameOne: string;

  @ApiProperty({
    description: 'Выбрано',
    example: false
  })
  public dashboardIsCheckOne: boolean;

  @ApiProperty({
    description: 'Комментарий',
    example: ''
  })
  public dashboardCommentOne: string;

  @ApiProperty({
    description: 'Имя',
    example: ''
  })
  public dashboardNameTwo: string;

  @ApiProperty({
    description: 'Выбрано',
    example: false
  })
  public dashboardIsCheckTwo: boolean;

  @ApiProperty({
    description: 'Комментарий',
    example: ''
  })
  public dashboardCommentTwo: string;

  @ApiProperty({
    description: 'Имя',
    example: ''
  })
  public dashboardNameThree: string;

  @ApiProperty({
    description: 'Выбрано',
    example: false
  })
  public dashboardIsCheckThree: boolean;

  @ApiProperty({
    description: 'Комментарий',
    example: ''
  })
  public dashboardCommentThree: string;
  //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  
  @ApiProperty({
    description: 'Выбрано',
    example: false
  })
  public dashboardABS: boolean;

  @ApiProperty({
    description: 'Комментарий',
    example: ''
  })
  public dashboardABSComment: string;
  
  @ApiProperty({
    description: 'Выбрано',
    example: false
  })
  public dashboardESP: boolean;

  @ApiProperty({
    description: 'Комментарий',
    example: ''
  })
  public dashboardESPComment: string;
  
  @ApiProperty({
    description: 'Выбрано',
    example: false
  })
  public dashboardAirbag: boolean;

  @ApiProperty({
    description: 'Комментарий',
    example: ''
  })
  public dashboardAirbagComment: string;
  
  @ApiProperty({
    description: 'Выбрано',
    example: false
  })
  public dashboardCheckEngine: boolean;

  @ApiProperty({
    description: 'Комментарий',
    example: ''
  })
  public dashboardCheckEngineComment: string;
  
  @ApiProperty({
    description: 'Выбрано',
    example: false
  })
  public dashboardBattery: boolean;

  @ApiProperty({
    description: 'Комментарий',
    example: ''
  })
  public dashboardBatteryComment: string;
  
  @ApiProperty({
    description: 'Выбрано',
    example: false
  })
  public dashboardTirePressure: boolean;

  @ApiProperty({
    description: 'Комментарий',
    example: ''
  })
  public dashboardTirePressureComment: string;
  
  @ApiProperty({
    description: 'Выбрано',
    example: false
  })
  public dashboardOilPressure: boolean;

  @ApiProperty({
    description: 'Комментарий',
    example: ''
  })
  public dashboardOilPressureComment: string;
  ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

  @ApiProperty({
    description: 'Все системы работают исправно',
    example: false
  })
  public testDriveAllSystemOk: boolean;


  @ApiProperty({
    description: 'Имя',
    example: ''
  })
  public testDriveNameOne: string;

  @ApiProperty({
    description: 'Выбрано',
    example: false
  })
  public testDriveIsCheckOne: boolean;

  @ApiProperty({
    description: 'Комментарий',
    example: ''
  })
  public testDriveCommentOne: string;

  @ApiProperty({
    description: 'Имя',
    example: ''
  })
  public testDriveNameTwo: string;

  @ApiProperty({
    description: 'Выбрано',
    example: false
  })
  public testDriveIsCheckTwo: boolean;

  @ApiProperty({
    description: 'Комментарий',
    example: ''
  })
  public testDriveCommentTwo: string;

  @ApiProperty({
    description: 'Имя',
    example: ''
  })
  public testDriveNameThree: string;

  @ApiProperty({
    description: 'Выбрано',
    example: false
  })
  public testDriveIsCheckThree: boolean;

  @ApiProperty({
    description: 'Комментарий',
    example: ''
  })
  public testDriveCommentThree: string;
  //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  
  @ApiProperty({
    description: 'Выбрано',
    example: false
  })
  public testDriveSuspension: boolean;

  @ApiProperty({
    description: 'Комментарий',
    example: ''
  })
  public testDriveSuspensionComment: string;
  
  @ApiProperty({
    description: 'Выбрано',
    example: false
  })
  public testDriveEngine: boolean;

  @ApiProperty({
    description: 'Комментарий',
    example: ''
  })
  public testDriveEngineComment: string;
  
  @ApiProperty({
    description: 'Выбрано',
    example: false
  })
  public testDriveTransmission: boolean;

  @ApiProperty({
    description: 'Комментарий',
    example: ''
  })
  public testDriveTransmissionComment: string;
  
  @ApiProperty({
    description: 'Выбрано',
    example: false
  })
  public testDriveSteering: boolean;

  @ApiProperty({
    description: 'Комментарий',
    example: ''
  })
  public testDriveSteeringComment: string;
  
  @ApiProperty({
    description: 'Выбрано',
    example: false
  })
  public testDriveBrakeSystem: boolean;

  @ApiProperty({
    description: 'Комментарий',
    example: ''
  })
  public testDriveBrakeSystemComment: string;
  
  @ApiProperty({
    description: 'Выбрано',
    example: false
  })
  public testDriveParkingBrake: boolean;

  @ApiProperty({
    description: 'Комментарий',
    example: ''
  })
  public testDriveParkingBrakeComment: string;
  
  @ApiProperty({
    description: 'Выбрано',
    example: false
  })
  public testDriveExhaustSystem: boolean;

  @ApiProperty({
    description: 'Комментарий',
    example: ''
  })
  public testDriveExhaustSystemComment: string;
  ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

  @ApiProperty({
    description: 'Комментарий плюсов',
    example: ''
  })
  public expertOpinionPlusComment: string;

  @ApiProperty({
    description: 'Комментарий минусов',
    example: ''
  })
  public expertOpinionMinusComment: string;

  @ApiProperty({
    description: 'Комментарий общий',
    example: ''
  })
  public expertOpinionTotalComment: string;
  
  @ApiProperty({
    description: 'Файл истории',
    example: ['']
  })
  public expertOpinionHistoryFile: string[];

  @ApiProperty({
    description: 'Комментарий истории автомобиля',
    example: ''
  })
  public expertOpinionHistoryComment: string;
  /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  @ApiProperty({
    description: 'Проверка компрессии',
    example: [""]
  })
  public serviceInspectionCompressionCheck: string[];

  @ApiProperty({
    description: 'Проверка эндоскопом',
    example: [""]
  })
  public serviceInspectionEndoscopeCheck: string[];

  @ApiProperty({
    description: 'Осмотр ДВС',
    example: [""]
  })
  public serviceInspectionEngineInspection: string[];

  @ApiProperty({
    description: 'Осмотр КПП',
    example: [""]
  })
  public serviceInspectionCheckpointInspection: string[];

  @ApiProperty({
    description: 'Осмотр ГУР',
    example: [""]
  })
  public serviceInspectionPowerSteeringInspection: string[];

  @ApiProperty({
    description: 'Осмотр раздатки',
    example: [""]
  })
  public serviceInspectionTransferCaseInspection: string[];

  @ApiProperty({
    description: 'Осмотр задний мост',
    example: [""]
  })
  public serviceInspectionRearAxleInspection: string[];

  @ApiProperty({
    description: 'Передний мост',
    example: [""]
  })
  public serviceInspectionFrontAxleInspection: string[];

  @ApiProperty({
    description: 'Осмотр рулевой рейки',
    example: [""]
  })
  public serviceInspectionSteeringRackInspection: string[];

  @ApiProperty({
    description: 'Осмотр ходовой части',
    example: [""]
  })
  public serviceInspectionChassisInspection: string[];
  ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

  @ApiProperty({
    description: 'Дата создания',
    example: ''
  })
  public  createdAt: Date;

  @ApiProperty({
    description: 'Дата публикации',
    example: ''
  })
  public  publishAt: Date;
}
