import React from 'react';
import { View, Text, FlatList, Image } from 'react-native';

import styles from './styles/MainStyles';

export default class CoinList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      cryptoCompareData: this.props.cryptoCompareData,
      coinMarketcapData: this.props.coinMarketcapData,
    }
  }

  coinImage(coin) {
    if (coin.symbol == 'MIOTA') {
      return 'https://www.cryptocompare.com/media/1383540/iota_logo.png';
    } else if (coin.symbol == 'BCC') {
      return 'https://www.cryptocompare.com/media/9350709/bccoin1.png';
    } else if (this.state.cryptoCompareData['Data'][coin.symbol]) {
      return 'https://www.cryptocompare.com' + this.state.cryptoCompareData['Data'][coin.symbol]['ImageUrl'];
    } else {
      return 'https://www.moneymetals.com/images/products/10-dollar-liberty-gold-coin-20140321124620.jpg';
    }
  }

  render() {
    return (
        <View style={styles.container}>
            <FlatList
                data={this.state.coinMarketcapData}
                renderItem={({item, index}) =>
                    <View style={styles.listCell}>
                        <Text>
                            #{index + 1}
                        </Text>
                        <Image
                            style={styles.listCellImage}
                            source={{uri: this.coinImage(item)}}
                        />
                        <Text style={styles.listCellInfo}>
                            {item.symbol}
                        </Text>
                        <Text style={styles.listCellInfo}>
                            ${item.price_usd}
                        </Text>
                    </View>
                }
                keyExtractor={(item, index) => index}
            />
        </View>
    );
  }
}
