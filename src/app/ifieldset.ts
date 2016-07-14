interface Iset {
    id:string;
    values: string[];
}

interface Ivalues {
  value:string;
  label:string;
  visible:boolean;
  default:any;
  initial:any;  
}

export interface Ifieldset {
    title?:string;
    values: Ivalues[];
    sets?: Iset[];
    multi:boolean;
}