
let baseUrl = "https://api.coincap.io/v2/";

async function getAssets() {
    let assetsUrl = baseUrl + "assets"
    let req = await fetch(assetsUrl);
    let res = await req.json();
    assetsData = res.data;
    for( x = 0 ; x < assetsData.length ; x++){
        let tokenName = assetsData[x]["name"];
        let tokenRank = assetsData[x]["rank"];
        let tokenSymbol = assetsData[x]["symbol"];

        let tokenPrice = assetsData[x]["priceUsd"];
        tokenPrice = "$" + parseFloat(tokenPrice).toFixed(2);

        let marketCap = assetsData[x]["marketCapUsd"];
        marketCap = parseFloat(marketCap).toFixed(2);
        marketCap = numConverter(marketCap);
        
        let vwap24Hr = assetsData[x]["vwap24Hr"];
        vwap24Hr = "$" + parseFloat(vwap24Hr).toFixed(2);

        let supply = assetsData[x]["supply"];
        supply = numConverter(supply);

        let volume24Hr = assetsData[x]["volumeUsd24Hr"];
        volume24Hr = numConverter(volume24Hr);

        let change24Hr = assetsData[x]["changePercent24Hr"];
        change24Hr = parseFloat(change24Hr).toFixed(2) + "%";



        renderitems(tokenName , tokenRank , tokenSymbol, tokenPrice , marketCap , vwap24Hr , supply , volume24Hr , change24Hr);
    }

    
    
}
    

function renderitems(name , rank , symbol , price , marketcap , vwap24Hr , supply , volume24Hr , change24Hr){
    let token_table = document.querySelector("tbody");
    let token_info = document.createElement("tr");
    let rank_lbl = document.createElement("td");
    let token_name = document.createElement("td");
    let token_symbol = document.createElement("div");
    let token_price = document.createElement("td");
    let market_cap = document.createElement("td");
    let vwap_24Hr = document.createElement("td");
    let supply_var = document.createElement("td");
    let volume_24Hr = document.createElement("td");
    let change_24Hr = document.createElement("td");


    token_name.textContent = name;
    rank_lbl.textContent = rank;
    token_symbol.textContent = symbol;
    token_price.textContent = price;
    market_cap.textContent = marketcap;
    vwap_24Hr.textContent = vwap24Hr;
    supply_var.textContent = supply;
    volume_24Hr.textContent = volume24Hr
    change_24Hr.textContent = change24Hr

    token_info.classList.add("tokenData");


    token_info.appendChild(rank_lbl);
    token_info.appendChild(token_name);
    token_name.appendChild(token_symbol);
    token_info.appendChild(token_price);
    token_info.appendChild(market_cap);
    token_info.appendChild(vwap_24Hr);
    token_info.appendChild(supply_var);
    token_info.appendChild(volume_24Hr);
    token_info.appendChild(change_24Hr);

    token_table.appendChild(token_info);

}


function numConverter(num){
    if (num >= 1000000 && num < 1000000000) {
      return "$" + (num / 1000000).toFixed(2) + "M";
    } else if (num >= 1000000000 && num < 1000000000000) {
      return "$" + (num / 1000000000).toFixed(2) + "B";
    } else if (num >= 1000000000000 && num < 1000000000000000) {
      return "$" + (num / 1000000000000).toFixed(2) + "T";
    }
  
  }


getAssets();