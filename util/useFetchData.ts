import { useEffect, useState } from 'react';
import axios from 'axios';
import { StockData } from '../types/MarketDataType';

const useFetchData = () => {
  const [data, setData] = useState<StockData[] | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          'https://603b41c0f1d6aa0017a11629.mockapi.io/stocksapp/v1/market'
        );
        setData(response.data);
        setIsLoading(false);
      } catch (error) {
        setError(error as Error);
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  return { data, isLoading, error };
};

export default useFetchData;
