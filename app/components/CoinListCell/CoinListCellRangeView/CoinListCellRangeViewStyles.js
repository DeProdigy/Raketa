// @flow
import { StyleSheet } from 'react-native'
import { sanFranciscoWeights } from 'react-native-typography'
import Colors from '../../../shared/styles/Colors'

export default coinListCellRangeViewStyles = StyleSheet.create({

  mainContainer: {
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'stretch',
    marginTop: 16,
  },
  headerContainer: {
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'stretch',
  },
  CoinListCellRangeView: {
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'stretch',
    marginTop: 20,
  },
  priceRangeCurrentContainer: {
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  priceRangeCurrentText: {
    ...sanFranciscoWeights.semibold,
    color: Colors.rkPureWhite,
    fontSize: 15,
    textAlign: 'center',
  },
  priceRangeCurrentChangeText: {
    ...sanFranciscoWeights.semibold,
    color: Colors.rkRed,
    fontSize: 12,
    textAlign: 'center',
    marginTop: 6,
  },
  priceRangeSVGContainer: {
    height: 18,
    marginTop: 8,
    flex: 1,
  },
  priceRangeBottomContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 2,
  },
  priceRangeText: {
    ...sanFranciscoWeights.semibold,
    color: Colors.rkPureWhite,
    fontSize: 12,
  },
  leftAlign: {
    textAlign: 'left',
  },
  rightAlign: {
    textAlign: 'right',
  },
  dividerLine: {
    backgroundColor: Colors.rkDarkGray,
    height: 0.5,
    marginTop: 16,
  },
})
