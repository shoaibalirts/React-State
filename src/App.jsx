import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p data-testid="price">$100</p>
      <button>Apply Discount</button>
    </div>
  );
}

export default App;
