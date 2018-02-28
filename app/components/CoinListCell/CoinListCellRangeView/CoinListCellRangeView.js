import React from 'react'
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


const s = coinListCellRangeViewStyles

const CoinListCellRangeView = ({
  item: {
    price_usd: priceUSD,
  },
}) => (
  <View style={s.mainContainer}>
    <Text style={s.headerText}>24H PRICE RANGE</Text>
    <View style={s.rangeView}>
      <Text style={s.currentPrice}>{priceUSD}</Text>
      <Svg
        style={s.rangeSVGContainer}
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

export default CoinListCellRangeView
