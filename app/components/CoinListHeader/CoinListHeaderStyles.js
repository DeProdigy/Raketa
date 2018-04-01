import { StyleSheet, Dimensions } from 'react-native'
import Colors from '../../shared/styles/Colors'

const coinListHeaderStyles = StyleSheet.create({
  container: {
    flex: 0,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    height: 36,
    width: Dimensions.get('window').width,
    paddingLeft: 16,
    paddingRight: 16,
    paddingTop: 32,
    paddingBottom: 32,
    marginBottom: 4,
    backgroundColor: Colors.rkNavBarBlue,
  },
})

export default coinListHeaderStyles
