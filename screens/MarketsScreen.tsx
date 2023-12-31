import { SafeAreaView, StyleSheet, StatusBar } from 'react-native'
import { SIZES } from '../constants'
import MarketsTabView from '../components/MarketsTabView'
import MarketHeader from '../components/MarketsHeader'
import Store from '../util/DataStore'
import useFetchData from '../util/useFetchData'
import React from 'react'

export default function MarketsScreen() {
  const fetchData = useFetchData()

  return (
    <SafeAreaView style={styles.container}>
      <Store.Provider value={fetchData}>
        <MarketHeader />
        <MarketsTabView />
      </Store.Provider>
    </SafeAreaView>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: StatusBar.currentHeight! + SIZES.small,
  },
})
