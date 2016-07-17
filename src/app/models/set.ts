import { FormValue } from './form-value';

export class Set {
    private values: FormValue[] = [];

    constructor() { }

    addValue(value: FormValue): Set {
        this.values.push(value);
        return this;
    }

    hasValue(value:string) {
        return (this.values.find(v => v.getValue() === value) !== undefined);
    }

    hide(): Set {
        this.values.forEach((e) => e.visible = false);
        return this;
    }

    show(): Set {
        this.values.forEach((e) => e.visible = true);
        return this;
    }

    toggle(): Set {
        if(this.isVisible()) {
            this.setFalse();
            this.hide();
        } else if (this.isHidden()) {
            this.setFalse();
            this.show();
        } else {
            console.log('neither hidden or visible');
        }
        return this;
    }

    isVisible():boolean {
        return this.values.reduce((previous,current) => { return (current.visible && previous); },true);
    }

    isHidden():boolean {
        return this.values.reduce((previous,current) => { return (!current.visible && previous); },true);
    }

    size():number {
        return this.values.length;
    }

    setTrue():Set {
        this.values.forEach((v) => v.current = true);
        return this;
    }

    setFalse():Set {
        this.values.forEach((v) => v.current = false);
        return this;
    }
}
