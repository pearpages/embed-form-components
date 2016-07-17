import { Component,OnInit, OnChanges } from '@angular/core';
import { ApiService } from '../services/api.service';
import { FormService } from '../services/form.service';
import { Fieldset } from '../models/fieldset';
import { Ivalidate, valid } from '../interfaces/ivalidate';

export abstract class Widget implements OnInit, OnChanges {
    protected data: Fieldset;
    protected highlighted: boolean = false;

    constructor(protected apiService: ApiService, 
    protected form: FormService,protected name:string,protected title:string,protected method: string) { }

    ngOnInit() {
        console.log('initializing '+this.name);
        this.forceRefresh(true);
        this.form.setValue(this.name, this.data);
        this.form.setWidget(this.name,this);
    }

    ngOnChanges() {
        console.log('change on '+this.name);
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

    highlight(status:boolean) {
        this.highlighted = status;
    }

}