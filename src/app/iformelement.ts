import { Fieldset } from './fieldset';

export interface IFormelement {
    title:string;
    name:string;
    data: Fieldset;
    forceRefresh: forceRefresh;
    validate: validate;
}

interface forceRefresh {
    (cache:boolean): void
}

interface validate{
    (): boolean;
}