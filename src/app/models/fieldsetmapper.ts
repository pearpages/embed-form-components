import { Ifieldset } from '../interfaces/ifieldset';
import { Fieldset } from './fieldset';
import { FormValue } from './form-value';

export class Fieldsetmapper {
    static mapToFieldset(obj: Ifieldset): Fieldset {
        let values = Fieldsetmapper.mapToFormValues(obj.values);
        let fieldset = new Fieldset(values, obj.multi);
        if (obj.sets) {
            Fieldsetmapper.mapSets(fieldset, obj.sets);
        }
        return fieldset;
    }

    private static mapSets(fieldset: Fieldset, sets: any[]) {
        sets.forEach((set) => {
            fieldset.defineSet(set.id, set.values);
        });
    }

    private static mapToFormValues(values) {
        let res = [];
        values.forEach((o) => {
            res.push(new FormValue(o.value, o.label, o.visible, o.default, o.initial));
        });
        return res;
    }

}
