import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import coinListCellHeaderButtonStyles from '../styles/CoinListCellHeaderButtonStyles';

export default class CoinListCellHeaderButton extends Component {

  handleOnPress = () => {
    this.props.onPress(this.props.index);
  }

  render() {
    const s = coinListCellHeaderButtonStyles;
    const isSelected = this.props.isSelected;
    const text = this.props.text;

    return(
      <View>
        <TouchableOpacity
          key={text}
          style={isSelected ?
            [s.unselected, s.selected] :
            s.unselected}
          onPress={this.handleOnPress}
        >
          <Text style={isSelected ?
            [s.buttonTextUnselected, s.buttonTextSelected] : s.buttonTextUnselected}
          >{text}
          </Text>
        </TouchableOpacity>
      </View>
    );
  }
}
