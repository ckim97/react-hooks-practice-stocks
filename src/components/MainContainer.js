import React, {useEffect, useState} from "react";
import StockContainer from "./StockContainer";
import PortfolioContainer from "./PortfolioContainer";
import SearchBar from "./SearchBar";

function MainContainer() {

  const [stocks, setStocks] = useState([]);
  const [boughtStocks, setBoughtStocks] = useState([]);
  
  console.log(boughtStocks);

  useEffect(() => {
    fetch("http://localhost:3001/stocks")
      .then(r => r.json())
      .then((data) => setStocks(data))
  },[]);

  function handleAddStock(stockToAdd) {
    const stockInPortfolio = boughtStocks.find(
      (stock) => stock.id === stockToAdd.id
    );
    if (!stockInPortfolio) {
      setBoughtStocks([...boughtStocks, stockToAdd]);
    }
  }

function handleRemoveStock(stockObject) {
  setBoughtStocks((boughtStocks) => 
    boughtStocks.filter((stock) => stock.id !== stockObject.id)
  );
}
  


  return (
    <div>
      <SearchBar />
      <div className="row">
        <div className="col-8">
          <StockContainer stocks={stocks} onAddStock={handleAddStock}/>
        </div>
        <div className="col-4">
          <PortfolioContainer boughtStocks={boughtStocks} onRemoveStock={handleRemoveStock}/>
        </div>
      </div>
    </div>
  );
}

export default MainContainer;
