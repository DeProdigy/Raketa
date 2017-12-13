import React from 'react';
import { StyleSheet, Text, TextInput, Button, View, FlatList } from 'react-native';
import InputScreen from './InputScreen';

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      showInputs: false,
      currentBTCPrice: 0,
      transactions: [],
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
    let delta = 0;
    this.state.transactions.forEach((transaction) => {
      delta += (this.state.currentBTCPrice * transaction.amount) - (transaction.amount * transaction.price);
    })

    return parseFloat(delta).toFixed(2);
  }

  addTransaction(amount, price) {
    let newTransaction = { amount: parseFloat(amount), price: parseFloat(price).toFixed(2) || 0 };
    this.setState( { transactions: this.state.transactions.concat([newTransaction]) } || 0 );
    this.toggleInputScreen();
  }

  toggleInputScreen() {
    this.setState({ showInputs: !this.state.showInputs });
  }

  render() {
    if (this.state.showInputs) {
      return (
        <InputScreen addTransaction={ this.addTransaction.bind(this) }/>
      );
    } else {
      return (
        <View style={styles.container}>
          <Text>You are up: </Text>
          <Text>${ this.calculateDiff() }</Text>

          <Text>Price of BTC is:</Text>
          <Text>${ this.state.currentBTCPrice }</Text>

          <Button
            title='Add Transaction'
            onPress={ () => this.toggleInputScreen() }
          />
        </View>
      );
    }
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
