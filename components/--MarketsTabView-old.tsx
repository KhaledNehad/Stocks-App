import { useState } from 'react';
import { View, useWindowDimensions } from 'react-native';
import { TabView, SceneMap } from 'react-native-tab-view';

const mainMarketTab = () => (
  <View style={{ flex: 1, backgroundColor: '#ff4081' }} />
);
const juniorMarket = () => (
  <View style={{ flex: 1, backgroundColor: '#673ab7' }} />
);
const fxRates = () => <View style={{ flex: 1, backgroundColor: '#4432f1' }} />;
const fund = () => <View style={{ flex: 1, backgroundColor: '#443321' }} />;
const marketCap = () => (
  <View style={{ flex: 1, backgroundColor: '#44e321' }} />
);

const renderScene = SceneMap({
  first: mainMarketTab,
  second: juniorMarket,
  third: fxRates,
  fourth: fund,
  fifth: marketCap,
});

export default function MarketsTabView() {
  const layout = useWindowDimensions();

  const [index, setIndex] = useState(0);
  const [routes] = useState([
    { key: 'first', title: 'Main Market' },
    { key: 'second', title: 'Junior Market' },
    { key: 'third', title: 'FX Rates' },
    { key: 'fourth', title: 'Fund' },
    { key: 'fifth', title: 'Market Cap' },
  ]);

  return (
    <TabView
      navigationState={{ index, routes }}
      renderScene={renderScene}
      onIndexChange={setIndex}
      initialLayout={{ width: layout.width }}
      style={{ width: 'auto' }}
    />
  );
}
