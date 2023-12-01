import React from "react";
import Stock from "./Stock";

function PortfolioContainer({boughtStocks, onRemoveStock}) {

  const renderPurchased = boughtStocks.map((stock) => <Stock key={stock.id} stock={stock} onStockClick={onRemoveStock}/>);

  return (
    <div>
      <h2>My Portfolio</h2>
      {renderPurchased}
    </div>
  );
}

export default PortfolioContainer;
