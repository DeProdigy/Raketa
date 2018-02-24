import { StyleSheet } from 'react-native';
import { sanFranciscoWeights } from 'react-native-typography';
import Colors from './Colors';

const coinListHeaderButtonStyles = StyleSheet.create({
  selected: {
    opacity: 1.0,
    width: 108,
    height: 36,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.rkLightBlue,
    borderRadius: 36,
  },
  unselected: {
    opacity: 0.25,
    width: 108,
    height: 36,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 36,
  },
  textContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    ...sanFranciscoWeights.bold,
    color: Colors.rkPureWhite,
    fontSize: 12,
    textAlign: 'left'
  },
  icon: {
    marginLeft: 8
  },
});

export default coinListHeaderButtonStyles;
