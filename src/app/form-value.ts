export class FormValue {

    current: any;

    constructor(public value:string, public name:string, public resetValue:any, public initialValue: any ) {
        this.current = (initialValue) ? initialValue : resetValue;
    }

    reset() {
        this.current = this.resetValue;
    }

}
