import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  readData() {
    return this.http.get(`${this.api}/articles`)
  }

  api = environment.apiURL;

  constructor(private http: HttpClient) { }

}
