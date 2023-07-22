import React, { useMemo } from 'react'
import { View, StyleSheet } from 'react-native'
import { BottomSheetModal } from '@gorhom/bottom-sheet'
import ModalView from './ModalView'
import { StockData } from '../types/MarketDataType'

type BottomSheetProps = {
  dataToShow: StockData | null
}
const BottomSheet = React.forwardRef<BottomSheetModal, BottomSheetProps>(
  ({ dataToShow }, ref) => {
    const snapPoints = useMemo(() => ['25%', '100%'], [])

    return (
      <View>
        <BottomSheetModal ref={ref} index={1} snapPoints={snapPoints}>
          <View style={styles.wrapper}>
            <ModalView data={dataToShow} />
          </View>
        </BottomSheetModal>
      </View>
    )
  },
)
export default BottomSheet

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  wrapper: {
    paddingHorizontal: 16,
    marginTop: 24,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
})
