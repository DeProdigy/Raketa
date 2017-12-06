import React from 'react';
import { StyleSheet, Text, TextInput, Button, View } from 'react-native';

export default class InputScreen extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      amount: '0',
      price: '0',
    }
  }

  updateAmountInput(amount) {
    this.setState({ amount: amount })
  }

  updatePriceInput(price) {
    this.setState({ price: price})
  }

  handleSubmit() {
    this.props.addTransaction(this.state.amount, this.state.price)
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>How many BTC did you purchase?</Text>
        <TextInput
          style={styles.input}
          keyboardType='numeric'
          placeholder='0.00'
          value={ this.state.amount }
          onChangeText={ input => this.updateAmountInput(input) }
        />
        <Text>At what price $$$?</Text>
        <TextInput
          style={styles.input}
          keyboardType='numeric'
          placeholder='0.00'
          value={ this.state.price }
          onChangeText={ input => this.updatePriceInput(input) }
        />

        <Button
          title="Submit"
          onPress={ () => this.props.addTransaction(this.state.amount, this.state.price) }
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
