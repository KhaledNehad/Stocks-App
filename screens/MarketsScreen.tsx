import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  StatusBar,
  TextInput,
} from 'react-native';
import { COLORS, SIZES } from '../constants';
import MarketsTabView from '../components/MarketsTabView';
import MarketHeader from '../components/MarketsHeader';
import Store from '../util/DataStore';
import useFetchData from '../util/useFetchData';

export default function MarketsScreen() {
  const searchHandler = () => {};
  const fetchData = useFetchData();

  return (
    <SafeAreaView style={styles.container}>
      <Store.Provider value={fetchData}>
        <MarketHeader />
        <MarketsTabView />
      </Store.Provider>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: StatusBar.currentHeight! + SIZES.small,
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
});
