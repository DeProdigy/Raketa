import React from 'react'
import { View, Text } from 'react-native'
import coinListCellChangeViewStyles from './CoinListCellChangeViewStyles'
import CoinListCellChangeButton from '../CoinListCellChangeButton/CoinListCellChangeButton'

const s = coinListCellChangeViewStyles

const CoinListCellChangeView = props => (
  <View style={s.container}>
    <View style={s.buttonsContainer}>
      <View style={s.buttonContainer}>
        <Text style={s.buttonLabelText}>1H</Text>
        <CoinListCellChangeButton
          isNegative
          percentChange="19.25"
        />
      </View>
      <View style={s.buttonContainer}>
        <Text style={s.buttonLabelText}>24H</Text>
        <CoinListCellChangeButton
          isNegative
          percentChange="19.25"
        />
      </View>
      <View style={s.buttonContainer}>
        <Text style={s.buttonLabelText}>7D</Text>
        <CoinListCellChangeButton
          isNegative
          percentChange="19.25"
        />
      </View>
    </View>
    <View style={s.dividerLine} />
  </View>
)

export default CoinListCellChangeView
