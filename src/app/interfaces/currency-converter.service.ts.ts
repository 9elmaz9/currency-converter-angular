import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface CurrencyConversionResponse {
  rates: { [key: string]: number };
  base: string;
  date: string;
}

@Injectable({
  providedIn: 'root'
})
export class CurrencyConverterService {

  private apiUrl = 'https://api.exchangerate-api.com/v4/latest/';

  constructor(private http: HttpClient) { }

  getCurrencyData(): Observable<CurrencyConversionResponse> {
    return this.http.get<CurrencyConversionResponse>(this.apiUrl);
  }
}
