import { StyleSheet, Dimensions } from 'react-native';
import Colors from './Colors';

const coinListHeaderStyles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: Dimensions.get('window').width,
    height: 68,
    backgroundColor: Colors.rkDarkBlue,
  },
  button: {
    width: 136,
    height: 36,
    backgroundColor: Colors.rkLightBlue,
    borderRadius: 36
  },
});

export default coinListHeaderStyles;
