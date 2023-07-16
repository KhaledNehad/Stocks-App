import { View, StyleSheet, TextInput } from 'react-native';
import React from 'react';
import { COLORS, SIZES } from '../constants';
import { MaterialIcons } from '@expo/vector-icons';
import MarketsTabView from './--MarketsTabView-old';

const searchHandler = () => {};
const MarketHeader = () => {
  return (
    <View style={{ marginTop: SIZES.small, paddingHorizontal: 10 }}>
      <View style={styles.searchContainer}>
        <MaterialIcons name='search' size={24} color={COLORS.white} />
        <TextInput
          placeholder='Search markets'
          placeholderTextColor={COLORS.lightGray}
          style={{ flex: 1, color: COLORS.white }}
          onChangeText={searchHandler}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
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
});

export default MarketHeader;
