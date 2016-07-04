export class FormValue {

    current: any;

    constructor(
        private value:string, 
        private label:string,
        public visible: boolean, 
        private resetValue:any, 
        private initialValue?: any ) {

        this.current = (initialValue) ? initialValue : resetValue;
    }

    reset() {
        this.current = this.resetValue;
    }

    getValue():string {
        return this.value;
    }

    getLabel():string {
        return this.label;
    }

    isVisible(): boolean {
        return this.visible;
    }

}
