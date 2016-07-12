import { FormValue } from './form-value';

export class Fieldset {

    private set: any = {};

    constructor(private inputValues: FormValue[], private multi: boolean) { }

    isMulti(): boolean {
        return this.multi;
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

    defineSet(id: string, values: any[]) {
        let set = this.set[id] = [];
        let filtered = this.inputValues
            .filter((e) => { return (values.indexOf(e.getValue()) !== -1) })
            .forEach((e) => { set.push(e) });
        return this;
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

    getSet(id: string): FormValue[] {
        return this.set[id];
    }

    toggleVisibilitySet(id: string) {
        this.set[id].forEach((e) => { e.visible = !e.visible });
    }

    showOnlyThisSet(id: string){
        for(let set in this.set){
            if(set !== id){
                this.set[set].forEach((e) => {
                    e.visible = false;
                });
            }
        }
        this.set[id].forEach((e) => e.visible = true);        
    }

    private getMultiValues(): any[] {
        return this.getinputValues().filter((i) => {
            return i.current !== false;
        }).map((i) => {
            return i.getValue();
        });
    }

}
