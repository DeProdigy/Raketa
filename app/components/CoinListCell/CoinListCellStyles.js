import { StyleSheet } from 'react-native'
import { sanFranciscoWeights } from 'react-native-typography'
import Colors from '../../shared/styles/Colors'


const coinListCellStyles = StyleSheet.create({
  mainContainer: {
    backgroundColor: Colors.rkLightBlue,
    marginBottom: 4,
    padding: 16,
  },
  contentContainer: {
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'stretch',
  },
  collapsedContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  nameSymbolContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginRight: 32,
    flex: 1,
  },
  nameContainer: {
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    width: 90,
  },
  symbolImage: {
    width: 27,
    height: 27,
    borderRadius: 13.5,
    marginRight: 12,
  },
  symbolText: {
    ...sanFranciscoWeights.semibold,
    color: Colors.rkDarkGray,
    fontSize: 15,
    textAlign: 'left',
  },
  nameText: {
    ...sanFranciscoWeights.semibold,
    color: Colors.rkPureWhite,
    fontSize: 15,
    textAlign: 'left',
  },
  priceContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  priceText: {
    ...sanFranciscoWeights.semibold,
    color: Colors.rkGreen,
    fontSize: 15,
    textAlign: 'right',
    marginRight: 12,
  },
  priceTextNegative: {
    color: Colors.rkRed,
  },
  dividerLine: {
    backgroundColor: Colors.rkDarkGray,
    height: 0.5,
    marginTop: 16,
  },
})


export default coinListCellStyles
