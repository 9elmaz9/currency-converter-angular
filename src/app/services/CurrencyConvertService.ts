import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CurrencyConversionResponse } from '../models/currency-conversion-response';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CurrencyConverterService {
  private apiUrl = `https://openexchangerates.org/api/latest.json?app_id=${environment.apiKey}`;

  constructor(private http: HttpClient) {}

  getCurrencyData(): Observable<CurrencyConversionResponse> {
    return this.http.get<CurrencyConversionResponse>(this.apiUrl);
  }
}
