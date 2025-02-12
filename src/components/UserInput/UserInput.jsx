import "./UserInput.css";

export default function UserInput() {
  return (
    <div id="user-input">
      <div className="input-group">
        <div>
          <label htmlFor=""> INITIAL INVESTMENT</label>
          <input type="number" />
        </div>
        <div>
          <label htmlFor=""> ANNUAL INVESTMENT</label>
          <input type="number" />
        </div>
      </div>
      <div className="input-group">
        <div>
          <label htmlFor=""> EXPECTED RETURN</label>
          <input type="number" />
        </div>
        <div>
          <label htmlFor=""> DURATION</label>
          <input type="number" />
        </div>
      </div>
    </div>
  );
}
