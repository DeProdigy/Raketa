import React, { Component } from 'react'
import { View, Animated, Easing } from 'react-native'
import LottieView from 'lottie-react-native'
import pullToRefreshFlatListStyles from '../PullToRefreshFlatList/PullToRefreshFlatListStyles'

const MIN_PULL_HEIGHT = -160

export default class RefreshScrollView extends Component {
  state = {
    didRelease: false,
    startLoad: false,
    endLoad: false,
    // offsetY: new Animated.Value(0),
  }

  onScrollEndDrag = (e) => {
    if (e.nativeEvent.contentOffset.y <= MIN_PULL_HEIGHT) {
      this.scrollview.getNode().scrollTo({ x: 0, y: -165, animated: true })
      // this.props.scrollViewIsOffset(true)
      this.setState({
        didRelease: true,
      })
      this.onReleaseAnim()
      // this.releaseRocketAnim()
      setTimeout(() => {
        this.scrollview.getNode().scrollTo({ x: 0, y: 0, animated: true })
        this.setState({
          didRelease: false,
        })

        // this.backgroundAnimProgress = new Animated.Value(0)

        this.releaseAnimProgress = new Animated.Value(0.1667)
        //
        // this.loadingAnimProgress = new Animated.Value(0)
        //
        // this.doneAnimProgress = new Animated.Value(0)
      }, 4000)
    }
  }


  // backgroundAnim = () => {
  //   Animated.timing(this.releaseAnimProgress, {
  //     toValue: 1,
  //     duration: 2000,
  //     easing: Easing.linear,
  //     useNativeDriver: true,
  //   }).start((a) => {
  //     // if (a.finished) {
  //     //   this.setState({
  //     //     didRelease: false,
  //     //     startLoad: true,
  //     //     endLoad: false,
  //     //   })
  //     //   this.onLoadingAnim()
  //     // }
  //   })
  // }



  onReleaseAnim = () => {
    Animated.timing(this.releaseAnimProgress, {
      toValue: 1,
      duration: 4000,
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

  onLoadingAnim = () => {
    Animated.timing(this.loadingAnimProgress, {
      toValue: 1,
      duration: 1000,
      easing: Easing.linear,
      useNativeDriver: true,
    }).start((a) => {
      if (a.finished) {
        this.setState({
          didRelease: false,
          startLoad: false,
          endLoad: true,
        })
        this.onDoneAnim()
      }
    })
  }

  onDoneAnim = () => {
    Animated.timing(this.doneAnimProgress, {
      toValue: 1,
      duration: 500,
      easing: Easing.linear,
      useNativeDriver: true,
    }).start((a) => {
      if (a.finished) {
        this.setState({
          didRelease: false,
          startLoad: false,
          endLoad: false,
        })
      }
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

  pullProgress = this.offsetY.interpolate({
    inputRange: [MIN_PULL_HEIGHT, 0],
    outputRange: [0.1667, 0],
    extrapolate: 'clamp',
  })

  releaseAnimProgress = new Animated.Value(0.1667)

  loadingAnimProgress = new Animated.Value(0)

  doneAnimProgress = new Animated.Value(0)

  backgroundAnimProgress = new Animated.Value(0)


  render() {
    return (
      <View>
        <View style={pullToRefreshFlatListStyles.lottieContainer}>
          {/* <LottieView
            style={this.lottieStyle}
            source={require('../../assets/animations/background-only.json')}
            loop={false}
            progress={this.backgroundAnimProgress}
          /> */}
          <LottieView
            style={ this.lottieStyle }
            source={require('../../assets/animations/rocket-only.json')}
            loop={false}
            progress={this.state.didRelease ? this.releaseAnimProgress : this.pullProgress}
          />
          {/* <LottieView
            style={[this.lottieStyle, this.state.didRelease ? { opacity: 1.0 } : { opacity: 0.0 }]}
            source={require('../../assets/animations/release.json')}
            loop={false}
            progress={this.releaseAnimProgress}
          />
          <LottieView
            style={[this.lottieStyle, this.state.startLoad ? { opacity: 1.0 } : { opacity: 0.0 }]}
            source={require('../../assets/animations/loading.json')}
            loop={true}
            progress={this.loadingAnimProgress}
          />
          <LottieView
            style={[this.lottieStyle, this.state.endLoad ? { opacity: 1.0 } : { opacity: 0.0 }]}
            source={require('../../assets/animations/done.json')}
            loop={false}
            progress={this.doneAnimProgress}
          /> */}
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
              // isInteraction: false,
            },
          )}
        />
      </View>
    )
  }
}
