import { useEffect, useState } from "react";

function useCurrencyInfo(baseCurrency) {
  const [rates, setRates] = useState({});

  useEffect(() => {
    fetch(`https://api.exchangerate-api.com/v4/latest/${baseCurrency}`)
      .then((res) => res.json())
      .then((data) => setRates(data.rates))
      .catch((error) => console.error("Error fetching currency data:", error));
  }, [baseCurrency]);

  return rates;
}

export default useCurrencyInfo;
