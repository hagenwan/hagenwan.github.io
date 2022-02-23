const btcusdUrl = 'https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=usd&include_market_cap=true';
async function getBTCUSD() {
    const response = await fetch(btcusdUrl);
    const data = await response.json();
    btcusdPrice = data.bitcoin.usd;
    btcusdPriceFormat = Intl.NumberFormat('us-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 }).format(btcusdPrice)
    btcMarketCap = data.bitcoin.usd_market_cap;
    btcMarketCapFormat = Intl.NumberFormat('us-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 }).format(btcMarketCap)
    document.getElementById("btcusd").innerHTML = "BTC " + btcusdPriceFormat;
    document.getElementById("tabTitle").innerHTML = "BTC " + btcusdPriceFormat;
    document.getElementById("description").innerHTML = "The current total market capitalization is " + btcMarketCapFormat;
    console.log(data);
    console.log(btcusdPriceFormat);
    console.log(btcMarketCapFormat);
}

getBTCUSD();
