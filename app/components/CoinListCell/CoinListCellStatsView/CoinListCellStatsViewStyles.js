import { StyleSheet } from 'react-native'
import { sanFranciscoWeights } from 'react-native-typography'
import Colors from '../../../shared/styles/Colors'

const coinListCellStatsViewStyles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 16,
  },
  headerText: {
    ...sanFranciscoWeights.bold,
    color: Colors.rkDarkGray,
    fontSize: 12,
    textAlign: 'left',
  },
  leftAlignedStatContainer: {
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
  },
  rightAlignedStatContainer: {
    flexDirection: 'column',
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
  },
  statText: {
    ...sanFranciscoWeights.semibold,
    color: Colors.rkPureWhite,
    fontSize: 12,
    textAlign: 'left',
    marginTop: 8,
  },
  statTextRight: {
    textAlign: 'right',
  },
})

export default coinListCellStatsViewStyles
