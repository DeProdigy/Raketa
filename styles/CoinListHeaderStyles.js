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
    backgroundColor: 'red',
    // marginRight: 50,
    paddingLeft: 16,
    paddingRight: 16
    // backgroundColor: Colors.rkDarkBlue,
  },
  button: {
    width: 108,
    height: 36,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.rkLightBlue,
    borderRadius: 36
  },
  textContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'blue',
  },
  text: {

  },
  icon: {
    marginLeft: 8
  }
});

export default coinListHeaderStyles;
