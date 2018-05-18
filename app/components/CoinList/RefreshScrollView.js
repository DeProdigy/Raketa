import React, { Component } from 'react'
import { View, Animated, Easing } from 'react-native'
import LottieView from 'lottie-react-native'
import pullToRefreshFlatListStyles from '../PullToRefreshFlatList/PullToRefreshFlatListStyles'

const MIN_PULL_HEIGHT = -160

export default class RefreshScrollView extends Component {
  state = {
    didRelease: false,
  }

  onScrollEndDrag = (e) => {
    if (e.nativeEvent.contentOffset.y <= MIN_PULL_HEIGHT) {
      this.scrollview.getNode().scrollTo({ x: 0, y: -165, animated: true })
      this.setState({
        didRelease: true,
      })
      this.onReleaseAnim()
      this.animation.play(60, 180)
      setTimeout(() => {
        this.scrollview.getNode().scrollTo({ x: 0, y: 0, animated: true })
        this.setState({
          didRelease: false,
        })

        this.releaseAnimProgress = new Animated.Value(0.25)
      }, 2800)
    }
  }

  onReleaseAnim = () => {
    Animated.timing(this.releaseAnimProgress, {
      toValue: 1,
      duration: 2800,
      easing: Easing.linear,
      useNativeDriver: true,
    }).start((a) => {
      // if (a.finished) {
      //   this.setState({
      //     didRelease: false,
      //     startLoad: true,
      //     endLoad: false,
      //   })
      //   this.onLoadingAnim()
      // }
    })
  }

  lottieStyle = {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
  }

  offsetY = new Animated.Value(0)

  bgPullProgress = this.offsetY.interpolate({
    inputRange: [MIN_PULL_HEIGHT, 0],
    outputRange: [0.3333, 0],
    extrapolate: 'clamp',
  })

  rocketPullProgress = this.offsetY.interpolate({
    inputRange: [MIN_PULL_HEIGHT, 0],
    outputRange: [0.25, 0],
    extrapolate: 'clamp',
  })

  releaseAnimProgress = new Animated.Value(0.25)

  render() {
    return (
      <View>
        <View style={pullToRefreshFlatListStyles.lottieContainer}>
          <LottieView
            ref={animation => {
              this.animation = animation;
            }}
            style={this.lottieStyle}
            source={require('../../assets/animations/background.json')}
            loop={true}
            progress={this.state.didRelease ? 0 : this.bgPullProgress}
          />
          <LottieView
            style={ this.lottieStyle }
            source={require('../../assets/animations/rocket.json')}
            loop={false}
            progress={this.state.didRelease ? this.releaseAnimProgress : this.rocketPullProgress}
          />
        </View>
        <Animated.ScrollView
          ref={c => (this.scrollview = c)}
          {...this.props}
          onScrollEndDrag={this.onScrollEndDrag}
          scrollEventThrottle={1}
          onScroll={Animated.event(
            [
              {
                nativeEvent: {
                  contentOffset: { y: this.offsetY },
                },
              },
            ],
            {
              useNativeDriver: true,
            },
          )}
        />
      </View>
    )
  }
}
