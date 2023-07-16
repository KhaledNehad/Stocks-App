import {
  View,
  Text,
  StatusBar,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import { StockData } from '../types/MarketDataType';
import { COLORS, FONTS, SIZES } from '../constants';
import Charts from './Charts';

const MarketItemList = ({ data }: { data: StockData }) => {
  return (
    <TouchableOpacity style={styles.container}>
      <View style={styles.companyNameContainer}>
        <Text style={styles.darkTextStyle}>{data.stockSymbol}</Text>
        <Text
          style={styles.grayTextStyle}
          numberOfLines={1}
          ellipsizeMode='tail'
        >
          {data.name}
        </Text>
      </View>
      <View style={styles.chartContainer}></View>
      <View style={styles.priceContainer}>
        <Text style={styles.darkTextStyle}>
          {data.currency === 'USD' ? '$' : '£'}
          {(data.currentPrice / 1000).toLocaleString(undefined, {
            maximumFractionDigits: 2,
          })}
        </Text>
        <Text
          style={[
            data.day_change > 0 ? styles.greenTextStyle : styles.redTextStyle,
          ]}
        >
          {data.day_change}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default MarketItemList;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: SIZES.medium,
    paddingVertical: SIZES.small,
    height: 80,
    alignItems: 'center',
  },
  companyNameContainer: {
    flex: 1,
  },
  chartContainer: {
    flex: 1,
  },
  priceContainer: {
    flex: 1,
  },
  darkTextStyle: {
    fontSize: SIZES.large,
    fontFamily: FONTS.bold,
  },
  grayTextStyle: {
    fontSize: SIZES.medium,
    fontFamily: FONTS.regular,
    color: COLORS.gray,
  },
  greenTextStyle: {
    color: COLORS.success,
  },
  redTextStyle: {
    color: COLORS.danger,
  },
});
