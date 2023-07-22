import { View, StyleSheet, TextInput, Text } from 'react-native'
import React from 'react'
import { COLORS, FONTS, SIZES } from '../constants'
import { MaterialIcons } from '@expo/vector-icons'

const searchHandler = () => {}

const MarketHeader = () => {
  return (
    <View>
      <View style={styles.container}>
        <Text style={styles.largeTitle}>Markets</Text>
        <View style={{ marginTop: SIZES.small, paddingHorizontal: 10 }}>
          <View style={styles.searchContainer}>
            <MaterialIcons name="search" size={24} color={COLORS.white} />
            <TextInput
              placeholder="Search markets"
              placeholderTextColor={COLORS.lightGray}
              style={{ flex: 1, color: COLORS.white }}
              onChangeText={searchHandler}
            />
          </View>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: SIZES.medium,
    paddingHorizontal: SIZES.medium,
    backgroundColor: COLORS.primaryColor,
  },
  searchContainer: {
    width: '100%',
    borderRadius: SIZES.small,
    backgroundColor: COLORS.secondColor,
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
    paddingHorizontal: 10,
    marginVertical: 10,
  },
  largeTitle: {
    fontSize: SIZES.xLarge + 20,
    fontFamily: FONTS.bold,
    color: COLORS.white,
  },
})

export default MarketHeader
