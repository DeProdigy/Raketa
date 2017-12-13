import React from 'react';
import { StyleSheet, Text, TextInput, Button, View, Picker } from 'react-native';

export default class InputScreen extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      amount: '0',
      price: '0',
      ticker: '',
      tickers: [
        'BTC',
        'ETH',
        'LTC',
      ],
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
    let serviceItems = this.state.tickers.map( (s, i) => {
        return <Picker.Item key={i} value={s} label={s} />
    });

    return (
      <View style={styles.container}>
        <Text>Which ticker?</Text>
        <Picker
          style={styles.picker}
          selectedValue={this.state.ticker}
          onValueChange={(itemValue, itemIndex) => this.setState({ticker: itemValue})}
          enabled={true}>
          {serviceItems}
        </Picker>

        <Text>How many did you purchase?</Text>
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
          onPress={ () => this.props.addTransaction(this.state.amount, this.state.price, this.state.ticker) }
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
  },
  picker: {
    flex: 1,
    height: 100,
    width: '100%',
    padding: 10,
  },
});
