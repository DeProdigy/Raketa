import { StyleSheet } from 'react-native';
import { sanFranciscoWeights } from 'react-native-typography';
import Colors from './Colors';

export default priceRangeViewStyles = StyleSheet.create({

  mainContainer: {
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'stretch',
    height: 200,
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
  dividerLine: {
    backgroundColor: Colors.rkDarkGray,
    height: 1,
    marginTop: 16
  }
});
