import { useState } from "react";
import InputBox from "./components/InputBox";
import useCurrencyInfo from "./hooks/useCurrencyInfo";
import "./App.css";

const App = () => {
  const [amount, setAmount] = useState(1);
  const [fromCurrency, setFromCurrency] = useState("USD");
  const [toCurrency, setToCurrency] = useState("INR");
  const [convertedAmount, setConvertedAmount] = useState(0);

  const rates = useCurrencyInfo(fromCurrency);
  const currencyOptions = Object.keys(rates || {});

  const swapCurrencies = () => {
    setFromCurrency(toCurrency);
    setToCurrency(fromCurrency);
    setAmount(convertedAmount);
    setConvertedAmount(amount);
  };

  const convertCurrency = () => {
    if (!rates[toCurrency]) return;
    setConvertedAmount((amount * rates[toCurrency]).toFixed(2));
  };

  return (
    <div
      className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
      style={{
        backgroundImage: `url('https://images.pexels.com/photos/3532540/pexels-photo-3532540.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')`,
      }}
    >
      <div className="w-full max-w-md mx-auto border border-gray-300 rounded-lg p-5 backdrop-blur-md bg-white/30 shadow-lg">
        <h1 className="text-2xl font-bold text-center mb-4 text-gray-800">
          Currency Converter
        </h1>

        <form
          onSubmit={(e) => {
            e.preventDefault();
            convertCurrency();
          }}
        >
          <InputBox
            amount={amount}
            onAmountChange={setAmount}
            currency={fromCurrency}
            onCurrencyChange={setFromCurrency}
            currencyOptions={currencyOptions}
          />

          <div className="relative w-full flex justify-center my-2">
            <button
              type="button"
              className="border border-white rounded-md bg-blue-600 text-white px-3 py-1 shadow-md hover:bg-blue-700 transition"
              onClick={swapCurrencies}
            >
              Swap 🔄
            </button>
          </div>

          <InputBox
            amount={convertedAmount}
            onAmountChange={() => {}} // Read-only
            currency={toCurrency}
            onCurrencyChange={setToCurrency}
            currencyOptions={currencyOptions}
          />

          <button
            type="submit"
            className="w-full mt-4 bg-blue-500 text-white py-3 px-4 rounded-lg hover:bg-blue-600 transition"
          >
            Convert {fromCurrency} to {toCurrency}
          </button>
        </form>
      </div>
    </div>
  );
};

export default App;
