import { StyleSheet } from 'react-native'
import Colors from '../../shared/styles/Colors'

const pullToRefreshFlatListStyles = StyleSheet.create({
  lottieContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    height: 356.66,
    // backgroundColor: 'blue'
  },
  pullView: {
    // opacity: 1,
  },
  container: {
    backgroundColor: Colors.raketaBackgroundBlue,
  },
})

export default pullToRefreshFlatListStyles
