import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

import { Ifieldset } from './ifieldset';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class ApiService {

  constructor(private http: Http) { }

  getLobs(): Observable<Ifieldset> {
    return this.http.get('/api/lobs.json').map(response => response.json());
  }

  getCompanyTypes(): Observable<Ifieldset> {
    return this.http.get('/api/company-types.json').map(response => response.json());
  }

  getOffices(): Observable<Ifieldset> {
    return this.http.get('/api/offices.json').map(response => response.json());
  }
  
  getPrimaryExcess(): Observable<Ifieldset> {
    return this.http.get('/api/primary-excess.json').map(response => response.json());
  }

  getReportingFigures(): Observable<Ifieldset> {
    return this.http.get('/api/reporting-figures.json').map(response => response.json());
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
