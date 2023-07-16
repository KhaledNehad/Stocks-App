import { View, Text, SafeAreaView, StyleSheet, StatusBar } from 'react-native';
import { DATA, SIZES } from '../constants';
import { useState } from 'react';
import Charts from '../components/Charts';

export default function PortfolioScreen() {
  const [data, setData] = useState(DATA);

  return (
    <SafeAreaView style={styles.container}>
      <View>
        {data.map((item) => (
          <Charts key={item.stockSymbol} weekChanges={item.weekChanges} />
        ))}
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: StatusBar.currentHeight! + SIZES.small,
  },
});
