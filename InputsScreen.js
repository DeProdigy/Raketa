import React from 'react';
import { StyleSheet, Text, TextInput, Button, View } from 'react-native';

export default class InputsScreen extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      purchasedBTCAmount: '0',
      purchasedBTCPrice: '0',
    }
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

        <Button
          title="Submit"
          onPress={ () => navigate('Home', {
            purchasedBTCAmount: this.state.purchasedBTCAmount,
            purchasedBTCPrice: this.state.purchasedBTCPrice
          }) }
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
