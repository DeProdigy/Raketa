import React from 'react';
import { StyleSheet, Text, TextInput, Button, View } from 'react-native';

export default class InputsScreen extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      currentBTCPrice: '0',
      purchasedBTCAmount: '0',
      purchasedBTCPrice: '0',
    }
  }

  componentDidMount() {
    this.fetchCurrentBTCPrice()
  }

  fetchCurrentBTCPrice() {
    return fetch('https://api.coindesk.com/v1/bpi/currentprice.json')
      .then(response => response.json())
      .then(responseJson => {
        this.setState({ currentBTCPrice: parseFloat(responseJson['bpi']['USD']['rate_float']).toFixed(2) });
      })
      .catch(error => {
        console.error(error);
      });
  }

  calculateDiff() {
    return (
      (
        parseFloat(this.state.currentBTCPrice).toFixed(2) -
        parseFloat(this.state.purchasedBTCPrice
      ).toFixed(2)) * this.state.purchasedBTCAmount
    ).toFixed(2);
  }

  updateAmountInput(purchasedBTCAmount) {
    this.setState({ purchasedBTCAmount: purchasedBTCAmount })
  }

  updatePriceInput(purchasedBTCPrice) {
    this.setState({ purchasedBTCPrice: purchasedBTCPrice})
  }

  render() {
    const { navigate } = this.props.navigation;

    return (
      <View style={styles.container}>
        <Text>Price of BTC is:</Text>
        <Text>${ this.state.currentBTCPrice }</Text>

        <Text>How many BTC did you purchase?</Text>
        <TextInput
          style={styles.input}
          keyboardType='numeric'
          placeholder='0.00'
          value={ this.state.purchasedBTCAmount }
          onChangeText={ input => this.updateAmountInput(input) }
        />
        <Text>At what price $$$?</Text>
        <TextInput
          style={styles.input}
          keyboardType='numeric'
          placeholder='0.00'
          value={ this.state.purchasedBTCPrice }
          onChangeText={ input => this.updatePriceInput(input) }
        />

        <Text>You are up: </Text>
        <Text>${ this.calculateDiff() }</Text>

        <Button
          title="Home"
          onPress={ () => navigate('Home') }
        />
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
    padding: 50,
  },
  input: {
    borderColor: '#000',
    borderWidth: 1,
    height: 50,
    width: '100%',
    padding: 10,
  }
});
