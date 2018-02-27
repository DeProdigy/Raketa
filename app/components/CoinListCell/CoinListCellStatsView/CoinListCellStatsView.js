import React from 'react'
import { View, Text } from 'react-native'
import coinListCellStatsViewStyles from './CoinListCellStatsViewStyles'

const s = coinListCellStatsViewStyles


const CoinListCellStatsView = props => (

  [
    <View style={s.container} key={1}>
      <View style={s.leftAlignedStatContainer}>
        <Text style={s.headerText}>MARKET CAP</Text>
        <Text style={s.statText}>${props.item.market_cap_usd}</Text>
      </View>
      <View style={s.rightAlignedStatContainer}>
        <Text style={s.headerText}>VOLUME(24H)</Text>
        <Text style={[s.statText, s.statTextRight]}>${props.item['24h_volume_usd']}</Text>
      </View>
    </View>,
    <View style={s.container} key={2}>
      <View style={s.leftAlignedStatContainer}>
        <Text style={s.headerText}>CIRCULATING SUPPLY</Text>
        <Text style={s.statText}>{props.item.available_supply}</Text>
      </View>
      <View style={s.rightAlignedStatContainer}>
        <Text style={s.headerText}>MAX SUPPLY</Text>
        <Text style={[s.statText, s.statTextRight]}>{props.item.max_supply}</Text>
      </View>
    </View>,
  ]
)

export default CoinListCellStatsView
