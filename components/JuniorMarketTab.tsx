import { View, FlatList, StyleSheet } from 'react-native';
import React, { useRef, useState } from 'react';
import { DATA } from '../constants';
import MarketItemList from './MarketItemList';
import BottomSheet from '../components/BottomSheet';
import {
  BottomSheetModalProvider,
  BottomSheetModal,
} from '@gorhom/bottom-sheet';
import { StockData } from '../types/MarketDataType';

const JuniorMarketTab = () => {
  const [data, setData] = useState(DATA);

  const [selectedCompanyData, setSelectedCompanyData] =
    useState<StockData | null>(null);

  const BottomSheetModalRef = useRef<BottomSheetModal>(null);

  const handlePressListItem = (item: StockData) => {
    setSelectedCompanyData(item);
    BottomSheetModalRef.current?.present();
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={data}
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
