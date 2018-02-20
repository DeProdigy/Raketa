import React, { Component } from 'react';
import { View, TouchableOpacity, Text, Image } from 'react-native';
// import propTypes from 'prop-types';
import coinListHeaderButtonStyles from '../styles/CoinListHeaderButtonStyles';


export default class CoinListHeaderButton extends Component {

  constructor(props) {
    super(props);
  }

  handleOnPress() {
    this.props.onPress(this.props.index);
    this.props.sortCallback();
  }


  render() {
    const title = this.props.title;
    const isSelected = this.props.isSelected;
    const isAscending = this.props.isAscending;

    return(
      <View style={
        isSelected ?
        coinListHeaderButtonStyles.selected :
        coinListHeaderButtonStyles.unselected}
      >
        <TouchableOpacity onPress={this.handleOnPress.bind(this)}>
          <View style={coinListHeaderButtonStyles.textContainer}>
            <Text style={coinListHeaderButtonStyles.title}>{title}</Text>
            { isSelected ?
              <View style={coinListHeaderButtonStyles.icon}>
                <Image
                  source={
                    isAscending ?
                    require('../images/icon-up-sort.png') :
                    require('../images/icon-down-sort.png')
                  }
                />
              </View> :
              <View />
             }
          </View>
        </TouchableOpacity>
      </View>
    );
  }
}
