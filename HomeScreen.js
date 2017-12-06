import React from 'react';
import { StyleSheet, Text, TextInput, Button, View } from 'react-native';

export default class HomeScreen extends React.Component {
  constructor(props) {
    super(props);

    const params = this.props.navigation.state.params ? this.props.navigation.state.params : {};

    this.state = {
      currentBTCPrice: '0',
      purchasedBTCAmount: params.purchasedBTCAmount || '0',
      purchasedBTCPrice: params.purchasedBTCPrice || '0',
    }
  }

  static navigationOptions = {
    title: 'Welcome',
  };

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

  render() {
    const { navigate } = this.props.navigation;

    return (
      <View style={styles.container}>
        <Text>You are up: </Text>
        <Text>${ this.calculateDiff() }</Text>

        <Text>Price of BTC is:</Text>
        <Text>${ this.state.currentBTCPrice }</Text>

        <Button
          title="Inputs"
          onPress={ () => navigate('Inputs') }
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
