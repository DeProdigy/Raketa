import { StyleSheet } from 'react-native';
import { sanFranciscoWeights } from 'react-native-typography';
import Colors from './Colors';

export default priceRangeViewStyles = StyleSheet.create({

  mainContainer: {
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'stretch',
    marginTop: 16
  },
  headerContainer: {
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'stretch'
  },
  headerText: {
    ...sanFranciscoWeights.bold,
    color: Colors.rkDarkGray,
    fontSize: 12,
    textAlign: 'left'
  },
  headerButtonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 16
  },
  headerButtonText: {
    ...sanFranciscoWeights.semibold,
    color: Colors.rkDarkGray,
    fontSize: 12,
    textAlign: 'left'
  },
  priceRangeView: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginTop: 100,
  },
  priceRangeSVGContainer: {
    height: 18,
    // backgroundColor: 'black',
    flex: 1,
  },
  priceRangeGroup: {
    backgroundColor: 'yellow'
  },
  priceRangeLine: {
    height: 10,
    width: 150,
    flex: 1,
    alignSelf: 'center'
  },
  priceRangeCircle: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: 'red'
  },
  dividerLine: {
    backgroundColor: Colors.rkDarkGray,
    height: 0.5,
    marginTop: 16
  },
  mainStatContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 16
  },
  leftAlignedStatContainer: {
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'flex-start'
  },
  rightAlignedStatContainer: {
    flexDirection: 'column',
    justifyContent: 'flex-end',
    alignItems: 'flex-end'
  },
  statText: {
    ...sanFranciscoWeights.semibold,
    color: Colors.rkPureWhite,
    fontSize: 12,
    textAlign: 'left',
    marginTop: 8
  },
  statTextRight: {
    textAlign: 'right'
  }
});
