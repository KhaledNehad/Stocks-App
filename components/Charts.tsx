import { View, Text, Dimensions } from 'react-native';
import React from 'react';
import {
  ChartDot,
  ChartPath,
  ChartPathProvider,
} from '@rainbow-me/animated-charts';

import { PriceData } from '../types/MarketDataType';

type ChartsProps = {
  weekChanges: PriceData[];
};

export const { width: SIZE } = Dimensions.get('window');

const Charts = ({ weekChanges }: ChartsProps) => {
  return (
    <ChartPathProvider
      data={{ points: weekChanges, smoothingStrategy: 'bezier' }}
    >
      <ChartPath height={SIZE / 2} stroke='yellow' width={SIZE} />
      <ChartDot style={{ backgroundColor: 'blue' }} />
    </ChartPathProvider>
  );
};

export default Charts;
