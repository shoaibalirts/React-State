import { useState } from "react";

function App() {
  const [price, setPrice] = useState(100);
  console.log(price);
  function updatePriceHandle() {
    setPrice(75);
  }
  return (
    <div>
      <p data-testid="price">${price}</p>
      <button onClick={updatePriceHandle}>Apply Discount</button>
    </div>
  );
}

export default App;
