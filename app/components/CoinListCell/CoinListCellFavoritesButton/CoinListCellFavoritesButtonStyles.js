import { StyleSheet } from 'react-native'
import { sanFranciscoWeights } from 'react-native-typography'
import Colors from '../../../shared/styles/Colors'

const coinListCellFavoritesButtonStyles = StyleSheet.create({
  favoritesButton: {
    height: 34,
    borderRadius: 17,
    backgroundColor: 'rgba(255,255,255,0.05)',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: 171,
  },
  favoritesButtonImageText: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  favoritesButtonIcon: {
    width: 16,
    height: 14,
    marginRight: 9,
  },
  favoritesButtonText: {
    ...sanFranciscoWeights.semibold,
    color: Colors.rkPureWhite,
    fontSize: 12,
    textAlign: 'left',
  },
})

export default coinListCellFavoritesButtonStyles
