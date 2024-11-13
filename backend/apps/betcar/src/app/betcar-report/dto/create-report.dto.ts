import { ApiProperty } from '@nestjs/swagger';

export class CreateReportDto {
   
  @ApiProperty({
    description: 'ID пользователя',
    example: 1
  })
  public  userId: number;
  
  @ApiProperty({
    description: 'Заголовок отчета',
    example: 'Осмотр автомобиля BMW X6'
  })
  public title: string;

  @ApiProperty({
    description: 'Email заказчика осмотра',
    example: 'string@email.com'
  })
  public userEmail: string;

  @ApiProperty({
    description: 'Отказа от осмотра',
    example: false
  })
  public sellerDetailsRefusalOfInspection: boolean;

  @ApiProperty({
    description: 'Ссылка на объявление',
    example: ["string"]
  })
  public sellerDetailsLinkToAd: string[];

  @ApiProperty({
    description: 'Имя продавца',
    example: 'Иван'
  })
  public sellerDetailsName: string;
  
  @ApiProperty({
    description: 'Номер телефона',
    example: '+79195674839'
  })
  public sellerDetailsPhone: string;
  
  @ApiProperty({
    description: 'Стоимость автомобиля',
    example: '100000'
  })
  public sellerDetailsCarCost: string;
  
  @ApiProperty({
    description: 'Собственник или дилер',
    example: "string"
  })
  public sellerDetailsRole: string;
  
  @ApiProperty({
    description: 'Общий комментнарий',
    example: 'Тачка огонь!!!'
  })
  public sellerDetailsComment: string;

  ////////////////////////////////////////
  @ApiProperty({
    description: 'VIN номер',
    example: "string"
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
    example: ["string"]
  })
  public vinBodyNumberPhoto: string[];

  @ApiProperty({
    description: 'Комментарий',
    example: "string"
  })
  public vinBodyNumberComment: string;

  @ApiProperty({
    description: 'Рамы номер',
    example: "string"
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
    example: ["string"]
  })
  public frameNumberPhoto: string[];
  
  @ApiProperty({
    description: 'Комментарий',
    example: "string"
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
    example: "string"
  })
  public stateNumberStateNumber: string;

  @ApiProperty({
    description: 'Комментарий',
    example: "string"
  })
  public stateNumberComment: string;

  @ApiProperty({
    description: 'Отсутствует',
    example: false
  })
  public tCPAbsent: boolean;

  @ApiProperty({
    description: 'Тип ПТС',
    example: 'string'
  })
  public tCPType: string;

  @ApiProperty({
    description: 'Фото',
    example: ["string"]
  })
  public tCPPhoto: string[];

  @ApiProperty({
    description: 'Количество владельцев',
    example: "string"
  })
  public tCPNumberOfOwners: string;

  @ApiProperty({
    description: 'Комментарий',
    example: 'string'
  })
  public tCPComment: string;

  @ApiProperty({
    description: 'Отсутствует',
    example: false
  })
  public sTSAbsent: boolean;

  @ApiProperty({
    description: 'Фото',
    example: ["string"]
  })
  public sTSPhoto: string[];

  @ApiProperty({
    description: 'Комментарий',
    example: "string"
  })
  public sTSComment: string;

  @ApiProperty({
    description: 'Марка',
    example: "string"
  })
  public carDataCarBrand: string;

  @ApiProperty({
    description: 'Модель',
    example: "string"
  })
  public carDataCarModel: string;

  @ApiProperty({
    description: 'Год',
    example: "string"
  })
  public carDataManufactureYear: string;

  @ApiProperty({
    description: 'Цвет',
    example: "string"
  })
  public carDataColor: string;

  @ApiProperty({
    description: 'Тип кузова',
    example: "string"
  })
  public carDataBodyType: string;

  @ApiProperty({
    description: 'Тип двигателя',
    example: "string"
  })
  public carDataEnginesType: string;

  @ApiProperty({
    description: 'Тип КПП',
    example: "string"
  })
  public carDataGearboxType: string;

  @ApiProperty({
    description: 'Привод',
    example: "string"
  })
  public carDataDriveUnit: string;

  @ApiProperty({
    description: 'Расположение руля',
    example: "string"
  })
  public carDataSteeringWheelLocation: string;
  
  @ApiProperty({
    description: 'Номер двигателя',
    example: "string"
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
    example: ["string"]
  })
  public engineNumberPhoto: string[];

  @ApiProperty({
    description: 'Номер двигателя',
    example: "string"
  })
  public engineNumberEngineNumber: string;

  @ApiProperty({
    description: 'Комментарий',
    example: "string"
  })
  public engineNumberComment: string;

  @ApiProperty({
    description: 'Объем двигателя',
    example: "string"
  })
  public carDataEngineCapacity: string;

  @ApiProperty({
    description: 'Мощность',
    example: "string"
  })
  public carDataPower: string;

  @ApiProperty({
    description: 'Сервисная книжка',
    example: "string"
  })
  public carDataServiceBook: string;

  @ApiProperty({
    description: 'Комментарий',
    example: "string"
  })
  public additionalDocumentsComment: string;

  @ApiProperty({
    description: 'Фото',
    example: ["string"]
  })
  public additionalDocumentsPhoto: string[];
  /////////////////////////////////////////
  @ApiProperty({
    description: 'Страна',
    example: "string"
  })
  public locationCountry: string;

  @ApiProperty({
    description: 'Регион',
    example: "string"
  })
  public locationRegion: string;

  @ApiProperty({
    description: 'Город',
    example: "string"
  })
  public locationCity: string;

  @ApiProperty({
    description: 'Адрес',
    example: "string"
  })
  public locationAddress: string;

  @ApiProperty({
    description: 'Комментарий',
    example: "string"
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
    example: 'string'
  })
  public complectationWheelsTypeOfDisks: string;

  @ApiProperty({
    description: 'Сезонность',
    example: "string"
  })
  public complectationWheelsSeasonality: string;

  @ApiProperty({
    description: 'Марка шин переднего левого колеса',
    example: 'string'
  })
  public complectationWheelsFrontLeftBrand: string;

  @ApiProperty({
    description: 'Марка шин заднего левого колеса',
    example: 'string'
  })
  public complectationWheelsBackLeftBrand: string;

  @ApiProperty({
    description: 'Марка шин переднего правого колеса',
    example: 'string'
  })
  public complectationWheelsFrontRightBrand: string;

  @ApiProperty({
    description: 'Марка шин заднего правого колеса',
    example: 'string'
  })
  public complectationWheelsBackRightBrand: string;

  @ApiProperty({
    description: 'Модель шин переднего левого колеса',
    example: 'string'
  })
  public complectationWheelsFrontLeftModel: string;

  @ApiProperty({
    description: 'Модель шин заднего левого колеса',
    example: 'string'
  })
  public complectationWheelsBackLeftModel: string;

  @ApiProperty({
    description: 'Модель шин переднего правого колеса',
    example: 'string'
  })
  public complectationWheelsFrontRightModel: string;

  @ApiProperty({
    description: 'Модель шин заднего правого колеса',
    example: 'string'
  })
  public complectationWheelsBackRightModel: string;

  @ApiProperty({
    description: 'Дата выпуска шин переднего левого колеса',
    example: 'string'
  })
  public complectationWheelsFrontLeftIssueDate: string;

  @ApiProperty({
    description: 'Дата выпуска шин заднего левого колеса',
    example: 'string'
  })
  public complectationWheelsBackLeftIssueDate: string;

  @ApiProperty({
    description: 'Дата выпуска шин переднего правого колеса',
    example: 'string'
  })
  public complectationWheelsFrontRightIssueDate: string;

  @ApiProperty({
    description: 'Дата выпуска шин заднего правого колеса',
    example: 'string'
  })
  public complectationWheelsBackRightIssueDate: string;

  @ApiProperty({
    description: 'Параметры шин переднего левого колеса',
    example: ['string']
  })
  public complectationWheelsFrontLeftOptions: string[];

  @ApiProperty({
    description: 'Параметры шин заднего левого колеса',
    example: ['string']
  })
  public complectationWheelsBackLeftOptions: string[];

  @ApiProperty({
    description: 'Параметры шин переднего правого колеса',
    example: ['string']
  })
  public complectationWheelsFrontRightOptions: string[];

  @ApiProperty({
    description: 'Параметры шин заднего правого колеса',
    example: ['string']
  })
  public complectationWheelsBackRightOptions: string[];

  @ApiProperty({
    description: 'Износ шин переднего левого колеса',
    example: 'string'
  })
  public complectationWheelsFrontLeftWear: string;

  @ApiProperty({
    description: 'Износ шин заднего левого колеса',
    example: 'string'
  })
  public complectationWheelsBackLeftWear: string;

  @ApiProperty({
    description: 'Износ шин переднего правого колеса',
    example: 'string'
  })
  public complectationWheelsFrontRightWear: string;

  @ApiProperty({
    description: 'Износ шин заднего правого колеса',
    example: 'string'
  })
  public complectationWheelsBackRightWear: string;
  
  @ApiProperty({
    description: 'Дополнительные шины - сезонность',
    example: ['string']
  })
  public complectationWheelsAdditionalTiresSeasonality: string[];
  
  @ApiProperty({
    description: 'Дополнительные диски - тип',
    example: 'string'
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
    example: "string"
  })
  public complectationSalonInteriorMaterial: string;

  @ApiProperty({
    description: 'Подогрев сидений',
    example: ["string"]
  })
  public complectationSalonHeatedSeats: string[];

  @ApiProperty({
    description: 'Регулировка сидений по высоте',
    example: "string"
  })
  public complectationSalonSeatHeightAdjustment: string;

  @ApiProperty({
    description: 'Электрорегулировка сидений',
    example: ["string"]
  })
  public complectationSalonElectricallyAdjustableSeats: string[];

  @ApiProperty({
    description: 'Память положения сидений',
    example: "string"
  })
  public complectationSalonSeatPositionMemory: string;

  @ApiProperty({
    description: 'Вентиляция сидений',
    example: ["string"]
  })
  public complectationSalonSeatVentilation: string[];

  @ApiProperty({
    description: 'Сиденья с массажем',
    example: ["string"]
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
    example: "string"
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
    example: ["string"]
  })
  public complectationComfortCamera: string[];

  @ApiProperty({
    description: 'Подвеска',
    example: ["string"]
  })
  public complectationComfortSuspension: string[];

  @ApiProperty({
    description: 'Кондиционер',
    example: "string"
  })
  public complectationComfortAirConditioner: string;

  @ApiProperty({
    description: 'Усилитель руля',
    example: "string"
  })
  public complectationComfortPowerSteering: string;

  @ApiProperty({
    description: 'Круиз-контроль',
    example: "string"
  })
  public complectationComfortCruiseControl: string;

  @ApiProperty({
    description: 'Электроподогрев',
    example: ["string"]
  })
  public complectationComfortElectricHeating: string[];

  @ApiProperty({
    description: 'Регулировка руля',
    example: ["string"]
  })
  public complectationComfortSteeringWheelAdjustment: string[];

  @ApiProperty({
    description: 'Помощь при парковке',
    example: ["string"]
  })
  public complectationComfortParkingAssistanceSystem: string[];

  @ApiProperty({
    description: 'Электроподъемние стекла',
    example: ["string"]
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
    example: ["string"]
  })
  public complectationSafetyAirbags: string[];

  @ApiProperty({
    description: 'Система крепления isofix',
    example: ["string"]
  })
  public complectationSafetyIsofix: string[];

  @ApiProperty({
    description: 'Вспомогательные системы',
    example: ["string"]
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
    example: "string"
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
    example: "string"
  })
  public complectationOtherNumberOfKeys: string;

  @ApiProperty({
    description: 'Запасное колесо',
    example: "string"
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
    example: ["string"]
  })
  public paintworkInspectionRoof: string[];

  @ApiProperty({
    description: 'Крышка багажника',
    example: ["string"]
  })
  public paintworkInspectionTrunkLid: string[];

  @ApiProperty({
    description: 'Правое заднее крыло',
    example: ["string"]
  })
  public paintworkInspectionRightRearFender: string[];

  @ApiProperty({
    description: 'Правая задняя стойка',
    example: ["string"]
  })
  public paintworkInspectionRightRearPillar: string[];

  @ApiProperty({
    description: 'Правая задняя дверь',
    example: ["string"]
  })
  public paintworkInspectionRightRearDoor: string[];

  @ApiProperty({
    description: 'Правый проем задней двери',
    example: ["string"]
  })
  public paintworkInspectionRightRearDoorOpening: string[];

  @ApiProperty({
    description: 'Правая центральная стойка',
    example: ["string"]
  })
  public paintworkInspectionRightCenterPillar: string[];

  @ApiProperty({
    description: 'Правый порог',
    example: ["string"]
  })
  public paintworkInspectionRightThreshold: string[];

  @ApiProperty({
    description: 'Правая передняя дверь',
    example: ["string"]
  })
  public paintworkInspectionRightFrontDoor: string[];

  @ApiProperty({
    description: 'Правый проем передней двери',
    example: ["string"]
  })
  public paintworkInspectionRightFrontDoorOpening: string[];

  @ApiProperty({
    description: 'Правая передняя стойка',
    example: ["string"]
  })
  public paintworkInspectionRightFrontPillar: string[];

  @ApiProperty({
    description: 'Правое переднее крыло',
    example: ["string"]
  })
  public paintworkInspectionRightFrontFender: string[];

  @ApiProperty({
    description: 'Капот',
    example: ["string"]
  })
  public paintworkInspectionHood: string[];
  
  @ApiProperty({
    description: 'Левое переднее крыло',
    example: ["string"]
  })
  public paintworkInspectionLeftFrontFender: string[];

  @ApiProperty({
    description: 'Левая передняя стойка',
    example: ["string"]
  })
  public paintworkInspectionLeftFrontPillar: string[];

  @ApiProperty({
    description: 'Левая передняя дверь',
    example: ["string"]
  })
  public paintworkInspectionLeftFrontDoor: string[];

  @ApiProperty({
    description: 'Левый проем передней двери',
    example: ["string"]
  })
  public paintworkInspectionLeftFrontDoorOpening: string[];

  @ApiProperty({
    description: 'Левая центральная стойка',
    example: ["string"]
  })
  public paintworkInspectionLeftCenterPillar: string[];

  @ApiProperty({
    description: 'Левый порог',
    example: ["string"]
  })
  public paintworkInspectionLeftThreshold: string[];

  @ApiProperty({
    description: 'Левая задняя дверь',
    example: ["string"]
  })
  public paintworkInspectionLeftRearDoor: string[];

  @ApiProperty({
    description: 'Левый проем задней двери',
    example: ["string"]
  })
  public paintworkInspectionLeftRearDoorOpening: string[];

  @ApiProperty({
    description: 'Левая задняя стойка',
    example: ["string"]
  })
  public paintworkInspectionLeftRearPillar: string[];

  @ApiProperty({
    description: 'Левое заднее крыло',
    example: ["string"]
  })
  public paintworkInspectionLeftRearFender: string[];
  
  @ApiProperty({
    description: 'Имя элемента',
    example: "string"
  })
  public paintworkInspectionAddNameOne: string;
  
  @ApiProperty({
    description: 'Инфо элемента',
    example: ["string"]
  })
  public paintworkInspectionAddInfoOne: string[];

  @ApiProperty({
    description: 'Имя элемента',
    example: "string"
  })
  public paintworkInspectionAddNameTwo: string;

  @ApiProperty({
    description: 'Инфо элемента',
    example: ["string"]
  })
  public paintworkInspectionAddInfTwo: string[];

  @ApiProperty({
    description: 'Имя элемента',
    example: "string"
  })
  public paintworkInspectionAddNameThree: string;

  @ApiProperty({
    description: 'Инфо элемента',
    example: ["string"]
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
    example: ['string']
  })
  public engineCompartmentDamageLeftSideMember: string[];

  @ApiProperty({
    description: 'Левый стакан',
    example: ['string']
  })
  public engineCompartmentDamageLeftGlass: string[];

  @ApiProperty({
    description: 'Правый лонжерон',
    example: ['string']
  })
  public engineCompartmentDamageRightSideMember: string[];

  @ApiProperty({
    description: 'Правый стакан',
    example: ['string']
  })
  public engineCompartmentDamageRightGlass: string[];

  @ApiProperty({
    description: 'Петли капота',
    example: ['string']
  })
  public engineCompartmentDamageHoodHinges: string[]; 

  @ApiProperty({
    description: 'Телевизор',
    example: ['string']
  })
  public engineCompartmentDamageTelevisor: string[];
  
  @ApiProperty({
    description: 'Моторный щит',
    example: ['string']
  })
  public engineCompartmentDamageMotorShield: string[];

  @ApiProperty({
    description: 'Имя элемента',
    example: "string"
  })
  public engineCompartmentDamageAddNameOne: string;

  @ApiProperty({
    description: 'Инфо элемента',
    example: ["string"]
  })
  public engineCompartmentDamageAddInfoOne: string[];

  @ApiProperty({
    description: 'Имя элемента',
    example: "string"
  })
  public engineCompartmentDamageAddNameTwo: string;

  @ApiProperty({
    description: 'Инфо элемента',
    example: ["string"]
  })
  public engineCompartmentDamageAddInfTwo: string[];

  @ApiProperty({
    description: 'Имя элемента',
    example: "string"
  })
  public engineCompartmentDamageAddNameThree: string;

  @ApiProperty({
    description: 'Инфо элемента',
    example: ["string"]
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
    example: ["string"]
  })
  public frontSideDamageFogLights: string[]; 

  @ApiProperty({
    description: 'Решетка радиатора',
    example: ["string"]
  })
  public frontSideDamageRadiatorGrille: string[]; 

  @ApiProperty({
    description: 'Бампер',
    example: ["string"]
  })
  public frontSideDamageFrontBumper: string[]; 

  @ApiProperty({
    description: 'Правая фара',
    example: ["string"]
  })
  public frontSideDamageRightHeadlight: string[]; 

  @ApiProperty({
    description: 'Левая фара',
    example: ["string"]
  })
  public frontSideDamageLeftHeadlight: string[]; 

  @ApiProperty({
    description: 'Капот',
    example: ["string"]
  })
  public frontSideDamageHood: string[]; 
  
  @ApiProperty({
    description: 'Имя элемента',
    example: "string"
  })
  public frontSideDamageAddNameOne: string;

  @ApiProperty({
    description: 'Инфо элемента',
    example: ["string"]
  })
  public frontSideDamageAddInfoOne: string[];

  @ApiProperty({
    description: 'Имя элемента',
    example: "string"
  })
  public frontSideDamageAddNameTwo: string;

  @ApiProperty({
    description: 'Инфо элемента',
    example: ["string"]
  })
  public frontSideDamageAddInfTwo: string[];

  @ApiProperty({
    description: 'Имя элемента',
    example: "string"
  })
  public frontSideDamageAddNameThree: string;

  @ApiProperty({
    description: 'Инфо элемента',
    example: ["string"]
  })
  public frontSideDamageAddInfoThree: string[];
  //////////////////////////////////////////////////////////////////////////////////////////////////////////////

  @ApiProperty({
    description: 'Массив объектов c информацией о повреждениях левой части',
    example: [0]
  })
  public leftSideDamage: number[];

  @ApiProperty({
    description: 'Массив объектов c информацией о повреждениях задней части',
    example: [0]
  })
  public backSideDamage: number[];

  @ApiProperty({
    description: 'Массив объектов c информацией о повреждениях багажника',
    example: [0]
  })
  public trunkDamage: number[];

  @ApiProperty({
    description: 'Массив объектов c информацией о повреждениях правой части',
    example: [0]
  })
  public rightSideDamage: number[];

  @ApiProperty({
    description: 'Массив объектов c информацией о повреждениях крыши',
    example: [0]
  })
  public roofDamage: number[];

  @ApiProperty({
    description: 'Массив объектов c информацией о повреждениях стекол',
    example: [0]
  })
  public glassDamage: number[];

  @ApiProperty({
    description: 'Массив объектов c информацией о повреждениях колес',
    example: [0]
  })
  public discDamage: number[];

  @ApiProperty({
    description: 'Массив объектов c информацией о повреждениях салона',
    example: [0]
  })
  public interiorDamage: number[];

  @ApiProperty({
    description: 'Массив объектов c фото кузова',
    example: [0]
  })
  public exteriorPhoto: number[];

  @ApiProperty({
    description: 'Массив объектов c фото салона',
    example: [0]
  })
  public interiorPhoto: number[];

  @ApiProperty({
    description: 'Массив объектов c круговым обзором',
    example: [0]
  })
  public roundViewVideo: number[];

  @ApiProperty({
    description: 'Массив объектов c заглушенным двигателем',
    example: [0]
  })
  public stoppedEngine: number[];

  @ApiProperty({
    description: 'Массив объектов c запущенным двигателем',
    example: [0]
  })
  public runningEngine: number[];

  @ApiProperty({
    description: 'Массив объектов c приборной панелью',
    example: [0]
  })
  public dashboard: number[];

  @ApiProperty({
    description: 'Массив объектов c тест драйвом',
    example: [0]
  })
  public testDrive: number[];

  @ApiProperty({
    description: 'Массив объектов c заключением эксперта',
    example: [0]
  })
  public expertOpinion: number[];

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