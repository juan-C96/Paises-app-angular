import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Country } from '../interfaces/pais.interface';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PaisService {

  private apiUrl: string = 'https://restcountries.com/v3.1';

  private apiUrl_region: string = 'https://restcountries.com/v2';

  constructor( private http:HttpClient ) { }

  buscarPais( termino: string ): Observable<Country[]> {

    const url = `${ this.apiUrl }/name/${ termino }`;

    return this.http.get<Country[]>( url );
  }

  buscarCapital( termino: string ): Observable<Country[]> {
    
    const url = `${ this.apiUrl }/capital/${ termino }`;

    return this.http.get<Country[]>( url );
  }

  getPaisPorId( id: string ): Observable<Country> {
    
    const url = `${ this.apiUrl }/alpha/${ id }`;

    return this.http.get<Country>( url );
  }

  getPaisPorRegion( region: string ): Observable<Country[]> {
    
    const url = `${ this.apiUrl_region }/regionalbloc/${ region }`;

    return this.http.get<Country[]>( url );
  }
}
