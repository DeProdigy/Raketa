import React from 'react'
import { View, Text } from 'react-native'
import coinListCellDeltaViewStyles from './CoinListCellDeltaViewStyles'
import CoinListCellDeltaButton from '../CoinListCellDeltaButton/CoinListCellDeltaButton'
import formulaHelper from '../../../shared/utils/formulaHelper'


const s = coinListCellDeltaViewStyles

const CoinListCellDeltaView = ({
  item: {
    percent_change_1h: percentChange1h,
    percent_change_24h: percentChange24h,
    percent_change_7d: percentChange7d,
    price_usd: priceUSD,
  },
}) => (
  <View style={s.container}>
    <View style={s.buttonsContainer}>
      <View style={s.buttonContainer}>
        <Text style={s.buttonLabelText}>1H</Text>
        <CoinListCellDeltaButton
          isNegative={percentChange1h < 0}
          percentChange={percentChange1h}
          priceChange={formulaHelper.getChangeAmount(priceUSD, percentChange1h)}
        />
      </View>
      <View style={s.buttonContainer}>
        <Text style={s.buttonLabelText}>24H</Text>
        <CoinListCellDeltaButton
          isNegative={percentChange24h < 0}
          percentChange={percentChange24h}
          priceChange={formulaHelper.getChangeAmount(priceUSD, percentChange24h)}
        />
      </View>
      <View style={s.buttonContainer}>
        <Text style={s.buttonLabelText}>7D</Text>
        <CoinListCellDeltaButton
          isNegative={percentChange7d < 0}
          percentChange={percentChange7d}
          priceChange={formulaHelper.getChangeAmount(priceUSD, percentChange7d)}
        />
      </View>
    </View>
    <View style={s.dividerLine} />
  </View>
)

export default CoinListCellDeltaView
