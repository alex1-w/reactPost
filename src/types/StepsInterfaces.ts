export interface IStepOne {
  firstNameSenders: string;
  lastNameSenders: string;
  phoneNumberSenders: string;
  phoneNumberReceiver: string;
  firstNameReceiver: string;
  lastNameReceiver: string;
}

export interface IStepTwo {
  sendersCountry: string;
  receiverCountry: string;
  insurance: boolean;
  insuranceType?: "simple" | "standart" | "pro" | "";
}

export interface IStepThree {
  weight: number;
  width: number;
  height: number;
  length: number;
  packageType: "paperboard" | "plastic";
}

export interface IStepFour {
  cardNumber: number;
  passport: IPassportType;
}
interface IPassportType {
  series: number;
  number: number;
}
