export type PriceData = {
  x: number;
  y: number;
};

export type StockData = {
  stockSymbol: string;
  name: string;
  mic_code: string;
  currency: string;
  currentPrice: number;
  day_high: number;
  day_low: number;
  day_open: number;
  weekChanges: PriceData[];
  previous_close_price: number;
  day_change: number;
};
