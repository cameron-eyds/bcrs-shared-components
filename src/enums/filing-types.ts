export enum FilingTypes {
  ADMIN_FREEZE = 'adminFreeze',
  ALTERATION = 'alteration',
  ANNUAL_REPORT = 'annualReport',
  CHANGE_OF_ADDRESS = 'changeOfAddress',
  CHANGE_OF_COMPANY_INFO = 'changeOfCompanyInfo', // a type of alteration
  CHANGE_OF_DIRECTORS = 'changeOfDirectors',
  CHANGE_OF_NAME = 'changeOfName',
  CHANGE_OF_REGISTRATION = 'changeOfRegistration',
  CONSENT_CONTINUATION_OUT = 'consentContinuationOut',
  CONVERSION = 'conversion',
  CORRECTION = 'correction',
  COURT_ORDER = 'courtOrder',
  DISSOLUTION = 'dissolution',
  DISSOLVED = 'dissolved',
  INCORPORATION_APPLICATION = 'incorporationApplication',
  PUT_BACK_ON = 'putBackOn',
  REGISTRATION = 'registration',
  REGISTRARS_NOTATION = 'registrarsNotation',
  REGISTRARS_ORDER = 'registrarsOrder',
  RESTORATION = 'restoration',
  SPECIAL_RESOLUTION = 'specialResolution',
  TRANSITION = 'transition',

  UNKNOWN = 'unknown' // for fallback
}