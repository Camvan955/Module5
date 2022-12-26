import {RenType} from './ren-type';

export interface Facitily {
  id: number;
  name: string;
  area: number;
  numberOfFloor: number;
  maxPeople: number;
  cost: number;
  poolArea: number;
  renType: RenType;
  standardRoom: string;
}
