import { StyleSheet } from 'react-native'
import Colors from '../../shared/styles/Colors'

const coinListStyles = StyleSheet.create({
  container: {
    backgroundColor: Colors.rkDarkBlue,
    // paddingTop: 160
  },
  refreshViewContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    height: 357,
    backgroundColor: 'transparent',
  },
})

export default coinListStyles
