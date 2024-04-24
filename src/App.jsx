import React, { useState } from "react";
import { FaMoon, FaSun } from "react-icons/fa";

function App() {
  const taxRates = {
    Alabama: { abbreviation: "AL", FIT: 0.1, SIT: 0.05 },
    Alaska: { abbreviation: "AK", FIT: 0.1, SIT: 0.0 },

    Wyoming: { abbreviation: "WY", FIT: 0.1, SIT: 0.0 },
  };
  const states = Object.keys(taxRates);
  const [salary, setSalary] = useState("");
  const [state, setState] = useState(states[0]);
  const [frequency, setFrequency] = useState("Monthly");
  const [result, setResult] = useState("");
  const [darkMode, setDarkMode] = useState(false);

  const handleCalculate = () => {
    // Placeholder for tax calculation logic
    const stateTaxInfo = taxRates[state];
    const federalTaxes = parseFloat(salary) * stateTaxInfo.FIT;
    const stateTaxes = parseFloat(salary) * stateTaxInfo.SIT;
    const taxes = federalTaxes + stateTaxes;
    const salaryAfterTaxes = parseFloat(salary) - taxes;
    setResult(`Salary after taxes: $${salaryAfterTaxes.toFixed(2)}`);
  };

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className={`p-4 ${darkMode ? "bg-gray-800 text-white" : "bg-white text-gray-900"}`}>
      <h1 className="text-3xl font-bold underline mb-4">Salary Calculator</h1>
      <div>
        <label htmlFor="state" className="block mb-2">
          State:
        </label>
        <select id="state" value={state} onChange={(e) => setState(e.target.value)} className="mb-4">
          {states.map((state, index) => (
            <option key={index} value={state}>
              {state}
            </option>
          ))}
        </select>
      </div>
      <div>
        <label htmlFor="salary" className="block mb-2">
          Salary:
        </label>
        <input type="number" id="salary" value={salary} onChange={(e) => setSalary(e.target.value)} className="mb-4" />
      </div>
      <div>
        <label htmlFor="frequency" className="block mb-2">
          Frequency:
        </label>
        <select id="frequency" value={frequency} onChange={(e) => setFrequency(e.target.value)} className="mb-4">
          <option value="Monthly">Monthly</option>
          <option value="Yearly">Yearly</option>
        </select>
      </div>
      <button onClick={handleCalculate} className="btn btn-primary mb-4">
        Calculate
      </button>
      <p id="result">{result}</p>
      <button onClick={toggleDarkMode} className="btn">
        {darkMode ? <FaSun /> : <FaMoon />}
        {darkMode ? " Light Mode" : " Dark Mode"}
      </button>
    </div>
  );
}

export default App;
