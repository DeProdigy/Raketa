import { StyleSheet, Dimensions } from 'react-native'
import Colors from '../../shared/styles/Colors'

const coinListHeaderStyles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: Dimensions.get('window').width,
    height: 68,
    paddingLeft: 16,
    paddingRight: 16,
    backgroundColor: Colors.rkDarkBlue,
  },
})

export default coinListHeaderStyles
