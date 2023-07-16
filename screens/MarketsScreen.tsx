import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  StatusBar,
  TextInput,
} from 'react-native';
import { COLORS, DATA, FONTS, SIZES } from '../constants';
import MarketsHeader from '../components/MarketsHeader';
import MarketsTabView from '../components/MarketsTabView';
import { MaterialIcons } from '@expo/vector-icons';

export default function MarketsScreen() {
  const searchHandler = () => {};

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.titleWrapper}>
        <Text style={styles.largeTitle}>Markets</Text>
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
