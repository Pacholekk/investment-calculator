import "./UserInput.css";
import { useState } from "react";

export default function UserInput({ onCalculate }) {
  const [userInput, setUserInput] = useState({
    initialInvestment: 110,
    annualInvestment: 30,
    expectedReturn: 6,
    duration: 10,
  });
  function handleChangeValue(inputIdentifier, value) {
    //Gets previous state

    const updatedInput = {
      ...userInput,
      [inputIdentifier]: +value,
    };

    setUserInput(updatedInput);
    onCalculate(updatedInput);
    console.log("elo");
  }
  return (
    <div id="user-input">
      <div className="input-group">
        <div>
          <label> INITIAL INVESTMENT</label>
          <input
            type="number"
            required
            value={userInput.initialInvestment}
            onChange={(event) =>
              handleChangeValue("initialInvestment", event.target.value)
            }
          />
        </div>
        <div>
          <label> ANNUAL INVESTMENT</label>
          <input
            type="number"
            required
            value={userInput.annualInvestment}
            onChange={(event) =>
              handleChangeValue("annualInvestment", event.target.value)
            }
          />
        </div>
      </div>
      <div className="input-group">
        <div>
          <label> EXPECTED RETURN</label>
          <input
            type="number"
            required
            value={userInput.expectedReturn}
            onChange={(event) =>
              handleChangeValue("expectedReturn", event.target.value)
            }
          />
        </div>
        <div>
          <label> DURATION</label>
          <input
            type="number"
            required
            value={userInput.duration}
            onChange={(event) =>
              handleChangeValue("duration", event.target.value)
            }
          />
        </div>
      </div>
    </div>
  );
}
