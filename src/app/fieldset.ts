import { FormValue } from './form-value';

export class Fieldset {

    private current: any;
    private set:any = {};

    constructor(private inputValues: FormValue[], private multi: boolean, private defaultSingle?: any, private initialSingle?: any) {
        (multi) ? false : this.initSingle();
    }

    private initSingle(): void {
        this.current = (this.initialSingle) ? this.initialSingle : this.defaultSingle;
    }

    private resetMulti(): void {
        this.inputValues = this.inputValues.map((e) => {
            e.reset();
            return e;
        });
    }

    defineSet(id:string,values: any[]){
        let set = this.set[id] = [];
        this.inputValues.filter((e) => {return (values.indexOf(e.value) !== -1)}).forEach((e) => { set.push(e)});
        return this;
    }

    toggleVisibilitySet(id:string) {
        this.set[id].forEach((e) => {e.visible = !e.visible});
    }

    isMulti(): boolean {
        return this.multi;
    }

    reset() {
        if (this.isMulti()) {
            this.resetMulti();
        } else {
            this.current = this.defaultSingle;
        }
    }

    getinputValues(): FormValue[] {
        return this.inputValues;
    }

    setSingleValue(value:any):void {
        this.current = value;
    }

    private getMultiValues(): any[] {
        return this.getinputValues().filter((i) => {
            return i.current !== false;
        }).map((i) => {
            return i.value;
        });
    }

    getOutputValues(): any[] {
        if(this.isMulti()){
            let res = this.getMultiValues();
            return (res.length === 0) ? [false] : res;
        } else {
            return [this.current];
        }
    }
}
