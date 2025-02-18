import React from "react";

const InputBox = ({
  amount,
  onAmountChange,
  currency,
  onCurrencyChange,
  currencyOptions,
}) => {
  return (
    <div className="flex items-center border border-gray-300 rounded-lg p-3 bg-white shadow-sm">
      <input
        type="number"
        value={amount}
        onChange={(e) => onAmountChange(number(e.target.value))}
        className="w-full p-2 border-none outline-none text-lg bg-transparent"
        placeholder="Enter amount"
      />
      <select
        value={currency}
        onChange={(e) => onCurrencyChange(e.target.value)}
        className="ml-2 p-2 border border-gray-300 rounded-md bg-gray-100 cursor-pointer"
      >
        {currencyOptions.map((cur) => (
          <option key={cur} value={cur}>
            {cur}
          </option>
        ))}
      </select>
    </div>
  );
};

export default InputBox;
