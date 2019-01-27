import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

export interface LimitRequestDataInterface {
  data: {limit: number};
}

@Injectable({
  providedIn: 'root'
})
export class BackendService {
  baseUrl = document.location.hostname === 'localhost'
      ? (document.location.protocol === 'http:' ? 'http://localhost:8080' : 'https://localhost:8443')
      : '';

  defaultHeaders = {accept: 'application/json'};

  constructor(protected http: HttpClient) { }

  getLimit (): Promise<number> {
    const options = {headers: this.defaultHeaders};
    return this.http.get(`${this.baseUrl}/limit`, options)
        .toPromise()
        .then((response: LimitRequestDataInterface) => response.data.limit);
  }

  postLimit (limit: number): Promise<number> {
    const data = <LimitRequestDataInterface>{data: {limit}};
    const options = {headers: Object.assign({}, this.defaultHeaders, {'content-type': 'application/json'})};
    return this.http.post(`${this.baseUrl}/limit`, data, options)
        .toPromise()
        .then((response: LimitRequestDataInterface) => response.data.limit);
  }
}
