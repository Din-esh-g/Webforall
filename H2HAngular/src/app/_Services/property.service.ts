import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Property } from '../_Models/Property';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PropertyService {
  //apiUrl: 'https://localhost:44346/api/';
  //baseUrl = this.apiUrl;
  baseUrl = environment.apiUrl;
  constructor(private http: HttpClient) { }

  postProperty(property: Property) {
    return this.http.post(this.baseUrl + 'properties/'+ 'postproperty', property);
  }
  getproperty(): Observable<Property> {
    return this.http.get<Property>(this.baseUrl + 'Properties');
  }
  getpropertybyId(id): Observable<Property> {
    return this.http.get<Property>(this.baseUrl + 'properties/' + id);
  }
  updateProperty(id: number, property: Property) {
    return this.http.put(this.baseUrl + 'properties/' + id, property);
  }

  getMthod() {
    return this.http.get(this.baseUrl + 'properties');
  }
  registerproperty(model: any) {
    return this.http.post(this.baseUrl + 'properties/' + 'postproperty', model);
  }
  deleteProperty(id:number){
    return this.http.delete(this.baseUrl + 'properties/' + id);
  }

}
