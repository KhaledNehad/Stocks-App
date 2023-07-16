import { View, Text, SafeAreaView, StyleSheet, StatusBar } from 'react-native';
import { COLORS, FONTS, SIZES } from '../constants';
import MarketsHeader from '../components/MarketsHeader';
import MarketsTabView from '../components/MarketsTabView';

export default function MarketsScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.titleWrapper}>
        <Text style={styles.largeTitle}>Markets</Text>
        <MarketsHeader />
      </View>
      <MarketsTabView />
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: StatusBar.currentHeight! + SIZES.small,
  },
  titleWrapper: {
    marginTop: 55,
    paddingVertical: SIZES.medium,
    paddingHorizontal: SIZES.medium,
    backgroundColor: COLORS.primaryColor,
  },
  largeTitle: {
    fontSize: SIZES.xLarge + 20,
    fontFamily: FONTS.bold,
    color: COLORS.white,
  },
});
