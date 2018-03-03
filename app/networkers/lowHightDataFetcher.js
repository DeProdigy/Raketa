lowHightDataFetcher = (component, symbol) => {
  return fetch('https://chasing-coins.com/api/v1/std/highlow_24h/' + symbol)
    .then(response => response.json())
    .then((responseJson) => {
      component.setState({ low: '$' + responseJson.low, high: '$' + responseJson.high, fetchedData: true })
    })
    .catch((error) => {
      console.error(error)
    })
}

export default lowHightDataFetcher
