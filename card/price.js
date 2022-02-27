const btcusdUrl = 'https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=usd&include_market_cap=true&include_24hr_change=true';
let refreshCount = 0;
async function getBTCUSD() {
    const response = await fetch(btcusdUrl);
    const data = await response.json();
    btcusdPrice = data.bitcoin.usd;
    btcusdPriceFormat = Intl.NumberFormat('us-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 }).format(btcusdPrice)
    btcMarketCap = data.bitcoin.usd_market_cap;
    btcMarketCapFormat = Intl.NumberFormat('us-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 }).format(btcMarketCap)
    btc24hr = data.bitcoin.usd_24h_change;
    document.getElementById("btcusd").innerHTML = "BTC " + btcusdPriceFormat;
    document.getElementById("tabTitle").innerHTML = "BTC " + btcusdPriceFormat;
    document.getElementById("description").innerHTML = "The current total market capitalization is " + btcMarketCapFormat;
    document.getElementById('rollerCoaster').style = "transform: rotate(90deg);"
    
    if (btc24hr > 0) {
        document.getElementById('rollerCoaster').style = "transform: rotate(180deg);"
        console.log("pump")
    } else if (btc24hr == 0) {
        console.log("meh")
    } else {
        document.getElementById('rollerCoaster').style = "transform: rotate(0deg);"
        console.log("dump")
    }
    
    console.log(data);
    console.log(btcusdPriceFormat);
    console.log(btcMarketCapFormat);
    console.log(btc24hr);
    refreshCount++;
    console.log(refreshCount);
}


getBTCUSD();
setInterval(getBTCUSD, 60000);
