import { View, Text, SafeAreaView, StatusBar, StyleSheet } from 'react-native';
import { COLORS, FONTS, SIZES } from '../constants';

export default function NewsScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.titleWrapper}>
        <Text style={styles.largeTitle}>News</Text>
      </View>
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
    paddingVertical: SIZES.small + 50,
    paddingHorizontal: SIZES.medium,
    backgroundColor: COLORS.primaryColor,
  },
  largeTitle: {
    fontSize: SIZES.xLarge + 20,
    fontFamily: FONTS.bold,
    color: COLORS.white,
  },
});
