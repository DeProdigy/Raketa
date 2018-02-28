import { StyleSheet } from 'react-native'
import { sanFranciscoWeights } from 'react-native-typography'
import Colors from '../../../shared/styles/Colors'

const coinListCellDeltaViewStyles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'stretch',
  },
  buttonsContainer: {
    marginTop: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  buttonContainer: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  dividerLine: {
    backgroundColor: Colors.rkDarkGray,
    height: 0.5,
    marginTop: 16,
  },
  buttonLabelText: {
    ...sanFranciscoWeights.bold,
    color: Colors.rkDarkGray,
    fontSize: 12,
    textAlign: 'center',
    marginBottom: 8,
  },
})

export default coinListCellDeltaViewStyles
