import { StyleSheet } from 'react-native'
import { sanFranciscoWeights } from 'react-native-typography'
import Colors from '../../../shared/styles/Colors'

const CoinListCellDeltaButtonStyles = StyleSheet.create({
  container: {
    width: 100,
    height: 34,
    borderRadius: 4,
    backgroundColor: Colors.rkGreenTransparent,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  containerNegative: {
    backgroundColor: Colors.rkRedTransparent,
  },
  changeText: {
    ...sanFranciscoWeights.bold,
    fontSize: 14,
    color: Colors.rkGreen,
  },
  changeTextNegative: {
    color: Colors.rkRed,
  },
})

export default CoinListCellDeltaButtonStyles
