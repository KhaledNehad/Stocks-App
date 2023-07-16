import { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import {
  TabView,
  TabBar,
  SceneMap,
  NavigationState,
  SceneRendererProps,
} from 'react-native-tab-view';
import { COLORS } from '../constants';
import JuniorMarketTab from './JuniorMarketTab';

type State = NavigationState<{
  key: string;
  title: string;
}>;

const MainMarketTab = () => (
  <View style={{ flex: 1, backgroundColor: '#ff4081' }} />
);

const FxRatesTab = () => (
  <View style={{ flex: 1, backgroundColor: '#4432f1' }} />
);
const FundTab = () => <View style={{ flex: 1, backgroundColor: '#443321' }} />;
const MarketCapTab = () => (
  <View style={{ flex: 1, backgroundColor: '#44e321' }} />
);

const TabViewScroll = () => {
  const [index, onIndexChange] = useState(1);
  const [routes] = useState([
    { key: 'mainMarket', title: 'Main Market' },
    { key: 'juniorMarket', title: 'Junior Market' },
    { key: 'fxRates', title: 'FX Rates' },
    { key: 'fund', title: 'Fund' },
    { key: 'marketCapTab', title: 'Market Cap' },
  ]);

  const renderTabBar = (
    props: SceneRendererProps & { navigationState: State }
  ) => (
    <TabBar
      {...props}
      scrollEnabled
      indicatorStyle={styles.indicator}
      style={styles.tabbar}
      labelStyle={styles.label}
      tabStyle={styles.tabStyle}
    />
  );

  const renderScene = SceneMap({
    mainMarket: MainMarketTab,
    juniorMarket: JuniorMarketTab,
    fxRates: FxRatesTab,
    fund: FundTab,
    marketCapTab: MarketCapTab,
  });

  return (
    <TabView
      navigationState={{
        index,
        routes,
      }}
      renderScene={renderScene}
      renderTabBar={renderTabBar}
      onIndexChange={onIndexChange}
    />
  );
};

TabViewScroll.title = 'Scrollable tab bar (auto width)';

export default TabViewScroll;

const styles = StyleSheet.create({
  tabbar: {
    backgroundColor: COLORS.primaryColor,
  },
  indicator: {
    backgroundColor: '#ffeb3b',
  },
  label: {
    fontWeight: '400',
  },
  tabStyle: {
    width: 'auto',
  },
});
