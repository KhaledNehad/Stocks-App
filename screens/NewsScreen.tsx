import { View, Text, SafeAreaView, StatusBar, StyleSheet } from 'react-native';
import { COLORS, FONTS, SIZES } from '../constants';

export default function NewsScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Text>New Screen</Text>
      </View>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: StatusBar.currentHeight! + SIZES.small,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
