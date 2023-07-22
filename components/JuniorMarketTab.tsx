import { View, Text, StyleSheet } from 'react-native';
import React, { useRef, useState } from 'react';
import MarketItemList from './MarketItemList';
import BottomSheet from '../components/BottomSheet';
import {
  BottomSheetModalProvider,
  BottomSheetModal,
} from '@gorhom/bottom-sheet';
import { StockData } from '../types/MarketDataType';
import { useDataStore } from '../util/DataStore';
import { FlashList } from "@shopify/flash-list";


const JuniorMarketTab = () => {
  const { data, isLoading, error } = useDataStore();

  const [selectedCompanyData, setSelectedCompanyData] =
    useState<StockData | null>(null);

  const BottomSheetModalRef = useRef<BottomSheetModal>(null);

  const handlePressListItem = (item: StockData) => {
    setSelectedCompanyData(item);
    BottomSheetModalRef.current?.present();
  };

  if (isLoading) {
    return <Text>Loading...</Text>;
  }

  if (error) {
    return <Text>Error: {error.message}</Text>;
  }

  return (
    <View style={styles.container}>
      <FlashList
        data={data}
        estimatedItemSize={200}
        keyExtractor={(item) => item.stockSymbol}
        renderItem={({ item }) => (
          <MarketItemList
            data={item}
            onPress={() => handlePressListItem(item)}
          />
        )}
        ItemSeparatorComponent={() => (
          <View
            style={{
              height: 1,
              backgroundColor: '#e5e5e5',
            }}
          />
        )}
      />

      <BottomSheetModalProvider>
        <BottomSheet
          ref={BottomSheetModalRef}
          dataToShow={selectedCompanyData}
        />
      </BottomSheetModalProvider>
    </View>
  );
};

export default JuniorMarketTab;
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
