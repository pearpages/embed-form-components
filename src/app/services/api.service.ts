import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

import { Fieldset } from '../models/fieldset';
import { Fieldsetmapper } from '../models/fieldsetmapper';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class ApiService {

  constructor(private http: Http) { }

  getLobs(cache: boolean): Observable<Fieldset> {
    const id = 'form-lobs';
    const url = '/api/lobs.json';
    return this.getFieldset(id, url, cache);
  }

  getCompanyTypes(cache: boolean): Observable<Fieldset> {
    const id = 'form-company-types';
    const url = '/api/company-types.json';
    return this.getFieldset(id, url, cache);
  }

  getUSexposed(cache: boolean): Observable<Fieldset> {
    const id = 'form-us-exposed';
    const url = '/api/us-exposed.json';
    return this.getFieldset(id, url, cache);
  }

  getOffices(cache: boolean): Observable<Fieldset> {
    const id = 'form-offices';
    const url = '/api/offices.json';
    return this.getFieldset(id, url, cache);
  }
  
  getTypesOfView(cache:boolean): Observable<Fieldset> {
    const id = 'form-types-of-view';
    const url = '/api/types-of-view.json';
    return this.getFieldset(id,url,cache);
  }

  getPrimaryExcess(cache: boolean): Observable<Fieldset> {
    const id = 'form-primary-excess';
    const url = '/api/primary-excess.json';
    return this.getFieldset(id, url, cache);
  }

  getMarketCo(cache:boolean): Observable<Fieldset> {
    const id = 'form-market-co';
    const url = '/api/market-co.json';
    return this.getFieldset(id,url,cache);
  }

  getReportingFigures(cache: boolean): Observable<Fieldset> {
    const id = 'form-reporting-figures';
    const url = '/api/reporting-figures.json';
    return this.getFieldset(id, url, cache);
  }

  getUws(cache: boolean): Observable<Fieldset> {
    const id = 'form-uws';
    const url = '/api/uws.json';
    return this.getFieldset(id, url, cache);
  }

  getLocalPolicies(cache: boolean): Observable<Fieldset> {
    const id = 'form-local-policies';
    const url = '/api/local-policies.json';
    return this.getFieldset(id, url, cache);
  }

  getRegionsSets(cache: boolean): Observable<Fieldset> {
    const id = 'form-regions-sets';
    const url = '/api/regions-sets.json';
    return this.getFieldset(id, url, cache);
  }

  getRegions(cache: boolean): Observable<Fieldset> {
    const id = 'form-regions';
    const url = '/api/regions.json';
    return this.getFieldset(id, url, cache);
  }

  getCountries(cache: boolean): Observable<Fieldset> {
    const id = 'form-countries';
    const url = '/api/countries.json';
    return this.getFieldset(id, url, cache);
  }

  private hasValue(id: string): boolean {
    return (localStorage.getItem(id) !== null);
  }

  private getValue(id: string): string {
    return localStorage.getItem(id);
  }

  private setLocalCache(id: string, data: string) {
    localStorage.setItem(id, data);
  }

  private getFieldset(id: string, url: string, cache): Observable<Fieldset> {
    if (cache) {
      if (this.hasValue(id)) {
        return Observable.create(observer => {
          observer.next(Fieldsetmapper.mapToFieldset(JSON.parse(this.getValue(id))));
          observer.complete();
        });
      }
    }

    return this.http.get(url + '?' + new Date().getMilliseconds()).map(response => {
      this.setLocalCache(id, JSON.stringify(response.json()));
      return Fieldsetmapper.mapToFieldset(response.json());
    });

  }

  private handleError(error: any) {
    // In a real world app, we might use a remote logging infrastructure
    // We'd also dig deeper into the error to get a better message
    let errMsg = (error.message) ? error.message :
      error.status ? `${error.status} - ${error.statusText}` : 'Server error';
    console.error(errMsg); // log to console instead
    return Observable.throw(errMsg);
  }

}
