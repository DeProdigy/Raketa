import React, { Component } from 'react'
import {
  View,
  FlatList,
  Animated,
} from 'react-native'

import LottieView from 'lottie-react-native'
import CoinListCell from '../CoinListCell/CoinListCell'

const MIN_PULL_HEIGHT = 161

export default class PTRFlatList extends Component {
  constructor(props) {
    super(props)
    this.state = {
      scrollY: new Animated.Value(0),
    }
  }

  render() {

    const animationStyle = {
      position: 'absolute',
      top: 0,
      bottom: 0,
      right: 0,
      left: 0,
      backgroundColor: 'transparent',
      height: 357,
    }

    return (
      <View>
        {/* <LottieView
          style={[animationStyle, { opacity: this.props.isRefreshing ? 0 : 1 }]}
          source={require('../../assets/animations/pull.json')}
          progress={animateProgress}
        /> */}
        {/* <LottieView
          style={[
            animationStyle,
            { opacity: this.props.isRefreshing && !this.state.isRefreshAnimationStarted ? 1 : 0 },
          ]}
          source={require('../../assets/animations/release.json')}
          progress={this.state.initAnimationProgress}
        />
        <LottieView
          style={[
            animationStyle,
            {
              opacity:
                this.state.isRefreshAnimationStarted && !this.state.isRefreshAnimationEnded ? 1 : 0,
            },
          ]}
          source={require('../../assets/animations/loading.json')}
          progress={this.state.repeatAnimationProgress}
        />
        <LottieView
          style={[animationStyle, { opacity: this.state.isRefreshAnimationEnded ? 1 : 0 }]}
          source={require('../../assets/animations/done.json')}
          progress={this.state.finalAnimationProgress}
        /> */}
        <FlatList
          // contentContainerStyle={coinListStyles.container}
          data={this.props.data}
          // extraData={this.state}
          renderItem={({ item, index }) =>
            (<CoinListCell
              item={item}
              coinMarketcapData={this.props.data}
            />)
                }
          keyExtractor={(item, index) => item.id}
          ref={(ref) => this.flatList = ref}

        />

      </View>
    )
  }
}
