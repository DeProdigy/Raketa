const perPage = 100

coinMarketcapDataFetcher = (component) => {
  return fetch('https://api.coinmarketcap.com/v1/ticker/?start=' + (perPage * component.state.coinMarketcapDataSubset) + '&limit=' + perPage)
    .then(response => response.json())
    .then((responseJson) => {
      component.setState({
        coinMarketcapData: component.state.coinMarketcapData.concat(responseJson),
        coinMarketcapDataSubset: component.state.coinMarketcapDataSubset + 1
      })
    })
    .catch((error) => {
      console.error(error)
    })
}

export default coinMarketcapDataFetcher
