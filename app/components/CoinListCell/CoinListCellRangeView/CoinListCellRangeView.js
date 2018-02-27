import React, { Component } from 'react'
import { View, Text } from 'react-native'
import Svg, {
  Circle,
  G,
  Rect,
  LinearGradient,
  Stop,
  Defs,
  ClipPath,
  Polygon,
} from 'react-native-svg'
import Colors from '../../../shared/styles/Colors'
import coinListCellRangeViewStyles from './CoinListCellRangeViewStyles'

export default class CoinListCellRangeView extends Component {
  state = {

  }


  render() {
    const s = coinListCellRangeViewStyles

    const {
      item: {
        market_cap_usd: marketCap,
        available_supply: circulatingSupply,
        '24h_volume_usd': volume,
        max_supply: totalSupply,
      },
    } = this.props

    return (
      <View style={s.mainContainer}>
        <Text style={s.headerText}>24H PRICE RANGE</Text>
        <View style={s.rangeView}>
          <View style={s.priceRangeCurrentContainer}>
            <Text style={s.priceRangeCurrentText}>$11325.10</Text>
            <Text style={s.priceRangeCurrentChangeText}>-7.53%($20.50)</Text>
          </View>

          <Svg
            style={s.priceRangeSVGContainer}
          >
            <Defs>
              <LinearGradient id="grad" x1="0%" y1="0" x2="100%" y2="0">
                <Stop offset="0" stopColor={Colors.rkRed} stopOpacity="1" />
                <Stop offset="1" stopColor={Colors.rkGreen} stopOpacity="1" />
              </LinearGradient>
              <ClipPath id="clip">
                <G >
                  <Rect
                    y="40%"
                    x="7%"
                    width="85%"
                    height="4"
                  />
                  <Circle
                    cx="7%"
                    cy="50%"
                    r="5"
                  />
                  <Circle
                    cx="93%"
                    cy="50%"
                    r="5"
                  />
                  <Polygon
                    x="150"
                    y="11"
                    rotation="180"
                    points="0,2 20,2 10,10"
                    fill="lime"
                    stroke="purple"
                    strokeWidth="1"
                  />
                </G>
              </ClipPath>
            </Defs>
            <Rect
              x="0"
              y="0"
              width="100%"
              height="100%"
              fill="url(#grad)"
              clipPath="url(#clip)"
            />
          </Svg>
          <View style={s.priceRangeBottomContainer}>
            <Text style={[s.priceRangeText, s.leftAlign]}>$653.50</Text>
            <Text style={[s.priceRangeText, s.rightAlign]}>$873.50</Text>
          </View>
        </View>
        <View style={s.dividerLine} />
      </View>
    )
  }
}
