import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      BTCPrice: 0
    }
  }

  componentDidMount() {
    this.fetchBTCPrice()
  }

  fetchBTCPrice() {
    return fetch('https://api.coindesk.com/v1/bpi/currentprice.json')
      .then(response => response.json())
      .then(responseJson => {
        this.setState({ BTCPrice: responseJson['bpi']['USD']['rate'] });
      })
      .catch(error => {
        console.error(error);
      });
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>Price of BTC is:</Text>
        <Text>${ this.state.BTCPrice }</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
