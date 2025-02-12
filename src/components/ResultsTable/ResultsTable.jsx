import { calculateInvestmentResults } from "../../util/investment";
import { formatter } from "../../util/investment";
import UserInput from "../UserInput/UserInput";

export default function ResultTable({ results }) {
  console.log(results);
  return (
    <table id="result">
      <thead>
        <tr>
          <th>Year</th>
          <th>Investment Value</th>
          <th>Interest (Year)</th>
          <th>Total Interest</th>
          <th>Invested Capital</th>
        </tr>
      </thead>
      <tbody>
        {results.map((data) => (
          <tr key={data.year}>
            <td>{data.year}</td>
            <td>{formatter.format(data.valueEndOfYear)}</td>
            <td>{formatter.format(data.interest)}</td>
            <td>{formatter.format(data.totalInterest)}</td>
            <td>{formatter.format(data.annualInvestment)}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
