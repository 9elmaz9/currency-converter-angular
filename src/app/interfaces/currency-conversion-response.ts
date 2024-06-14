export interface CurrencyConversionResponse {
  disclaimer: string;
  license: string;
  timestamp: number;
  base: string;
  rates: {
  [currencyCode: string]: number;
  };
  }
