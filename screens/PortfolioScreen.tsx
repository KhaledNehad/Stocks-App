import { View, Text, SafeAreaView, StyleSheet, StatusBar } from 'react-native';
import {} from '@react-navigation/native';
import { SIZES } from '../constants';

export default function PortfolioScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Text>Portfolio Screen</Text>
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
