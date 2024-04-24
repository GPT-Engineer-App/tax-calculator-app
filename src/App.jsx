import React, { useState } from "react";
import { FaMoon, FaSun } from "react-icons/fa";

function App() {
  const states = ["Alabama", "Alaska", "Arizona", "Arkansas", "California", "Colorado", "Connecticut", "Delaware", "Florida", "Georgia", "Hawaii", "Idaho", "Illinois", "Indiana", "Iowa", "Kansas", "Kentucky", "Louisiana", "Maine", "Maryland", "Massachusetts", "Michigan", "Minnesota", "Mississippi", "Missouri", "Montana", "Nebraska", "Nevada", "New Hampshire", "New Jersey", "New Mexico", "New York", "North Carolina", "North Dakota", "Ohio", "Oklahoma", "Oregon", "Pennsylvania", "Rhode Island", "South Carolina", "South Dakota", "Tennessee", "Texas", "Utah", "Vermont", "Virginia", "Washington", "West Virginia", "Wisconsin", "Wyoming"];
  const [salary, setSalary] = useState("");
  const [state, setState] = useState(states[0]);
  const [frequency, setFrequency] = useState("Monthly");
  const [result, setResult] = useState("");
  const [darkMode, setDarkMode] = useState(false);

  const handleCalculate = () => {
    // Placeholder for tax calculation logic
    const taxRate = 0.1; // Example tax rate
    const taxes = parseFloat(salary) * taxRate;
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
