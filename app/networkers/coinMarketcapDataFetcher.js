coinMarketcapDataFetcher = (component) => {
  return fetch('https://api.coinmarketcap.com/v1/ticker/?limit=100')
    .then(response => response.json())
    .then((responseJson) => {
      component.setState({ coinMarketcapData: responseJson, coinMarketcapDataFetched: true })
    })
    .catch((error) => {
      console.error(error)
    })
}

export default coinMarketcapDataFetcher
