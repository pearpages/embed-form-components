import { FormValue } from './form-value';
import { Set } from './set';

interface SetHash {
    [key: string] : Set;
}

export class CollectionSet {

    private set: SetHash = {};

    defineSet(id: string, values: any[], inputValues: FormValue[]): CollectionSet {
        let set = this.set[id] = new Set();
        let filtered = inputValues
            .filter((e) => { return (values.indexOf(e.getValue()) !== -1) })
            .forEach((e) => { set.addValue(e) });
        return this;
    }

    getSet(id: string): Set {
        return this.set[id];
    }

    getAll(): Set[] {
        let res = [];
        for(let set in this.set){
            res.push(this.set[set]);
        }
        return res;
    }

    getLabels(): String[] {
        let res = [];
        for(let set in this.set){
            res.push(set);
        }
        return res;
    }

    hideAll() {
        for (let set in this.set) {
            this.set[set].hide();
        }
    }

    getVisibleSets():Set[] {
        let res = [];
        for(let set in this.set) {
            if(this.set[set].isVisible()) {
                res.push(this.set[set]);
            }
        }
        return res;
    }

    getHiddenSets():Set[] {
        let res = [];
        for(let set in this.set) {
            if(!this.set[set].isVisible()) {
                res.push(this.set[set]);
            }
        }
        return res;
    }

    showOnlyThisSet(id: string) {
        for (let set in this.set) {
            if (set !== id) {
                this.set[set].hide();
            }
        }
        this.set[id].show();
    }
}
