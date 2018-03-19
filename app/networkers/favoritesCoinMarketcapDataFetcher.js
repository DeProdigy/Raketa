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
      component.setState({ coinMarketcapData: data, coinMarketcapDataFetched: true })
  );
}

export default favoritesCoinMarketcapDataFetcher
