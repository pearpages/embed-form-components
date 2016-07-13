import { FormValue } from './form-value';
import { CollectionSet } from './collectionset';

export class Fieldset {

    set: CollectionSet = new CollectionSet();

    constructor(private inputValues: FormValue[], private multi: boolean) { }

    isMulti(): boolean {
        return this.multi;
    }

    defineSet(id: string, values: any[]): CollectionSet {
        return this.set.defineSet(id,values,this.inputValues);
    }

    getinputValues(): FormValue[] {
        return this.inputValues;
    }

    reset(): Fieldset {
        this.inputValues = this.inputValues.map((e) => {
            e.reset();
            return e;
        });
        return this;
    }

    setToTrueTheCurrentValuesHavingThisValues(selected:string[]) {
        let values = this.getinputValues();
        values.forEach((val) => {
            val.current = (selected.indexOf(val.getValue()) !== -1) ? val.getValue() : false;
        });
    }

    putAllCurrentValuesToFalseButThisToTrue(value: FormValue) {
        this.getinputValues().forEach((e) => {
            e.current = false;
        });
        value.current = true;
    }

    toggleCurrentBooleanValues(): void {
        var status = true;
        if (this.haveAllCurrentValuesToTrue()) {
            status = false;
        }
        this.getinputValues().filter((e) => { return e.visible === true }).forEach((e) => { e.current = status });
    }

    isCurrentValueTrue(value: FormValue) {
        if (this.getinputValues().length === 0) {
            return false;
        }
        return value.getValue() === this.getOutputValues()[0]
    }

    getOutputValues(): any[] {
        if (this.isMulti()) {
            let res = this.getMultiValues();
            return (res.length === 0) ? [false] : res;
        } else {
            let val = this.inputValues.find((e) => {
                return e.current === true;
            });
            return (val) ? [val.getValue()] : [false];
        }
    }

    haveAllCurrentValuesToTrue(): boolean {
        let values = this.getinputValues().filter((e) => { return e.visible === true });
        if (values.length === 0) {
            return true;
        }
        return values.reduce((previous, current) => {
            return current.current && previous;
        }, true);
    }

   private getMultiValues(): any[] {
        return this.getinputValues().filter((i) => {
            return i.current !== false;
        }).map((i) => {
            return i.getValue();
        });
    }

}
