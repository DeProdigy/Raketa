sortedList = (unsortedData) => {
  return unsortedData.sort((a, b) => parseFloat(b.market_cap_usd) - parseFloat(a.market_cap_usd))
}

favoritesCoinMarketcapDataFetcher = (component, favorites) => {
  var data = []
  var promises = []

  favorites.forEach((favorite) => {
    promises.push(
      fetch('https://api.coinmarketcap.com/v1/ticker/' + favorite.id)
        .then(response => response.json())
        .then((responseJson) => {
          data.push(responseJson[0])
        })
        .catch((error) => {
          console.error(error)
        })
    )
  })

  Promise.all(promises).then(() =>
    component.setState({ coinMarketcapData: sortedList(data) })
  )
}

export default favoritesCoinMarketcapDataFetcher
