import { StyleSheet } from 'react-native';
import { sanFranciscoWeights } from 'react-native-typography';
import Colors from './Colors';


export default coinListCellStyles = StyleSheet.create({
  mainContainer: {
    backgroundColor: Colors.rkLightBlue,
    flexDirection:'row',
    alignItems: 'center',
    justifyContent:'flex-end',
    marginBottom: 4,
    padding: 16,
  },
  nameSymbolContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginRight: 32,
    flex: 1
  },
  nameContainer: {
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    width: 90
  },
  symbolImage: {
    width: 27,
    height: 27,
    borderRadius: 13.5,
    marginRight: 12
  },
  symbolText: {
    ...sanFranciscoWeights.semibold,
    color: Colors.rkDarkGray,
    fontSize: 15,
    textAlign: 'left'
  },
  nameText: {
    ...sanFranciscoWeights.semibold,
    color: Colors.rkPureWhite,
    fontSize: 15,
    textAlign: 'left'
  },
  priceContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  priceText: {
    ...sanFranciscoWeights.semibold,
    color: Colors.rkPureWhite,
    fontSize: 15,
    textAlign: 'right'
  },
  changeContainer: {
    width: 100,
    height: 34,
    borderRadius: 4,
    backgroundColor: Colors.rkGreenTransparent,
    flexDirection:'row',
    alignItems: 'center',
    justifyContent:'space-around',
    marginLeft: 16,
  },
  changeContainerNegative: {
    backgroundColor: Colors.rkRedTransparent,
  },
  changeText: {
    ...sanFranciscoWeights.bold,
    fontSize:16,
    color: Colors.rkGreen
  },
  changeTextNegative: {
    color: Colors.rkRed
  }
});
