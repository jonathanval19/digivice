import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Digimon } from '../interfaces/digimon.interface';

@Injectable({
  providedIn: 'root'
})
export class DigimonsService {
  private apiUrl = 'https://digi-api.com/api/v1/digimon';

  constructor(public http: HttpClient) { }

  getAllDigimons(currentPage: number): Observable<Digimon[]> {
    return this.http.get<Digimon[]>(this.apiUrl + `?pageSize=${currentPage}`);
  }

  getDigimon(id: string): Observable<Digimon> {
    //console.log('ruta', this.apiUrl + `/${id}`);
    return this.http.get<Digimon>(this.apiUrl + `/${id}`);
  }
}
