import { View, StyleSheet, TextInput } from 'react-native';
import React from 'react';
import { COLORS, SIZES } from '../constants';
import { MaterialIcons } from '@expo/vector-icons';

const searchHandler = () => {};
const MarketHeader = () => {
  return (
    <View style={{ marginTop: SIZES.small, paddingHorizontal: 10 }}></View>
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
