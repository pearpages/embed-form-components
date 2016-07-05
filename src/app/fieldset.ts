import { FormValue } from './form-value';

export class Fieldset {

    private set:any = {};

    constructor(private inputValues: FormValue[], private multi: boolean) {}

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

    getOutputValues(): any[] {
        if(this.isMulti()){
            let res = this.getMultiValues();
            return (res.length === 0) ? [false] : res;
        } else {
            let val = this.inputValues.find((e) => {
                return e.current === true;
            });
            return (val) ? [val.getValue()] : [false];
        }
    }

    defineSet(id:string,values: any[]){
        let set = this.set[id] = [];
        let filtered = this.inputValues
            .filter((e) => {return (values.indexOf(e.getValue()) !== -1)})
            .forEach((e) => { set.push(e)});
        return this;
    }

    getSet(id:string): FormValue[] {
        return this.set[id];
    }

    toggleVisibilitySet(id:string) {
        this.set[id].forEach((e) => {e.visible = !e.visible});
    }

    private getMultiValues(): any[] {
        return this.getinputValues().filter((i) => {
            return i.current !== false;
        }).map((i) => {
            return i.getValue();
        });
    }

}
