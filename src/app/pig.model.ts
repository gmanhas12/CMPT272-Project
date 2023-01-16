
export interface Data {
  personInfo: PersonInfo;
  pigInfo: PigInfo;
  Location: Location;
  extraNotes: string;
  timeAndDate: string;
  status: string;
}
export interface PersonInfo {
  name: string;
  phone: string;
}

export interface PigInfo {
  pid: number;
  breed: string;
}

export interface Location {
  name: string;
}

export interface PigData {
  key: string;
  data: Data;
}