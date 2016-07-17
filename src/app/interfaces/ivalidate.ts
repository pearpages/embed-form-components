import { Fieldset } from '../models/fieldset';

export interface valid {
    valid: boolean;
    error: string;
}

export interface Ivalidate {
    (f: Fieldset): valid
}
