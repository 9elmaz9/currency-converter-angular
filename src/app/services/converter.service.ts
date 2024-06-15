import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import { CurrencyConversionResponse } from '../interfaces/currency-conversion-response';
import {environment} from "../../environments/environment";
@Injectable({
providedIn: 'root'
})
export class ConverterService {
// Here we connect to our environment to retrieve the sensitive data.
// An API key is always personal
private apiKey = environment.apiKey;
constructor(private http: HttpClient) {}
getCurrencyData(): Observable<CurrencyConversionResponse> {
// How do we connect to the API. You can find how the endpoints work in the documentation of the API you use.
const url: string = `https://openexchangerates.org/api/latest.json?
app_id=${this.apiKey}`;
return this.http.get<CurrencyConversionResponse>(url);
}
}