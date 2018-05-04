import React, { Component } from 'react'
import { View, FlatList } from 'react-native'
import pullToRefreshFlatListStyles from './PullToRefreshFlatListStyles'
import RefreshScrollView from '../CoinList/RefreshScrollView'

export default class PullToRefreshFlatList extends Component {
  state = {
    didRelease: false,
  }

  renderScrollComponent = props => (
    <RefreshScrollView
      {...props}
    />
  )

  render() {
    return (
      <View>
        <FlatList
          ref={(ref) => {
            this.animatedFlatList = ref
          }}
          contentContainerStyle={pullToRefreshFlatListStyles.container}
          data={this.props.data}
          renderItem={this.props.renderItem}
          keyExtractor={(item, index) => item.id}
          onEndReachedThreshold={0.6}
          onEndReached={this.props.onEndReached}
          renderScrollComponent={this.renderScrollComponent}
        />
      </View>
    )
  }
}
