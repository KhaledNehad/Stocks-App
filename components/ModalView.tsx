import { View, Text, StyleSheet, ScrollView, Dimensions } from 'react-native'
import React from 'react'
import { StockData } from '../types/MarketDataType'
import { COLORS, FONTS, SIZES } from '../constants'
import { formatCurrency } from '../util/formatCurrency'
import Button from './Button'

type ModalViewProps = {
  data: StockData | null
}

export const { width: SIZE } = Dimensions.get('window')

const ModalView: React.FC<ModalViewProps> = ({ data }) => {
  return (
    <ScrollView>
      <View style={styles.container}>
        <View>
          <Text style={styles.darkTextStyle}>{data?.stockSymbol}</Text>
          <Text style={styles.grayTextStyle}>{data?.name}</Text>
        </View>
        <View>
          <Text style={styles.darkTextLargeStyle}>
            {formatCurrency(data!.currentPrice)}
          </Text>
          <Text
            style={[
              data!.day_change > 0
                ? styles.greenTextStyle
                : styles.redTextStyle,
            ]}
          >
            {data!.day_change > 0 ? '+' : '-'} ${data!.day_high} (
            {data!.day_change}%)
          </Text>
        </View>
        <View>
          <Text>Chart</Text>
        </View>
        <View style={styles.details}>
          <View style={styles.rowContainer}>
            <Text>Close price</Text>
            <Text style={styles.darkTextSmallStyle}>
              {formatCurrency(data!.previous_close_price)}
            </Text>
          </View>
          <View style={styles.rowContainer}>
            <Text>Last trade price</Text>
            <Text style={styles.darkTextSmallStyle}>
              {formatCurrency(data!.lastTradePrice)}
            </Text>
          </View>
          <View style={styles.rowContainer}>
            <Text>Outstanding</Text>
            <Text style={styles.darkTextSmallStyle}>
              {formatCurrency(data!.outstandingShares)}
            </Text>
          </View>
          <View style={styles.rowContainer}>
            <Text>Market Value</Text>
            <Text style={styles.darkTextSmallStyle}>
              {formatCurrency(data!.marketCap)}
            </Text>
          </View>
        </View>
        <View style={styles.action}>
          <Button
            title="Add to Portfolio"
            stylesButton={styles.action_button}
            stylesText={styles.action_button_text}
          />
        </View>
      </View>
    </ScrollView>
  )
}

export default ModalView

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    paddingHorizontal: SIZES.medium,
    paddingVertical: SIZES.small,
    alignItems: 'flex-start',
    gap: 15,
  },
  darkTextStyle: {
    fontSize: SIZES.xLarge,
    fontFamily: FONTS.bold,
  },
  darkTextLargeStyle: {
    fontSize: SIZES.xLarge + 25,
    fontFamily: FONTS.bold,
  },
  darkTextSmallStyle: {
    fontSize: SIZES.large,
    fontFamily: FONTS.bold,
  },
  grayTextStyle: {
    fontSize: SIZES.medium + 10,
    fontFamily: FONTS.regular,
    color: COLORS.gray,
  },
  grayTextSmallStyle: {
    fontSize: SIZES.medium,
    fontFamily: FONTS.regular,
    color: COLORS.gray,
  },
  greenTextStyle: {
    color: COLORS.success,
    fontSize: SIZES.xLarge,
  },
  redTextStyle: {
    color: COLORS.danger,
    fontSize: SIZES.xLarge,
  },
  details: {
    width: '100%',
    padding: SIZES.medium,
    borderRadius: SIZES.small,
  },
  rowContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    paddingVertical: SIZES.small,
    alignContent: 'center',
  },
  action: {
    width: '100%',
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    padding: SIZES.medium,
    borderRadius: SIZES.small,
  },
  action_button: {
    backgroundColor: COLORS.black,
    padding: SIZES.small + 4,
    width: 240,
    alignItems: 'center',
    borderRadius: SIZES.small,
  },
  action_button_text: {
    color: COLORS.white,
    fontFamily: FONTS.semiBold,
    fontSize: SIZES.large,
  },
})
