console.log('to da mun')
let dates = [];
let prices = [];
let latestPrice = 0;
async function plotGraph(_idCanvas, _apiurl, _idPrice) {
    await getData(_apiurl)
    const labels = dates;
    
    const data = {
        labels: labels,
        datasets: [{
          label: 'USD',
          backgroundColor: '#84cfc7',
          borderColor: '#84cfc7',
          data: prices,
        }]
      };
    
    const config = {
        type: 'line',
        data: data,
        options: {
            scales:{
                x: {
                    display: false
                },
                y: {
                    display: true
                }
            },
            plugins: {
                legend: {
                    display: false,
                }
            },
            maintainAspectRatio: false
        }
    }
    
    
    const myChart = await new Chart(
        document.getElementById(_idCanvas),
        config
    );
    dates = [];
    prices = [];

    
    document.getElementById(_idPrice).innerHTML = latestPrice;
    
    

}
async function getData(btcURL) {
    const response = await fetch(btcURL)
    const data = await response.json();
    const pair = data.prices;
    Object.values(pair).forEach (_pair =>{
        dates.push(new Date(_pair[0]).toLocaleString("en-US", {dateStyle: "medium"}));
        prices.push(_pair[1].toFixed(2));
    const latestPair = pair[30];
    latestPrice = latestPair[1].toFixed(2);
        
})
}

plotGraph("btcLine","https://api.coingecko.com/api/v3/coins/bitcoin/market_chart?vs_currency=usd&days=30&interval=daily", "btcPrice");
// plotGraph("ethLine","https://api.coingecko.com/api/v3/coins/ethereum/market_chart?vs_currency=usd&days=30&interval=daily", "ethPrice");
// plotGraph("solLine","https://api.coingecko.com/api/v3/coins/solana/market_chart?vs_currency=usd&days=30&interval=daily", "solPrice");
// plotGraph("dotLine","https://api.coingecko.com/api/v3/coins/polkadot/market_chart?vs_currency=usd&days=30&interval=daily", "dotPrice");

setTimeout(plotGraph,500,"ethLine","https://api.coingecko.com/api/v3/coins/ethereum/market_chart?vs_currency=usd&days=30&interval=daily", "ethPrice");
setTimeout(plotGraph,1000,"solLine","https://api.coingecko.com/api/v3/coins/solana/market_chart?vs_currency=usd&days=30&interval=daily", "solPrice");
setTimeout(plotGraph,1500,"dotLine","https://api.coingecko.com/api/v3/coins/polkadot/market_chart?vs_currency=usd&days=30&interval=daily", "dotPrice");
/* randomly pick a quote to display*/
titleQuotes = ['"Buy high, sell low, easier done than said."','"I am not and financial advidor, that being said..."','"When your taxi driver tells you to buy bitcoin, shill them your shitcoin instead."','"Trust me bruv, it literally cant go tits up"','"When there is blood on the street, oh shit I better sell"'];
document.getElementById("heroTitle").innerHTML = titleQuotes[Math.floor(Math.random() * titleQuotes.length)];

/*show price in card*/
