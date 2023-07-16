import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import React from 'react';
import { StockData } from '../types/MarketDataType';
import { COLORS, FONTS, SIZES } from '../constants';
import Charts from './Charts';
import { formatCurrency } from '../util/formatCurrency';

type MarketItemListProps = {
  data: StockData;
  onPress: () => void;
};

const MarketItemList: React.FC<MarketItemListProps> = ({ data, onPress }) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
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
          {formatCurrency(data.currentPrice)}
        </Text>
        <Text
          style={[
            data.day_change > 0 ? styles.greenTextStyle : styles.redTextStyle,
          ]}
        >
          {data.day_change > 0 && '+'}
          {data.day_change}%
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
