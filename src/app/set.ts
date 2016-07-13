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
        this.values.forEach((e) => { e.visible = !e.visible });
        return this;
    }

    isVisible():boolean {
        return this.values.reduce((previous,current) => { return (current.visible && previous); },true);
    }

    isHidden():boolean {
        return !this.isVisible();
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
