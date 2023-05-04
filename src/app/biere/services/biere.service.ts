import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.development';
import { Biere } from '../models/biere';

@Injectable()
export class BiereService {

    constructor(private http: HttpClient) { }


    get(): Observable<Biere[]> {
        return this.http.get<Biere[]>(environment.BeerApiBaseUrl + "/biere");
    }
    getById(id: number): Observable<Biere> {
        return this.http.get<Biere>(environment.BeerApiBaseUrl + "/biere/" + id);
    }
    delete(id: number): Observable<string> {
        return this.http.delete<string>(environment.BeerApiBaseUrl + "/biere/" + id);

    }
    update(biere: Biere): Observable<string> {
        return this.http.put<string>(environment.BeerApiBaseUrl + "/biere/" + biere.id, biere);
    }

    create(biere: Biere): Observable<string> {
        return this.http.post<string>(environment.BeerApiBaseUrl + "/biere", biere);
    }
}
