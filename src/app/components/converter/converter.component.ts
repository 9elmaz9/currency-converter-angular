import { Component, OnInit } from '@angular/core';
import { CurrencyConversionResponse } from '../../models/currency-conversion-response';
import { CurrencyConverterService } from '../../services/CurrencyConvertService';



@Component({
  selector: 'app-converter',
  templateUrl: './converter.component.html',
  styleUrls: ['./converter.component.css']
})
export class ConverterComponent implements OnInit {
  currencyResponse?: CurrencyConversionResponse;
  amountToConvert: number = 1;
  fromCurrency: string = 'USD';
  toCurrency: string = '';
  convertedAmount: number = 0;

  constructor(private converterService: CurrencyConverterService) {}

  ngOnInit(): void {
    this.getCurrencyData();
  }

  onSubmit() {
    if (this.currencyResponse) {
      const rate = this.currencyResponse.rates[this.toCurrency];
      if (rate) {
        this.convertedAmount = this.amountToConvert * rate;
      } else {
        console.error(`Exchange rate for ${this.toCurrency} not found.`);
      }
    }
  }

  private getCurrencyData() {
    this.converterService.getCurrencyData().subscribe({
      next: (response: CurrencyConversionResponse) => {
        this.currencyResponse = response;
        console.log(response);
      },
      error: (error) => {
        console.error('Error fetching currency data:', error);
      }
    });
  }
}
