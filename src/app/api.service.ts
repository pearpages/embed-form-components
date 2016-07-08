import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

import { Ifieldset } from './ifieldset';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class ApiService {

  constructor(private http: Http) { }

  getLobs(cache: boolean = true): Observable<Ifieldset> {
    const id = 'form-lobs';
    const url = '/api/lobs.json';
    return this.getIfieldset(id, url, cache);
  }

  getCompanyTypes(cache: boolean = true): Observable<Ifieldset> {
    const id = 'form-company-types';
    const url = '/api/company-types.json';
    return this.getIfieldset(id, url, cache);
  }

  getOffices(cache: boolean = true): Observable<Ifieldset> {
    const id = 'form-offices';
    const url = '/api/offices.json';
    return this.getIfieldset(id, url, cache);
  }

  getPrimaryExcess(cache: boolean = true): Observable<Ifieldset> {
    const id = 'form-primary-excess';
    const url = '/api/primary-excess.json';
    return this.getIfieldset(id, url, cache);
  }

  getReportingFigures(cache: boolean = true): Observable<Ifieldset> {
    const id = 'form-reporting-figures';
    const url = '/api/reporting-figures.json';
    return this.getIfieldset(id, url, cache);
  }

  private hasValue(id: string): boolean {
    return (localStorage.getItem(id) !== null);
  }

  private getValue(id: string): string {
    return localStorage.getItem(id);
  }

  private setValue(id: string, data: string) {
    localStorage.setItem(id, data);
  }

  private getIfieldset(id: string, url: string, cache): Observable<Ifieldset> {
    if (cache) {
      if (this.hasValue(id)) {
        return Observable.create(observer => {
          observer.next(JSON.parse(this.getValue(id)));
          observer.complete();
        });
      }
    }

    return this.http.get(url).map(response => {
      this.setValue(id, JSON.stringify(response.json()));
      return response.json();
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
