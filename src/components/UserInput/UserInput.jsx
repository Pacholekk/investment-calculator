import "./UserInput.css";
import { useState } from "react";

export default function UserInput({ input }) {
  const [userInput, setUserInput] = useState({
    initialInvestment: 0,
    annualInvestment: 0,
    expecterReturn: 0,
    duration: 0,
  });
  function handleChangeValue(inputIdentifier, value) {
    setUserInput((prevUserInput) => {
      //Gets previous state

      return {
        ...prevUserInput, // Copys all existing values
        [inputIdentifier]: value, // Updates only the changed field
      };
    });
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
            value={userInput.expecterReturn}
            onChange={(event) =>
              handleChangeValue("expecterReturn", event.target.value)
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
