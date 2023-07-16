import { View, FlatList } from 'react-native';
import React, { useState } from 'react';
import { DATA } from '../constants';
import MarketItemList from './MarketItemList';

const JuniorMarketTab = () => {
  const [data, setData] = useState(DATA);

  return (
    <FlatList
      data={data}
      keyExtractor={(item) => item.stockSymbol}
      renderItem={({ item }) => <MarketItemList data={item} />}
      ItemSeparatorComponent={() => (
        <View
          style={{
            height: 1,
            backgroundColor: '#e5e5e5',
          }}
        />
      )}
    />
  );
};

export default JuniorMarketTab;
