import React, { useState } from "react";

const App = () => {
  const [billAmount, setBillAmount] = useState(0);
  const [tipPercent, setTipPercent] = useState(15);
  const [numberPeople, setNumberPeople] = useState(1);

  const calculateTip = () => {
    const tipAmount = billAmount * tipPercent / 100;
    const totalAmount = billAmount + tipAmount;

    return {
      tipAmount,
      totalAmount,
    };
  };

  return (
    <div>
      <h1>Tip Calculator</h1>

      <div>
        <label>Bill amount:</label>
        <input
          type="number"
          value={billAmount}
          onChange={(event) => setBillAmount(event.target.value)}
        />
      </div>

      <div>
        <label>Tip percentage:</label>
        <select
          value={tipPercent}
          onChange={(event) => setTipPercent(event.target.value)}
        >
          <option value="15">15%</option>
          <option value="20">20%</option>
          <option value="25">25%</option>
          <option value="30">30%</option>
          <option value="35">35%</option>
          <option value="40">40%</option>
        </select>
      </div>

      <div>
        <label>Number of people:</label>
        <input
          type="number"
          value={numberPeople}
          onChange={(event) => setNumberPeople(event.target.value)}
        />
      </div>

      <div>
      <h1 style={{ color: "red" }}>
  ...
</h1>
        <p>
          {calculateTip().tipAmount}
        </p>
      </div>

      <div>
        <h2>Total amount:</h2>
        <p>
          {calculateTip().totalAmount}
        </p>
      </div>
    </div>
  );
};

export default App;
