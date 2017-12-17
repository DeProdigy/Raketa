import React from 'react';
import { View, Text, FlatList, Image, Button } from 'react-native';

import styles from './styles/MainStyles';

export default class CoinList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      cryptoCompareData: this.props.cryptoCompareData,
      coinMarketcapData: this.props.coinMarketcapData,
      sortByNameAscending: true,
      sortByMarketCapAscending: true,
      sortByPriceAscending: true,
      sortByChangeAscending: true,
      sortByVolumeAscending: true,
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

  sortByMarketCap() {
    let sortedList;

    if (this.state.sortByMarketCap) {
      sortedList = this.state.coinMarketcapData.sort(function(a, b) {
        return parseFloat(a.market_cap_usd) - parseFloat(b.market_cap_usd);
      });
    } else {
      sortedList = this.state.coinMarketcapData.sort(function(a, b) {
        return parseFloat(b.market_cap_usd) - parseFloat(a.market_cap_usd);
      });
    }

    this.setState({
      coinMarketcapData: sortedList,
      sortByMarketCap: !this.state.sortByMarketCap,
    });
  }

  sortByPrice() {
    let sortedList;

    if (this.state.sortByPriceAscending) {
      sortedList = this.state.coinMarketcapData.sort(function(a, b) {
        return parseFloat(a.price_usd) - parseFloat(b.price_usd);
      });
    } else {
      sortedList = this.state.coinMarketcapData.sort(function(a, b) {
        return parseFloat(b.price_usd) - parseFloat(a.price_usd);
      });
    }

    this.setState({
      coinMarketcapData: sortedList,
      sortByPriceAscending: !this.state.sortByPriceAscending,
    });
  }

  sortbyName() {
    let sortedList;

    if (this.state.sortByNameAscending) {
      sortedList = this.state.coinMarketcapData.sort(function(a, b) {
        var nameA = a.name.toUpperCase(); // ignore upper and lowercase
        var nameB = b.name.toUpperCase(); // ignore upper and lowercase
        if (nameA < nameB) {
          return -1;
        }
        if (nameA > nameB) {
          return 1;
        }
        // names must be equal
        return 0;
      });
    } else {
      sortedList = this.state.coinMarketcapData.sort(function(a, b) {
        var nameA = a.name.toUpperCase(); // ignore upper and lowercase
        var nameB = b.name.toUpperCase(); // ignore upper and lowercase
        if (nameB < nameA) {
          return -1;
        }
        if (nameB > nameA) {
          return 1;
        }
        // names must be equal
        return 0;
      });
    }

    this.setState({
      coinMarketcapData: sortedList,
      sortByNameAscending: !this.state.sortByNameAscending,
    });
  }

  sortByChange() {
    let sortedList;

    if (this.state.sortByChangeAscending) {
      sortedList = this.state.coinMarketcapData.sort(function(a, b) {
        return parseFloat(a.percent_change_24h) - parseFloat(b.percent_change_24h);
      });
    } else {
      sortedList = this.state.coinMarketcapData.sort(function(a, b) {
        return parseFloat(b.percent_change_24h) - parseFloat(a.percent_change_24h);
      });
    }

    this.setState({
      coinMarketcapData: sortedList,
      sortByChangeAscending: !this.state.sortByChangeAscending,
    });
  }

  sortByVolume() {
    let sortedList;

    if (this.state.sortByVolumeAscending) {
      sortedList = this.state.coinMarketcapData.sort(function(a, b) {
        return parseFloat(a['24h_volume_usd']) - parseFloat(b['24h_volume_usd']);
      });
    } else {
      sortedList = this.state.coinMarketcapData.sort(function(a, b) {
        return parseFloat(b['24h_volume_usd']) - parseFloat(a['24h_volume_usd']);
      });
    }

    this.setState({
      coinMarketcapData: sortedList,
      sortByVolumeAscending: !this.state.sortByVolumeAscending,
    });
  }

  render() {
    return (
        <View style={styles.container}>
            <Button
                title='Name'
                onPress={this.sortbyName.bind(this)}
            />

            <Button
                title='Market Cap'
                onPress={this.sortByMarketCap.bind(this)}
            />

            <Button
                title='Price'
                onPress={this.sortByPrice.bind(this)}
            />

            <Button
                title='Change'
                onPress={this.sortByChange.bind(this)}
            />

            <Button
                title='Volume'
                onPress={this.sortByVolume.bind(this)}
            />

            <FlatList
                data={this.state.coinMarketcapData}
                extraData={this.state}
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
                            {item.name}
                        </Text>
                        <Text style={styles.listCellInfo}>
                            ${item.price_usd}
                        </Text>
                        <Text style={styles.listCellInfo}>
                            ${item.market_cap_usd}
                        </Text>
                        <Text style={styles.listCellInfo}>
                            {item.percent_change_24h}%
                        </Text>
                        <Text style={styles.listCellInfo}>
                            ${item['24h_volume_usd']}
                        </Text>
                    </View>
                }
                keyExtractor={(item, index) => index}
            />
        </View>
    );
  }
}
