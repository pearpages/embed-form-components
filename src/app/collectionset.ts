import { FormValue } from './form-value'

export class CollectionSet {

    private set: any = {};

    defineSet(id: string, values: any[], inputValues: FormValue[]): CollectionSet {
        let set = this.set[id] = [];
        let filtered = inputValues
            .filter((e) => { return (values.indexOf(e.getValue()) !== -1) })
            .forEach((e) => { set.push(e) });
        return this;
    }

    getSet(id: string): FormValue[] {
        return this.set[id];
    }

    toggleVisibilitySet(id: string) {
        this.set[id].forEach((e) => { e.visible = !e.visible });
    }

    hideAllSets() {
        for (let set in this.set) {
            this.set[set].forEach((e) => e.visible = false);
        }
    }

    showSet(id: string) {
        if (this.set[id]) {
            this.set[id].forEach((e) => e.visible = true);
        }
    }

    showOnlyThisSet(id: string) {
        for (let set in this.set) {
            if (set !== id) {
                this.set[set].forEach((e) => {
                    e.visible = false;
                });
            }
        }
        this.set[id].forEach((e) => e.visible = true);
    }
}
