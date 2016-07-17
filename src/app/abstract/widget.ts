import { OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';
import { FormService } from '../services/form.service';
import { Fieldset } from '../models/fieldset';
import { Ivalidate, valid } from '../interfaces/ivalidate';

export abstract class Widget implements OnInit {
    protected data: Fieldset;

    constructor(protected apiService: ApiService, 
    protected form: FormService,protected name:string,protected title:string,protected method: string) { }

    ngOnInit() {
        this.forceRefresh(true);
        this.form.setValue(this.name, this.data);
        this.form.setWidget(this.name,this);
    }

    forceRefresh(useCache: boolean = false): void {
        this.apiService[this.method](useCache)
            .subscribe(
            (data) => {
                data.validate = this.validate; 
                this.data = data; },
            (error) => console.error(error),
            () => 'put any debug comments here'
            );
    }

    abstract validate(f: Fieldset): valid;

    highlight(status:boolean) {}

}