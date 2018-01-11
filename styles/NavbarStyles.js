import { StyleSheet, Dimensions } from 'react-native';

const shadowColor = 'rgba(0,0,0,0.50)';

const navbarStyles = StyleSheet.create({
  container: {
    position: 'absolute',
    height: 88,
    width: Dimensions.get('window').width,
    shadowColor,
    shadowOffset: {width: 0, height:0.2},
    shadowRadius: 0
  },
});

export default navbarStyles;
