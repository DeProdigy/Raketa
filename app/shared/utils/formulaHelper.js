const formulaHelper = {
  getChangeAmount: (currentPrice, percentageChange) => ((percentageChange / 100.00) * currentPrice),
  getFormatedPrice: (price) => {
    priceInt = parseFloat(price)

    if (priceInt > 1) {
      return priceInt.toFixed(2)
    } else {
      return priceInt.toFixed(5)
    }
  },
}

export default formulaHelper
