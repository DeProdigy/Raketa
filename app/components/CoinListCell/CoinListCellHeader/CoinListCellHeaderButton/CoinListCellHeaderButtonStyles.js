import { StyleSheet } from 'react-native'
import { sanFranciscoWeights } from 'react-native-typography'
import Colors from '../../../../shared/styles/Colors'

const coinListCellHeaderButtonStyles = StyleSheet.create({
  unselected: {
    width: 74,
    height: 36,
    borderRadius: 36,
    backgroundColor: Colors.rkTransparent,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  selected: {
    backgroundColor: Colors.rkWhiteTransparent,
  },
  buttonTextUnselected: {
    ...sanFranciscoWeights.bold,
    color: Colors.rkPureWhite,
    fontSize: 12,
    textAlign: 'center',
    opacity: 0.5,
  },
  buttonTextSelected: {
    opacity: 1.0,
  },
})

export default coinListCellHeaderButtonStyles
