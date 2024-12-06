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
    description: 'Без повреждений',
    example: false
  })
  public leftSideDamageWithoutDamage: boolean;
  
  @ApiProperty({
    description: 'Переднее крыло',
    example: ['string']
  })
  public leftSideDamageLeftFrontFender: string[]; 

  @ApiProperty({
    description: 'Передняя стойка',
    example: ['string']
  })
  public leftSideDamageLeftFrontPillar: string[]; 

  @ApiProperty({
    description: 'Передняя дверь',
    example: ['string']
  })
  public leftSideDamageLeftFrontDoor: string[]; 

  @ApiProperty({
    description: 'Центральная стойка',
    example: ['string']
  })
  public leftSideDamageLeftCenterPillar: string[];
  
  @ApiProperty({
    description: 'Задняя дверь',
    example: ['string']
  })
  public leftSideDamageLeftRearDoor: string[]; 

  @ApiProperty({
    description: 'Задняя стойка',
    example: ['string']
  })
  public leftSideDamageLeftRearPillar: string[]; 

  @ApiProperty({
    description: 'Заднее крыло',
    example: ['string']
  })
  public leftSideDamageLeftRearFender: string[]; 

  @ApiProperty({
    description: 'Левое зеркало',
    example: ['string']
  })
  public leftSideDamageLeftMirror: string[]; 

  @ApiProperty({
    description: 'Порог',
    example: ['string']
  })
  public leftSideDamageLeftThreshold: string[]; 

  @ApiProperty({
    description: 'Имя элемента',
    example: "string"
  })
  public leftSideDamageAddNameOne: string;

  @ApiProperty({
    description: 'Инфо элемента',
    example: ["string"]
  })
  public leftSideDamageAddInfoOne: string[];

  @ApiProperty({
    description: 'Имя элемента',
    example: "string"
  })
  public leftSideDamageAddNameTwo: string;

  @ApiProperty({
    description: 'Инфо элемента',
    example: ["string"]
  })
  public leftSideDamageAddInfTwo: string[];

  @ApiProperty({
    description: 'Имя элемента',
    example: "string"
  })
  public leftSideDamageAddNameThree: string;

  @ApiProperty({
    description: 'Инфо элемента',
    example: ["string"]
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
    example: ['string']
  })
  public backSideDamageTailgate: string[]; 

  @ApiProperty({
    description: 'Задний бампер',
    example: ['string']
  })
  public backSideDamageRearBumper: string[]; 

  @ApiProperty({
    description: 'Левый фонарь',
    example: ['string']
  })
  public backSideDamageLeftLamp: string[]; 

  @ApiProperty({
    description: 'Правый фонарь',
    example: ['string']
  })
  public backSideDamageRightLamp: string[]; 

  @ApiProperty({
    description: 'Имя элемента',
    example: "string"
  })
  public backSideDamageAddNameOne: string;

  @ApiProperty({
    description: 'Инфо элемента',
    example: ["string"]
  })
  public backSideDamageAddInfoOne: string[];

  @ApiProperty({
    description: 'Имя элемента',
    example: "string"
  })
  public backSideDamageAddNameTwo: string;

  @ApiProperty({
    description: 'Инфо элемента',
    example: ["string"]
  })
  public backSideDamageAddInfTwo: string[];

  @ApiProperty({
    description: 'Имя элемента',
    example: "string"
  })
  public backSideDamageAddNameThree: string;

  @ApiProperty({
    description: 'Инфо элемента',
    example: ["string"]
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
    example: ['string']
  })
  public trunkDamageCoverTrim: string[]; 

  @ApiProperty({
    description: 'Ковролин пола',
    example: ['string']
  })
  public trunkDamageCarpetFloor: string[]; 

  @ApiProperty({
    description: 'Обшивка правая',
    example: ['string']
  })
  public trunkDamageRightTrim: string[]; 

  @ApiProperty({
    description: 'Правый стакан',
    example: ['string']
  })
  public trunkDamageRightGlass: string[]; 

  @ApiProperty({
    description: 'Обшивка левая',
    example: ['string']
  })
  public trunkDamageLeftTrim: string[]; 

  @ApiProperty({
    description: 'Левый стакан',
    example: ['string']
  })
  public trunkDamageLeftGlass: string[]; 

  @ApiProperty({
    description: 'Обшивка спинки сиденья',
    example: ['string']
  })
  public trunkDamageSeatBackTrim: string[]; 

  @ApiProperty({
    description: 'Ниша запасного колеса',
    example: ['string']
  })
  public trunkDamageSpareWheelWell: string[]; 

  @ApiProperty({
    description: 'Имя элемента',
    example: "string"
  })
  public trunkDamageAddNameOne: string;

  @ApiProperty({
    description: 'Инфо элемента',
    example: ["string"]
  })
  public trunkDamageAddInfoOne: string[];

  @ApiProperty({
    description: 'Имя элемента',
    example: "string"
  })
  public trunkDamageAddNameTwo: string;

  @ApiProperty({
    description: 'Инфо элемента',
    example: ["string"]
  })
  public trunkDamageAddInfTwo: string[];

  @ApiProperty({
    description: 'Имя элемента',
    example: "string"
  })
  public trunkDamageAddNameThree: string;

  @ApiProperty({
    description: 'Инфо элемента',
    example: ["string"]
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
    example: ['string']
  })
  public rightSideDamageRightFrontFender: string[]; 

  @ApiProperty({
    description: 'Передняя стойка',
    example: ['string']
  })
  public rightSideDamageRightFrontPillar: string[]; 

  @ApiProperty({
    description: 'Передняя дверь',
    example: ['string']
  })
  public rightSideDamageRightFrontDoor: string[]; 

  @ApiProperty({
    description: 'Центральная стойка',
    example: ['string']
  })
  public rightSideDamageRightCenterPillar: string[];
  
  @ApiProperty({
    description: 'Задняя дверь',
    example: ['string']
  })
  public rightSideDamageRightRearDoor: string[]; 

  @ApiProperty({
    description: 'Задняя стойка',
    example: ['string']
  })
  public rightSideDamageRightRearPillar: string[]; 

  @ApiProperty({
    description: 'Заднее крыло',
    example: ['string']
  })
  public rightSideDamageRightRearFender: string[]; 

  @ApiProperty({
    description: 'Левое зеркало',
    example: ['string']
  })
  public rightSideDamageRightMirror: string[]; 

  @ApiProperty({
    description: 'Порог',
    example: ['string']
  })
  public rightSideDamageRightThreshold: string[]; 

  @ApiProperty({
    description: 'Имя элемента',
    example: "string"
  })
  public rightSideDamageAddNameOne: string;

  @ApiProperty({
    description: 'Инфо элемента',
    example: ["string"]
  })
  public rightSideDamageAddInfoOne: string[];

  @ApiProperty({
    description: 'Имя элемента',
    example: "string"
  })
  public rightSideDamageAddNameTwo: string;

  @ApiProperty({
    description: 'Инфо элемента',
    example: ["string"]
  })
  public rightSideDamageAddInfTwo: string[];

  @ApiProperty({
    description: 'Имя элемента',
    example: "string"
  })
  public rightSideDamageAddNameThree: string;

  @ApiProperty({
    description: 'Инфо элемента',
    example: ["string"]
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
    example: ['string']
  })
  public roofDamageRoofRails: string[];

  @ApiProperty({
    description: 'Крыша',
    example: ['string']
  })
  public roofDamageRoof: string[];

  @ApiProperty({
    description: 'Люк',
    example: ['string']
  })
  public roofDamageLuke: string[];

  @ApiProperty({
    description: 'Панорама',
    example: ['string']
  })
  public roofDamagePanorama: string[];

  @ApiProperty({
    description: 'Имя элемента',
    example: "string"
  })
  public roofDamageAddNameOne: string;

  @ApiProperty({
    description: 'Инфо элемента',
    example: ["string"]
  })
  public roofDamageAddInfoOne: string[];

  @ApiProperty({
    description: 'Имя элемента',
    example: "string"
  })
  public roofDamageAddNameTwo: string;

  @ApiProperty({
    description: 'Инфо элемента',
    example: ["string"]
  })
  public roofDamageAddInfTwo: string[];

  @ApiProperty({
    description: 'Имя элемента',
    example: "string"
  })
  public roofDamageAddNameThree: string;

  @ApiProperty({
    description: 'Инфо элемента',
    example: ["string"]
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
    example: ['string']
  })
  public glassDamageWindshield: string[];

  @ApiProperty({
    description: 'Левое переднее',
    example: ['string']
  })
  public glassDamageLeftFrontGlass: string[];

  @ApiProperty({
    description: 'Левое заднее',
    example: ['string']
  })
  public glassDamageLeftRearGlass: string[];

  @ApiProperty({
    description: 'Заднее стекло',
    example: ['string']
  })
  public glassDamageRearGlass: string[];

  @ApiProperty({
    description: 'Правое переднее',
    example: ['string']
  })
  public glassDamageRightFrontGlass: string[];

  @ApiProperty({
    description: 'Правое заднее',
    example: ['string']
  })
  public glassDamageRightRearGlass: string[];
  
  @ApiProperty({
    description: 'Все стекла заводские',
    example: false
  })
  public glassDamageAllGlassIsFactory: boolean;

  @ApiProperty({
    description: 'Имя элемента',
    example: "string"
  })
  public glassDamageAddNameOne: string;

  @ApiProperty({
    description: 'Инфо элемента',
    example: ["string"]
  })
  public glassDamageAddInfoOne: string[];

  @ApiProperty({
    description: 'Имя элемента',
    example: "string"
  })
  public glassDamageAddNameTwo: string;

  @ApiProperty({
    description: 'Инфо элемента',
    example: ["string"]
  })
  public glassDamageAddInfTwo: string[];

  @ApiProperty({
    description: 'Имя элемента',
    example: "string"
  })
  public glassDamageAddNameThree: string;

  @ApiProperty({
    description: 'Инфо элемента',
    example: ["string"]
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
    example: ['string']
  })
  public discDamageLeftFrontDisc: string[];

  @ApiProperty({
    description: 'Левое заднее',
    example: ['string']
  })
  public discDamageLeftRearDisc: string[];

  @ApiProperty({
    description: 'Правое переднее',
    example: ['string']
  })
  public discDamageRightFrontDisc: string[];

  @ApiProperty({
    description: 'Правое заднее',
    example: ['string']
  })
  public discDamageRightRearDisc: string[];

  @ApiProperty({
    description: 'Имя элемента',
    example: "string"
  })
  public discDamageAddNameOne: string;

  @ApiProperty({
    description: 'Инфо элемента',
    example: ["string"]
  })
  public discDamageAddInfoOne: string[];

  @ApiProperty({
    description: 'Имя элемента',
    example: "string"
  })
  public discDamageAddNameTwo: string;

  @ApiProperty({
    description: 'Инфо элемента',
    example: ["string"]
  })
  public discDamageAddInfTwo: string[];

  @ApiProperty({
    description: 'Имя элемента',
    example: "string"
  })
  public discDamageAddNameThree: string;

  @ApiProperty({
    description: 'Инфо элемента',
    example: ["string"]
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
    example: ['string']
  })
  public interiorDamageFrontLeftDoorCard: string[];

  @ApiProperty({
    description: 'Водительское сиденье',
    example: ['string']
  })
  public interiorDamageDriversSeat: string[];

  @ApiProperty({
    description: 'Ковер салона',
    example: ['string']
  })
  public interiorDamageSalonCarpet: string[];

  @ApiProperty({
    description: 'Торпеда',
    example: ['string']
  })
  public interiorDamageTorpedo: string[];

  @ApiProperty({
    description: 'Потолок',
    example: ['string']
  })
  public interiorDamageCeiling: string[];

  @ApiProperty({
    description: 'Задняя левая карта двери',
    example: ['string']
  })
  public interiorDamageBackLeftDoorCard: string[];

  @ApiProperty({
    description: 'Заднее сиденье',
    example: ['string']
  })
  public interiorDamageBackSeat: string[];

  @ApiProperty({
    description: 'Задняя правая карта двери',
    example: ['string']
  })
  public interiorDamageBackRightDoorCard: string[];

  @ApiProperty({
    description: 'Передняя правая карта двери',
    example: ['string']
  })
  public interiorDamageFrontRightDoorCard: string[];

  @ApiProperty({
    description: 'Пассажирское сиденье',
    example: ['string']
  })
  public interiorDamagePassengerSeat: string[];

  @ApiProperty({
    description: 'Спальное отделение',
    example: ['string']
  })
  public interiorDamageSleepingCompartment: string[];

  @ApiProperty({
    description: 'Имя элемента',
    example: "string"
  })
  public interiorDamageAddNameOne: string;

  @ApiProperty({
    description: 'Инфо элемента',
    example: ["string"]
  })
  public interiorDamageAddInfoOne: string[];

  @ApiProperty({
    description: 'Имя элемента',
    example: "string"
  })
  public interiorDamageAddNameTwo: string;

  @ApiProperty({
    description: 'Инфо элемента',
    example: ["string"]
  })
  public interiorDamageAddInfTwo: string[];

  @ApiProperty({
    description: 'Имя элемента',
    example: "string"
  })
  public interiorDamageAddNameThree: string;

  @ApiProperty({
    description: 'Инфо элемента',
    example: ["string"]
  })
  public interiorDamageAddInfoThree: string[];
  ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  @ApiProperty({
    description: 'Перед справа',
    example: 'string'
  })
  public exteriorPhotoRightFrontPhoto: string;

  @ApiProperty({
    description: 'Перед',
    example: 'string'
  })
  public exteriorPhotoFrontPhoto: string;

  @ApiProperty({
    description: 'Перед слева',
    example: 'string'
  })
  public exteriorPhotoLeftFrontPhoto: string;

  @ApiProperty({
    description: 'Справа сзади',
    example: 'string'
  })
  public exteriorPhotoRightBackPhoto: string;

  @ApiProperty({
    description: 'Сзади',
    example: 'string'
  })
  public exteriorPhotoBackPhoto: string;

  @ApiProperty({
    description: 'Слева сзади',
    example: 'string'
  })
  public exteriorPhotoLeftBackPhoto: string;

  @ApiProperty({
    description: 'Слева',
    example: 'string'
  })
  public exteriorPhotoLeftPhoto: string;

  @ApiProperty({
    description: 'Справа',
    example: 'string'
  })
  public exteriorPhotoRightPhoto: string;

  @ApiProperty({
    description: 'Открытй капот',
    example: 'string'
  })
  public exteriorPhotoHoodOpen: string;

  @ApiProperty({
    description: 'Открытый багажник',
    example: 'string'
  })
  public exteriorPhotoTrunkOpen: string;

  @ApiProperty({
    description: 'Дополнительное фото',
    example: ['string']
  })
  public exteriorPhotoAddPhoto: string[];
  //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  @ApiProperty({
    description: 'Левая передняя дверь',
    example: 'string'
  })
  public interiorPhotoLeftFrontDoor: string;

  @ApiProperty({
    description: 'Сиденье водителя',
    example: 'string'
  })
  public interiorPhotoDriverSeatPhoto: string;

  @ApiProperty({
    description: 'Фото руля',
    example: 'string'
  })
  public interiorPhotoSteeringWheelPhoto: string;

  @ApiProperty({
    description: 'Приборная панель',
    example: 'string'
  })
  public interiorPhotoDashboardPhoto: string;

  @ApiProperty({
    description: 'Левая задняя дверь',
    example: 'string'
  })
  public interiorPhotoLeftBackDoor: string;

  @ApiProperty({
    description: 'Заднее сидень слева',
    example: 'string'
  })
  public interiorPhotoBackLeftSeatsPhoto: string;

  @ApiProperty({
    description: 'Передние сиденья',
    example: 'string'
  })
  public interiorPhotoFrontSeatsPhoto: string;

  @ApiProperty({
    description: 'Правая задняя дверь',
    example: 'string'
  })
  public interiorPhotoRightBackDoor: string;

  @ApiProperty({
    description: 'Заднее сидень справа',
    example: 'string'
  })
  public interiorPhotoBackRightSeatsPhoto: string;

  @ApiProperty({
    description: 'Правая передняя дверь',
    example: 'string'
  })
  public interiorPhotoRightFrontDoor: string;

  @ApiProperty({
    description: 'Пассажирское сиденье',
    example: 'string'
  })
  public interiorPhotoPassengerSeatPhoto: string;

  @ApiProperty({
    description: 'Дополнительное фото',
    example: ['string']
  })
  public interiorPhotoAddPhoto: string[];
  //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

  @ApiProperty({
    description: 'Круговое видео',
    example: 'string'
  })
  public roundViewVideoVideo: string;

  @ApiProperty({
    description: 'Комментарий',
    example: 'string'
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
    example: 'string'
  })
  public stoppedEngineComment: string;

  @ApiProperty({
    description: 'Уровень масла ДВС',
    example: 'string'
  })
  public stoppedEngineEngineOilLevel: string;

  @ApiProperty({
    description: 'Уровень масла КПП',
    example: 'string'
  })
  public stoppedEngineGearboxOilLevel: string;

  @ApiProperty({
    description: 'Уровень жидкости ГУР',
    example: 'string'
  })
  public stoppedEngineGurLiquidLevel: string;

  @ApiProperty({
    description: 'Уровень тормозной жидкости',
    example: 'string'
  })
  public stoppedEngineBrakeFluidLevel: string;

  @ApiProperty({
    description: 'Уровень охлаждающей жидкости',
    example: 'string'
  })
  public stoppedEngineCoolantLevel: string;

  @ApiProperty({
    description: 'Комментарий тех жидкости',
    example: 'string'
  })
  public stoppedEngineTechnicalFluidsComment: string;

  @ApiProperty({
    description: 'Приводные ремни',
    example: 'string'
  })
  public stoppedEngineDriveBelts: string;

  @ApiProperty({
    description: 'Тормозные диски',
    example: 'string'
  })
  public stoppedEngineBrakeDiscs: string;

  @ApiProperty({
    description: 'Тормозные колодки',
    example: 'string'
  })
  public stoppedEngineBrakePads: string;

  @ApiProperty({
    description: 'Комментарий износа',
    example: 'string'
  })
  public stoppedEngineWearComment: string;
  
  @ApiProperty({
    description: 'Запотевание есть или нет',
    example: false
  })
  public stoppedEngineIsFogging: boolean;
  
  @ApiProperty({
    description: 'Имя',
    example: 'string'
  })
  public stoppedEngineNameOne: string;

  @ApiProperty({
    description: 'Запотевание',
    example: ['string']
  })
  public stoppedEngineFoggingOne: string[];

  @ApiProperty({
    description: 'Фото',
    example: ['string']
  })
  public stoppedEnginePhotoOne: string[];

  @ApiProperty({
    description: 'Комментарий',
    example: 'string'
  })
  public stoppedEngineCommentOne: string;

  @ApiProperty({
    description: 'Имя',
    example: 'string'
  })
  public stoppedEngineNameTwo: string;

  @ApiProperty({
    description: 'Запотевание',
    example: ['string']
  })
  public stoppedEngineFoggingTwo: string[];

  @ApiProperty({
    description: 'Фото',
    example: ['string']
  })
  public stoppedEnginePhotoTwo: string[];

  @ApiProperty({
    description: 'Комментарий',
    example: 'string'
  })
  public stoppedEngineCommenTwo: string;

  @ApiProperty({
    description: 'Имя',
    example: 'string'
  })
  public stoppedEngineNameThree: string;

  @ApiProperty({
    description: 'Запотевание',
    example: ['string']
  })
  public stoppedEngineFoggingThree: string[];

  @ApiProperty({
    description: 'Фото',
    example: ['string']
  })
  public stoppedEnginePhotoThree: string[];

  @ApiProperty({
    description: 'Комментарий',
    example: 'string'
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
    example: 'string'
  })
  public runningEngineComment: string;

  @ApiProperty({
    description: 'Видео запуска двигателя',
    example: 'string'
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
    example: 'string'
  })
  public runningEngineElectricalNameOne: string;

  @ApiProperty({
    description: 'Выбрано',
    example: false
  })
  public runningEngineElectricalIsCheckOne: boolean;

  @ApiProperty({
    description: 'Комментарий',
    example: 'string'
  })
  public runningEngineElectricalCommentOne: string;

  @ApiProperty({
    description: 'Имя',
    example: 'string'
  })
  public runningEngineElectricalNameTwo: string;

  @ApiProperty({
    description: 'Выбрано',
    example: false
  })
  public runningEngineElectricalIsCheckTwo: boolean;

  @ApiProperty({
    description: 'Комментарий',
    example: 'string'
  })
  public runningEngineElectricalCommentTwo: string;

  @ApiProperty({
    description: 'Имя',
    example: 'string'
  })
  public runningEngineElectricalNameThree: string;

  @ApiProperty({
    description: 'Выбрано',
    example: false
  })
  public runningEngineElectricalIsCheckThree: boolean;

  @ApiProperty({
    description: 'Комментарий',
    example: 'string'
  })
  public runningEngineElectricalCommentThree: string;
  
  @ApiProperty({
    description: 'Имя',
    example: 'string'
  })
  public runningEngineMechanicalNameOne: string;

  @ApiProperty({
    description: 'Выбрано',
    example: false
  })
  public runningEngineMechanicalIsCheckOne: boolean;

  @ApiProperty({
    description: 'Комментарий',
    example: 'string'
  })
  public runningEngineMechanicalCommentOne: string;

  @ApiProperty({
    description: 'Имя',
    example: 'string'
  })
  public runningEngineMechanicalNameTwo: string;

  @ApiProperty({
    description: 'Выбрано',
    example: false
  })
  public runningEngineMechanicalIsCheckTwo: boolean;

  @ApiProperty({
    description: 'Комментарий',
    example: 'string'
  })
  public runningEngineMechanicalCommentTwo: string;

  @ApiProperty({
    description: 'Имя',
    example: 'string'
  })
  public runningEngineMechanicalNameThree: string;

  @ApiProperty({
    description: 'Выбрано',
    example: false
  })
  public runningEngineMechanicalIsCheckThree: boolean;

  @ApiProperty({
    description: 'Комментарий',
    example: 'string'
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
    example: ["string"]
  })
  public dashboardDiagnosticsFile?: string[];

  @ApiProperty({
    description: 'Комментарий эксперта',
    example: "string"
  })
  public dashboardDiagnosticsComment: string;

  @ApiProperty({
    description: 'Пробег на приборной панели',
    example: "string"
  })
  public dashboardMileageOnDashboard?: string;

  @ApiProperty({
    description: 'Пробег в блоках ДВС',
    example: "string"
  })
  public dashboardMileageInTheEngineBlock?: string;

  @ApiProperty({
    description: 'Пробег в блоке КПП',
    example: "string"
  })
  public dashboardMileageInTheGearbox?: string;

  @ApiProperty({
    description: 'Пробег в доп блоке',
    example: "string"
  })
  public dashboardMileageInAdditionalBlocks?: string;

  @ApiProperty({
    description: 'Без пробега',
    example: false
  })
  public dashboardIsNoMileage?: boolean;

  @ApiProperty({
    description: 'Комментарий',
    example: "string"
  })
  public dashboardTotalComment: string;

  @ApiProperty({
    description: 'Имя',
    example: 'string'
  })
  public dashboardNameOne: string;

  @ApiProperty({
    description: 'Выбрано',
    example: false
  })
  public dashboardIsCheckOne: boolean;

  @ApiProperty({
    description: 'Комментарий',
    example: 'string'
  })
  public dashboardCommentOne: string;

  @ApiProperty({
    description: 'Имя',
    example: 'string'
  })
  public dashboardNameTwo: string;

  @ApiProperty({
    description: 'Выбрано',
    example: false
  })
  public dashboardIsCheckTwo: boolean;

  @ApiProperty({
    description: 'Комментарий',
    example: 'string'
  })
  public dashboardCommentTwo: string;

  @ApiProperty({
    description: 'Имя',
    example: 'string'
  })
  public dashboardNameThree: string;

  @ApiProperty({
    description: 'Выбрано',
    example: false
  })
  public dashboardIsCheckThree: boolean;

  @ApiProperty({
    description: 'Комментарий',
    example: 'string'
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
    example: 'string'
  })
  public dashboardABSComment: string;
  
  @ApiProperty({
    description: 'Выбрано',
    example: false
  })
  public dashboardESP: boolean;

  @ApiProperty({
    description: 'Комментарий',
    example: 'string'
  })
  public dashboardESPComment: string;
  
  @ApiProperty({
    description: 'Выбрано',
    example: false
  })
  public dashboardAirbag: boolean;

  @ApiProperty({
    description: 'Комментарий',
    example: 'string'
  })
  public dashboardAirbagComment: string;
  
  @ApiProperty({
    description: 'Выбрано',
    example: false
  })
  public dashboardCheckEngine: boolean;

  @ApiProperty({
    description: 'Комментарий',
    example: 'string'
  })
  public dashboardCheckEngineComment: string;
  
  @ApiProperty({
    description: 'Выбрано',
    example: false
  })
  public dashboardBattery: boolean;

  @ApiProperty({
    description: 'Комментарий',
    example: 'string'
  })
  public dashboardBatteryComment: string;
  
  @ApiProperty({
    description: 'Выбрано',
    example: false
  })
  public dashboardTirePressure: boolean;

  @ApiProperty({
    description: 'Комментарий',
    example: 'string'
  })
  public dashboardTirePressureComment: string;
  
  @ApiProperty({
    description: 'Выбрано',
    example: false
  })
  public dashboardOilPressure: boolean;

  @ApiProperty({
    description: 'Комментарий',
    example: 'string'
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
    example: 'string'
  })
  public testDriveNameOne: string;

  @ApiProperty({
    description: 'Выбрано',
    example: false
  })
  public testDriveIsCheckOne: boolean;

  @ApiProperty({
    description: 'Комментарий',
    example: 'string'
  })
  public testDriveCommentOne: string;

  @ApiProperty({
    description: 'Имя',
    example: 'string'
  })
  public testDriveNameTwo: string;

  @ApiProperty({
    description: 'Выбрано',
    example: false
  })
  public testDriveIsCheckTwo: boolean;

  @ApiProperty({
    description: 'Комментарий',
    example: 'string'
  })
  public testDriveCommentTwo: string;

  @ApiProperty({
    description: 'Имя',
    example: 'string'
  })
  public testDriveNameThree: string;

  @ApiProperty({
    description: 'Выбрано',
    example: false
  })
  public testDriveIsCheckThree: boolean;

  @ApiProperty({
    description: 'Комментарий',
    example: 'string'
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
    example: 'string'
  })
  public testDriveSuspensionComment: string;
  
  @ApiProperty({
    description: 'Выбрано',
    example: false
  })
  public testDriveEngine: boolean;

  @ApiProperty({
    description: 'Комментарий',
    example: 'string'
  })
  public testDriveEngineComment: string;
  
  @ApiProperty({
    description: 'Выбрано',
    example: false
  })
  public testDriveTransmission: boolean;

  @ApiProperty({
    description: 'Комментарий',
    example: 'string'
  })
  public testDriveTransmissionComment: string;
  
  @ApiProperty({
    description: 'Выбрано',
    example: false
  })
  public testDriveSteering: boolean;

  @ApiProperty({
    description: 'Комментарий',
    example: 'string'
  })
  public testDriveSteeringComment: string;
  
  @ApiProperty({
    description: 'Выбрано',
    example: false
  })
  public testDriveBrakeSystem: boolean;

  @ApiProperty({
    description: 'Комментарий',
    example: 'string'
  })
  public testDriveBrakeSystemComment: string;
  
  @ApiProperty({
    description: 'Выбрано',
    example: false
  })
  public testDriveParkingBrake: boolean;

  @ApiProperty({
    description: 'Комментарий',
    example: 'string'
  })
  public testDriveParkingBrakeComment: string;
  
  @ApiProperty({
    description: 'Выбрано',
    example: false
  })
  public testDriveExhaustSystem: boolean;

  @ApiProperty({
    description: 'Комментарий',
    example: 'string'
  })
  public testDriveExhaustSystemComment: string;
  ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

  @ApiProperty({
    description: 'Комментарий плюсов',
    example: 'string'
  })
  public expertOpinionPlusComment: string;

  @ApiProperty({
    description: 'Комментарий минусов',
    example: 'string'
  })
  public expertOpinionMinusComment: string;

  @ApiProperty({
    description: 'Комментарий общий',
    example: 'string'
  })
  public expertOpinionTotalComment: string;
  
  @ApiProperty({
    description: 'Файл истории',
    example: ['string']
  })
  public expertOpinionHistoryFile: string[];

  @ApiProperty({
    description: 'Комментарий истории автомобиля',
    example: 'string'
  })
  public expertOpinionHistoryComment: string;
  /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  @ApiProperty({
    description: 'Проверка компрессии',
    example: ["string"]
  })
  public serviceInspectionCompressionCheck: string[];

  @ApiProperty({
    description: 'Проверка эндоскопом',
    example: ["string"]
  })
  public serviceInspectionEndoscopeCheck: string[];

  @ApiProperty({
    description: 'Осмотр ДВС',
    example: ["string"]
  })
  public serviceInspectionEngineInspection: string[];

  @ApiProperty({
    description: 'Осмотр КПП',
    example: ["string"]
  })
  public serviceInspectionCheckpointInspection: string[];

  @ApiProperty({
    description: 'Осмотр ГУР',
    example: ["string"]
  })
  public serviceInspectionPowerSteeringInspection: string[];

  @ApiProperty({
    description: 'Осмотр раздатки',
    example: ["string"]
  })
  public serviceInspectionTransferCaseInspection: string[];

  @ApiProperty({
    description: 'Осмотр задний мост',
    example: ["string"]
  })
  public serviceInspectionRearAxleInspection: string[];

  @ApiProperty({
    description: 'Передний мост',
    example: ["string"]
  })
  public serviceInspectionFrontAxleInspection: string[];

  @ApiProperty({
    description: 'Осмотр рулевой рейки',
    example: ["string"]
  })
  public serviceInspectionSteeringRackInspection: string[];

  @ApiProperty({
    description: 'Осмотр ходовой части',
    example: ["string"]
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