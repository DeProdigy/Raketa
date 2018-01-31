import React, { Component } from 'react';
import { View, TouchableOpacity, Text, Image } from 'react-native';
// import propTypes from 'prop-types';
import coinListHeaderButtonStyles from '../styles/CoinListHeaderButtonStyles';


export default class CoinListHeaderButton extends Component {

  constructor(props) {
    super(props);
    this.handleOnPress = this.handleOnPress.bind(this);
  }

  handleOnPress() {
    this.props.onPress(this.props.index);
  }
// this.props.sortByMarketCap
  // handleOnPress() {
  //   if (this.state.isSelected) {
  //     this.setState({
  //       isAscending: !this.state.isAscending
  //     })
  //   } else {
  //     this.setState({
  //       isSelected: true
  //     })
  //   }
  // }

  render() {

    const title = this.props.title;
    const isSelected = this.props.isSelected;
    const isAscending = this.props.isAscending;

    return(

      <View style={isSelected ? coinListHeaderButtonStyles.selected : coinListHeaderButtonStyles.unselected}>
        <TouchableOpacity
          onPress={this.handleOnPress}
        >
          <View style={coinListHeaderButtonStyles.textContainer}>
            <Text style={coinListHeaderButtonStyles.title}>{title}</Text>
            { isSelected ?
              <View style={coinListHeaderButtonStyles.icon}>
                {
                 isAscending ?
                   <Image source={require('../images/icon-up-sort.png')} />
                   :
                   <Image source={require('../images/icon-down-sort.png')} />
                 }
              </View> :
              <View />
             }
          </View>
        </TouchableOpacity>
      </View>
    );
  }
}

// CoinListHeaderButton.propTypes = {
//   sortByMarketCap: propTypes.arrayOf(propTypes.any).isRequired,
//   sortByChange: propTypes.arrayOf(propTypes.any).isRequired,
//   sortByVolume: propTypes.arrayOf(propTypes.any).isRequired
// };
