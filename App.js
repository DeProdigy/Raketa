import React from 'react';
import { StyleSheet, Text, TextInput, Button, View, FlatList } from 'react-native';

export default class App extends React.Component {
  constructor(props) {
    super(props);
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

  render() {
    return (
      <View style={styles.container}>
          <Text>You are here</Text>
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
});
