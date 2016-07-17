import { OnInit } from '@angular/core';
import { ApiService } from './api.service';
import { FormService } from './form.service';
import { Fieldset } from './fieldset';

export abstract class Widget implements OnInit {
    protected data: Fieldset;

    constructor(protected apiService: ApiService, 
    protected form: FormService,protected name:string,protected title:string,protected method: string) { }

    ngOnInit() {
        this.forceRefresh(true);
        this.form.setValue(this.name, this.data);
    }

    forceRefresh(useCache: boolean = false): void {
        this.apiService[this.method](useCache)
            .subscribe(
            (data) => { this.data = data },
            (error) => console.error(error),
            () => 'put any debug comments here'
            );
    }

    abstract validate(): boolean;
}