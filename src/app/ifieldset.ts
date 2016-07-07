import { Ivalues } from './ivalues'
import { Iset } from './iset';

export interface Ifieldset {
    title?:string;
    values: Ivalues[];
    sets?: Iset[];
    multi:boolean;
}