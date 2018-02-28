import React from 'react'
import { View, Text } from 'react-native'
import coinListCellStatsViewStyles from './CoinListCellStatsViewStyles'

const s = coinListCellStatsViewStyles

const CoinListCellStatsView = ({
  item: {
    market_cap_usd: marketCap,
    '24h_volume_usd': volume24h,
    available_supply: circulatingSupply,
    max_supply: maxSupply,
  },
}) => (
  [
    <View style={s.container} key={1}>
      <View style={s.leftAlignedStatContainer}>
        <Text style={s.headerText}>MARKET CAP</Text>
        <Text style={s.statText}>${marketCap}</Text>
      </View>
      <View style={s.rightAlignedStatContainer}>
        <Text style={s.headerText}>VOLUME(24H)</Text>
        <Text style={[s.statText, s.statTextRight]}>${volume24h}</Text>
      </View>
    </View>,
    <View style={s.container} key={2}>
      <View style={s.leftAlignedStatContainer}>
        <Text style={s.headerText}>CIRCULATING SUPPLY</Text>
        <Text style={s.statText}>{circulatingSupply}</Text>
      </View>
      <View style={s.rightAlignedStatContainer}>
        <Text style={s.headerText}>MAX SUPPLY</Text>
        <Text style={[s.statText, s.statTextRight]}>{maxSupply}</Text>
      </View>
    </View>,
  ]
)

export default CoinListCellStatsView
